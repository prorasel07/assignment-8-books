import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaUserFriends } from "react-icons/fa";
import { MdOutlineContactPage } from "react-icons/md";
import { Link } from "react-router-dom";


const ListedCard = ({book}) => {
    const tags = ["item2", "item3"]
  return (
    <div className="card card-compact p-5 flex-row border w-full bg-base-100 rounded-md">
      <figure className="bg-[#F3F3F3] p-6 w-[230px] rounded-xl">
        <img
          className="max-w-[190px]"
          src={book.image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{ book.bookName}</h2>
        <span>By: { book.author}</span>
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold">Tag - </span>

          {book.tags.map((tag) => (
            <span
              key={tag}
              className=" bg-[#23BE0A]/5 text-[#23BE0A] px-4 py-1.5 rounded-3xl"
            >
              #{tag}
            </span>
          ))}
          <div className="flex justify-center items-center">
            <div className="text-lg">
            < CiLocationOn />
            </div>
            <h2 className="mx-2">Year of Publishing: { book.yearOfPublishing}</h2>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <FaUserFriends />
          <h2>Publisher: Scribner</h2>
          <div className="flex items-center gap-2">
            <MdOutlineContactPage />
            <h2>Page { book.totalPages}</h2>
          </div>
        </div >
          <div className="flex gap-5 mt-4 ">
          <button className="text-[#328EFF] px-3 py-2 rounded-full bg-[#328EFF]/10">Category: { book.category}</button>
          <button className="text-[#FFAC33] px-3 py-2 rounded-full bg-[#FFAC33]/10">Rating: 4.5</button>
          <Link to={`/book/${book.bookId}`} className="text-white px-3 py-2 rounded-full bg-[#23BE0A]">View Details</Link>
            </div>
      </div>
    </div>
  );
};

export default ListedCard;
