import React from 'react';
import { Button, Modal, Accordion, Card } from 'react-bootstrap';
import ResultsTable from './resultsTable';

const GameOverPopup = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            centered
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header>
                Game over!
            </Modal.Header>
            <Modal.Body>
                You got {props.totalCorrect} of {props.total} correct.

                <Accordion>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                Show results
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <ResultsTable results={props.results}/>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Play Again</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default GameOverPopup;