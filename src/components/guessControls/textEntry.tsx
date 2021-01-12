import React, { useState } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import { resorts } from '../../util';
import Resort from '../../types/resort';

type Props = {
    isGuessCorrect: boolean | undefined,
    selection: string,
    onSubmit: () => void,
    onSelectionChange: (selection: string) => void
}

const TextEntry = ({
    isGuessCorrect,
    selection,
    onSubmit,
    onSelectionChange
}: Props) => {
    const [sl, setSl] = useState<string>('');

    const keyHandler = (e: any) => {
        if (e.nativeEvent.code == 'Enter') {
            onSubmit();
        }
    }

    const selectionHandler = (selection: string[]) => {
        alert(selection[0]);
        if (selection) {
            setSl(selection[0]);
        }
        //onSelectionChange(selection[0]);
    }

    return (
        <Typeahead
            onChange={selectionHandler}
            options={resorts.map((resort: Resort) => resort.name)}
            selected={[sl]}
            placeholder='Start typing a resort...'
            flip
            onKeyDown={keyHandler}
            isValid={isGuessCorrect === true}
            isInvalid={isGuessCorrect === false}
        />
    );
}

export default TextEntry;