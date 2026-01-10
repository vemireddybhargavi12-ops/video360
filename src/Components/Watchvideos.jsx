import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import '../Styles/Watchvideos.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCalendarDays, faPlayCircle } from '@fortawesome/free-solid-svg-icons';

const Watchvideos = () => {
    const WatchvideosData = [

        {
      id: 1,
  
      description: "Why you need to learn HTML & CSS IN 2025 |  HTML & CSS for Beginners!",
      thumbnail: "/assets//video1.png",
      views: "1M views",
      uploadTime: "2 days ago"
    },
    {
      id: 2,
     
      description: "Exploring the beautiful landscapes of New Zealand.",
      thumbnail: "/assets//video2.png",
      views: "500K views",
      uploadTime: "1 week ago"
    },
    {
      id: 3,
     
      description: "In-depth review of the latest smartphone.",
      thumbnail: "/assets//video3.png",
      views: "300K views",
      uploadTime: "3 days ago"
    },
    {
      id: 4,
     
      description: "Learn to make delicious pasta from scratch.",
      thumbnail: "/assets//video4.png",
      views: "200K views",
      uploadTime: "5 days ago"
    },
    {
      id: 5,
   
        description: "Top plays from the latest esports.",
        thumbnail: "/assets//video5.png",
        views: "800K views",
        uploadTime: "4 days ago"
    },
    {
        id: 6,
       
        description: "A quick and effective home workout.",
        thumbnail: "/assets//video6.png",
        views: "150K views",
        uploadTime: "1 day ago"
    },
    {
        id: 7,
       
        description: "Creative DIY projects for home decor.",
        thumbnail: "/assets//video4.png",
        views: "250K views",
        uploadTime: "2 weeks ago"
    },
    {
        id: 8,
        
        description: "Official music video of the latest hit.",
        thumbnail: "/assets//video1.png",    
        views: "2M views",
        uploadTime: "3 weeks ago"
    }
  ];


    
  return (

 <Container>
      <Row className="p-0 mt-3">
        {WatchvideosData.map((video) => (
          <Col lg={3} md={6} sm={12} key={video.id} className="mb-4">
            <Link to="/Videos" className="text-decoration-none">
              <div className="img-card" style={{ backgroundColor: "#1c1c1c" }}>
                <div className="video-thumbnail">
                  <img src={video.thumbnail} alt={video.title} width="100%" />
                  <div className="overlay">
                    <FontAwesomeIcon icon={faPlayCircle} className="play-icon" />
                  </div>
                </div>

                <div className="video-content p-2 video-text">
                  <h5 className="text-light">{video.title}</h5>
                  <p className="text-light fs-6">{video.description}</p>
                  <p className="text-secondary">
                    {video.views}{" "}
                    <span>
                      <FontAwesomeIcon icon={faCalendarDays} />{" "}
                    </span>{" "}
                    {video.uploadTime}
                  </p>
                </div>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>

  )
}

export default Watchvideos
