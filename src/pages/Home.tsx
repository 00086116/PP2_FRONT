import * as React from 'react'

import SEO from '../components/Commons/SEO'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { resume } from '../redux/thunks/consultations'
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
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const dispatch= useDispatch()
    const user = useSelector(app => app.security.user)
    console.log(user)
    useEffect(() => {
       dispatch(resume())

    })
    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Creacion de Cita</h2>
            <form>
                <label></label>
                <label>Fecha</label>
                <input type="date" value={tiempo.fecha}/><br/>
                <label>Hora</label>
                <input type="time" value={tiempo.hora}/><br/>
                <label>Paciente:</label>
                <input type="text" list="users"/>
                <datalist id="users">
                    <option value="Paciente 1 " />
                    <option value="Paciente 2 "/>
                    <option value="Paciente 3 "/>
                    <option value="Paciente 4"/>
                    <option value="Paciente 5"/>

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

           // alert('Clicked on: ' + info);
           // alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
           // alert('Current view: ' + info.view.type);
            // change the day's background color just for fun


                    var hora=info.endStr.split("T")[1].split("-")[0].split(":")
                    if(hora[1]=="30"){
                        hora[1]=":00"

                    }else{
                        hora[0]=(parseInt(hora[0])-1).toString()
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
                events={[
                    { title: 'Cita Pedro', start: '2021-09-15T10:30:00',
                        end: '2021-09-15T11:30:00', },
                    { title: 'Cita Juan', start: '2021-09-16T07:30:00',
                        end: '2021-09-16T08:30:00',  }
                ]}
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
