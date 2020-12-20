import OrderBy from './OrderBy';

class Node {
  next: Node | null = null;
  data: number;

  constructor(data: number) {
    this.data = data;
  }
}

class LinkedList extends OrderBy {
  head: Node | null = null;

  constructor() {
    super();
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }

    let counter = 1;
    let node = this.head;

    while (node.next) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  add(data: number): void {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;

    while (tail.next) {
      tail = tail.next;
    }

    tail.next = node;
  }
  ascending() {
    this.bubbbleSortAsc();
    console.log("ok")

  }

  descending(){
    this.bubbbleSortDesc();
  }

  private bubbbleSortAsc() {
    if (this.length > 1 && this.head) {
      let wasChanged: boolean
      do {
        let current: Node | null = this.head;
        let previous: Node | null = null;
        let next: Node | null = this.head.next
        wasChanged = false;

        while (next !== null) {
          if (current.data > next.data) {
            wasChanged = true;

            if (previous !== null) {
              let sig = next.next;
              previous.next = next;
              next.next = current;
              current.next = sig;
            } else {
              let sig = next.next;
              this.head = next;
              next.next = current;
              current.next = sig
            }
            previous = next;
            current = next;
          } else {
            previous = current;
            current = next;
            next = next.next;
          }
        }
      } while (wasChanged)
    }
  }

  private bubbbleSortDesc() {
    if (this.length > 1 && this.head) {
      let wasChanged: boolean
      do {
        let current: Node | null = this.head;
        let previous: Node | null = null;
        let next: Node | null = this.head.next
        wasChanged = false;

        while (next !== null) {
          if (current.data < next.data) {
            wasChanged = true;

            if (previous !== null) {
              let sig = next.next;
              previous.next = next;
              next.next = current;
              current.next = sig;
            } else {
              let sig = next.next;
              this.head = next;
              next.next = current;
              current.next = sig
            }
            previous = next;
            current = next;
          } else {
            previous = current;
            current = next;
            next = next.next;
          }
        }
      } while (wasChanged)
    }
  }

  print(): void {
    if (!this.head) {
      return;
    }

    let node: Node | null = this.head;
    let res = [];
    while (node) {
      res.push(node.data);
      node = node.next;
    }

    console.log(res.join(" -> "));
  }
}

export default LinkedList;
