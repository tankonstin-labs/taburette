import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { SongCard } from './SongCard.jsx';
import {
    MDBBtn, MDBCol, MDBContainer, MDBIcon, MDBInputGroup, MDBRow,
} from 'mdb-react-ui-kit';

import { connect, useDispatch } from 'react-redux';

import SearchOptions from './SearchOptions';
import { changeOmnibarQuery, handleOmnibarChange, handleSortToggle } from '../../redux/search.js';
import { getSongList } from '../../redux/songs.js';

function SongList(props) {

    const dispatch = useDispatch();

    useEffect(() => {
        const _ = props.getSongList();
        dispatch(changeOmnibarQuery());
    }, [dispatch]);

    const [showSearchOptions, setShowSearchOptions] = useState(false);

    return (
        <MDBContainer>
            <MDBRow className="d-flex justify-content-center">
                <MDBCol md="10">
                    <MDBInputGroup className='mb-3'>
                        <input
                            className='form-control'
                            placeholder="Search for your tabs..."
                            type='text'
                            onChange={props.handleOmnibarChange}
                            data-cy='search-bar'
                        />
                        <MDBBtn
                            color="dark"
                            onClick={() => setShowSearchOptions(!showSearchOptions)}
                        >
                            <MDBIcon icon="gear" />
                        </MDBBtn>
                    </MDBInputGroup>
                </MDBCol>
            </MDBRow>
            <MDBRow className="d-flex justify-content-end">
                <MDBCol md="10">
                    {
                        showSearchOptions ? <SearchOptions /> : null
                    }
                </MDBCol>
            </MDBRow>
            <MDBRow className="d-flex justify-content-end">
                <MDBCol md="1">
                    <MDBBtn
                        color="elegant"
                        onClick={props.handleSortToggle}
                    >
                        <MDBIcon
                            icon={
                                props.sorting === 'asc' ? 'sort-amount-down' : 'sort-amount-up'
                            }
                            size="2x"
                        />
                    </MDBBtn>
                </MDBCol>
            </MDBRow>
            <MDBRow className='mt-3' data-cy='song-list'>
                {
                    props.songList.map((value, index) => {
                        const featuredArtists = value.release.artists
                            .map((artist) => artist.name)
                            .join(';');
                        return <SongCard key={index} artist={featuredArtists} trackName={value.name} trackId={value.id} />;
                    })
                }
            </MDBRow>
        </MDBContainer>
    );
}

const mapStateToProps = (state) => ({
    songList: state.songReducer.songList,
    sorting: state.searchReducer.sorting,
});

SongList.propTypes = {
    // methods
    getSongList: PropTypes.func.isRequired,
    handleOmnibarChange: PropTypes.func.isRequired,
    handleSortToggle: PropTypes.func.isRequired,
    // fields
    songList: PropTypes.array,
    sorting: PropTypes.string,
};

export default connect(mapStateToProps,
    { getSongList, handleOmnibarChange, handleSortToggle },
)(SongList);
