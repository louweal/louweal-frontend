/* for importing dynamic data files that might be inexistent */
export const getData = (glob) => {
  let filename = Object.keys(glob)[0];

  if (filename) {
    return glob[filename].default;
  }
  return undefined;
};

// usage:
// import { getData } from "@/utils/getData";

// const glob = import.meta.glob("@/assets/data/menus/menu.json", {
//   eager: true,
// });
// let menu = getData(glob);
