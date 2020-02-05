import React, { Component } from 'react';
import Player from './Player'

import {
    Col, 
    Alert,
} from 'reactstrap';

class PlayersList extends Component {
    render() {
        if(this.props.players.length === 0){
            return (
                <Col md={{size:8 , offset:2}} className="mt-3">
                    <Alert color="dark">
                        {"No players yet."}
                    </Alert>
                </Col>
            )
        }
        return (
            <Col md={{size:8 , offset:2}}  className="mt-5">
                <h3 className="text-center mb-3">Players List</h3>  
                { this.props.players.map((player, i) => <Player key={i} {...player} onDelete={this.props.onDeletePlayer} />) }
            </Col>
        );
    }
}

export default PlayersList;