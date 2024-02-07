const sortBySection = (data) => {
  console.log('Sorting....');
  data.sort((a, b) => a.section - b.section);
  //   data.sort((a, b) => {
  //     if (a.section > b.section) return 1;
  //     if (a.section < b.section) return -1;
  //     return 0;
  //   });
};

export default sortBySection;
