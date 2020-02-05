import * as _ from 'lodash';
export function validateMatch(player, player2, player1Score, player2Score) {

    if (_.isNil(player)){
        return 'Select first player.';
    }

    if (_.isNil(player2)){
        return 'Select second player.';
    }

    if (_.isNil(player1Score)) {
        return 'Select player1 score.';
    }

    if (_.isNil(player2Score)) {
        return 'Select player2 score.';
    }
    
    if (player1Score < 0 || player2Score < 0) {
        return 'Score should be positive number.';
    }

    if(player === player2) {
        return 'Select different names for players.';
    }
    
    const winnerScore = Math.max(player1Score, player2Score);

    if(winnerScore < 11) {
        return 'Winner score should be at least 11.';
    }
    
    const scoreDiff = Math.abs(player1Score-player2Score);
    
    if(winnerScore === 11 && scoreDiff < 2) {
        return 'Score difference should be at least 2.';
    }

    if(winnerScore > 11 && scoreDiff !== 2) {
        return 'Score difference should be 2.';
    }

    return false;
}

export function validateDoublesMatch(team1, team2, team1Score, team2Score) {
    const error = validateMatch(team1, team2, team1Score, team2Score);

    if (error) {
        return error;
    }

    if (team1.player1 === team2.player1 || team1.player1 === team2.player2) {
        return 'Select different teams.';
    }

    if (team1.player2 === team2.player1 || team1.player2 === team2.player2) {
        
        return 'Select different teams.';
    }

    return false;
}