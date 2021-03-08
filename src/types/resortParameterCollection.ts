import ResortParameter from "../enums/resortParameter";

interface IResortParameterCollection {
  countries: Set<string>;
  regions: Set<string>;
  locations: Set<string>;
}

export default IResortParameterCollection;
