import React from 'react';
import { useParams } from 'react-router-dom';
import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';

import { useGetSongAndRelatedReleaseQuery } from '../../redux/apiSlice';

export function SongDetails() {

    const { songId } = useParams();
    const {
        data,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetSongAndRelatedReleaseQuery(songId);

    let content;

    if (isError) {
        console.error(error);
        content = <div>Error while retrieving data</div>;

    } else if (isLoading) {
        console.log(`Still loading for ${songId}...`);
        content = <div>Loading...</div>;

    } else if (isSuccess) {
        content = <div>
            <p>{data.song.name} ({data.release.year})</p>
        </div>;
    }

    return (
        <MDBContainer className='mt-5' fluid>
            <MDBRow>
                <MDBCol md="2" />
                <MDBCol md="8">
                    Here lieth details for song { songId }.
                    { content }
                </MDBCol>
                <MDBCol md="2" />
            </MDBRow>
        </MDBContainer>
    );
}
