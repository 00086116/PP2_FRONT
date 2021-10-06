import { createSlice } from '@reduxjs/toolkit'

import { resume } from '../thunks/consultations'

export const initialState = {
    consultations: {
     events: [],
}
}
export default createSlice({
<<<<<<< HEAD
    name: 'consultas',
=======
    name: 'security',
>>>>>>> 3a909ad4ec0234219d2b20474d13ac07a35c2767
    initialState: initialState,
    reducers: {

    },
    extraReducers: {
        [resume.fulfilled.toString()]: (state, action) => {

            state.consultations.events = action.payload

        }

    },
})
