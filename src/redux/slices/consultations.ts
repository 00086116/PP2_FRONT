import { createSlice } from '@reduxjs/toolkit'

import { resume } from '../thunks/consultations'

export const initialState = {
    consultations: {
     events: [],
}
}
export default createSlice({

    name: 'consultas',

    initialState: initialState,
    reducers: {

    },
    extraReducers: {
        [resume.fulfilled.toString()]: (state, action) => {

            state.consultations.events = action.payload

        }

    },
})
