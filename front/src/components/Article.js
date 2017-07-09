import React from 'react'

export default function Movie({
  title,
  by,
  comments
}){
  return(
    <article>
      <h2> {title} </h2>
      <small>Written by {by}</small>

    </article>
  )
}