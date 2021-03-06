import React from 'react';
import Service from '../Service/Service';
import './Services.css'
import logo1 from '../../images/graphics.jpg'
import logo2 from '../../images/web development.jpg'
import logo3 from '../../images/database.jpg'
import logo4 from '../../images/networking.jpg'


const services= [
  {id:1 , name:'Graphics', price:3000, description:"Learn Photoshop, Illustrator, and InDesign by creating posters, logos, and more.", img:logo1},
  {id:2 , name:'Web Development', price:6000,description:"Online courses for building websites from scratch using popular tools and languages like HTML, CSS, Python, JavaScript, and more.",img:logo2},
  {id:3 , name:'Database', price:5000,description:"Learn Database Programming online at your own pace. Start today with a special offer. Join millions of learners already learning on Udemy", img:logo3},
  {id:4 , name:'Networking', price:4000, description:"Purchase full-access or a single technology subscription to meet specific training needs. Cisco training is an essential tool for developing employees & optimizing your IT teams",img:logo4},
  
  
]
const Services = () => {
  

  

    return (
        <div id ="#services" className='container' >
            <div className='row'>
            <h2 className='text-primary text-center mt-5 mb-5'> our Services:{services.length}</h2>

                <div className='services-container'>

                    {
                        services.map(service=> <Service
                        key={service.id}
                        service={service}
                        
                        >

                        </Service>)
                    }

                </div>
            </div>

            
            
        </div>
    );
};

export default Services;