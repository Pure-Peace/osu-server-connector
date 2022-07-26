export const cc = (names: string | number | string[] | Record<string, any>) => {
  if (typeof names === 'string' || typeof names === 'number') return '' + names;

  let out = '';

  if (Array.isArray(names)) {
    for (let i = 0, tmp; i < names.length; i++) {
      if ((tmp = cc(names[i])) !== '') {
        out += (out && ' ') + tmp;
      }
    }
  } else {
    for (const k in names) {
      if (names[k]) out += (out && ' ') + k;
    }
  }

  return out;
};
