import React, { Component } from 'react';
import Modal from 'react-modal';
export default class Modals extends Component {
    componentWillMount = () => {
        Modal.setAppElement('body');
    }
    render() {
        return (
            <Modal isOpen={true}>
                Hello
            </Modal>
        )
    }
}