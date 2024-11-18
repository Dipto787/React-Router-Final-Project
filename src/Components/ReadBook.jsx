import { useEffect, useState } from "react";
import { getStoredItems } from "./ReadAdd";
import ShowReadBook from "./ShowReadBook";

const ReadBook = () => {
    let [readBook,setReadBook]=useState([]);
    useEffect(()=>{
        let storedReadBookData=getStoredItems();
        setReadBook(storedReadBookData)
        console.log(storedReadBookData)
    },[])
    return (
        <div className="mt-5 ">
            {
                readBook.map(book=><ShowReadBook key={book.bookId} book={book}></ShowReadBook>)
            }
        </div>
    );
};

export default ReadBook;