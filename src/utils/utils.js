const bgImage = (fileName) => {
  return {
    backgroundImage: `url("./assets/${fileName}")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
};

const getOccHours = (year, month, day, city) => {
  if (year === 2024 && month === 9 && day === 30 && city === 'empoli') {
    return ['8:30', '11:00'];
  };
  return [];
};

const getOccDates = (year, month, city) => {
  if (year === 2024 && month === 9 && city === 'certaldo') {
    return [1,2,10];
  };
  return [];
};

const bookApp = (data) => {
  return 1001;
}

export {
  bgImage,
  bookApp,
  getOccDates,
  getOccHours,
}
