import React, { useEffect } from 'react'

export const PortfolioArticle = ({title, IMG, tags, gitRef, videoRef}) => {
  return (
    <article className='portfolio__item'>
    <div className="portafolio__item-img">
      <img src={IMG} alt="img-item"/>
    </div>
      <h3>{title}</h3>
      <div style={{marginBottom:'1rem', display:'flex', justifyContent:'space-between', width:'100%'}}>
        {
          tags?.map((tag, idx) => {
            return <small key={idx}><a>{'#'+tag}</a></small>;
          })
        }<a>...</a>
      </div>
      <div className="portfolio__item-cta">
        <a href={gitRef} className='btn' target='_blank'>GitHub</a>
        <a href={videoRef} className='btn btn-primary' target='_blank'>Preview</a>
      </div>
    </article>
  )
}
