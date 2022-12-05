import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='container-fluid footer'>
                <div className='row'>
                    <div className='col-md-12 footer-banner'>
                        <div className='img-box'>
                            <img src="/images/calenders.svg" alt="" />
                        </div>
                        <h4>To Book A Consult, Contact Us</h4>
                        <button>Let’s Talk</button>
                    </div>
                    <div className='col-md-12  text-center'>
                        <p className='text-light'></p>
                        <p className='text-light'>Contact Us  |  Privacy Policy  |  Terms And Conditions  |  Questions?We Love To Hear From You!</p>
                        <p className='text-light'>© 2022 Onlineable. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer