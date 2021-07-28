import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { urls } from '../../components/commons/API'
// import { loadClients } from 'src/redux/thunks/clients'

export const login = createAsyncThunk(
    'security/login',
    async (values, thunkApi) => {
        try {
            const params = new URLSearchParams()
            Object.entries(values).forEach((o) => {
                params.append(o[0], o[1])
            })

            //descomentar para la validacion de los datos ingresados
            /* const response = await axios.post(urls.login, params, {
        headers: { Authorization: `Basic ${window.btoa('IST:IST')}` }
      })
      axios.defaults.headers.common.Authorization = `Bearer ${response.data.access_token}`

      const userInfo = await axios.post(urls.getUserInfo)*/

            const user = {
                isLogged: true,
                username: values.username,
                provider: 'local',
                //token: response.data.access_token,
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
