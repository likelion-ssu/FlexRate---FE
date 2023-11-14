import { Features } from '../models/Scaling.ts';
import Scaling from '../models/Scaling.ts';
import SemiCircleCharts from '@/components/SemiCircleChart';

const Main = () => {
  const tmp = 67;

  // 예제 사용
  const rawFeatures: Features = {
    credit_score: 1,
    yearly_income: 11111,
    company_enter_month: 1111,
    existing_loan_cnt: 1,
    existing_loan_amt: 1,
    debt_rate: 1,
    income_type_EARNEDINCOME2: 1,
    income_type_FREELANCER: 1,
    income_type_OTHERINCOME: 1,
    income_type_PRACTITIONER: 1,
    income_type_PRIVATEBUSINESS: 1,
    employment_type_기타: 1,
    employment_type_일용직: 1,
    employment_type_정규직: 1,
    houseown_type_배우자: 1,
    houseown_type_자가: 1,
    houseown_type_전월세: 1,
  };

  const preprocessedFeatures: Features = Scaling(rawFeatures);
  const featureValues: number[] = Object.values(preprocessedFeatures);
  console.log(featureValues);
  // console.log(model.predictScore(featureValues));


  return (
    <div>
      <SemiCircleCharts num={tmp} />
    </div>
  );
};

export default Main;