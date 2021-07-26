import { createSlice } from '@reduxjs/toolkit'
import { login, getUserInfo } from '../thunks/security'
import { navigate } from 'gatsby'
import axios from 'axios'

export const initialState = {
  user: {
    
    isLogged: false,
    token: null,
   
    username:null,
    userInfo: {
   
    }
  },
  loading: false,
  leftDrawerOpen: false,
  rightDrawerOpen: false,
 
}
export default createSlice({
  name: 'security',
  initialState: initialState,
  reducers: {
    startLoading: (state, _action) => { 
      state.loading = true
    },
    stopLoading: (state, _action) => {
      state.loading = false
    },
    toggleLeftDrawer: (state, _action) => {
      state.leftDrawerOpen = !state.leftDrawerOpen
    },
    toggleRightDrawer: (state, _action) => {
      state.rightDrawerOpen = !state.rightDrawerOpen
    },
    verifyAuth: (state, action) => {
      const user = window.localStorage.getItem('user')
      if (user) {
        const userJson = JSON.parse(user)
        axios.defaults.headers.common.Authorization = `Bearer ${userJson.token}`
        state.user = userJson
      }
      
      !user && navigate('/')
    },
    logOut: (state, action) => {
      window.localStorage.removeItem('user')
      axios.defaults.headers.common.Authorization = ''
      state = initialState
      navigate('/')
    }
  },
  extraReducers: {
    [login.fulfilled.toString()]: (state, action) => {
      const user = action.payload
      state.user = action.payload
      window.localStorage.setItem('user', JSON.stringify(user))
    },
    [getUserInfo.fulfilled.toString()]: (state, action) => {
      state.user.userInfo = action.payload
    }
  }
})
