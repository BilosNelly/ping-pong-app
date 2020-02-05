import { 
    ADD_PLAYER, 
    DELETE_PLAYER, 
    DELETE_TEAM,
    LOAD_PLAYERS, 
    LOAD_SINGLES_MATCH, 
    LOAD_DOUBLES_MATCH, 
    LOAD_LEADERBOARD, 
    LOAD_TEAM_LEADERBOARD,
    ADD_TEAM, 
    LOAD_TEAMS,
    ADD_SINGLES_MATCH,
    ADD_DOUBLES_MATCH,
} from "./actionTypes";
import * as _ from 'lodash';

const INITIAL_STATE={
    players: [],
    singlesMatches: [],
    doublesMatches: [],
    leaderboard: [],
    teamleaderboard: [],
    teams: [],
};

function sortPlayers(players, matches) {
    const data = _.map(players, player =>{
        return {
            ...player,
            points: _.reduce(matches,(acc, match)=> {
                if(match.player1 === player.name && match.player1Score > match.player2Score){
                    return acc + 1;
                }
                if(match.player2 === player.name && match.player2Score > match.player1Score){
                    return acc + 1;
                }
                return acc;
            },0)
        }
    });
    
    return _.sortBy(data, 'points').reverse();
}

function sortTeams(teams, matches) {
    const data = _.map(teams, team =>{
        return {
            name: team.name,
            points: _.reduce(matches,(acc, match)=> {
                if(match.player1 === team.name && match.player1Score > match.player2Score){
                    return acc + 1;
                }
                if(match.player2 === team.name && match.player2Score > match.player1Score){
                    return acc + 1;
                }
                return acc;
            },0)
        }
    });
    
    return _.sortBy(data, 'points').reverse();
}

export default function pingisApp(state=INITIAL_STATE, action){
    switch (action.type) {
        
        case ADD_PLAYER:
            const playersi = state.players.concat(action.player);

            return {
                ...state,
                players: playersi,
                Leaderboard: sortPlayers(playersi, state.singleMatches),
            }

        case DELETE_PLAYER:
            const players = _.reject(state.players, {id: action.playerId});
            
            return {
                ...state,
                players,
                Leaderboard: sortPlayers(players, state.singlesMatches),
            }

        case DELETE_TEAM:
            const teams = _.reject(state.teams, {id: action.teamId});
            
            return {
                ...state,
                teams,
                teamLeaderboard: sortTeams(teams, state.doublesMatches),
            }

        case ADD_SINGLES_MATCH:
            const singlesMatches = state.singlesMatches.concat(action.match);

            return {
                ...state,
                singlesMatches,
                leaderboard: sortPlayers(state.players, singlesMatches),
            }  

        case ADD_DOUBLES_MATCH:
            const doublesMatches = state.doublesMatches.concat(action.match);

            return {
                ...state,
                doublesMatches,
                leaderboard: sortPlayers(state.players, doublesMatches),
            }

         case LOAD_PLAYERS:
            return {
                ...state,
                players: action.players || [],
                leaderboard: sortPlayers(action.players, state.singlesMatches),
            }

        case LOAD_SINGLES_MATCH: 
            return {
                ...state,
                singlesMatches: action.singlesMatches || [],
                leaderboard: sortPlayers(state.players, action.singlesMatches), 
            }

        case LOAD_DOUBLES_MATCH:        
            return {
                ...state,
                doublesMatches: action.doublesMatches || [],
                teamLeaderboard: sortTeams(state.teams, action.doublesMatches),
            }

        case LOAD_LEADERBOARD:
            return {
                ...state,
                leaderboard: sortPlayers(state.players, state.singlesMatches) 
            }

        case LOAD_TEAM_LEADERBOARD:
            return {
                ...state,
                teamLeaderboard: sortTeams(state.teams, state.doublesMatches) 
            }

        case ADD_TEAM:
            const teamsi = state.teams.concat(action.team);

            return {
                ...state,
                teams: teamsi,
                teamLeaderboard: sortTeams(teamsi, state.doublesMatches),
            }

        case LOAD_TEAMS:
            return {
                ...state,
                teams: action.teams || [],
                teamLeaderboard: sortTeams(action.teams, state.doublesMatches),
            }

        default:
            return state;        
    }
}