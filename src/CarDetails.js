import React, { useEffect, useRef } from "react";
import { useState } from "react";

export function CarDetails(initialData){

   const [model, setModel] = useState('')
   const [year, setYear] = useState ('')
   const [color, setColor] = useState('')


   const modelRef = useRef('')
   const yearRef = useRef('')
   const colorRef = useRef('')

   useEffect(()=>{
      modelRef.current.focus()
      yearRef.current.focus()
      colorRef.current.focus()

   },[])

   
   function handleChangeModel(){
      setModel(modelRef.current.value)
   }

   function handleChangeYear(){
      setYear(yearRef.current.value)
   }

   function handleChangeColor(){
      setColor(colorRef.current.value)
   }

   function handleFormReset(e) {
      e.preventDefault()
      modelRef.current.value = initialData.model;
      yearRef.current.value = initialData.year;
      colorRef.current.value = initialData.color;
      console.log(model, year, color)
  }

   return (
   <div>
      <form onSubmit={handleFormReset}> 
         <h1>Car Details</h1>
         <input ref = {modelRef} value = {model} onChange={handleChangeModel} defaultValue={initialData.model}/>
         <input ref = {yearRef} value = {year} onChange={handleChangeYear} defaultValue={initialData.year}/>
         <input ref = {colorRef} value = {color} onChange={handleChangeColor} defaultValue={initialData.color}/>

      </form>
      
   </div>
   )





}