import React, { Component } from 'react';
import { connect } from 'react-redux';
import createActions from './actionTypes';
import AddMatch from './AddMatch';
import MatchesList from './MatchesList';
import{  
    Col,
    Row,
    Container,
} from 'reactstrap';

class Matches extends Component {
    componentDidMount() {
        this.props.loadPlayers();
        this.props.loadSinglesMatches();
        this.props.loadDoublesMatches();
        this.props.loadTeams();
    }

    render() {
        return (
            <Container>
                <AddMatch onAddSinglesMatch={this.props.onAddSinglesMatch} onAddDoublesMatch={this.props.onAddDoublesMatch} players={this.props.players} teams={this.props.teams}/>
                <Row>
                    <Col md={{ size: 6}} className="mt-5">
                        <h3 className="text-center mb-3" md={{size:8 , offset:2}}>Singles matches List</h3>
                        <MatchesList matches={this.props.singlesMatches}/>
                    </Col>
                    <Col md={{ size: 6}} className="mt-5">
                        <h3 className="text-center mb-3" md={{size:8 , offset:2}}>Doubles matches List</h3>
                        <MatchesList matches={this.props.doublesMatches}/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        players: state.players,
        singlesMatches: state.singlesMatches,
        doublesMatches: state.doublesMatches,
        teams: state.teams
    };
};

const mapDispatchProps = dispatch => { 
    const actions = createActions();
    return {
        onAddSinglesMatch: (match) => { dispatch(actions.addSinglesMatch(match)) },
        onAddDoublesMatch: (match) => { dispatch(actions.addDoublesMatch(match)) },
        loadPlayers: () => { dispatch(actions.loadPlayers()) },
        loadSinglesMatches: () => { dispatch(actions.loadSinglesMatches()) },
        loadDoublesMatches: () => { dispatch(actions.loadDoublesMatches()) },
        loadTeams: () => { dispatch(actions.loadTeams()) },
    };
};

export default connect(mapStateToProps, mapDispatchProps)(Matches);