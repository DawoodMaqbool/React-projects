import React, { useState, useEffect } from 'react';
import API from '../Api'

const Data = () => {
    const users = [
        { id: 1, name: "Alice Johnson", age: 25 },
        { id: 2, name: "Bob Smith", age: 30 },
        { id: 3, name: "Charlie Brown", age: 28 }
    ];
    

    const [data, setData] = useState([])

    // useEffect(() => {

    //     const getData = async () => {
    //         const fetchData = await API();
    //         setData(fetchData?.directors)
    //         console.log("Fetch Data", fetchData?.directors)
    //         console.log("Data", data)

    //     }
    //     getData()

    // }, [])

    // useEffect(() => {
    //              async function getData(){
    //                 console.log('inside getData')
    //                 const apiData = await API()
    //                 // console.log("API DATA: ", apiData?.interests)
    //                 setData(apiData?.directors)
    //                 console.log(data)
    //                 // setLoading(false)
    //             }
    //             getData()
    //         }, [])

    // useEffect(() => {
    //     console.log("DATA:", data)
    // }, [data])

    // useEffect(() => {
    //     const getData = async () => {
    //         const fetchData = await API();
    //         console.log("Fetch Data", fetchData?.directors);
    //         setData(fetchData?.directors || []);
    //     };
    //     getData();
    // }, []);

    const tasksList = users.map((user) => (
        <li key = {user.id}>
            {user.name} - {user.age}
        </li>
    ))


    return (
        <div>
            Array is: {tasksList}
        </div>
    )
}


// function Data() {
//     // const [button, setButton] = useState()
//     const [data, setData] = useState(null)
//     const [loading, setLoading] = useState(true)

//     useEffect(() => {
//          async function getData(){
//             console.log('inside getData')
//             const apiData = await API()
//             // console.log("API DATA: ", apiData?.interests)
//             setData(apiData?.directors)
//             // console.log(data)
//             setLoading(false)
//         }
//         getData()
//     }, [])

//     const directorsList = data?.map((director) => (
//         <li key={data.id} >
//             {director.fullName}
//         </li>
//     ))

//   return (
//     <div>Array: {directorsList}</div>
//   )
// }

export default Data