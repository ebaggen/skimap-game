import React from 'react';
import TextEntry from './textEntry';
import HintPopover from './hintPopover';
import { Form, FormGroup, InputGroup, Button} from 'react-bootstrap';
import Resort from '../../types/resort';

type Props = {
  selection: string,
  isGuessCorrect: boolean | undefined,
  resort: Resort,
  onSubmit: () => void,
  onSelectionChange: (selection: string) => void
}

const NonMobileGuessControls = ({
  selection,
  isGuessCorrect,
  resort,
  onSubmit,
  onSelectionChange
}: Props) => {
    return (
        <Form className="App-user-control">
          <FormGroup>
            <InputGroup>
              <TextEntry
                selection={selection}
                onSelectionChange={onSelectionChange}
                onSubmit={onSubmit}
                isGuessCorrect={isGuessCorrect}
              />
              <InputGroup.Append>
                <Button
                    variant="outline-secondary"
                    onClick={onSubmit}
                    disabled={selection.length === 0 || isGuessCorrect !== undefined}
                  >
                  Submit
                </Button>
                <HintPopover resort={resort}/>
                <Button variant="outline-danger" onClick={onSubmit} disabled={isGuessCorrect !== undefined}>
                  Give up
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </FormGroup>
        </Form>
    );
};

export default NonMobileGuessControls;