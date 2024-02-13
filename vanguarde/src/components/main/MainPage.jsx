import React from 'react';
import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import SongList from './SongList.jsx';

export function MainPage() {
    return (
        <MDBContainer className='mt-5' fluid>
            <MDBRow>
                <MDBCol md="2" />
                <MDBCol md="8">
                    <SongList />
                </MDBCol>
                <MDBCol md="2" />
            </MDBRow>
        </MDBContainer>
    );
}
