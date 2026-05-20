import axios from "axios";

const apiClient=axios.create({

baseURL:"/",

timeout:10000,

headers:{

"Content-Type":
"application/json"

}

});

apiClient.interceptors.request.use(

(config)=>{

console.log(
"Request:",
config.url
);

return config;

},

(error)=>
Promise.reject(error)

);

apiClient.interceptors.response.use(

(response)=>response,

(error)=>{

console.error(
error
);

return Promise.reject(
error
);

}

);

export default apiClient;