import React,{useState, useEffect} from 'react';
import axios from 'axios'
import Display from './display';

const url='http://3.17.216.66:4000/restaurants'
const HooksComponent=()=>{

    const [count, setCount]= useState(0)
    const [count1, bbc]= useState(0)
    const [restaurant, setRestaurant]=useState()


    
    

    const Clicked=()=>{
        setCount(count+1)
       
    }
    const Clicked2=()=>{
        bbc(count1+10)
    }

    useEffect(()=>{
       axios.get(url)
       .then((res)=>{
        setRestaurant(res.data)
        
    })
    .catch((error)=>{
        console.log(error)
    })

    },[])

    return(
        <>
        <h1>Hooks App</h1>
        {count}<br/>
        <button className='btn btn-danger' onClick={Clicked}>Counter</button><br/>
        {count1}<br/>
        <button className='btn btn-danger' onClick={Clicked2}>Counter</button><br/>
        <Display myData={restaurant}/>
</>
    )

}
export default HooksComponent