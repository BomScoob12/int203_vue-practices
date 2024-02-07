const displayedRecords = (data, currentPage = 1, numberOfRows) => {
  const startIndex = (currentPage - 1) * numberOfRows;
  const endIndex = startIndex + numberOfRows;
  return data.slice(startIndex, endIndex);
};

const getNumberOfPage = (data, numberOfRows) => {
  return Math.ceil(data.length / numberOfRows);
};

export { displayedRecords, getNumberOfPage };
