import React, { useState } from 'react';
import { isMobileDevice } from 'responsive-react';
import NonMobileGuessControls from './nonMobileGuessControls';
import MobileGuessControls from './mobileGuessControls';

const GuessControls = (props) => {
    const [selection, setSelection] = useState(null);

    const submit = () => {
        if (selection && selection.length) {
            props.onSubmit(selection[0]);
        } else {
            props.onSubmit('')
        }
        
        setSelection([])
    }

    return (
        <>
            {isMobileDevice() &&
                <MobileGuessControls
                    selection={selection}
                    onSelectionChange={setSelection}
                    onSubmit={submit}
                    isGuessCorrect={props.isGuessCorrect}
                />
            }
            {!isMobileDevice() && 
                <NonMobileGuessControls
                    selection={selection}
                    onSelectionChange={setSelection}
                    onSubmit={submit}
                    isGuessCorrect={props.isGuessCorrect}
                />
            }
        </>
    );
};

export default GuessControls;