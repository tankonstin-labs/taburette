import React, { Component } from 'react';
import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';

import SongList from './SongList.jsx';

class MainPage extends Component {
    render() {
        return (
            <MDBContainer className='mt-5' fluid>
                <MDBRow>
                    <MDBCol md="2" />
                    <MDBCol md="8">
                        <SongList/>
                    </MDBCol>
                    <MDBCol md="2" />
                </MDBRow>
            </MDBContainer>
        );
    }
}

export default MainPage;
