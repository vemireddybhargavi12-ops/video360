import React from 'react'
import Layout from '../Pages/Layout'
import { Col, Container, Dropdown, DropdownButton, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown } from '@fortawesome/free-solid-svg-icons';

const Subscription = () => {
 
      const ChannelData = [
    {
      id: 1,
      name: "Tech Guru",
      image: "Images/channel1.png",
      subscribe:"Subscribe 1.4M",
      title: "channel name",
      subscribers: "1.2M",
   
    },
    {
      id: 2,
      name: "Travel Vlogs",
      image: "Images/channel2.png",
      subscribe:"Subscribe 1.4M",
      title: "channel name",
      subscribers: "800K",
   
    },
    {
      id: 3,
      name: "Foodie's Paradise",
      image: "Images/channel3.png",
      subscribe:"Subscribe 1.4M",
      title: "channel name",
      subscribers: "500K",
     
    },
    {
      id: 4,
      name: "Fitness Freak",
      image: "Images/channel4.png",
      subscribe:"Subscribe 1.4M",
      title: "channel name",
      subscribers: "300K",
    
    },
      {
      id: 5,
      name: "Fitness Freak",
      image: "Images/channel5.png",
      subscribe:"Subscribe 1.4M",
      title: "channel name",
      subscribers: "300K",
    
    },
      {
      id: 6,
      name: "Fitness Freak",
      image: "Images/channel6.png",
      subscribe:"Subscribe 1.4M",
      title: "channel name",
      subscribers: "300K",
    
    },
      {
      id: 7,
      name: "Fitness Freak",
      image: "Images/channel7.png",
      subscribe:"Subscribe 1.4M",
      title: "channel name",
      subscribers: "300K",
    
    },
      {
      id: 8,
      name: "Fitness Freak",
      image: "Images/channel1.png",
      subscribe:"Subscribe 1.4M",
      title: "channel name",
      subscribers: "300K",
    
    },
      {
      id: 9,
      name: "Fitness Freak",
      image: "Images/channel2.png",
      subscribe:"Subscribe 1.4M",
      title: "channel name",
      subscribers: "300K",
    
    },
      {
      id: 10,
      name: "Fitness Freak",
      image: "Images/channel3.png",
      subscribe:"Subscribe 1.4M",
      title: "channel name",
      subscribers: "300K",
    
    },
      {
      id: 11,
      name: "Fitness Freak",
      image: "Images/channel4.png",
      subscribe:"Subscribe 1.4M",
      title: "channel name",
      subscribers: "300K",
    
    },
      {
      id: 12,
      name: "Fitness Freak",
      image: "Images/channel5.png",
      subscribe:"Subscribe 1.4M",
      title: "channel name",
      subscribers: "300K",
    
    },
      
    
  ];

  return (

    
    <Layout>

       <Container>
      <Row className="my-3">
        {ChannelData.map((channel) => (
          <Col lg={3} md={6} sm={12} key={channel.id} className="mb-4 ">
            <div className="img-card justify-content-center text-center" style={{backgroundColor:"#1c1c1c"}}>
              <img src={channel.image} alt={channel.title} width="50%" className='mt-4 channel-img' />
              <div className=" mt-2 channel-content p-2 channel-text justify-content-center text-center">
                <button className='sub-button btn-sm d-felx'>{channel.subscribe} </button><span className='ps-2'><FontAwesomeIcon className=' fs-4' style={{color:"yellow"}} icon={faCrown} /></span>

                <h5 className='text-light mt-1 mb-0' style={{fontSize:"14px ",fontWeight:"normal"}}> {channel.title}</h5>
               
                <p className="text-secondary " style={{fontSize:"14px "}}>{channel.subscribers} subscribers</p>
                
              
                </div>
              
           
            </div>

            
          </Col>

          
        ))}
      <div>
  <nav>
    <ul className="pagination justify-content-center pagination-sm mb-4 ">
      <li className="page-item ">
        <a className="page-link text-secondary" href="#" aria-label="Previous">Previous</a>
      </li>
      <li className="page-item active">
        <a className="page-link" href="#">1</a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#">2</a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#">3</a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#" aria-label="Next">Next</a>
      </li>
    </ul>
  </nav>
</div>


              

                    
      </Row>
    </Container>


      
    </Layout>
  );
};


export default Subscription
