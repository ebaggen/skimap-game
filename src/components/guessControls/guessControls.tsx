import React from 'react';
import { isMobileDevice } from 'responsive-react';
import NonMobileGuessControls from './nonMobileGuessControls';
import MobileGuessControls from './mobileGuessControls';

const GuessControls = () => {

    return isMobileDevice() ? <MobileGuessControls /> : <NonMobileGuessControls />;
};

export default GuessControls;