interface queriesType {
  [key: string]: string;
}

const sizes: queriesType = {
  mobileS: "500px",
  mobileM: "750px",
  mobileL: "1200px",
  laptopS: "1350px",
  laptopM: "1500px",
};

const device = (() => {
  let queries: queriesType = {};

  for (let key in sizes) {
    queries[key] = `screen and (max-width: ${sizes[key]})`;
  }

  return queries;
})();

export default device;
