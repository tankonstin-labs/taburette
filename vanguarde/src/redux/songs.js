import { createSlice } from '@reduxjs/toolkit';
import { makeSongQuery } from './common';

const initialState = {
    songList: [],
    loading: false,
    error: null,
};

const songsSlice = createSlice({
    name: 'songs',
    initialState,
    reducers: {
        fetchBegin: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        fetchSongListSuccess: (state, action) => {
            const songList = action.payload;
            state.loading = false;
            state.songList = songList;
        },
        fetchError: (state, action) => {
            state.loading = false;
            state.error = action.payload.error;
        },
    },
});

export function getSongList(searchQuery = {}) {
    return (dispatch, getState, { apiConfig }) => {
        makeSongQuery(dispatch, getState, { apiConfig }, searchQuery);
    };
}

export const { fetchBegin, fetchSongListSuccess, fetchError } = songsSlice.actions;
export default songsSlice.reducer;
