import React from 'react'
import Article from './components/Article'

export default function Movie({
  items
}){
  return(
    <div>
    {
      items.map((item) => (
        <Movie key={ item._id } { ...item }/>
      ))
    }
    </div>
  )
}