import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const getStoredBook = () => {
  const storedBookSRT = localStorage.getItem("readList");
  if (storedBookSRT) {
    const storedBookData = JSON.parse(storedBookSRT);
    return storedBookData;
  } else {
    return [];
  }
};

const addToStoredDB = (newId) => {
  const storedBookData = getStoredBook();
  if (storedBookData.includes(newId)) {
    // alert("This Book is already exits on your wish list.");
    Swal.fire({
      title: "This Book is already exits on your wish list!",
    //   text: "Modal with a custom image.",
    //   imageUrl: "https://unsplash.it/400/200",
    //   imageWidth: 400,
    //   imageHeight: 200,
    //   imageAlt: "Custom image",
    });
    return;
  } else {
    storedBookData.push(newId);
    const newData = JSON.stringify(storedBookData);
    localStorage.setItem("readList", newData);
  }
};

export { addToStoredDB, getStoredBook };
