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
  ascending() {
    this.collection = this.sortAlphabets(this.collection, false)
  }

  descending() {
    this.collection = this.sortAlphabets(this.collection, true)
  }

  sortAlphabets(text: string, isReversed: boolean): string {
    if (!isReversed) {
      return text.split('').sort().join('');
    }
    return text.split('').sort().reverse().join('');
  }
}

export default CharacterCollection;
