import axios from 'axios';
import { useEffect, useState } from 'react';
// import Container from '../Container';

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
         <div className='absolute bottom-[50px] right-12'>
         <select>
           {
            all.map(item =>
               <option key="item">{item.region}</option>
            )
                // eslint-disable-next-line react/jsx-key
               
           }
            </select>  
         </div>
        </>
    );
};

export default CountriesApi;