import { apiUrl,filterData } from './data';
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbaar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import { useEffect } from 'react';
import { toast } from "react-toastify";


function App() {
  const [courses, setCourses]=useState([]);

    useEffect(()=>
    {
        const fetchdata=async()=>{
            try{
                const result=await fetch(apiUrl);
                const output=await result.json();
                setCourses(output.data);
            }
            catch(error){
                toast.error("kuch to gadbad h")
            }
        }
        fetchdata();

    },[]);

  return (

    <div className="App">

      <Navbar ></Navbar>
      
      
      <Filter filterData={filterData}/>

      <Cards courses={courses}></Cards>
       

    </div>
  );
}

export default App;
