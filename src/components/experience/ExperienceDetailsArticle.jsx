import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'

export const ExperienceDetailsArticle = ({h4, small}) => {
  return (
    <article className='experience__details'>
        <BsPatchCheckFill className='experience__details-icon' />
        <div>
            <h4>{h4}</h4>
            <small className='text-light'>{small}</small>
        </div>
  </article>
  )
}
