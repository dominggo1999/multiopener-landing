export const mapGlobFiles = (obj) => {
  return Object.keys(obj).map((i) => {
    return obj[i].default;
  });
};
