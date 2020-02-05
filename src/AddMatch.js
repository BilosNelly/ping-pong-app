import React, { Component } from 'react';
import classnames from 'classnames';
import AddSingleMatch from './AddSingleMatch';
import AddDoublesMatch from './AddDoublesMatch';
import{
    Alert,
    Col,
    Card,
    Row,
} from 'reactstrap';
import { 
    TabContent, 
    TabPane, 
    Nav, 
    NavItem, 
    NavLink} 
from 'reactstrap';

class AddMatch extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: '1'
        };
      }
    
      toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
    }
    
    render() {            

        if(this.props.players.length <2){
            return (
                <Col md={{size:8 , offset:2}} className="mt-3">
                    <Alert color="dark">
                       No player yet. <a href="/players">Add player.</a>
                    </Alert>
                </Col>
            );
        }

        return(
            <Row>
                {
                    this.state.error && (
                        <Col md={{size:8 , offset:2}} className="mt-3">
                            <Alert color="danger">ERROR</Alert>
                        </Col>
                    )
                }
                <Col className='mt-5' md={{ size: 8, offset:2}}>
                    <Card className='add-match-card'>
                        <h3>Add Match:</h3>
                        <Nav tabs className='padded'>
                            <NavItem>
                                <NavLink className={classnames({ active: this.state.activeTab})} onClick={() => { this.toggle('1'); }}>Add Single
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={classnames({ active: this.state.activeTab === '2' })} onClick={() => { this.toggle('2'); }}>Add Doubles
                                </NavLink>
                            </NavItem>
                        </Nav>

                        <TabContent activeTab={this.state.activeTab}>
                            <TabPane tabId="1">
                                <AddSingleMatch players={this.props.players} onAddSinglesMatch={this.props.onAddSinglesMatch}/>
                            </TabPane>

                            <TabPane tabId="2">
                                <AddDoublesMatch teams={this.props.teams} onAddDoublesMatch={this.props.onAddDoublesMatch}/>
                            </TabPane>
                            
                        </TabContent>
                    </Card> 
                </Col>
            </Row>
        );
    }
}

export default AddMatch;