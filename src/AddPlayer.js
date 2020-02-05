import React, { Component } from 'react';

import {
    Form,
    FormGroup,
    Input,
    Card,
    CardBody,
    Col,
    InputGroup,
    InputGroupButton,
} from 'reactstrap';

class AddPlayer extends Component {
    
    constructor() {
        super();
        this.state = {value: ''};
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onEnterKey = this.onEnterKey.bind(this);
    }

    componentDidMount() {
      window.addEventListener('keypress', this.onEnterKey);  
    }

    componentWillUnmount() {
        window.removeEventListener('keypress', this.onEnterKey);  
    }

    render() {
        return (
            <Col md={{size:8 , offset:2}}>
                <Card className="mt-5">
                    <CardBody>
                        <h3>Add player:</h3>
                        <Form>
                            <FormGroup>
                                <InputGroup>
                                    <Input 
                                        onChange={this.onChange} 
                                        value={this.state.value} 
                                        placeholder="Enter name..." 
                                        type="text" 
                                        name="playerName" 
                                        id="playerName" 
                                    />
                                    <InputGroupButton onClick={this.onSubmit} size="lg" >Add</InputGroupButton>
                                </InputGroup>
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        );
    }   

    onChange(e) {
        this.setState({value: e.target.value}); 
    }

    onSubmit() {

        if(this.state.value.trim() === '') {
            return;
        }

        this.props.onSubmit(this.state.value);
        this.setState({value: ''});
    }

    onEnterKey(e) {
        if(e.keyCode === 13){
            e.preventDefault();
            this.onSubmit();
        }
    }
}

export default AddPlayer;