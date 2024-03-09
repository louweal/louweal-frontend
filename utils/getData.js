/* for importing dynamic data files that might be inexistent */
export const getData = (glob) => {
  let filename = Object.keys(glob)[0];

  if (filename) {
    return glob[filename].default;
  }
  return undefined;
};

// very ugly and inefficient but there isn't an alternative?!
// glob should get ALL forms
export const getFormData = (glob, formId) => {
  const form = {};
  Object.keys(glob).forEach((key) => {
    const filename = key.match(/([^/]+)\.json$/)[1];
    form[filename] = glob[key].default;
  });

  if (form[formId]) {
    return form[formId];
  }

  return undefined;
};

// usage:
// import { getData } from "@/utils/getData";

// const glob = import.meta.glob("@/assets/data/menus/menu.json", {
//   eager: true,
// });
// let menu = getData(glob);
