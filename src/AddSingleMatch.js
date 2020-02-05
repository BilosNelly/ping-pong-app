import React, { Component } from 'react';
import {validateMatch} from './utils';

import{
    Button,
    Col,
    Input,
    Row,
} from 'reactstrap';

const INITIAL_STATE={
    player: '',
    player2: '',
    player1Score: '',
    player2Score: '',
    error: ''
}

class AddSingleMatch extends Component {

    constructor(props) {
        super(props);

        this.state={...INITIAL_STATE};
        this.onAddSinglesMatch = this.onAddSinglesMatch.bind(this);
        this.selectPlayerOne = this.selectPlayerOne.bind(this);
        this.selectPlayerTwo = this.selectPlayerTwo.bind(this);
        this.selectScoreOne = this.selectScoreOne.bind(this);
        this.selectScoreTwo = this.selectScoreTwo.bind(this);
      }

    render() {
        return (
            <Row>
                {this.state.error && <Col className='col-md-12'><div className="alert alert-danger">{this.state.error}</div></Col>}
                <Col className="col-md-3">
                    <Input className='select-oponent' value={this.state.player} onChange={this.selectPlayerOne} type="select" name="selectMulti" id="exampleSelectMulti">
                        <option> Select 1. player... </option>
                        {this.props.players.map((player) => <option key={player.id}>{player.name}</option>)} 
                    </Input>
                </Col>

                <Col className="col-md-2">
                        <Input value={this.state.player1Score} onChange={this.selectScoreOne} placeholder="score" type="number" />
                </Col>
                    
                <Col className="col-md-2">
                        <Input value={this.state.player2Score} onChange={this.selectScoreTwo} placeholder="score" type="number"/>
                </Col>

                <Col className="col-md-3">
                    <Input className='select-oponent' value={this.state.player2} onChange={this.selectPlayerTwo}  type="select" name="selectMulti" id="exampleSelectMulti">
                        <option> Select 2. player... </option>
                        {this.props.players.map((player) => <option key={player.id}>{player.name}</option>)}    
                    </Input>
                </Col>

                <Col className="col-md-2">
                    <Button onClick={this.onAddSinglesMatch} outline color="primary">Add Match</Button>
                </Col>  
            </Row>
        );
    }

    onAddSinglesMatch(){
        const {player, player2, player1Score, player2Score} = this.state;
        const error = validateMatch(player, player2, player1Score, player2Score);

        if (error) {
            this.setState({error});
        } else {
            this.props.onAddSinglesMatch(this.state);
            this.setState(INITIAL_STATE);
        }
    }

    selectScoreOne(e){
        this.setState({player1Score: Number(e.target.value)})
    }

    selectScoreTwo(e){
        this.setState({player2Score: Number(e.target.value)})
    }

    selectPlayerOne(e){
        this.setState({player: e.target.value})
    }

    selectPlayerTwo(e){
        this.setState({player2: e.target.value})
    }
}
export default AddSingleMatch;