import {
    MDBCard, MDBRow, MDBCol,
} from 'mdb-react-ui-kit';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import placeholder from '../../assets/150.png';
import '../../index.css';

export class SongCard extends Component {
    static propTypes = {
        artist: PropTypes.string.isRequired,
        trackId: PropTypes.number.isRequired,
        trackName: PropTypes.string.isRequired,
    };

    render() {
        return (
            <MDBRow className="pl-0">
                <MDBCol md="12">
                    <MDBCard className="align-middle mb-3 text-left">
                        <div className="row no-gutters">
                            <div className="col-md-1" style={{minWidth: '150px'}}>
                                <img src={placeholder} alt="thumbnail"/>
                            </div>
                            <div className="col-md-6">
                                <div className="card-body">
                                    <h4 className="card-title">
                                        <a href={`/s/${this.props.trackId}`}>
                                            {this.props.trackName}
                                        </a>
                                    </h4>
                                    <h6 className="card-subtitle">
                                        by {this.props.artist}
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        );
    }
}
