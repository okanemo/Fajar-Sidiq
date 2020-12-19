import OrderBy from './OrderBy';

class CharacterCollection extends OrderBy {
  public collection: string;
  public length: number;

  constructor(data: string) {
    super();
    this.collection = data;
    this.length = data.length;
  }

  // TODO

}

export default CharacterCollection;
