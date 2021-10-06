import { createSlice } from '@reduxjs/toolkit'

import { tipos } from '../thunks/types'

export const initialState = {
    types: {

}
}
export default createSlice({
    name: 'types',
    initialState: initialState,
    reducers: {

    },
    extraReducers: {
        [tipos.fulfilled.toString()]: (state, action) => {

            state.types = action.payload

        }

    },
})
