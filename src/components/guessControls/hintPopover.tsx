import React from 'react'
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import Popover from '@material-ui/core/Popover';
import { Button  } from 'react-bootstrap';
import { Box, Typography } from '@material-ui/core';
import Resort from '../../types/resort';

type Props = {
    resort: Resort;
}

const HintPopover = ({ resort }: Props) => {
    return (
        <PopupState variant="popover" popupId="hint-popover">
            {(popupState) => (
                <div>
                    <Button variant="outline-info" color="primary" {...bindTrigger(popupState)}>
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
                                It's in {resort.location === '' ? resort.country : resort.location}.
                            </Typography>
                        </Box>
                    </Popover>
                </div>
            )}
        </PopupState>
    );
}

export default HintPopover;