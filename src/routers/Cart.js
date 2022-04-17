import React from 'react'
import { useSelector } from 'react-redux'
import {remove} from "../store/cartSlice"
import { useDispatch } from 'react-redux'

const Cart = () => {
const list=useSelector((state)=>state.cart)
const dispatch=useDispatch()

const removeData=(ele)=>{
  dispatch(remove(ele))
}


  return (
    <div className='main_food_container'>
    
           {
             list.map((ele)=>{
               return(
                 <div className='meal_container'>
                   <p>{ele.strCategory}</p>
                   <img src={ele.strCategoryThumb} alt="" />
                   <button className='add' onClick={()=>removeData(ele)}>Remove</button>
                   {/* <p>{ele.strCategoryDescription}</p> */}
                 </div>
               )
             })
           }
            
         </div>
      )
}

export default Cart