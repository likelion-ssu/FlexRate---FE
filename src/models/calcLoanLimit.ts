type InputData = { [key: number]: number };

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

  predict(data: InputData): number {
    if (this.feature === -2) {
      return this.value[0][0];
    }
    if (data[this.feature] <= this.threshold) {
      return this.left!.predict(data);
    } else {
      return this.right!.predict(data);
    }
  }
}
