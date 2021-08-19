import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { urls } from '../../components/commons/API'
// import { loadClients } from 'src/redux/thunks/clients'

export const login = createAsyncThunk(
    'security/login',
    async (values:{username:string,password:string}, thunkApi) => {
        try {



             const response = await axios.post(urls.login, values)

            console.log(response)

            const user = {
                isLogged: true,
                username: values.username,
                provider: 'local',
                token: response.data.token,
                //userInfo: userInfo
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

export const getUserInfo = createAsyncThunk(
    'security/getUserInfo',
    async (values, thunkApi) => {
        try {
            const userInfo = await axios.post(urls.firsttry)
            console.log(userInfo.data)

            return userInfo.data
        } catch (e) {
            return thunkApi.rejectWithValue({
                error: e,
                success: false,
                message: 'Ocurrio un error al obtener información del usuario.',
            })
        }
    }
)
