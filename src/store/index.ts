import { configureStore } from '@reduxjs/toolkit';
import swSlice from './slices/SWCharactorsSlice';

export const store = configureStore({
    reducer: {
        swSlice
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;