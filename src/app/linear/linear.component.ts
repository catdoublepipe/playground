import { Component, OnInit } from "@angular/core";

interface LinearTrainingData {
  x: number;
  y: number;
}

@Component({
  selector: "app-linear",
  templateUrl: "./linear.component.html",
  styleUrls: ["./linear.component.css"]
})
export class LinearComponent implements OnInit {
  theta = [5, 2];
  trainingSet: LinearTrainingData[];

  constructor() {}

  ngOnInit() {
    this.loadTrainingSet();
  }

  getHypothesis(x: number): number {
    return this.theta[0] + this.theta[1] * x;
  }

  getCost(): number {
    const summedError: number = this.trainingSet
      .map(data => this.getSquaredDiff(this.getHypothesis(data.x), data.y))
      .reduce((partialSum, nextValue) => partialSum + nextValue);

    return summedError / (2 * this.trainingSet.length);
  }

  getSquaredDiff(actual: number, expected: number): number {
    return Math.pow(actual - expected, 2);
  }

  updateThetaByGradientDescent(learningRate: number): void {
    const summedErrors: number[] = this.trainingSet
      .map(data => {
        const diff: number = this.getHypothesis(data.x) - data.y;
        return [diff, diff * data.y];
      })
      .reduce((partialSum, nextValue) => [
        partialSum[0] + nextValue[0],
        partialSum[1] + nextValue[1]
      ]);

    this.theta = [
      this.theta[0] - (learningRate * summedErrors[0]) / this.trainingSet.length,
      this.theta[1] - (learningRate * summedErrors[1]) / this.trainingSet.length
    ];
  }

  loadTrainingSet(): void {
    this.trainingSet = [];

    for (let i = 0; i < 100; i++) {
      this.trainingSet[i] = {
        x: this.getRandomInteger(10000),
        y: this.getRandomInteger(1000)
      };
    }
  }

  getRandomInteger(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
  }
}
