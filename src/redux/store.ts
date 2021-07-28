import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { handleActions } from '../redux/reducers/global'
import security from './slices/security'

const allReducers = combineReducers({
    security: security.reducer,
    // losDemas: otro.recuder
})

const globalReducers = (state, action) => {
    if (handleActions[action.type])
        return handleActions[action.type](state, action)
    return allReducers(state, action)
}

const store = configureStore({ reducer: globalReducers })

export default store
