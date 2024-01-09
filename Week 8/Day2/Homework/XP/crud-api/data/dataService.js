import axios from "axios";

export const fetchPosts = async() =>{
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const data = await res;
    console.log(data);
    console.log("Data is fetched");
    return data
}

// console.log(fetchPosts());