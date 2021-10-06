import * as React from 'react'

import SEO from '../components/Commons/SEO'
import {userslist} from '../redux/thunks/Users'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { resume,nueva } from '../redux/thunks/consultations'
import { tipos } from '../redux/thunks/types'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            position: 'absolute',
            width: 400,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }),
);
const HomePage = ():JSX.Element => {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [tiempo,setTime]= React.useState({})
    const [users,setUsers]= React.useState([])
    const [types,settipos]= React.useState([])

    const [eventos,setevents]= React.useState(    [

    ])
    const handleOpen = () => {
        setOpen(true);
    };


    const handleClose = () => {
        setOpen(false);
    };
    const dispatch= useDispatch()
    const user = useSelector(app => app.security.user)


    useEffect(() => {
        async function pacientes(){
            const a = await dispatch(userslist())

            setUsers(a.payload)
            const b= await dispatch(resume())
            console.log(b)
            setevents(b.payload)
            console.log(eventos)
            const c= await dispatch(tipos())
            settipos(c.payload)

        }

        pacientes()

    },[])
    function pacientes(){

    }
    async function citas(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()

        let end=e.target[1].value.split(":")
        console.log(end)
        if(parseInt(end[0])>=10 || parseInt(end[0])+1>=10){
            end[0]=(parseInt(end[0])+1).toString()
        }else{
            end[0]="0".concat((parseInt(end[0])+1).toString())
        }
        end=end.join(":")
        console.log(end)
        const evento = [...eventos, { title: `Cita ${e.target[2].value}`, start: `${e.target[0].value}T${e.target[1].value}`,
            end: `${e.target[0].value}T${end}`  }]
     setevents(evento)
        let values={
            paciente:e.target[2].value,
            tipo:e.target[3].value,
            date:e.target[0].value,
            start:e.target[1].value,
            end

        }
        const a = await dispatch(nueva(values))
        console.log(a)
        handleClose()
    }

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Creacion de Cita</h2>
            <form onSubmit={ e => citas(e)}>
                <label></label>
                <label>Fecha</label>
                <input type="date" value={tiempo.fecha}/><br/>
                <label>Hora</label>
                <input type="time" value={tiempo.hora}/><br/>
                <label>Paciente:</label>
                <input type="text" list="users" required={true}/>
                <datalist id="users">
                    {users.map( e =>{
                        return (<option value={e.name} />)
                        }

                    )}

                </datalist>
                <br/>
                <label>Tipo de Consulta:</label>
                <input type="text" list="tipos" required={true}/>


                <datalist id="tipos">
                    {types.map( e =>{
                            return (<option value={e.consulta_nombre} />)
                        }

                    )}

                </datalist>
                <br/>
                <input type="submit" value="Guardar Cita"/>
            </form>

        </div>
    );
    return (
        <>
            <SEO title="Home" />
            <h1>Citas,perfil,etc</h1>
            {user.id}
            <FullCalendar
                plugins={[  dayGridPlugin, timeGridPlugin, listPlugin,interactionPlugin  ]}
                initialView="timeGridWeek"
                editable={true}
                selectable={true}

                select={  function(info) {
                console.log(info)
           // alert('Clicked on: ' + info);
           // alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
           // alert('Current view: ' + info.view.type);
            // change the day's background color just for fun


                    const hora=info.endStr.split("T")[1].split("-")[0].split(":")
                    if(hora[1]=="30"){
                        hora[1]=":00"

                    }else{
                        if(parseInt(hora[0])>10){
                            hora[0]=(parseInt(hora[0])-1).toString()
                        }else{
                            hora[0]="0".concat((parseInt(hora[0])-1).toString())
                        }

                        hora[1]=":30"
                    }


                   const data={
                        fecha:info.endStr.split("T")[0],
                        hora:hora[0]+hora[1]
                    }
                    setTime(data)
           console.log(data)
                    handleOpen()
        } }
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
                }}
                events={eventos}
            />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </>
    )
}

export default HomePage
