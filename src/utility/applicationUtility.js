let timeOutId = null;
export const debouncing = (ms) => {
  return (callme, parms = []) => {
    clearTimeout(timeOutId);
    timeOutId = setTimeout(() => {
      callme(...parms);
    }, ms);
  };
};

export const genrateQueryString = (obj) => {
  let query = '';
  Object.keys(obj).forEach((key, index) => {
    if (obj[key]) {
      query += `${key}=${obj[key]}&`;
    }
  });
  return query.slice(0, -1);
};
