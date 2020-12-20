abstract class OrderBy {
  abstract length: number;
  // Add additional abstract when needed

  abstract ascending(): void 

  abstract descending(): void 
}

export default OrderBy;
