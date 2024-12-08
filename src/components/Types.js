import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Types = () => {
  // URL'deki 'tur' parametresini almak için useParams kullanıyoruz
  const navigate = useNavigate();
  const turler = ["Dünya Klasikleri", "Aşk", "Roman", "Tarih", "Felsefe"];

   
  const handleYazarClick=(tur)=>{

    navigate(`/turler/${tur}`);
    }

  return (
    <div style={{ marginTop: '0px',marginLeft:"0px" }}> {/* Navbar sabit olduğu için biraz boşluk bırakıyoruz */}
     
      <h3 style={{marginBottom:"25px"}}> Kitapları</h3>
      <Breadcrumb>
        <Breadcrumb.Item href='/' > Anasayfa</Breadcrumb.Item>
        <Breadcrumb.Item href="/turler" active>Türler</Breadcrumb.Item>
      </Breadcrumb>
      <hr />
      <div style={{ marginTop: '60px', marginBottom: '50px' }}>
      {/* Button Section */}
      {/* <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        {turler.map((turItem, index) => (
          <Button key={index} as={Link} to={`/turler/${turItem}`} variant="outline-secondary">
            {turItem}
          </Button>
        ))}
      </div> */}

      {/* Flex Container for ListGroup and Card */}
      {/* <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginTop: '30px' }}> */}
        
        {/* ListGroup Section */}
        <div style={{ display:"flex",justifyContent:"center" }}>
          <ListGroup style={{ width: '100%', maxWidth: '300px',marginTop: '20px' }}>
            {turler.map((yazar, index) => (
              <ListGroup.Item key={index} onClick={() => handleYazarClick(yazar.replace(/\s+/g, '-').toLowerCase())} >
                {yazar}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>

        {/* Card Section */}
        {/* <div style={{ flex: '1 1 690px',marginTop: '20px' }}>
          <Card style={{ width: '420px', height: '300px' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div> */}
      </div>
    </div>
    // </div>
  );
};

export default Types;
// import React, { useEffect, useState } from 'react';
// import { ListGroup } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import Breadcrumb from 'react-bootstrap/Breadcrumb';

// const Types = () => {
//   const [turler, setTurler] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // API'den türleri almak için fetch kullanma
//     const fetchTurler = async () => {
//       try {
//         const response = await fetch('/api/turler');
//         if (response.ok) {
//           const data = await response.json();
//           setTurler(data);
//         } else {
//           console.error("Veri alınamadı");
//         }
//       } catch (error) {
//         console.error("Hata:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTurler();
//   }, []);

//   if (loading) {
//     return <div>Yükleniyor...</div>;
//   }

//   return (
//     <div style={{ marginTop: '0px', marginLeft: '0px' }}>
//       <h3 style={{ marginBottom: '25px' }}>Kitap Türleri</h3>
//       <Breadcrumb>
//         <Breadcrumb.Item href="/">Anasayfa</Breadcrumb.Item>
//         <Breadcrumb.Item href="/turler" active>Türler</Breadcrumb.Item>
//       </Breadcrumb>
//       <hr />
//       <div style={{ marginTop: '60px', marginBottom: '50px', display: 'flex', justifyContent: 'center' }}>
//         <ListGroup style={{ width: '100%', maxWidth: '300px', marginTop: '20px' }}>
//           {turler.map((tur, index) => (
//             <ListGroup.Item key={index} action as={Link} to={`/turler/${tur}`}>
//               {tur}
//             </ListGroup.Item>
//           ))}
//         </ListGroup>
//       </div>
//     </div>
//   );
// };

// export default Types;
