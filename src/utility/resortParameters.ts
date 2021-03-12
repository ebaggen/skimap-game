import resorts from "../constants/resorts";
import IResort from "../types/resort";
import IResortParameterCollection from "../types/resortParameterCollection";

export const getAllResortParameters = (): IResortParameterCollection => {
  return {
    countries: new Set(resorts.map((r) => r.country)),
    regions: new Set(resorts.map((r) => r.region)),
    locations: new Set(resorts.map((r) => r.state)),
  };
};

export const filterResorts = (
  parameters: IResortParameterCollection
): IResort[] => {
  let filteredResorts = [...resorts];

  // Filter countries
  filteredResorts = filteredResorts.filter((r) =>
    parameters.countries.has(r.country)
  );

  // Filter regions
  filteredResorts = filteredResorts.filter((r) =>
    parameters.regions.has(r.region)
  );

  // Filter locations
  filteredResorts = filteredResorts.filter((r) =>
    parameters.locations.has(r.state)
  );

  return filteredResorts;
};
