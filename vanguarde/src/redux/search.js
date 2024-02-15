import { createSlice } from '@reduxjs/toolkit';
import AwesomeDebouncePromise from 'awesome-debounce-promise';

import { makeSongQuery } from './common';

const initialState = {
    omnibarQuery: null,
    artistQuery: null,
    releaseQuery: null,
    songQuery: null,
    genreQuery: null,
    sorting: null, // null, 'asc', 'desc'
};

const searchSlice = createSlice({
    name: 'searchBar',
    initialState,
    reducers: {
        changeOmnibarQuery(state, action) {
            state.omnibarQuery = action.payload;
        },
        toggleSorting: (state, action) => {
            state.sorting = state.sorting === 'asc' ? 'desc' : 'asc';
        },
        changeArtistQuery: (state, action) => {
            state.artistQuery = action.payload;
        },
        changeReleaseQuery: (state, action) => {
            state.releaseQuery = action.payload;
        },
        changeSongQuery: (state, action) => {
            state.songQuery = action.payload;
        },
        changeGenreQuery: (state, action) => {
            state.genreQuery = action.payload;
        },
    },
});

export const ARTIST_QUERY = 'ARTIST_QUERY';
export const RELEASE_QUERY = 'RELEASE_QUERY';
export const SONG_QUERY = 'SONG_QUERY';
export const GENRE_QUERY = 'GENRE_QUERY';

// eslint-disable-next-line new-cap
const makeSongQueryDebounced = AwesomeDebouncePromise(
    makeSongQuery,
    500,
);

export const changeSearchQuery = (eventType, value) => {
    return (dispatch, getState, { apiConfig }) => {
        switch (eventType) {
        case ARTIST_QUERY:
            dispatch(searchSlice.actions.changeArtistQuery(value));
            break;
        case SONG_QUERY:
            dispatch(searchSlice.actions.changeSongQuery(value));
            break;
        case RELEASE_QUERY:
            dispatch(searchSlice.actions.changeReleaseQuery(value));
            break;
        case GENRE_QUERY:
            dispatch(searchSlice.actions.changeGenreQuery(value));
            break;
        default:
            console.error('Wrong eventType ', { eventType });
        }

        makeSongQueryDebounced(dispatch, getState, { apiConfig });
    };
};

export function handleOmnibarChange(event) {
    const value = event.target.value;
    return (dispatch, getState, { apiConfig }) => {
        dispatch(searchSlice.actions.changeSongQuery(value));
        makeSongQueryDebounced(dispatch, getState, { apiConfig });
    };
}

export function handleSortToggle(event) {
    return (dispatch, getState, { apiConfig }) => {
        dispatch(toggleSorting());
        makeSongQuery(dispatch, getState, { apiConfig });
    };
}

export const { changeOmnibarhQuery, toggleSorting } = searchSlice.actions;
export default searchSlice.reducer;
