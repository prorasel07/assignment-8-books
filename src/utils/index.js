export const getReadBooks = () => {
  let ids = localStorage.getItem("read");
  if (!ids) {
    ids = [];
  }

  return ids;
};
export const getWishlistBooks = () => {
    let ids = localStorage.getItem("wishlists");
  if (!ids) {
    ids = [];
  }

  return ids;
};

export const setLocalStorage = (name, id) => {
  let bookIds = [];

  const data = localStorage.getItem(name);

  if (data) {
    bookIds = JSON.parse(data);
  }
  const findUnique = bookIds?.find((bookId) => bookId == id);

  if (findUnique) {
    if (name === "wishlists") {
      return {
        success: false,
        message: "Already Added Wishlist",
      };
    }
    if (name === "read") {
      return {
        success: false,
        message: "Book already read!",
      };
    }
  }

  bookIds.push(id);
  localStorage.setItem(name, JSON.stringify(bookIds));

  if (name === "wishlists") {
    const booksId = localStorage.getItem("read");
    const findBookId = JSON.parse(booksId)?.find((bookId) => bookId === id);

    if (findBookId) {
      return {
        success: false,
        message: "Book already read!",
      };
    }
    return {
      success: true,
      message: "Book wishlist add successfully",
    };
  }
  if (name === "read") {
    console.log("first");
    return {
      success: true,
      message: "Book read",
    };
  }
};
