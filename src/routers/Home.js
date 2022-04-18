import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./Home.css"
import {add} from "../store/cartSlice"
const Home = () => {

const [list,setList]=useState([])
const dispatch=useDispatch()

  //login status
  const logins=useSelector((state)=>state.login)
  console.log(logins.isAuth);


 useEffect(()=>{
  fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
  .then(res=>res.json())
  .then(json=>setList(json.categories))
 
 },[])
 
const addData=(ele)=>{
  dispatch(add(ele))
}

  return (
 <div className='main_food_container'>
 
        {
          list.map((ele)=>{
            return(
              <div className='meal_container'>
                <p>{ele.strCategory}</p>
                <img src={ele.strCategoryThumb} alt="" />
                <button className='add' onClick={()=>addData(ele)}>Add</button>
                {/* <p>{ele.strCategoryDescription}</p> */}
              </div>
            )
          })
        }
         
      </div>
   )
}

export default Home