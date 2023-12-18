function formatDateToString(date: Date): string {
  // Date 객체에서 원하는 형식으로 날짜를 가공
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 월은 0부터 시작하므로 1을 더하고 2자리로 표시
  const day = date.getDate().toString().padStart(2, '0'); // 일을 2자리로 표시

  return `${year}-${month}-${day}`;
}

export default formatDateToString;
