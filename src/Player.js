import React, { Component } from 'react';

import {
    Card,
    CardBody,
    CardTitle,
    Button,
} from 'reactstrap';

class Player extends Component {

    constructor(props) {
        super(props);
        this.onDelete = this.onDelete.bind(this);
    }

    render() {
        return (
            <Card className="mt-2">
                <CardBody>
                    <CardTitle>
                        {this.props.name}
                        <Button className="float-right" outline color="danger" onClick={this.onDelete}>Delete</Button>
                    </CardTitle>
                </CardBody>
            </Card>
        );
    }
    
    onDelete() {
        this.props.onDelete(this.props.id);
    }
}

export default Player;