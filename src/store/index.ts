import { configureStore } from "@reduxjs/toolkit";
import swSlice from "./slices/SWCharactorsSlice";
import themeSlice from "./slices/themeSlice";

export const store = configureStore({
    reducer: {
        swSlice,
        themeSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
