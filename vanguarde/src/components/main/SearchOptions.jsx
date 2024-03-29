import React, { Component } from 'react';
import { MDBCol, MDBContainer, MDBInput, MDBRow, MDBCard } from 'mdb-react-ui-kit';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Select from 'react-select';

import { changeSearchQuery } from '../../redux/search';
import { ARTIST_QUERY, RELEASE_QUERY, SONG_QUERY, GENRE_QUERY } from '../../redux/search';

// TODO: Replace bogus genres alternatives with fetched from DB
const genreOptions = [
    { value: 'rock', label: 'Rock' },
    { value: 'notrock', label: 'Not Rock' },
];

function SearchOptions(props) {

    return (
        <MDBContainer className="mb-2 pl-0 ml-0">
            <MDBCol md="9" className="pl-0">
                <MDBCard>
                    <p className="h4 text-center py-4">Advanced Search</p>
                    <MDBRow className="ml-2 mr-2 p-3">
                        <MDBCol md="6">
                            <form>
                                <div className="grey-text">
                                    <MDBInput
                                        label="Artist"
                                        onChange={
                                            (event) => {
                                                props.changeSearchQuery(
                                                    ARTIST_QUERY,
                                                    event.target.value,
                                                );
                                            }
                                        }
                                    />
                                    <MDBInput
                                        label="Track"
                                        className='mt-2'
                                        onChange={
                                            (event) => {
                                                props.changeSearchQuery(
                                                    SONG_QUERY,
                                                    event.target.value,
                                                );
                                            }
                                        }
                                    />
                                </div>
                            </form>
                        </MDBCol>
                        <MDBCol md="6">
                            <div className="grey-text">
                                <MDBInput
                                    label="Album"
                                    onChange={
                                        (event) => {
                                            props.changeSearchQuery(
                                                RELEASE_QUERY,
                                                event.target.value,
                                            );
                                        }
                                    }
                                />
                                <Select
                                    className='mt-2'
                                    onChange={
                                        (option) => {
                                            props.changeSearchQuery(
                                                GENRE_QUERY,
                                                option.value,
                                            );
                                        }
                                    }
                                    options={ genreOptions }
                                />
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
            </MDBCol>
        </MDBContainer>
    );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps,
    { changeSearchQuery },
)(SearchOptions);

SearchOptions.propTypes = {
    changeSearchQuery: PropTypes.func.isRequired,
};
