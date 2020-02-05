import React, { Component } from 'react';
import * as _ from 'lodash'; 

import {
    Alert,
    Card,
    Col,
    CardBody,
    Badge,
} from 'reactstrap';

class SinglesLeaderboard extends Component {
    render() {
        if(this.props.leaderboard.length===0){
            return(
                <Col md={{size:8 , offset:2}} className="mt-3">
                    <Alert color="dark">
                        {"No matches yet."}
                    </Alert>
                </Col>
            );
        }

        return (
            <div>
                {_.map(this.props.leaderboard, (player, index) => {
                    return (
                        <Card className="mt-2" key={index}>
                            <CardBody>
                                <h3 className="text-left" key={index}>{index+1}. &nbsp;
                                {player.name} 
                                <Badge className="float-right">{player.points}</Badge>
                                </h3>
                            </CardBody>
                        </Card>
                    );
                })}
            </div>
        );
    }
}

export default SinglesLeaderboard;