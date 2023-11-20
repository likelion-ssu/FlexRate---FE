export interface Features {
  credit_score: number;
  yearly_income: number;
  company_enter_month: number;
  existing_loan_cnt: number;
  existing_loan_amt: number;
  debt_rate: number;
  income_type_EARNEDINCOME2: number;
  income_type_FREELANCER: number;
  income_type_OTHERINCOME: number;
  income_type_PRACTITIONER: number;
  income_type_PRIVATEBUSINESS: number;
  employment_type_기타: number;
  employment_type_일용직: number;
  employment_type_정규직: number;
  houseown_type_배우자: number;
  houseown_type_자가: number;
  houseown_type_전월세: number;
}

export default function Scaling(features: Features): number[] {
  return [
    (features.credit_score - 60) / (1000 - 60),
    features.yearly_income / 10000000000,
    features.company_enter_month / 122.15616438356165,
    features.existing_loan_cnt / 229,
    features.existing_loan_amt / 7512000000,
    features.debt_rate / 10000000000.0,
    features.income_type_EARNEDINCOME2,
    features.income_type_FREELANCER,
    features.income_type_OTHERINCOME,
    features.income_type_PRACTITIONER,
    features.income_type_PRIVATEBUSINESS,
    features.employment_type_기타,
    features.employment_type_일용직,
    features.employment_type_정규직,
    features.houseown_type_배우자,
    features.houseown_type_자가,
    features.houseown_type_전월세,
  ];
}
