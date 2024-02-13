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

const { actions, reducer } = songsSlice;
// TODO: review if `toggleSorting` is a copypaste vestige
export const { fetchBegin, fetchSongListSuccess, fetchError, toggleSorting } = actions;
export default reducer;
