export const precleanData = data => {
  const output = {};
  const keys = Object.keys(data);
  if (keys.length === 0) {
    return data;
  } else {
    keys.forEach(e => {
      if (typeof data[e] === 'object') {
        if (Object.keys(data[e]).length !== 0) {
          output[e] = precleanData(data[e]);
        }
      } else if (data[e] !== undefined) {
        output[e] = data[e];
      }
    });
  }
  return output;
};
