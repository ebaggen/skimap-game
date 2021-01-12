import React from 'react';
import { Button, Modal, Accordion, Card } from 'react-bootstrap';
import Result from '../../types/result';
import ResultsTable from './resultsTable';

type Props = {
    results: Result[],
    show: boolean,
    onHide: () => void
}

const GameOverPopup = ({ results, show, onHide }: Props) => {

    const totalCorrect = results.filter(result => result.isCorrect).length;

    return (
        <Modal
            show={show}
            size="lg"
            centered
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header>
                Game over!
            </Modal.Header>
            <Modal.Body>
                You got {totalCorrect} of {results.length} correct.

                <Accordion>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                Show results
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <ResultsTable results={results}/>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Play Again</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default GameOverPopup;