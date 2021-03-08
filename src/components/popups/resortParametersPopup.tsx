/*
import React, { useContext } from "react";
import Dialog from "@material-ui/core/Dialog";
import { context } from "../../context";
import {
  RestartGame,
  UpdateResortParameter,
  ShowParameterPopup,
} from "../../actions/gameActions";
import {
  Checkbox,
  DialogTitle,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  List,
  ListItem,
} from "@material-ui/core";
import ResortParameter from "../../enums/resortParameter";
import ResortParameterAction from "../../enums/resortParameterAction";
import {
  getResortParametersAsList,
  getAllResortParameters,
} from "../../utility/resortParameters";

const ResortParametersPopup = () => {
  const { state, dispatch } = useContext(context);

  const handleParameterChange = (
    parameterType: ResortParameter,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(
      `${event.target.checked} ${event.target.name} to/from ${parameterType}`
    );
    dispatch(
      UpdateResortParameter(
        parameterType,
        event.target.name,
        event.target.checked
          ? ResortParameterAction.Add
          : ResortParameterAction.Remove
      )
    );
  };

  const handleClose = () => {
    dispatch(ShowParameterPopup(false));
  };

  const handleApply = () => {
    dispatch(RestartGame());
  };

  let selectedCountries = state.configuredParameters.get(
    ResortParameter.Country
  );



  const allParameters = getAllResortParameters();
  const availableCountries = getResortParametersAsList(
    allParameters,
    ResortParameter.Country
  );
  console.log(availableCountries);
  const availableRegions = getResortParametersAsList(
    allParameters,
    ResortParameter.Country
  );
  const availableLocations = getResortParametersAsList(
    allParameters,
    ResortParameter.Country
  );

  return (
    <Dialog open={state.showParameterPopup} onClose={handleClose}>
      <DialogTitle>Customize game</DialogTitle>
      {availableCountries && (
        <FormControl>
          <FormLabel component="legend">Countries</FormLabel>
          <List>
            {availableCountries.map((c) => (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedCountries.has(c)}
                    onChange={(e) =>
                      handleParameterChange(ResortParameter.Region, e)
                    }
                    name={c}
                  />
                }
                label={c}
              />
            ))}
          </List>
        </FormControl>
      )}
    </Dialog>
  );
};

export default ResortParametersPopup;

/*
{availableRegions && (
        <>
          <Divider />
          <FormControl>
            <FormLabel component="legend">Regions</FormLabel>
            <FormGroup>
              {availableRegions.map((r) => {
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedCountries.has(r)}
                      onChange={(e) =>
                        handleParameterChange(ResortParameter.Region, e)
                      }
                      name={r}
                    />
                  }
                  label={r}
                />;
              })}
            </FormGroup>
          </FormControl>
        </>
      )}
      {availableLocations && (
        <>
          <Divider />
          <FormControl>
            <FormLabel component="legend">Locations</FormLabel>
            <FormGroup>
              {availableLocations.map((l) => {
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedCountries.has(l)}
                      onChange={(e) =>
                        handleParameterChange(ResortParameter.Location, e)
                      }
                      name={l}
                    />
                  }
                  label={l}
                />;
              })}
            </FormGroup>
          </FormControl>
        </>
      )}
      */
