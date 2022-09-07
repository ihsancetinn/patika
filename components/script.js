import axios from "axios";


async function getData(userID) {
    let baseURL = "https://jsonplaceholder.typicode.com/users/" + userID
    const data = await axios(baseURL).then(res => res.data);
   
    baseURL = "https://jsonplaceholder.typicode.com/posts?userId=" + userID;
    const dataPost = await axios(baseURL,{
        params: {
          _limit: 1
         }
      }).then(res => res.data);
    

    return {
        data,
        dataPost
    };
}

module.exports = getData;