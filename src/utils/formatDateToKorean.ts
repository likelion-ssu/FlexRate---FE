//날짜 형식 바꾸기
function formatDateToKorean(dateString: string): string {
  const parts = dateString.split('-');
  if (parts.length !== 3) {
    // 잘못된 형식의 문자열이면 그대로 반환
    return dateString;
  }

  const [year, month, day] = parts;

  return `${year}년 ${parseInt(month, 10)}월 ${parseInt(day, 10)}일`;
}

export default formatDateToKorean;
