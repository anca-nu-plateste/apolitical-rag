import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

interface LLMResponseProps {
    showModal: boolean;
    handleClose: () => void;
    response: string;
}

export default function LLMResponse({ showModal, handleClose, response }: LLMResponseProps) {
    return (
        <Modal show={showModal} onHide={handleClose} id="infoPopup">
            <Modal.Header closeButton>
            </Modal.Header>

            <Modal.Body>
                    <ReactMarkdown>{response}</ReactMarkdown>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
