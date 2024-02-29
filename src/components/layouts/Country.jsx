import axios from 'axios';
import { useEffect, useState } from 'react';


const CountriesApi = () => {
    let [all ,setAll]= useState([]);
    useEffect(()=>{
        async function all (){
            let data= await axios.get("https://restcountries.com/v3.1/all");
            setAll(data.data)
            // console.log(data)
          
        }
        all()
    },[])

    return (
        <>
         <div className='absolute bottom-[50px] -left-14'>
            
        <select className='px-2 py-1 border rounded outline-none'>
           {
            all.map(item =>
                <option key="item"  >{item.region}</option>
            )   
           }
        </select>
       
         </div>
        </>
    );
};

export default CountriesApi;