import React from 'react'
import google from '../img/google-icon 1.png';

export default function Reg_goolge() {
  return (
    <div>
        <div className='reg-google'>
            <button>
                <img src={google} alt='google-icon' id='' className='google-icon' />
                <p>Register with Google</p>
            </button>
        </div>

        <div className='reg-facebook'>
            <div>
            <hr className='one' /> 
            <span>OR</span>
            <hr className='two' />
            </div>
        </div>
    </div>
  )
}
