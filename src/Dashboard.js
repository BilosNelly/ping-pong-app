import React, { Component } from 'react';
import createActions from './actionTypes';
import {
    Col,
    Container,
    Row,
} from 'reactstrap';
import { connect } from 'react-redux';
import MatchesList from './MatchesList';
import SinglesLeaderboard from './SinglesLeaderboard';
import DoublesLeaderboard from './DoublesLeaderboard';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
    componentDidMount() {
        this.props.loadPlayers();
        this.props.loadSinglesMatches();
        this.props.loadDoublesMatches();
        this.props.loadLeaderboard();
        this.props.loadTeams();
    } 

    render() {
        return (
            <Container>
                <h1 className="text-center mt-5 mb-5">Singles</h1>
                    <Row>
                        <Col md={{ size: 6}}>
                            <h2 className="text-center">Top players</h2>
                            <SinglesLeaderboard leaderboard={this.props.leaderboard}/>
                            <div className="text-center mt-3"><Link to="/players">All players</Link></div>
                        </Col> 
                        <Col md={{ size: 6 }}>
                            <h2 className="text-center">Last matches</h2>
                            <MatchesList matches={this.props.singlesMatches}/>
                            <div className="text-center mt-3"><Link to="/matches">All matches</Link></div>
                        </Col>
                        </Row>
                            <h1 className="text-center mt-5">Doubles</h1>
                        <Row>
                        <Col md={{ size: 6 }}>
                            <h2 className="text-center">Top Teams</h2>
                            <DoublesLeaderboard teams={this.props.teams}/>
                            <div className="text-center mt-3"> <Link to="/teams">All teams</Link></div>
                        </Col>  
                        <Col>
                            <h2 className="text-center">Last matches</h2>
                            <MatchesList matches={this.props.doublesMatches}/>
                            <div className="text-center mt-3"><Link to="/matches">All matches</Link></div>
                        </Col>
                 </Row>
            </Container>
        );
    }
}    
const mapStateToProps = state => {
    return {
        leaderboard: state.leaderboard.slice(0,3),
        singlesMatches: state.singlesMatches.slice(0,3),
        doublesMatches: state.doublesMatches.slice(0,3),
        teams: state.teams.slice(0,3)
    };
};

const mapDispatchProps = dispatch => { 
    const actions = createActions();
    return {
        loadPlayers: () => { dispatch(actions.loadPlayers()) },
        loadSinglesMatches: () => { dispatch(actions.loadSinglesMatches()) }, 
        loadDoublesMatches: () => { dispatch(actions.loadDoublesMatches()) }, 
        loadLeaderboard: () => { dispatch(actions.loadLeaderboard())},
        loadTeams: () => { dispatch(actions.loadTeams())}
    };
};

export default connect(mapStateToProps,mapDispatchProps)(Dashboard);