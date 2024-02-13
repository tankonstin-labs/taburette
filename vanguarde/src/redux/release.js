import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    releaseDetails: {},
    loading: false,
    error: null,
};

const releaseSlice = createSlice({
    name: 'release',
    initialState,
    reducers: {
        fetchBegin: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        fetchSuccess: (state, action) => {
            state.loading = false;
            state.releaseDetails = action.payload;
        },
        fetchError: (state, action) => {
            state.loading = false;
            state.error = action.payload.error;
        },
    },
});

const { actions, reducer } = releaseSlice;
const { fetchBegin, fetchSuccess, fetchError } = actions;

export function getReleaseDetails(dispatch, getState, {apiConfig}) {
    dispatch(fetchBegin());

    // TODO: remove hardcoded release id
    axios.get(`${apiConfig.url}/releases/12829`)
        .then((res) => {
            dispatch(fetchSuccess(res.data));
        })
        .catch((error) => {
            dispatch(fetchError(error));
        });
}

export default reducer;
