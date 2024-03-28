import { toast } from "react-toastify";

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
      toast.warning("Already Added Wishlist");
    }
    if (name === "read") {
      toast.warning("Book already read!");
    }
    return;
  }

  bookIds.push(id);
  localStorage.setItem(name, JSON.stringify(bookIds));

  if (name === "wishlists") {
    const booksId = localStorage.getItem("read");
    const findBookId = JSON.parse(booksId)?.find((bookId) => bookId === id);

    if (findBookId) {
      toast.warning("Book already read!");
      return;
    }
    toast.success("Book wishlist add successfully");
  }
  if (name === "read") {
    toast.success("Book read");
  }
};
