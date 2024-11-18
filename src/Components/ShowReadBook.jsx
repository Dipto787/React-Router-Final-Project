import { NavLink } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { FaUserFriends } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
const ShowReadBook = ({ book }) => {
    let { author, bookName, category, image, publisher, rating, review, tags, totalPages, yearOfPublishing, bookId } = book;
    return (
        <div className="border mt-5 p-5 rounded-xl">
            <div className="card gap-5 flex flex-col md:flex-row card-side  ">
                <figure className="bg-base-200 p-14  rounded-xl">
                    <img
                        src={image}
                        alt="Movie" />
                </figure>
                <div className="space-y-6">
                    <h2 className="card-title font-bold">{bookName}</h2>
                    <p>By: {author}</p>
                    <div className=" flex flex-col md:flex-row gap-4">
                            <span className="font-bold">Tag</span>
                            {
                                tags.map(tag => (
                                    <NavLink className='flex bg-[#23BE0A] bg-opacity-10 px-2 p-1 rounded-full text-sm text-[#23BE0A]'  >
                                        #{tag}
                                    </NavLink>
                                ))
                            }
                            <div className="flex gap-2 items-center">
                            <CiLocationOn size={20} />
                            <div>
                            Year of Publishing: {yearOfPublishing}
                            </div>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <div className="flex items-center gap-2">
                            <FaUserFriends size={20} />
                            <span>Publisher :</span>
                            {publisher}
                            </div>

                            <div className="flex items-center gap-2">
                            <IoDocumentTextOutline  size={20} />
                            <span>Page :</span>
                            {totalPages}
                            </div>

                        </div>
                        <div>
                            <hr />
                            <hr />
                        </div>
                        <div className=" hidden md:flex space-x-5">
                            <span className="bg-[#328eff2a] text-[#328EFF] p-3 px-5 font-semibold rounded-full">Category : {category}</span>

                            <span className="bg-[#ffad333c] text-[#FFAC33] px-5 p-3 font-semibold rounded-full">Rating : {rating}</span>

                            <span className="bg-[#23BE0A] text-[#fff] p-3 px-5 font-semibold rounded-full">View Details </span>
                        </div>
                   
                </div>
            </div>
        </div>
    );
};

export default ShowReadBook;