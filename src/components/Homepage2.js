
import React, { useEffect } from 'react';
import { ListGroup,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Link import edin

const Homepage2 = () => {
    
  return (
    <div >
        <div className="homepage2-container">
      <ListGroup className="custom-list-group">
        <ListGroup.Item className="custom-list-item">Akış</ListGroup.Item>
        <ListGroup.Item className="custom-list-item">Ara</ListGroup.Item>
        <ListGroup.Item className="custom-list-item">Keşfet</ListGroup.Item>
        <ListGroup.Item className="custom-list-item">Kitaplar</ListGroup.Item>
        <ListGroup.Item className="custom-list-item">Giriş Yap</ListGroup.Item>
        <ListGroup.Item className="custom-list-item">
            <Link to="/register" className="link-style">Kayıt Ol</Link>
          </ListGroup.Item>
      </ListGroup>
      <div><Button className="custom-button">Gönderi Oluştur</Button></div>
      
    </div>
      
    </div>
  )
}

export default Homepage2
