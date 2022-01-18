import React, {useState, useEffect} from 'react'
import Likebtn from './Likebtn'

const Cards = (props) => {






    return (
        <div className="mx-auto w-50">           
            <img src={props.img} className=" mb-3 rounded-lg" alt="..."/>
             <div className="w-30 text-center  px-4">
             <h5 className="font-bold text-sm mb-4">{props.title}</h5>
             <p className="text-xs text-justify ">{props.desc}.</p>
             <a href="#" className="btn btn-primary">Go somewhere</a>
                     </div>
           
           
        </div>
    )
}

export default Cards;
