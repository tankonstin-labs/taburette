import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SongCard } from './SongCard.jsx';
import {
    MDBBtn, MDBCol, MDBContainer, MDBIcon, MDBInputGroup, MDBRow,
} from 'mdb-react-ui-kit';

import { connect } from 'react-redux';

import SearchOptions from './SearchOptions';
import { handleOmnibarChange, handleSortToggle } from '../../redux/search.js';
import { getSongList } from '../../redux/songs.js';

class SongList extends Component {
    static propTypes = {
        // methods
        getSongList: PropTypes.func.isRequired,
        handleOmnibarChange: PropTypes.func.isRequired,
        handleSortToggle: PropTypes.func.isRequired,
        // fields
        searchBarIsVisible: PropTypes.bool.isRequired,
        songList: PropTypes.array,
        sorting: PropTypes.string,
    };

    componentDidMount() {
        this.props.getSongList();
    }

    render() {
        return (
            <MDBContainer>
                <MDBRow className="d-flex justify-content-center">
                    <MDBCol md="10">
                        <MDBInputGroup className='mb-3'>
                            <input
                                className='form-control'
                                placeholder="Search for your tabs..."
                                type='text'
                                onChange={this.props.handleOmnibarChange}
                                data-cy='search-bar'
                            />
                            <MDBBtn
                                color="dark"
                                onClick={alert}
                            >
                                <MDBIcon icon="gear" />
                            </MDBBtn>
                        </MDBInputGroup>
                    </MDBCol>
                </MDBRow>
                <MDBRow className="d-flex justify-content-end">
                    <MDBCol md="10">
                        {
                            this.props.searchBarIsVisible ?
                                <SearchOptions /> :
                                null
                        }
                    </MDBCol>
                </MDBRow>
                <MDBRow className="d-flex justify-content-end">
                    <MDBCol md="1">
                        <MDBBtn
                            color="elegant"
                            onClick={this.props.handleSortToggle}
                        >
                            <MDBIcon
                                icon={
                                    this.props.sorting === 'asc' ? 'sort-amount-down' : 'sort-amount-up'
                                }
                                size="2x"
                            />
                        </MDBBtn>
                    </MDBCol>
                </MDBRow>
                <MDBRow className='mt-3' data-cy='song-list'>
                    {
                        this.props.songList.map((value, index) => {
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
}

const mapStateToProps = (state) => ({
    songList: state.songReducer.songList,
    searchBarIsVisible: state.searchReducer.searchBarIsVisible,
    sorting: state.searchReducer.sorting,
});

export default connect(mapStateToProps,
    { getSongList, handleOmnibarChange, handleSortToggle },
)(SongList);
