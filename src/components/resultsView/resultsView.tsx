import React, { useContext } from 'react';
import { Button, Modal, Accordion, Card } from 'react-bootstrap';
import ResultsTable from './resultsTable';
import { context } from '../../context';
import { RestartGame } from '../../actions';

const GameOverPopup = () => {
    const { state, dispatch } = useContext(context);

    const totalCorrect = state.history.filter(result => result.isCorrect).length;

    return (
        <Modal
            show={state.showResultsPopup}
            size="lg"
            centered
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header>
                Game over!
            </Modal.Header>
            <Modal.Body>
                You got {totalCorrect} of {state.history.length} correct.

                <Accordion>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                Show results
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <ResultsTable/>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => dispatch(RestartGame())}>Play Again</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default GameOverPopup;