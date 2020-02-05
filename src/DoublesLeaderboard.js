import React, { Component } from 'react';

import {
    Alert,
    Card,
    Col,
    CardBody,
} from 'reactstrap';

class DoublesLeaderboard extends Component {
    render() {
        if(this.props.teams.length===0){
            return(
                <Col md={{size:8 , offset:2}} className="mt-3">
                    <Alert color="dark">
                        {"No teams yet."}
                    </Alert>
                </Col>
            );
        }
        return (
            <div>
                {this.props.teams.map((team, index) => {
                    return (
                        <Card className="mt-2" key={index}>
                            <CardBody>
                                <h3>
                                {index+1}. {team.name}  
                                </h3>
                            </CardBody>
                        </Card>
                    );
                })}
            </div>
        );
    }
}

export default DoublesLeaderboard;