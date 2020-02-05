import React, { Component } from 'react';
import PlayersList from './PlayersList';
import AddPlayer from './AddPlayer';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import createActions from './actionTypes';

class Players extends Component {
    static defaultProps = {
        players: []
    };

    componentDidMount() {
        this.props.loadPlayers();
    }

    render() {
        return (
            <Container>
                <AddPlayer onSubmit={this.props.onAddPlayer} />
                <PlayersList 
                    players={this.props.players} 
                    onDeletePlayer={this.props.onDeletePlayer}    
                />
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        players: state.players
    };
};

const mapDispatchProps = dispatch => { 
    const actions = createActions();

    return {
        loadPlayers: () => { dispatch(actions.loadPlayers()) },
        onAddPlayer: (player) => { dispatch(actions.addPlayer(player)) },
        onDeletePlayer: (playerId) => { dispatch(actions.deletePlayer(playerId)) }
    };
};

export default connect(mapStateToProps, mapDispatchProps)(Players);