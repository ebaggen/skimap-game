import React from 'react';
import TextEntry from './textEntry';
import HintPopover from './hintPopover';
import { Form, FormGroup, InputGroup, Button} from 'react-bootstrap';

const NonMobileGuessControls = (props) => {
    return (
        <Form className="App-user-control">
          <FormGroup>
            <InputGroup>
              <TextEntry
                selection={props.selection}
                onSelectionChange={props.onSelectionChange}
                resorts={props.resorts}
                onSubmit={props.onSubmit}
                isGuessCorrect={props.isGuessCorrect}
              />
              <InputGroup.Append>
                <Button
                    variant="outline-secondary"
                    onClick={props.onSubmit}
                    disabled={!props.selection || (props.selection && props.selection.length === 0)}
                  >
                  Submit
                </Button>
                <HintPopover resort={props.resort}/>
                <Button variant="outline-danger" onClick={props.onSubmit} disabled={props.isGuessCorrect !== undefined}>
                  Give up
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </FormGroup>
        </Form>
    );
};

export default NonMobileGuessControls;