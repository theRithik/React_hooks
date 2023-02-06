import React from 'react';
import './display.css'

const Display=(props)=>{

    const renderData=({myData})=>{
        if(myData){
          return  myData.map((item)=>{
                return(
                    <div key={item.restaurant_id} id='photo'>
                        <div class="card" style={{width: '18rem',}} >
  <img src={item.restaurant_thumb} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{item.restaurant_name}</h5>
    <p class="card-text">{item.address}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
                    </div>
                )
            })
        }

    }
return(
    <>
    {renderData(props)}
    </>
)
}
export default Display