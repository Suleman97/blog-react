import React, { Component } from 'react';
import { Button, Modal} from 'react-bootstrap'

class botstrap extends Component {
    constructor(){
        super();
        this.state={
            show: false
        }
    }

    handleModal(){
        this.setState({show: !this.state.show})
    }
    render() {
        return (
            <div>
                <h1>Intro to Modal</h1>
                <Button onClick={()=>this.handleModal()}>click me</Button>
                <Modal show={this.state.show} onHide={()=>this.handleModal()}>
                    <Modal.Header closeButton>
                        Modal Title
                    </Modal.Header>
                    <Modal.Body>
                        All body text will show here
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={()=>this.handleModal()}>
                            Close
                        </Button>
                        <Button onClick={()=>this.handleModal()}>Save</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default botstrap;