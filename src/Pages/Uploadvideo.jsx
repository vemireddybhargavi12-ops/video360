import React, { useState } from 'react';
import Layout from './Layout';
import { Button, Card, Col, Container, Form, ProgressBar, Row } from 'react-bootstrap';
import { X as CloseIcon, ChevronUp, FileEarmarkArrowUpFill } from 'react-bootstrap-icons'; 
import { Link } from 'react-router-dom';
import "../Styles/Uploadvideo.css";



const Uploadvideo = () => {
 
    return (
      <Layout>
        <Container 
          
          className="d-flex flex-column justify-content-center align-items-center text-center" 
          style={{ 
            backgroundColor: '#121212', 
            color: 'white',
            
            minHeight: '400px',
            maxWidth: '800px',
            margin: '50px auto'
          }}
        >
          <div className="mb-4">
            <FileEarmarkArrowUpFill color="red" size={120} />
          </div>

          <h3 className="mb-2 text-white">
            Select Video files to upload
          </h3>

          <p className="mb-4 text-secondary">
            or drag and drop video files
          </p>

         <Link to="/Uploadingdetails" 
            variant="outline-danger"
            className="px-5 py-2 uploadbutton"
            style={{ 
              border:"1px solid white",
              borderRadius:"5px",
              borderColor: 'red', 
              textDecorationLine:"none",
              
              color: 'red', 
              fontWeight: 'bold',
            }}
            
          >
            Upload Video
          </Link>


        </Container>
      </Layout>
    );
  }


export default Uploadvideo;