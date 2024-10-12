import { createSlice } from "@reduxjs/toolkit";

interface ThemeInterface {
    sidebarStatus: boolean;
}

const initialState: ThemeInterface = {
    sidebarStatus: false,
};

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.sidebarStatus = !state.sidebarStatus;
        },
    },
});

export const { toggleSidebar } = themeSlice.actions;
export default themeSlice.reducer;
