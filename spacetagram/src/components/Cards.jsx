import React, {useState, useEffect} from 'react'
import Likebtn from './Likebtn'

const Cards = (props) => {

    const [like, setLike] = useState(0)

    


    return (
      <div className="mx-auto w-50">
        <img src={props.img} className=" mb-3 rounded-lg" alt="..." />
        <div className="w-30 text-center  px-4">
          <h5 className="font-bold text-sm mb-4">{props.title}</h5>
          <p className="text-xs text-justify ">{props.desc}.</p>
          <button flex flex flexbox>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 fill-pink-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0.01"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            {like}
          </button>

       
        </div>
      </div>
    );
}

export default Cards;
