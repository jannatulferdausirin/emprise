import axios from 'axios';
import { useEffect, useState } from 'react';

const SelectionApi = () => {
    let [all ,setAll]= useState([]);
    useEffect(()=>{
        async function all (){
            let data= await axios.get("https://restcountries.com/v3.1/all");
            setAll(data.data)
            console.log(data)
          
        }
        all()
    },[])
    return (
        <>
        <div className='absolute top-4 right-10'>
           
       <select className='px-2 py-1 border rounded outline-none w-[15px] h-[5px]'>
          {
           all.map(item =>
               <option key="item"  >{item.name.common}</option>
           )   
          }
       </select>
      
        </div>
       </>
    );
};

export default SelectionApi;