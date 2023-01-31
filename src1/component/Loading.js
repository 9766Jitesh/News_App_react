import React from 'react'
import Spinner from './Spinner.gif'
export default function Loading() {
  return (
    <div>
      <div className='container text-center'>
                 <img src={Spinner} alt="Spinner"/>
                </div>
    </div>
  )
}
