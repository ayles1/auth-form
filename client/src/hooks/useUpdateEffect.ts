import { DependencyList, EffectCallback, useEffect } from 'react';



import _useIsFirstRender from './_useIsFirstRender';


const useUpdateEffect = (effect: EffectCallback, deps?: DependencyList) => {
  const isFirst = _useIsFirstRender();

  useEffect(() => {
    if (!isFirst) {
      return effect();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export default useUpdateEffect;