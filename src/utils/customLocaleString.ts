function customLocaleString(str: string): string {
  const rawValue = str.replace(/,/g, ''); // 입력에서 쉼표를 제거
  const formattedValue = Number(rawValue).toLocaleString(); // 천 단위로 쉼표를 추가

  return formattedValue;
}

export default customLocaleString;
