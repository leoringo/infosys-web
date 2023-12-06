import { configureStore } from '@reduxjs/toolkit'
import teamReducer from './reducers/teamReducer'

export const store = configureStore({
    reducer: {
        team: teamReducer
    },
})