import React from 'react';
import { useRecoilState } from 'recoil';
import { scaledFeatures } from '../state/userFeatures';
import { Scaling } from './Scaling';

/** 신용평가 모델 */
class LogisticRegressionModel {
  constructor() {
    this.coef_ = [
      5.88140501, 2.0298553, -1.44310022, 4.31160088e1, 4.32990295e1,
      2.55833358, 5.46035395e-2, -2.12274787e-1, -3.58267278e-1, -4.01277197e-1,
      -4.12156978e-2, -1.40398554e-2, -4.49399067e-1, 1.40400887e-1,
      -2.47788788, -1.80096279e-1, -2.61276871e-1,
    ];
    this.intercept_ = -3.81462245;
  }

  predictProbability(features) {
    let z = this.intercept_;
    for (let i = 0; i < this.coef_.length; i++) {
      z += this.coef_[i] * features[i];
    }
    return 1 / (1 + Math.exp(-z));
  }

  predictScore(features) {
    return this.predictProbability(features) * 1000;
  }
}

const LogisticRegression = () => {
  return <div>LogisticRegression</div>;
};

export default LogisticRegression;
