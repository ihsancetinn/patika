import {getData} from "./components/script"

const result = getData(2);


const data = result.then(res => console.log(res));


console.log(data);

