import React, { useState } from 'react'
import {connect} from 'react-redux'
import './output.css'
 function Output(props) {
     
    return (
        <div className="container">
            {props.giphy && props.giphy.length !=0 ? 
                props.giphy[0].map(el=>{
            return(
                <div className='giphy'>
            <iframe src={el.embed_url}></iframe>
            <h4>{el.title}</h4>
            </div>
            )
            
        }) : 
        props.weather && props.weather.length !=0 ?
                    props.weather.map(obj=>{
                        return(
                            <div className='weather'>
                <h4>{obj.name}</h4>
                <p>Temrature: {(obj.main.temp - 273.15).toFixed(1)}°C</p>
                <p>Feels like: {(obj.main.feels_like - 273.15).toFixed(1)}°C</p>
                </div>
                    )})
                : <h2>EMPTY</h2>
            
        

        
    }</div>
    )
}
function mapStateToProps({weather, giphy}){
    return {weather, giphy}
}
export default  connect(mapStateToProps)(Output)