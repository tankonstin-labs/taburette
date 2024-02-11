import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';

export function SongDetails() {

    let { songId } = useParams();

    return (
        <MDBContainer className='mt-5' fluid>
            <MDBRow>
                <MDBCol md="2" />
                <MDBCol md="8">
                    Here lieth song details for entity { songId }.
                </MDBCol>
                <MDBCol md="2" />
            </MDBRow>
        </MDBContainer>
    );
}
