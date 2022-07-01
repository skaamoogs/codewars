// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage){
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }
  
  // returns the number of items within the entire collection
  PaginationHelper.prototype.itemCount = function() {
    return this.collection.length;
  }
  
  // returns the number of pages
  PaginationHelper.prototype.pageCount = function() {
    return Math.ceil(this.collection.length / this.itemsPerPage);
  }
  
  // returns the number of items on the current page. page_index is zero based.
  // this method should return -1 for pageIndex values that are out of range
  PaginationHelper.prototype.pageItemCount = function(pageIndex) {
    if (pageIndex >= this.pageCount() || pageIndex < 0) {
        return -1;
    } else if (pageIndex < this.pageCount() - 1 || this.collection.length % this.itemsPerPage === 0) {
        return this.itemsPerPage;
    } else {
        return this.collection.length % this.itemsPerPage;
    }
  }
  
  // determines what page an item is on. Zero based indexes
  // this method should return -1 for itemIndex values that are out of range
  PaginationHelper.prototype.pageIndex = function(itemIndex) {
    if (itemIndex >= this.itemCount() || itemIndex < 0) {
        return -1;
    } else if (itemIndex === 0) {
        return 0;        
    } else {
        return Math.ceil(itemIndex / this.itemsPerPage) - 1; 
    }
  }

  let book = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4);
  console.log(book.itemCount());
  console.log(book.pageCount());
  console.log(book.pageItemCount(0));
  console.log(book.pageItemCount(1));
  console.log(book.pageItemCount(2));
  console.log(book.pageIndex(5));
  console.log(book.pageIndex(2));
  console.log(book.pageIndex(20));
  console.log(book.pageIndex(-10));
  console.log(book.pageIndex(0));