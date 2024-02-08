const searchByKeywords = (data, keywords) => {
  console.log('search');
  const lowerCaseKeyword = keywords.toLowerCase();
  return data.filter(
    (item) =>
      item.section.toString().includes(lowerCaseKeyword) ||
      item.groupName.includes(lowerCaseKeyword) ||
      item.repo.includes(lowerCaseKeyword) ||
      item.members.some(
        (member) =>
          member.studentId.toString().includes(lowerCaseKeyword) ||
          member.studentName.toLowerCase().includes(lowerCaseKeyword)
      )
  );
};

export default searchByKeywords;
