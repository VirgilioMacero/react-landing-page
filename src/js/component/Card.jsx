import React from 'react'

export default function Card() {
  return (
    <div className='col mt-4'>
      <div className="card" style={{ width: "18rem" }}>
        <img src="https://via.placeholder.com/500x325" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat repellendus illo </p>
          <a href="#" className="btn btn-primary">Find out More</a>
        </div>
      </div>
    </div>
  )
}
