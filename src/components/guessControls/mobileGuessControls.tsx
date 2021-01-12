import React from 'react';
import TextEntry from './textEntry';
import HintPopover from './hintPopover';
import { Button, Container, Row} from 'react-bootstrap';
import Resort from '../../types/resort';

type Props = {
    resort: Resort,
    selection: string,
    isGuessCorrect: boolean | undefined,
    onSubmit: () => void,
    onSelectionChange: (selection: string) => void
}

const MobileGuessControls = ({
    resort,
    selection,
    isGuessCorrect,
    onSubmit,
    onSelectionChange
}: Props) => {
    return (
        <Container fluid>
            <Row>
                <TextEntry
                    selection={selection}
                    onSelectionChange={onSelectionChange}
                    onSubmit={onSubmit}
                    isGuessCorrect={isGuessCorrect}
                />
            </Row>
            <Row>
                <Button
                    variant="outline-secondary"
                    onClick={onSubmit}
                    disabled={selection.length === 0}
                >
                    Submit
                </Button>
            </Row>
            <Row>
                <HintPopover resort={resort}/>
            </Row>
            <Row>
                <Button variant="outline-danger" onClick={onSubmit}>
                    Give up
                </Button>
            </Row>
        </Container>
    );
};

export default MobileGuessControls;