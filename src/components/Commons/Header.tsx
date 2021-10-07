import React, { useEffect } from 'react'
import Button from '@material-ui/core/Button'
import { Link,navigate } from 'gatsby'
import security from '../../redux/slices/security'
import { useDispatch, useSelector,RootStateOrAny } from 'react-redux'
import ReactDOM from 'react-dom'


export default function Header(): JSX.Element {
    const dispatch=useDispatch()
    const user= useSelector((app:RootStateOrAny) => app.security.user)

     async function logout(){
         await dispatch(security.actions.logOut())
         navigate('/')
         buttons(false)
    }
    function buttons(props:boolean){

        ReactDOM.render(<>   {!props ? <Button variant="contained" style={{ backgroundColor: 'blue' }} >
                <Link
                    to="/Login"
                    style={{ color: 'white', textDecoration: 'none' }}
                >
                    Iniciar Sesion
                </Link>
            </Button> :
            <>
                <Button variant="contained" style={{ backgroundColor: 'blue' }} >
                    <Link
                        to="/qrcode"
                        style={{ color: 'white', textDecoration: 'none' }}
                    >
                        Ver QR
                    </Link>
                </Button>
            <Button variant="contained" style={{ backgroundColor: 'red' }} onClick={logout}>
                <div
                    style={{ color: 'white', textDecoration: 'none' }}
                >
                    Cerrar Sesion
                </div>
            </Button>

            </>}
        </>,document.getElementById("head"))
    }
    useEffect(()=>{
    buttons(user.isLogged)
    },[user.isLogged])


    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                backgroundColor: '#f5f5f5',
            }}
            id="head"
        >


        </div>
    )
}
