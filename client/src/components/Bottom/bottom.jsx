import React from 'react'
import Reuse from '../../images/reuse-icon.png'
import Reduce from '../../images/reduce-icon.png'
import Recycle from '../../images/recycle-icon.png'
import './bottom.css'
const bottom = () => {
  return (
    <div className='main-bottom'>
    <div className='bottom-1'>
        <div className='bottom-head'>
            <h1>How it Works</h1>
        </div>
        <p className='p-bottom'>With so many years of experience in the Used IT Asset management services, we can be able to make the<br/>
proper combination of 3R's, i.e. Reuse, Reduce, Recycle.</p>
<div className='col'>
                <div className='col-1'>
                <img className='pic-col' src={Reuse} alt=''/>
                    <h5 className='col-head'>Reuse</h5>
                    <p className='para-col'>Reuse is one of the viable options in the<br/> recycling services, which can be used in <br/> various ways... </p>
                    
                </div>

                <div className='col-1'>
                <img className='pic-col' src={Reduce} alt=''/>
                    <h5 className='col-head'>Reduce</h5>
                    <p className='para-col'>To make our planet greener we need to<br/> reduce the use of IT asset, refurbishment of IT <br/> various ways... </p>
                    
                </div>

                <div className='col-1'>
                <img className='pic-col' src={Recycle} alt=''/>
                    <h5 className='col-head'>Recycle</h5>
                    <p className='para-col'>This is the last option to be utilized if the IT<br/> asset is not working to the original <br/>manufacturing products.</p>
                    
                </div>
                </div>
                </div>
                <div className='bottom-2'>
                    <p className='bottom2-head'>Send Us <b>Message</b></p>
                    <p>Get in touch with us about anything related to our company or services</p>
                    <form className='c-right'>
                    <div className='input'>
                <input type="text" name='user_name' className='user' placeholder='Enter Your Name' />
                <input type="email" name="user_email" className='user' placeholder='Enter Your Email'/>
                </div>
                <textarea name="message" className='user' placeholder='Message' style={{width:'43%'}}/>
                <input type="submit" value="Send" className='button btn2' />
                <div className="blurEffect c-blur" style={{background:"var(--purple)"}}></div>
                
            </form>
                </div>
                
    </div>
  )
}

export default bottom