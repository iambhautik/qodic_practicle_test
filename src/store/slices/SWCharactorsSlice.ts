import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosClient from "../../utils/apiUtilities";

interface SWCharactorsInterface {
    swChractors: any[];
    isLoadingCharactors: boolean;
    totalPages: number;
}

const initialState: SWCharactorsInterface = {
    swChractors: [],

    isLoadingCharactors: false,
    totalPages: 0,
};

export const getStarWarsCharactors = createAsyncThunk(
    "SWCharactors/getCharactors",
    async (
        { page }: { page: number },
        { rejectWithValue, fulfillWithValue },
    ) => {
        try {
            const { status, data } = await axiosClient.get(
                `/people?page=${page}`,
            );

            if (status === 200) {
                return fulfillWithValue(data);
            }

            // if (error) return rejectWithValue(error)

            throw new Error("Error happed");
        } catch (error) {
            return rejectWithValue({ message: "Error occcure" });
        }
    },
);

export const todosSlice = createSlice({
    name: "SWCharactors",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getStarWarsCharactors.fulfilled, (state, action) => {
                const pages = Math.ceil(action.payload.count / 10);

                state.totalPages = pages;
                state.swChractors = action.payload.results;
                state.isLoadingCharactors = false;
            })
            .addCase(getStarWarsCharactors.rejected, (state, action) => {
                state.isLoadingCharactors = false;
            })
            .addCase(getStarWarsCharactors.pending, (state) => {
                state.isLoadingCharactors = true;
            });
    },
});

export default todosSlice.reducer;
