import React from 'react'
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import Popover from '@material-ui/core/Popover';
import { Button, Container, Row } from 'react-bootstrap';
import { Box, Typography } from '@material-ui/core';

export default function HintPopover(props) {
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
                                It's in {props.resort.location === '' ? props.resort.country : props.resort.location}.
                            </Typography>
                        </Box>
                    </Popover>
                </div>
            )}
        </PopupState>
    );
}