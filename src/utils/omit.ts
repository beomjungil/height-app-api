
const omit = <T>(obj: T, ...keys: Array<keyof T>) => {
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  const ret = {} as {
    [K in keyof typeof obj]: (typeof obj)[K]
  };

  let key: keyof typeof obj;
  for (key in obj) {
    if (!(keys.includes(key))) {
      ret[key] = obj[key];
    }
  }
  return ret;
};

export default omit;
