import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { urls } from '../../components/commons/API'
// import { loadClients } from 'src/redux/thunks/clients'

export const resume = createAsyncThunk(
    'consultations/resume',
    async (values, thunkApi) => {
        try {



             const response = await axios.post(urls.events)

            console.log(response)

            const user = {
                isLogged: true,
                username: values.username,
                provider: 'local',

            }

            return user
        } catch (e) {
            return thunkApi.rejectWithValue({
                error: e,
                success: false,
                message: 'Credenciales Erroneas',
            })
        }
    }
)
