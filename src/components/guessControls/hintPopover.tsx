import React, { useContext } from 'react'
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import {
    Popover,
    Button,
    Box,
    Typography
 } from '@material-ui/core';
import { context } from '../../context';
import { currentResortSelector } from '../../selectors';

const HintPopover = () => {
    const { state } = useContext(context);

    const currentResort = currentResortSelector(state);

    return (
        <PopupState variant="popover" popupId="hint-popover">
            {(popupState) => (
                <div>
                    <Button variant="contained" {...bindTrigger(popupState)}>
                        Hint
                    </Button>
                    <Popover
                        {...bindPopover(popupState)}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center'
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center'
                        }}
                    >
                        <Box p={2}>
                            <Typography>
                                It's in {currentResort.location === '' ? currentResort.country : currentResort.location}.
                            </Typography>
                        </Box>
                    </Popover>
                </div>
            )}
        </PopupState>
    );
}

export default HintPopover;