import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { urls } from '../../components/commons/API'
// import { loadClients } from 'src/redux/thunks/clients'

export const tipos = createAsyncThunk(
    'tipos/resume',
    async (values, thunkApi) => {
        try {



             const response = await axios.get(urls.tipos)

            console.log(response.data.messages)

            return response.data.messages
        } catch (e) {
            return thunkApi.rejectWithValue({
                error: e,
                success: false,
                message: 'error en base de datos',
            })
        }
    }
)
