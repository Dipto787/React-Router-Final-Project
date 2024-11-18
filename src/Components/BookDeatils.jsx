import { NavLink, useLoaderData, useParams } from "react-router-dom";
import toast from 'react-hot-toast';
import { setReadItemOnLocalStorage } from "./ReadAdd";
import { setWishDataOnLocalStorage } from "./WishList";
import { useState } from "react";
const BookDetails = () => {
    let bookDetailData = useLoaderData();
    let params = useParams().id;
    let idInt = parseInt(params);
    let findBookDetail = bookDetailData.find(detail => detail.bookId === idInt);
    let { author, bookId, category, image, publisher, rating, review, tags, bookName,totalPages,yearOfPublishing} = findBookDetail;
    

    let [read,setRead]=useState(0);
    let handleReadToast=(findBookDetail)=>{
        setRead(1);
         setReadItemOnLocalStorage(findBookDetail)
    }
    let handleWishList=(wishData)=>{
        setWishDataOnLocalStorage(wishData);
    }
   
    return (
        <div className="max-w-6xl mx-auto">
            <div className="hero    ">
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                        <img
                            src={image} 
                            className="max-w-sm rounded-lg   md:w-[800px] py-16 px-20 bg-base-200" />
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold">{bookName}</h1>
                        <p className="mt-5 mb-3">
                            By: {author}
                        </p>
                        <div>
                            <hr />
                            <hr />
                        </div>
                        <p className="mt-2 mb-3">{category}</p>
                        <div>
                            <hr />
                            <hr />
                        </div>

                        <div className="mt-3">
                            <span className="font-bold">Review:</span>
                            <div className="w-[320px] lg:w-full">
                                {review}

                                {review}

                                {review}

                                {review}
                                {review}

                                {review}

                                {review}
                                {review}
                            </div>

                        </div>

                        <div className="mt-4 flex gap-4">
                            <span className="font-bold">Tag</span>
                            {
                                tags.map(tag => (
                                    <NavLink className='flex bg-[#23BE0A] bg-opacity-10 px-2 p-1 rounded-full text-sm text-[#23BE0A]'  >
                                        #{tag}
                                    </NavLink>
                                ))
                            }
                        </div>
                        <div className="mt-4">
                            <hr />
                            <hr />
                        </div>
                        <div className="mt-4 flex gap-20">
                          <h4 className="text-[#BEBEBE]">Number of Pages:</h4>
                          <p className="font-bold">{totalPages}</p>
                        </div>

                        <div className="mt-4 flex gap-[140px]">
                          <h4 className="text-[#857c7c]">Publisher:</h4>
                          <p className="font-bold">{publisher}</p>
                        </div>

                        <div className="mt-4 flex gap-20">
                          <h4 className="text-[#857c7c]">Year of Publishing:</h4>
                          <p className="font-bold">{yearOfPublishing}</p>
                        </div>

                        <div className="mt-4 flex gap-44">
                          <h4 className="text-[#857c7c]">Rating:</h4>
                          <p className="font-bold">{rating}</p>
                        </div>

                        <div >
                        <button onClick={()=>handleReadToast(findBookDetail)} className="btn mt-2 border-2 mr-5 font-bold bg-transparent px-6">Read</button>
                        <button onClick={()=>read===1?toast.error('You Have been Already Read This Book'):handleWishList(findBookDetail)}  className="btn mt-2 bg-[#50B1C9] px-8 text-white">Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;