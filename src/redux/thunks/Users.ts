import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { urls } from '../../components/commons/API'
// import { loadClients } from 'src/redux/thunks/clients'

export const userslist = createAsyncThunk(
    'users/list',
    async (values, thunkApi) => {
        try {



             const response = await axios.post(urls.pacientes)




            return response.data.pacientes
        } catch (e) {
            return thunkApi.rejectWithValue({
                error: e,
                success: false,
                message: 'Credenciales Erroneas',
            })
        }
    }
)
