import React, { useState } from 'react';
import { isMobileDevice } from 'responsive-react';
import NonMobileGuessControls from './nonMobileGuessControls';
import MobileGuessControls from './mobileGuessControls';
import Resort from '../../types/resort';

type Props = {
    resort: Resort,
    isGuessCorrect: boolean | undefined,
    selection: string,
    onSubmit: (guess: string) => void,
    onSelectionChange: (selection: string) => void
}

const GuessControls = ({
    resort,
    isGuessCorrect,
    selection,
    onSubmit,
    onSelectionChange
}: Props) => {

    const submit = () => {
        if (selection && selection.length) {
            onSubmit(selection);
        } else {
            onSubmit('');
        }
    }

    return (
        <>
            {isMobileDevice() &&
                <MobileGuessControls
                    resort={resort}
                    selection={selection}
                    onSelectionChange={onSelectionChange}
                    onSubmit={submit}
                    isGuessCorrect={isGuessCorrect}
                />
            }
            {!isMobileDevice() && 
                <NonMobileGuessControls
                    resort={resort}
                    selection={selection}
                    onSelectionChange={onSelectionChange}
                    onSubmit={submit}
                    isGuessCorrect={isGuessCorrect}
                />
            }
        </>
    );
};

export default GuessControls;