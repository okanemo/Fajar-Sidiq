import OrderBy from './OrderBy';

class NumberCollection extends OrderBy {
  public collection: number[];
  public length: number;

  constructor(data: number[]) {
    super();
    this.collection = data;
    this.length = data.length;
  }

  // TODO
  ascending() {
    this.collection.sort((a, b) => a - b);
  }

  descending() {
    this.collection.sort((a, b) => b - a);
  }
}

export default NumberCollection;
