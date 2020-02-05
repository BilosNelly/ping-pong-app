import React, { Component } from 'react';
import Team from './Team';

import {
    Col, 
    Row
} from 'reactstrap';

class TeamList extends Component {

    render() {
        return (
            <Row>
                <Col md={{size:8 , offset:2}}  className="mt-5">
                    <h3 className="text-center mb-3" md={{size:8 , offset:2}}>TeamList</h3> 
                    { this.props.teams.map(team => <Team {...team} key={team.id} onDelete={this.props.onDeleteTeam}/>) }
                </Col>
            </Row>  
        );
    }    
}

export default TeamList;