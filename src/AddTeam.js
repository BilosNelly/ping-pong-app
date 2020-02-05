import React, { Component } from 'react';

import {
    Form,
    FormGroup,
    Input,
    Button,
    Card,
    CardBody,
    Col,
    Row,
} from 'reactstrap';

const INITIAL_STATE={
    player: '',
    player2: '',
    error: ''
}

class AddTeam extends Component {

    constructor(props) {
        super(props);

        this.state={...INITIAL_STATE};
        this.onAddTeam = this.onAddTeam.bind(this);
        this.selectPlayerOne = this.selectPlayerOne.bind(this);
        this.selectPlayerTwo = this.selectPlayerTwo.bind(this);
    }

    render() {
        return(
        <Row>
            <Col className="mt-5" md={{ size: 8, offset: 2}}>
                <Card>
                <CardBody >
                    <h3>Add Teams</h3>
                        <Form>
                            <FormGroup>
                                <Row>
                                    <Col className="col-md-5">
                                        <Input value={this.state.player} onChange={this.selectPlayerOne} type="select" name="selectMulti" id="exampleSelectMulti">
                                            <option> Player 1... </option>
                                            {this.props.players.map((player) => <option key={player.id}>{player.name}</option>)}     
                                        </Input>
                                    </Col>
                                    <Col className="col-md-5">
                                        <Input value={this.state.player2} onChange={this.selectPlayerTwo}  type="select" name="selectMulti" id="exampleSelectMulti">
                                            <option> Player 2... </option>
                                            {this.props.players.map((player) => <option key={player.id}>{player.name}</option>)}     
                                        </Input>
                                    </Col>
                                    <Col className="col-md-2">
                                        <Button onClick={this.onAddTeam} outline color="primary">Add Team</Button>
                                    </Col>
                                </Row>
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card> 
            </Col>
        </Row>

        );
    }

    onAddTeam(){
        if (this.isTeamValid()) {
            this.props.onAddTeam(this.state);
            this.setState(INITIAL_STATE);
        }
        else{
            this.setState({error:'Error'});
        }
    }

    isTeamValid() {
        const { player, player2} = this.state;
        return(
            (player !== player2)
        );
    }

    selectPlayerOne(e){
        this.setState({player: e.target.value})
    }

    selectPlayerTwo(e){
        this.setState({player2: e.target.value})
    }

}

export default AddTeam;