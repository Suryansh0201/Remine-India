import React from 'react'
import Pic from '../../images/banner2.png'
import './midsec.css'
import Recycle from '../../images/recycle-icon.png'
import Reuse from '../../images/reuse-icon.png'
import Data from '../../images/Data-icon.png'
const midsec = () => {
  return (
    <div className='main-mid'>
    <div className='top-mid'>
        <div className='top-mid-l'>
            <div className='pic'>
                <img className='pic-mid' src={Pic} alt=''/>
            </div>
        </div>
        <div className='top-mid-r'>
            <p className='para-1'>REMINE INDIA PVT LTD</p>
            <h1>Welcome to Recycle and Recharge!</h1>
            <h2>Join us in protecting the environment by recycling e-waste and Li batteries responsibly.</h2>
            <p className='para-2'>Together, we can make a difference.</p>
            <button className='button'>Submit an Enquiry</button>
        </div>
        </div>
        <div className='mid-2'>
            <h1 className='mid2-head'>E-waste Recycling Services</h1>
            <div className='mid2-para1'>
                <p>The scope of services to effectively deal with customer's demand of disposing of retiring IT assets can vary depending
on many factors from logistics to recycling services.</p>
            </div>


            <div className='col'>
                <div className='col-1'>
                <img className='pic-col' src={Recycle} alt=''/>
                    <h5 className='col-head'>WEEE Recycling</h5>
                    <p className='para-col'>Eco cleansers<br/> offer Waste Electrical <br/> and Electronic <br/>Equipment recycling <br/>(WEEE)</p>
                    <button className='btn'>Know More</button>
                </div>

                <div className='col-1'>
                <img className='pic-col' src={Reuse} alt=''/>
                    <h5 className='col-head'>Reverse Logistics</h5>
                    <p className='para-col'>Reverse logistics is<br/> for all operations <br/>related to the reuse<br/>of products and <br/>materials</p>
                    <button className='btn'>Know More</button>
                </div>

                <div className='col-1'>
                <img className='pic-col' src={Data} alt=''/>
                    <h5 className='col-head'>Data Destruction</h5>
                    <p className='para-col'>We do Data<br/> Destruction by <br/>Physical destruction <br/>by shredding</p>
                    <button className='btn'>Know More</button>
                </div>

                <div className='col-1'>
                <img className='pic-col' src={Data} alt=''/>
                    <h5 className='col-head'>WEEE Recycling</h5>
                    <p className='para-col'>Eco cleansers<br/> offer Waste Electrical <br/> and Electronic <br/>Equipment recycling <br/>(WEEE)</p>
                    <button className='btn'>Know More</button>
                </div>

                <div className='col-1'>
                <img className='pic-col' src={Recycle} alt=''/>
                    <h5 className='col-head'>WEEE Recycling</h5>
                    <p className='para-col'>Remine India<br/> offer Waste Electrical <br/> and Electronic <br/>Equipment recycling <br/>(WEEE)</p>
                    <button className='btn'>Know More</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default midsec