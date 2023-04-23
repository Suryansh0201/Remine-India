import React from 'react'
import './footer.css'
import AppStore from '../../images/appstore.png'
import PlayStore from '../../images/play.png'
import Pic from '../../images/logo.jpg'
const footer = () => {
  return (
    <div>
        <div class="footer">
    <div class="small-container">
        <div class="row">
            <div class="footer-col-1">
                <h3>Download our App</h3>
                <p>Download App for android and ios phones</p>
                <div class="app-logo">
                    <img src={AppStore} alt=""/>
                    <img src={PlayStore}alt=""/>
                </div>
            </div>
            
            
            <div class="footer-col-4">
                <h3>Follow us on</h3>
                <ul>
                    <li><a href="facebook.html">Facebook</a></li>
                    <li><a href="twitter.html">Twitter</a></li>
                    <li><a href="instagram.html">Instagram</a></li>
                    <li><a href="youtube.html">Youtube</a></li>
                </ul>
            </div>
            <div class="footer-col-3">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="coupons.html">Why Recycle?</a></li>
                    <li><a href="blogpost.html">Recycling Process</a></li>
                    <li><a href="returnpolicy.html">Accepted Items</a></li>
                    <li><a href="affiliate.html">Find a Recycling Center</a></li>
                    <li><a href="affiliate.html">Tips for Responsible Recycling</a></li>
                    <li><a href="affiliate.html">Contact Us</a></li>
                    <li><a href="affiliate.html">FAQs</a></li>
                    
                </ul>
            </div>
            <div className='footer-col-4'>
                <img className='pic-footer' src={Pic} alt=''/>
                <p>Remine India is a startup recognized <br/>by the government of India (DPIIT)<br/> and is working for responsible<br/> recycling of e-waste and Li battery<br/> waste in India.</p>
            </div>
        </div>
        <hr/>
        <p class="copyright">Copyright &copy; 2022-23 Remine India Pvt Ltd</p>

    </div>
</div>
    </div>
  )
}

export default footer