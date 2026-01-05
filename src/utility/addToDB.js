const getStoredBook = () =>{
    const storedBookSRT = localStorage.getItem("readList");
    if(storedBookSRT){
        const storedBookData = JSON.parse(storedBookSRT);
        return storedBookData;
    }else{
        return[];
    }
}

const addToStoredDB = (newId) =>{
    const storedBookData = getStoredBook();
    if(storedBookData.includes(newId)){
        alert("This Book is exits on your wish list.")
        return
    }else{
        storedBookData.push(newId);
        const newData = JSON.stringify(storedBookData);
        localStorage.setItem("readList", newData)
    }

}

export {addToStoredDB};