import React, { useContext } from 'react';
import TextEntry from './textEntry';
import HintPopover from './hintPopover';
import { Button, Container, Row} from 'react-bootstrap';
import { context } from '../../context';
import { SubmitGuess } from '../../actions';

const MobileGuessControls = () => {
    const { state, dispatch } = useContext(context);

    return (
        <Container fluid>
            <Row>
                <TextEntry />
            </Row>
            <Row>
                <Button
                    variant="outline-secondary"
                    onClick={() => dispatch(SubmitGuess())}
                    disabled={state.guess.selection === null || state.guess.showResult}
                >
                    Submit
                </Button>
            </Row>
            <Row>
                <HintPopover />
            </Row>
            <Row>
                <Button
                    variant="outline-danger"
                    onClick={() => dispatch(SubmitGuess())}
                >
                    Give up
                </Button>
            </Row>
        </Container>
    );
};

export default MobileGuessControls;