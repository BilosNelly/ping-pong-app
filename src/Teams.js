import React, { Component } from 'react';
import createActions from './actionTypes';
import AddTeam from './AddTeam';
import TeamList from './TeamList';
import { connect } from 'react-redux'
import{ Container } from 'reactstrap'

class Teams extends Component {
    static defaultProps = {
        players: []
    };

    componentDidMount() {
        this.props.loadPlayers();
        this.props.loadTeams();
    }

    render() {
        return (
            <Container>
                <AddTeam onAddTeam={this.props.onAddTeam} players={this.props.players}/>
                <TeamList teams={this.props.teams}
                onDeleteTeam={this.props.onDeleteTeam}
                />
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        players: state.players,
        teams: state.teams
    };
};

const mapDispatchProps = dispatch => { 
    const actions = createActions();
    return {
        loadPlayers: () => { dispatch(actions.loadPlayers()) },
        onAddTeam: (team) => {dispatch(actions.addTeam(team))},
        loadTeams: () => {dispatch(actions.loadTeams())},
        onDeleteTeam: (teamId) => { dispatch(actions.deleteTeam(teamId)) }
    };
};

export default connect(mapStateToProps, mapDispatchProps)(Teams);