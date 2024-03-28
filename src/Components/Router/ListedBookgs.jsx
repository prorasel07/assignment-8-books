import React, { useEffect, useState } from "react";
import ReadBy from "../listed-books/ReadBy";
import Wishlist from "../listed-books/Wishlist";
import { useLoaderData } from "react-router-dom";
import { getReadBooks, getWishlistBooks } from "../../utils";

const ListedBookgs = () => {
  const [activeTab, setActiveTab] = useState("readBy");
  const [wishlists, setWishlists] = useState([]);
  const [reads, setReads] = useState([])

  useEffect(() => {
    fetch("/Books.json")
      .then((res) => res.json())
      .then((data) => {
        const readIds = getReadBooks();
        const wishlistIds = getWishlistBooks();

        const filterRead = data.filter((book) => readIds.includes(book.bookId))
        setReads(filterRead);

        const filterWishlist = data.filter((book) => wishlistIds.includes(book.bookId))
        console.log(filterWishlist)
        setWishlists(filterWishlist)

      });
  }, []);



  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold  ml-10 mr-10 text-center bg-[#F3F3F3] p-3 rounded-lg ">
        Books
      </h2>
      <div className="text-center">
        <select className="bg-[#23BE0A] text-white px-4 py-3 rounded  mt-8 outline-0 ">
          <option value="">Short By</option>
          <option value="">Rating</option>
          <option value="">Number of Pages</option>
          <option value="">Published Year</option>
        </select>
      </div>

      <div>
        <div
          role="tablist"
          className="tabs max-w-[230px] tabs-lifted z-10 -mb-[var(--tab-border)] justify-self-start "
        >
          <button
            onClick={() => setActiveTab("readBy")}
            className={activeTab === "readBy" ? "tab tab-active" : "tab"}
          >
            Read By
          </button>
          <button
            onClick={() => setActiveTab("wishlist")}
            className={activeTab === "wishlist" ? "tab tab-active" : "tab"}
          >
            Wishlist
          </button>
        </div>
        <div className="border-t">
          {activeTab === "readBy" && <ReadBy books={reads} />}
          {activeTab === "wishlist" && <Wishlist books={wishlists} />}
        </div>
      </div>
      {/* <div className="border-b">
        <button
          onClick={() => setActiveTab("readBy")}
          className="btn btn-ghost text-lg "
        >
          Read By
        </button>
        <button
          onClick={() => setActiveTab("wishlist")}
          className="btn btn-ghost text-lg"
        >
          WishList Books
        </button>
      </div> */}
    </div>
  );
};

export default ListedBookgs;
