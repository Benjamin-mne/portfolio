import React from 'react'
import { BiCheck } from 'react-icons/bi'

export const ServiceArticle = ({h3, aP}) => {
  return (
    <article className="service">
    <div className="service__head">
      <h3>{h3}</h3>
    </div>
    <ul className="service__list">
        {
          aP?.map(p => {
            if (p === 'Desktop Version'){
              return <li><BiCheck className='service__list-icon'/> <p>{p} <small><a href='https://www.electronjs.org/docs/latest' target='_blank'>(ElectronJS)</a></small></p></li>
            }
            else {
              return <li><BiCheck className='service__list-icon'/><p>{p}</p></li>
            }
          })
        }
    </ul>
  </article>
  )
}
