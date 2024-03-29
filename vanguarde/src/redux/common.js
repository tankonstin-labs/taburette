import { Store } from 'react-notifications-component';
import { fetchBegin, fetchError, fetchSongListSuccess } from './songs';
import axios from 'axios';

export function handleSuccess(response) {
    Store.addNotification({
        title: 'Success!',
        message: 'Song list loaded',
        dismiss: {
            duration: 2000,
            onScreen: true,
        },
        type: 'success',
        insert: 'bottom',
        container: 'bottom-right',
        animationIn: ['animated', 'fadeIn'],
        animationOut: ['animated', 'fadeOut'],
    });
}

export function handleError(errorObj) {
    Store.addNotification({
        title: `HTTP error ${errorObj.statusCode}!`,
        message: 'Check console log for more info',
        dismiss: {
            duration: 4000,
            onScreen: true,
        },
        type: 'danger',
        insert: 'bottom',
        container: 'bottom-right',
        animationIn: ['animated', 'fadeIn'],
        animationOut: ['animated', 'fadeOut'],
    });
}

export function makeSongQuery(dispatch, getState, {apiConfig}, searchQuery = {}) {
    dispatch(fetchBegin());
    const searchState = getState().searchReducer;
    const searchParams = {
        'name': searchState.songQuery ? searchState.songQuery : null,
        'releases.artists.name': searchState.artistQuery ? searchState.artistQuery : null,
        'releases.genres.name': searchState.genreQuery ? searchState.genreQuery : null,
        'releases.name': searchState.releaseQuery ? searchState.releaseQuery : null,
        'sort_by': searchState.sorting ? 'name!' + searchState.sorting : null,
    };

    axios.get(`${apiConfig.url}/songs-artists`, { params: searchParams })
        .then((res) => {
            dispatch(fetchSongListSuccess(res.data));
            handleSuccess(res);
        })
        .catch((error) => {
            dispatch(fetchError(error));
            handleError(error);
        });
}
