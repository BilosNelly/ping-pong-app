import React, { Component } from 'react';

import {
    Alert,
    Row,
    Col,
    CardBody,
    Card,
    Badge,
} from 'reactstrap';

class MatchesList extends Component {
    render() {
        if(this.props.matches.length===0){
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
                {this.props.matches.map((match, index) => {
                    return (
                        <Card className="mt-2" key={index}>
                            <CardBody>
                                <Row>
                                    <Col className="col-md-4 text-right">
                                        <h5>{match.player1}</h5> 
                                    </Col>
                                    <Col className="col-md-4 text-center">
                                        <h3>
                                            <Badge className="ml-3 mr-2">{match.player1Score}</Badge>:
                                            <Badge className="mr-3 ml-2">{match.player2Score}</Badge>
                                        </h3>
                                    </Col>
                                    <Col className="col-md-4">
                                        <h5>{match.player2}</h5>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    )
                })}
            </div>
        );
    }

}

export default MatchesList;