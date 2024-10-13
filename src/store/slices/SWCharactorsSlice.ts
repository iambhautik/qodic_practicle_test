import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosClient from "../../utils/apiUtilities";

interface CharactorDetails {
    height: string;
    mass: string;
    created: string;
    films: [];
    birth_year: string;
    name: string;
}

interface CharactorHomeWorld {
    name: string;
    terrain: string;
    climate: string;
    population: string;
}

interface SWCharactorsInterface {
    swChractors: any[];
    isLoadingCharactors: boolean;
    totalPages: number;
    charactorHomeWord: CharactorHomeWorld;
    charDetails: CharactorDetails;
}

const charDetails: CharactorDetails = {
    created: "",
    birth_year: "",
    films: [],
    height: "",
    mass: "",
    name: "",
};

const charactorHomeWord: CharactorHomeWorld = {
    name: "",
    terrain: "",
    climate: "",
    population: "",
};

const initialState: SWCharactorsInterface = {
    swChractors: [],

    isLoadingCharactors: false,
    totalPages: 0,
    charactorHomeWord,
    charDetails,
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

export const getCharHomeWorldDetails = createAsyncThunk(
    "SWCharactors/getCharHomeWorldDetails",
    async ({ url }: { url: string }, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { status, data } = await axiosClient.get(url);

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

export const swCharSlice = createSlice({
    name: "SWCharactors",
    initialState,
    reducers: {
        resetCharactorHomeWord: (state) => {
            state.charactorHomeWord = charactorHomeWord;
        },
        setCharDetails: (state, action) => {
            state.charDetails = action.payload;
        },
        resetCharDetails: (state) => {
            state.charDetails = charDetails;
        },
    },
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
            })
            .addCase(getCharHomeWorldDetails.fulfilled, (state, action) => {
                state.charactorHomeWord = action.payload;
                state.isLoadingCharactors = false;
            })
            .addCase(getCharHomeWorldDetails.rejected, (state, action) => {
                state.isLoadingCharactors = false;
            })
            .addCase(getCharHomeWorldDetails.pending, (state) => {
                state.isLoadingCharactors = true;
            });
    },
});

export const { resetCharactorHomeWord, setCharDetails, resetCharDetails } =
    swCharSlice.actions;

export default swCharSlice.reducer;
