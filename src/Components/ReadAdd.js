
import toast from 'react-hot-toast';
export let getStoredItems=()=>{
    let item=[];
    let getItem=localStorage.getItem('read');
    if(getItem){
        item=JSON.parse(getItem);
    }
    return item;
}

export let setReadItemOnLocalStorage=(read)=>{
    let storedReadData=getStoredItems();
    let findDouble=storedReadData.find(storedRead=>storedRead.bookId === read.bookId);
    if(findDouble){
        return toast.error('already have read list');
    }
    storedReadData.push(read);
    localStorage.setItem('read',JSON.stringify(storedReadData));
    toast.success('Book Added To  Read List')
}