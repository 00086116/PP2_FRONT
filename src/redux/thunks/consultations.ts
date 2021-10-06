import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { urls } from '../../components/commons/API'
// import { loadClients } from 'src/redux/thunks/clients'

export const resume = createAsyncThunk(
    'consultations/resume',
    async (values, thunkApi) => {
        try {



             const response = await axios.post(urls.events)

<<<<<<< HEAD

            console.log(response.data.messages)
           const a= response.data.messages.map(e => {
               let hour1,hour2

               if(parseInt(e.time)>=10 && parseInt(e.time)+1>=10){
               if(parseFloat(e.time)-Math.floor(parseFloat(e.time)) ==0){
                   hour1 = Math.trunc((parseInt(e.time))).toString().concat(":00:00")
                   hour2 =  Math.trunc((parseInt(e.time)+1)).toString().concat(":00:00")
               }else{

                   hour1 = (parseInt(e.time)).toString().concat(":30:00")
                   hour2 = (parseInt(e.time)+1).toString().concat(":30:00")
               }
               }else  if(parseInt(e.time)<=10 && parseInt(e.time)+1>=10) {
                   if (parseFloat(e.time)-Math.floor(parseFloat(e.time)) == 0) {
                       hour1 = "0".concat(Math.trunc((parseInt(e.time))).toString().concat(":00:00"))
                       hour2 = Math.trunc((parseInt(e.time) + 1)).toString().concat(":00:00")
                   } else {

                       hour1 = "0".concat((parseInt(e.time)).toString().concat(":30:00"))
                       hour2 = (parseInt(e.time) + 1).toString().concat(":30:00")
                   }
               }else{
                   if (parseFloat(e.time)-Math.floor(parseFloat(e.time))  == 0) {
                       hour1 = "0".concat((parseInt(e.time)).toString().concat(":00:00"))
                       hour2 = "0".concat((parseInt(e.time) + 1).toString().concat(":00:00"))
                   } else {

                       hour1 = "0".concat((parseInt(e.time)).toString().concat(":30:00"))
                       hour2 = "0".concat((parseInt(e.time) + 1).toString().concat(":30:00"))
                   }
               }
                return {
                    title: `Cita ${e.name}`,
                    start: `${e.date}T${hour1}`,
                    end: `${e.date}T${hour2}`
                }
            })
            console.log(a)
            return a
        } catch (e) {
            return thunkApi.rejectWithValue({
                error: e,
                success: false,
                message: 'Credenciales Erroneas',
            })
        }
    }
)

export const nueva = createAsyncThunk(
    'consultations/new',
    async (values, thunkApi) => {
        try {

            let a=values.start.split(':');
            if(parseInt(a[1])==0)
            {
                var b=parseInt(a[0])
            }else{
                var b=parseInt(a[0])+0.5
            }
            let c=values.end.split(':');
            if(parseInt(c[1])==0)
            {
                var d=parseInt(c[0])
            }else{
                var d=parseInt(c[0])+0.5
            }
            values.end=d
            values.start=b

            console.log(values)
            const response = await axios.post(urls.citanew,values)




            console.log(response.data)
            return response
=======
            console.log(response)

            const user = {
                isLogged: true,
                username: values.username,
                provider: 'local',

            }

            return user
>>>>>>> 3a909ad4ec0234219d2b20474d13ac07a35c2767
        } catch (e) {
            return thunkApi.rejectWithValue({
                error: e,
                success: false,
                message: 'Credenciales Erroneas',
            })
        }
    }
)
