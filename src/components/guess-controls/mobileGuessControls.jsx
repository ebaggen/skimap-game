import React from 'react';
import TextEntry from './textEntry';
import HintPopover from './hintPopover';
import { Button, Container, Row} from 'react-bootstrap';

const MobileGuessControls = (props) => {
    return (
        <Container fluid>
            <Row>
                <TextEntry
                    selection={props.selection}
                    onSelectionChange={props.onSelectionChange}
                    resorts={props.resorts}
                    onSubmit={props.onSubmit}
                    isGuessCorrect={props.isGuessCorrect}
                />
            </Row>
            <Row>
                <Button
                    variant="outline-secondary"
                    onClick={props.onSubmit}
                    disabled={!props.selection || (props.selection && props.selection.length === 0)}
                >
                    Submit
                </Button>
            </Row>
            <Row>
                <HintPopover resort={props.resort}/>
            </Row>
            <Row>
                <Button variant="outline-danger" onClick={props.onSubmit}>
                    Give up
                </Button>
            </Row>
        </Container>
    );
};

export default MobileGuessControls;