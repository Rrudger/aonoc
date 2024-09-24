const bgImage = (fileName) => {
  return {
    backgroundImage: `url("./assets/${fileName}")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
};

export {
  bgImage,
}
