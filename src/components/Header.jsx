import React from 'react'
import Typed from 'react-typed';
import Mycv from "../fakeCv.pdf"

const Header = () => {
  return (
    <div className="container-wrapper">
      <div className="main-info pt-4 ps-3 d-flex flex-column align-items-center bg-success">
        <h1>Web development and Web services</h1>
        <Typed className='text-type'
          strings={[
            'Microsoft Technology Associate',
            'Microsoft Azure Development Solutions Associate',
            'Microsoft Azure Fundamentals']}
          typeSpeed={40}
          backSpeed={60}
          loop >
        </Typed>
        <a href={Mycv} download className='mycv text-warning '>Download</a>
      </div>

    </div>
  )
}

export default Header