import Data from "../data";
import { AiFillLike } from "react-icons/ai";
import {useState} from 'react'
import './index.css'
const Shorts = () => {
    const [like,setLike] = useState(false)
    console.log(like)
    console.log(Data)
    return( 
        <div className="short-container">
            <div>
              <img src="https://via.placeholder.com/600/810b14" className="image" alt="shorts" />
            </div>
            <div>
                <h1 className="heading">Heading</h1>
                </div>
            <div>
               <button className = {like ? 'like-button': 'button'} onClick={()=> setLike(!like)} ><AiFillLike/></button>
            </div>
            
        </div>
    )
}

export default Shorts