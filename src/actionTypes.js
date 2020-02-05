import * as _ from 'lodash';
import * as firebase from 'firebase';

const app =firebase.initializeApp({
    apiKey:'AIzaSyA3dpLFpJDpewp8F2PdhPxbUTe3WFdy4Fc',
    authDomain:'pingis-81865.firebaseapp.com',
    databaseURL:'https://pingis-81865.firebaseio.com',
    storageBucket:'pingis-81865.appspot.com',
});

const db = app.database();

export const ADD_PLAYER = 'ADD_PLAYER';
export const DELETE_PLAYER = 'DELETE_PLAYER';
export const DELETE_TEAM = 'DELETE_TEAM';
export const ADD_SINGLES_MATCH = 'ADD_SINGLES_MATCH';
export const LOAD_PLAYERS = 'LOAD_PLAYERS';
export const LOAD_SINGLES_MATCH = 'LOAD_SINGLES_MATCH';
export const LOAD_DOUBLES_MATCH = 'LOAD_DOUBLES_MATCH';
export const ADD_TEAM = 'ADD_TEAM';
export const LOAD_LEADERBOARD = 'LOAD_LEADERBOARD'
export const LOAD_TEAM_LEADERBOARD = 'LOAD_TEAM_LEADERBOARD'
export const LOAD_TEAMS= 'LOAD_TEAMS';
export const ADD_DOUBLES_MATCH= 'ADD_DOUBLES_MATCH';

const loadPlayers = (players) => {
    return {
        type: LOAD_PLAYERS,
        players,
    };
}

const addPlayer = (player) => {
    return { 
        type: ADD_PLAYER, 
        player,
    };
}

const loadSinglesMatches = (singlesMatches, limit) => {
    return {
        type: LOAD_SINGLES_MATCH,
        limit,
        singlesMatches,
    };
}

const loadDoublesMatches = (doublesMatches, limit) => {
    return {
        type: LOAD_DOUBLES_MATCH,
        limit,
        doublesMatches,
    };
}

const addDoublesMatch = (match) => {
    return { 
         type: ADD_DOUBLES_MATCH, 
         match,
        };
}

const addSinglesMatch = (match) => {
    return { 
         type: ADD_SINGLES_MATCH, 
         match,
        };
}

const addTeam = (team) => {
    return {
        type: ADD_TEAM,
        team
    };
}

const loadTeams = (teams) => {
    return {
        type: LOAD_TEAMS,
        teams,
    };
}

const loadLeaderboard = (leaderboard,limit) => {
    return { 
        type: LOAD_LEADERBOARD, 
        limit,
    };
}

const loadTeamLeaderboard = (leaderboard,limit) => {
    return { 
        type: LOAD_TEAM_LEADERBOARD, 
        limit,
    };
}

const deletePlayer = (id) => {
    return {
        type: DELETE_PLAYER, 
        id,
    }
}

const deleteTeam = (id) => {
    return {
        type: DELETE_TEAM, 
        id,
    }
}

export default function createPingisActions() {
    return {
        loadPlayers: () => (dispatch, getState) => {
            return db.ref('players')
                .once('value')
                .then(data => {
                    const players = _.values(data.val());
                    dispatch(loadPlayers(players));
                });
        },

        addPlayer: (name) => (dispatch, getState) => {
            const player =  { 
                name,
                id: _.uniqueId('player_') 
            };

            db.ref('players/'+player.id)
                .set(player)
                .then(() => dispatch(addPlayer(player)));
        },
               
        loadSinglesMatches: () => (dispatch, getState) => {
            return db.ref('singles-matches')
            .once('value')
            .then(data => {
                const matches = _.values(data.val());
                dispatch(loadSinglesMatches(matches));
            });
        },

        addSinglesMatch: (data) => (dispatch, getState) => {
            const match = {
                player1: data.player,
                player2: data.player2,
                player1Score: data.player1Score,
                player2Score: data.player2Score,
                id: _.uniqueId('match_')
            };

            db.ref('singles-matches/'+match.id)
                .set(match)
                .then(() => dispatch(addSinglesMatch(match)));
        },
  
        loadDoublesMatches: () => (dispatch, getState) => {
            return db.ref('doubles-matches')
            .once('value')
            .then(data => {
                const matches = _.values(data.val());
                dispatch(loadDoublesMatches(matches));
            });
        },

        addDoublesMatch: (data) => (dispatch, getState) => {
            const match = {
                player1: data.player,
                player2: data.player2,
                player1Score: data.player1Score,
                player2Score: data.player2Score,
                id: _.uniqueId('match_')
            };

            db.ref('doubles-matches/'+match.id)
                .set(match)
                .then(() => dispatch(addDoublesMatch(match)));
        },

        addTeam: (data) => (dispatch, getState) => {
            const team = {
                player1: data.player,
                player2: data.player2,
                name: data.player + ' & ' + data.player2,
                id: _.uniqueId('player_')
            };

            db.ref('teams/'+team.id)
                .set(team)
                .then(() => dispatch(addTeam(team)));
        },

        loadTeams: (data) => (dispatch, getState) => {
            return db.ref('teams')
            .once('value')
            .then(data => {
                const teams = _.values(data.val());
                dispatch(loadTeams(teams));
            });
        },

        loadLeaderboard: (data) => (dispatch, getState) => {
            return dispatch(loadLeaderboard);
        },

        loadTeamLeaderboard: (data) => (dispatch, getState) => {
            return dispatch(loadTeamLeaderboard);
        },

        deletePlayer: (id) => (dispatch, getState) => {
            return db.ref('players/'+id)
            .remove()
            .then(() => dispatch(deletePlayer(id)));
        },
        
        deleteTeam: (id) => (dispatch, getState) => {
            return db.ref('teams/'+id)
            .remove()
            .then(() => dispatch(deleteTeam(id)));
        },

    }
}

