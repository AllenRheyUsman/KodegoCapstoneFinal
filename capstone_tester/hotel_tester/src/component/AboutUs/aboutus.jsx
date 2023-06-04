import React from 'react'
import Aboutpix from './aboutpix'
import Abouttext from './abouttext'

export default function Aboutus() {
  return (
    <div className='col'>

<div className='row mt-5 aboutus-row'>
<div className='col-3 text-center'><Aboutpix/></div>
<div className='col-9 text-center '><Abouttext/></div>
</div>
    </div>
    
  )
}

