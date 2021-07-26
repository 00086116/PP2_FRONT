import { reset , setGlobalState } from '../actions/global'
import { initialState } from '../slices/security'

export const propsReducer = (obj) => Object.keys(obj).reduce((newObj, key) => {
  newObj[key] = (state = obj[key], action) => state
  return newObj
}, {})

export const handleActions = {
  [reset.toString()]: (state, action) => {
    return {
      ...state,
      security: initialState
    }
  },
  [setGlobalState.toString()]: (state, action) => {
    if (typeof action.payload === 'object') {
      return {
        ...state,
        ...action.payload
      }
    }
    return state
  }
}