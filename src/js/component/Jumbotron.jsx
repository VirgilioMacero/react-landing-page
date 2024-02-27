import React from 'react'

export default function Jumbotron() {
  return (
    <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-thin">A Warm Welcome!</h1>
        <p className="col-md-8 fs-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime quam quas laudantium ea error maiores debitis eaque sequi dicta facere enim, asperiores odio sed, earum hic deleniti ullam qui iusto.</p>
        <button className="btn btn-primary btn-lg" type="button">Call to Action!</button>
      </div>
    </div>
  )
}
