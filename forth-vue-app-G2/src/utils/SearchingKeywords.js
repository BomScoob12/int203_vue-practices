const searchByKeywords = (data, keywords) => {
  const lowerCaseKeyword = keywords.toLowerCase();
  const items = data.value
  console.log("Searching keyword.... : " + lowerCaseKeyword);
  return items.filter(
    (item) =>
      item.section.toString().includes(lowerCaseKeyword) ||
      (item.groupName.toLowerCase()).includes(lowerCaseKeyword) ||
      item.repo.includes(lowerCaseKeyword) ||
      item.members.some(
        (member) =>
          member.studentId.toString().includes(lowerCaseKeyword) ||
          member.studentName.toLowerCase().includes(lowerCaseKeyword)
      )
  );
};

export default searchByKeywords;
