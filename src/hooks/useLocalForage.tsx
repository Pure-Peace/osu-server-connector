import localforage from 'localforage';
import { useState, useLayoutEffect } from 'react';

// https://reactjs.org/docs/hooks-custom.html
const useLocalForage = (key: string, defaultValue: any) => {
  // only supports primitives, arrays, and {} objects
  const [state, setState] = useState(defaultValue);
  const [loading, setLoading] = useState(true);

  // useLayoutEffect will be called before DOM paintings and before useEffect
  useLayoutEffect(() => {
    let allow = true;
    localforage
      .getItem<string | null>(key)
      .then((value) => {
        if (value === null) throw '';
        if (allow) setState(value);
      })
      .catch(() => localforage.setItem(key, defaultValue))
      .then(() => {
        if (allow) setLoading(false);
      });
    return () => {
      allow = false;
    };
  }, []);
  // useLayoutEffect does not like Promise return values.
  useLayoutEffect(() => {
    // do not allow setState to be called before data has even been loaded!
    if (!loading) localforage.setItem(key, state);
  }, [state]);
  return [state, setState, loading];
};

export default useLocalForage;
