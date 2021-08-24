import * as React from 'react'

import SEO from '../components/Commons/SEO'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction'

const HomePage = ():JSX.Element => {

    return (
        <>
            <SEO title="Home" />
            <h1>Citas,perfil,etc</h1>
            <FullCalendar
                plugins={[  dayGridPlugin, timeGridPlugin, listPlugin,interactionPlugin  ]}
                initialView="timeGridWeek"
                editable={true}
                selectable={true}
                select={  function(info) {
            alert('Clicked on: ' + info);
           // alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
            alert('Current view: ' + info.view.type);
            // change the day's background color just for fun
           console.log(info)

        } }
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
                }}
                events={[
                    { title: 'Cita Pedro', start: '2021-08-03T10:30:00',
                        end: '2021-08-03T11:30:00', },
                    { title: 'Cita Juan', date: '2021-08-02' }
                ]}
            />
        </>
    )
}

export default HomePage
