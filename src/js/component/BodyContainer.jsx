import React from 'react'
import Jumbotron from './Jumbotron'
import Card from './Card'

export default function BodyContainer() {
  return (
    <div className='container mt-5 mb-5'>

      <Jumbotron />

      <div className='row mt-4 '>

        <Card />
        <Card />
        <Card />
        <Card />

      </div>

    </div>
  )
}
