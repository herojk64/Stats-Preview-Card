import React from 'react'
import './Body.css'

const Body = () => {
  return (
    <section className='ContentBody'>
          <h1>
            Get <span>insights</span> that help your business grow.
          </h1>

          <p className='mt2'>
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>

          <div className='mt3 Ratings'>
            <div>10k+ <span>companies</span></div>
            <div>314 <span>templates</span></div> 
            <div>12m+ <span>queries</span></div>
            </div>
        </section>
  )
}

export default Body