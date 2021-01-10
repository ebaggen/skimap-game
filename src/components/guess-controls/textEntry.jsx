import React from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import { resorts } from '../../util'

const TextEntry = (props) => {
    return (
        <Typeahead
            onChange={(selection) => {
                props.onSelectionChange(selection);
            }}
            options={resorts.map(resort => resort.name)}
            selected={props.selection}
            placeholder='Start typing a resort...'
            flip
            onKeyDown={e => {
                if (e.key === 'Enter' && props.selection && props.selection.length) {
                    props.onSubmit();
                }
            }}
            isValid={props.isGuessCorrect === true}
            isInvalid={props.isGuessCorrect === false}
        />
    );
}

export default TextEntry;