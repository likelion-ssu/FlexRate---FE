function calculateInterestRateRange(creditScore: number) {
  const minRateBase = 5;
  const maxRateBase = 20;
  const exponent = -0.003;
  const rateAdjustmentFactor = 0.5; // 금리 조정 계수

  // 기본 금리 계산
  const baseRate =
    maxRateBase -
    (maxRateBase - minRateBase) * Math.exp(exponent * creditScore);

  // 금리 범위 조정
  const minRate = Math.max(minRateBase, baseRate - rateAdjustmentFactor);
  const maxRate = Math.min(maxRateBase, baseRate + rateAdjustmentFactor);

  return { minRate: minRate.toFixed(2), maxRate: maxRate.toFixed(2) };
}

// 예시: 신용평가 점수가 700일 때의 금리 범위를 계산
console.log(calculateInterestRateRange(700)); // 결과 예: { minRate: "X.XX%", maxRate: "Y.YY%" }
