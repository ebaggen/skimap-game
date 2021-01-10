import React from 'react';
import { isMobileDevice } from 'responsive-react';
import NonMobileGuessControls from './nonMobileGuessControls';
import MobileGuessControls from './mobileGuessControls';

const GuessControls = (props) => {
    //const [selection, setSelection] = useState(null);

    const submit = () => {
        if (props.selection && props.selection.length) {
            props.onSubmit(props.selection[0]);
        } else {
            props.onSubmit('');
        }
    }

    return (
        <>
            {isMobileDevice() &&
                <MobileGuessControls
                    resort={props.resort}
                    selection={props.selection}
                    onSelectionChange={props.onSelectionChange}
                    onSubmit={submit}
                    isGuessCorrect={props.isGuessCorrect}
                />
            }
            {!isMobileDevice() && 
                <NonMobileGuessControls
                    resort={props.resort}
                    selection={props.selection}
                    onSelectionChange={props.onSelectionChange}
                    onSubmit={submit}
                    isGuessCorrect={props.isGuessCorrect}
                />
            }
        </>
    );
};

export default GuessControls;