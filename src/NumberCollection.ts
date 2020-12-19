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

}

export default NumberCollection;
