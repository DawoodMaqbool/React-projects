const API_URL = "https://imdb236.p.rapidapi.com/imdb/tt7631058";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "8f687e7047msh70700396d8970bep15e83cjsn280053f24bbf",
    "X-RapidAPI-Host": "imdb236.p.rapidapi.com",
    "Content-Type": "application/json",
  },
};

const api = async () => {
    try{
        const apiData = await fetch(API_URL, options)
        const response = await apiData.json()

        return response

    }catch(error){
        console.log("error", error)
    }
}




































// const api = async () => {
//     try{
//         console.log("Inside API")
//         const data = await fetch(API_URL, options)
//         console.log("Data")
//         const response = await data.json()
//         console.log("response")

//         return response

//     }catch(error){
//         console.log("Errors : ", error)
//     }    
//     // console.log("Response: " ,response)

// }

export default api;