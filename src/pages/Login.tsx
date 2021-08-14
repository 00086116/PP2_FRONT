import * as React from 'react'
import { useDispatch } from 'react-redux'
import SEO from '../components/Commons/SEO'
import { login } from '../redux/thunks/security'
import { makeStyles } from '@material-ui/core'

import { FormEvent } from 'react'

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #00FFFF 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 130,
        padding: '0 30px',
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
    },
    form:{
        display:"flex",
        flexDirection:"column",
        width:"30%",
        justifyContent:"center",
        alignContent:"center",
        alignItems:"center"


    }
});


const LoginPage = ():JSX.Element => {
    const dispatch = useDispatch()
    dispatch(login())
    const classes = useStyles();
    function handlesubmit(e:FormEvent){
        e.preventDefault()

        console.log(document.getElementById("name").value)
        console.log(document.getElementById("pass").value)
    }
    return (
        <>
            <SEO title="Login" />
            <h1>Login</h1>
            <div className={classes.root}>
                <form className={classes.form} onSubmit={(e:FormEvent ) => handlesubmit(e)}>
                <label>Username</label>
                <input id="name" type="text" placeholder="Username"/>
                <label>Password</label>
                <input  id="pass" type="Password" placeholder=""/>
                    <input type="submit" value="Ingresar"/>
                </form>
            </div>
        </>
    )
}

export default LoginPage
