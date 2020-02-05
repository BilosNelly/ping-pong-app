import React, { Component } from 'react';
import createActions from './actionTypes';
import{ 
        Card, 
        Col,
        Row,
        Badge,
        CardBody,
        Container,
} from 'reactstrap';

import { connect } from 'react-redux';
import * as _ from 'lodash';

class Leaderboard extends Component {
    componentDidMount() {
        this.props.loadPlayers();
        this.props.loadSinglesMatches();
        this.props.loadTeams();
        this.props.loadDoublesMatches();
    }

    render() { 
        return (
            <Container>
                <h1 className="text-center mt-5">Leaderboard</h1>
                <Row>
                    <Col md={{size:6 }}>
                        <h2 className="text-center  mt-5">Players</h2>
                            {_.map(this.props.leaderboard, (player, index) => {
                                return (
                                <Card className="mt-3" key={index}>
                                    <CardBody>
                                        <h3>
                                            {index+1}. {player.name}
                                            <Badge className="float-right">{player.points}</Badge>
                                        </h3>
                                    </CardBody>
                                </Card>
                                );
                            })}
                    </Col>
                    <Col md={{size:6 }}>
                        <h2 className="text-center  mt-5">Teams</h2>
                            {_.map(this.props.teamLeaderboard, (team, index) => {
                                return (
                                <Card className="mt-3" key={index}>
                                    <CardBody>
                                        <h3>
                                            {index+1}. {team.name}
                                            <Badge className="float-right">{team.points}</Badge>
                                        </h3>
                                    </CardBody>
                                </Card>
                                );
                            })}
                        </Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        players: state.players,
        matches: state.matches,
        leaderboard: state.leaderboard,
        teamLeaderboard: state.teamLeaderboard,
        teams: state.teams
    };
};

const mapDispatchProps = dispatch => { 
    const actions = createActions();
    return {
        loadPlayers: () => { dispatch(actions.loadPlayers()) },
        loadSinglesMatches: () => { dispatch(actions.loadSinglesMatches()) }, 
        loadDoublesMatches: () => { dispatch(actions.loadDoublesMatches()) },
        loadTeams: () => { dispatch(actions.loadTeams())}
    };
};


export default connect(mapStateToProps,mapDispatchProps)(Leaderboard);