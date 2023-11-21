// 의사결정 트리 노드 클래스
class DecisionTreeNode {
  feature: number;
  threshold: number;
  value: number[][];
  left: DecisionTreeNode | null;
  right: DecisionTreeNode | null;

  constructor(
    feature: number,
    threshold: number,
    value: number[][],
    left: DecisionTreeNode | null = null,
    right: DecisionTreeNode | null = null,
  ) {
    this.feature = feature;
    this.threshold = threshold;
    this.value = value;
    this.left = left;
    this.right = right;
  }

  predict(inputData: Record<number, number>): number {
    if (this.feature === -2) {
      return this.value[0][0];
    }
    // if (inputData[this.feature] <= this.threshold) {
    //   return this.left ? this.left.predict(inputData) : 0;
    // } else {
    //   return this.right ? this.right.predict(inputData) : 0;
    // }
    if (inputData[this.feature] <= this.threshold) {
      return this.left ? this.left.predict(inputData) : this.value[0][0];
    } else {
      return this.right ? this.right.predict(inputData) : this.value[0][0];
    }
  }
}

const thresholds: number[] = [
  7.05e2, 3.05e1, 5.0e-1, 1.625, 5.0e-1, -2.0, -2.0, 2.75e1, -2.0, -2.0,
  -8.54840666e-1, 5.0e-1, -2.0, -2.0, 5.0e-1, -2.0, -2.0, 5.0e-1,
  -8.54840666e-1, 5.05e7, -2.0, -2.0, 1.28082192, -2.0, -2.0, 3.86301368e-1,
  6.55e2, -2.0, -2.0, -8.54840666e-1, -2.0, -2.0, 5.0e-1, 5.0e-1, 5.0e-1,
  8.95e2, -2.0, -2.0, -8.54840666e-1, -2.0, -2.0, 8.55e2, 3.05e1, -2.0, -2.0,
  5.0e-1, -2.0, -2.0, -8.54840666e-1, 5.0e-1, 5.0e5, -2.0, -2.0, 8.85e2, -2.0,
  -2.0, 8.25e2, 2.35e1, -2.0, -2.0, 5.0e-1, -2.0, -2.0,
];
const values: number[][][] = [
  [[3309526.31698147]],
  [[2710561.5463615]],
  [[1913087.93456033]],
  [[1746166.54871432]],
  [[1984318.99641577]],
  [[2304718.87550201]],
  [[1726132.68608414]],
  [[1481315.3961136]],
  [[1235449.73544974]],
  [[1800687.28522337]],
  [[3000000]],
  [[2341176.47058824]],
  [[2013888.88888889]],
  [[4153846.15384615]],
  [[3424242.42424242]],
  [[3649122.80701754]],
  [[2000000]],
  [[2884855.18905873]],
  [[3161001.9472473]],
  [[2708529.41176471]],
  [[2883959.89974937]],
  [[2077927.92792793]],
  [[3292895.51897577]],
  [[3452465.4294032]],
  [[3023216.48216482]],
  [[2603173.52834958]],
  [[2961040.57754543]],
  [[2763601.03626943]],
  [[3229864.78542034]],
  [[2399525.42853095]],
  [[2059207.09441836]],
  [[2526400.23337223]],
  [[3577041.15064544]],
  [[3446810.12153817]],
  [[3806155.1798873]],
  [[3945185.1851852]],
  [[3740389.08246225]],
  [[4424993.19727891]],
  [[3364130.43478261]],
  [[3076405.38400633]],
  [[3503844.67512495]],
  [[3276337.35789196]],
  [[3050663.81289162]],
  [[2722891.56626506]],
  [[3125249.40979362]],
  [[3479307.55496039]],
  [[3688506.3559322]],
  [[3119919.62390052]],
  [[4179242.67551133]],
  [[3748504.27350427]],
  [[3556054.93133583]],
  [[2994771.24183007]],
  [[3688580.24691358]],
  [[4890370.37037037]],
  [[4571428.57142857]],
  [[5491452.99145299]],
  [[4505749.91901523]],
  [[4146424.3498818]],
  [[2800000]],
  [[4208874.45887446]],
  [[4941577.0609319]],
  [[5216966.96696697]],
  [[4246843.43434343]],
];
const leftChildren: number[] = [
  1, 2, 3, 4, 5, -1, -1, 8, -1, -1, 11, 12, -1, -1, 15, -1, -1, 18, 19, 20, -1,
  -1, 23, -1, -1, 26, 27, -1, -1, 30, -1, -1, 33, 34, 35, 36, -1, -1, 39, -1,
  -1, 42, 43, -1, -1, 46, -1, -1, 49, 50, 51, -1, -1, 54, -1, -1, 57, 58, -1,
  -1, 61, -1, -1,
];
const rightChildren: number[] = [
  32, 17, 10, 7, 6, -1, -1, 9, -1, -1, 14, 13, -1, -1, 16, -1, -1, 25, 22, 21,
  -1, -1, 24, -1, -1, 29, 28, -1, -1, 31, -1, -1, 48, 41, 38, 37, -1, -1, 40,
  -1, -1, 45, 44, -1, -1, 47, -1, -1, 56, 53, 52, -1, -1, 55, -1, -1, 60, 59,
  -1, -1, 62, -1, -1,
];

// 노드 배열 초기화
const nodes: DecisionTreeNode[] = [];
for (let i = 0; i < thresholds.length; i++) {
  nodes.push(new DecisionTreeNode(i, thresholds[i], values[i], null, null));
}

// 트리 구축
for (let i = 0; i < nodes.length; i++) {
  if (leftChildren[i] !== -1) {
    nodes[i].left = nodes[leftChildren[i]];
  }
  if (rightChildren[i] !== -1) {
    nodes[i].right = nodes[rightChildren[i]];
  }
}

const tree = nodes[0];

// 예측 함수
function predict(inputData: Record<number, number>): number {
  const res = tree.predict(inputData);

  // 100000 단위로 반올림
  return Math.round(res / 100000) * 100000;
}

export default predict;