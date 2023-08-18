import React from 'react'

const ServiceList = (props) => {
    return (
        <div className='col-md-12 col-lg-6 col-xl-4 mt-4'>
            <div className="service-bottom">
                <div className="service-item">
                    <div className="w-100 d-flex justify-content-center service-img" style={{"marginTop" : '-70px',"width" : "80px"}}><img src={props.imgSrc}/></div>
                    <h2 className='mt-4'>{props.title}</h2>
                    <p className = 'text-center'>{props.text}</p>
                </div>
            </div>
        </div>
    )
}

export default ServiceList