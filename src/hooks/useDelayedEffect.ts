import { useEffect } from "react";

const useDelayedEffect = <A>(
  dispatch: React.Dispatch<A>,
  action: () => A,
  delay: number,
  conditional?: () => boolean,
  dependencies?: React.DependencyList
) => {
  useEffect(() => {
    if (conditional === undefined || conditional()) {
      setTimeout(() => dispatch(action()), delay);
    }
  }, dependencies);
};

export default useDelayedEffect;
