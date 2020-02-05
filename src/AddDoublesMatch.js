import React, { Component } from 'react';
import {validateDoublesMatch} from './utils';
import * as _ from 'lodash';

import{
    Button,
    Col,
    Input,
    Row,
} from 'reactstrap';

const INITIAL_STATE={
    player1Score: '',
    player2Score: '',
    player: '',
    player2: '',
    error: ''
}

class AddDoubleMatch extends Component {
    constructor(props) {
        super(props);

        this.state={...INITIAL_STATE};
        this.onAddDoublesMatch = this.onAddDoublesMatch.bind(this);
        this.selectScoreOne = this.selectScoreOne.bind(this);
        this.selectScoreTwo = this.selectScoreTwo.bind(this);
        this.selectPlayerTeam1 = this.selectPlayerTeam1.bind(this);
        this.selectPlayerTeam2 = this.selectPlayerTeam2.bind(this);
    }

    render() {
        return (
            <Row>
                {this.state.error && <Col className='col-md-12'><div className="alert alert-danger">{this.state.error}</div></Col>}
                <Col className="col-md-3">
                    <Input className='select-oponent' value={this.state.player} onChange={this.selectPlayerTeam1} type="select" name="selectMulti" id="exampleSelectMulti">
                        <option> Select 1. player... </option>
                        {this.props.teams.map((team) => <option key={team.id}>{team.name}</option>)}
                    </Input>
                </Col>

                <Col className="col-md-2 score-input">
                        <Input value={this.state.player1Score} onChange={this.selectScoreOne} placeholder="score" type="number" />
                </Col>
                    
                <Col className="col-md-2 score-input">
                        <Input value={this.state.player2Score} onChange={this.selectScoreTwo} placeholder="score" type="number"/>
                </Col>

                <Col className="col-md-3">
                    <Input className='select-oponent'  value={this.state.player2} onChange={this.selectPlayerTeam2}  type="select" name="selectMulti" id="exampleSelectMulti">
                        <option> Select 2. player... </option>
                        {this.props.teams.map((team) => <option key={team.id}>{team.name}</option>)}    
                    </Input>
                </Col>

                <Col className="col-md-2">
                    <Button onClick={this.onAddDoublesMatch} outline color="primary">Add Match</Button>
                </Col>  
            </Row>
        );
    }

    onAddDoublesMatch(){
        const {player, player2, player1Score, player2Score} = this.state;
        const team1 = _.find(this.props.teams,{name: player});
        const team2 = _.find(this.props.teams,{name: player2});
        
        const error = validateDoublesMatch(team1, team2, player1Score, player2Score);
        
                if (error) {
                    this.setState({error});
                } else {
                    this.props.onAddDoublesMatch(this.state);
                    this.setState(INITIAL_STATE);
                }
    }

    selectPlayerTeam1(e){
        this.setState({player: e.target.value})
    }

    selectPlayerTeam2(e){
        this.setState({player2: e.target.value})
    }

    selectScoreOne(e){
        this.setState({player1Score: Number(e.target.value)})
    }

    selectScoreTwo(e){
        this.setState({player2Score: Number(e.target.value)})
    }
}

export default AddDoubleMatch;

