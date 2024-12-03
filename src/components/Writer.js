// import React from 'react'
// import { useParams, Link } from 'react-router-dom';
// import { ListGroup } from 'react-bootstrap';
// import Breadcrumb from 'react-bootstrap/Breadcrumb';

// const Writer = () => {
//     const { tur } = useParams();
//     ///const turler = ["Dünya Klasikleri", "Aşk", "Roman", "Tarih", "Felsefe"];
//     const yazarlar=["kahraman tazeoğlu","murat tavlı","mehmet rauf"];
//     //const isYazar = yazarlar.includes(tur.toLowerCase());
  
//     return (
//       <div style={{ marginTop: '120px',marginLeft:"40px" }}> {/* Navbar sabit olduğu için biraz boşluk bırakıyoruz */}
       
//         <h3 style={{marginBottom:"25px"}}>{tur} Kitapları</h3>
//         <Breadcrumb>
//           <Breadcrumb.Item href="/" >Anasayfa</Breadcrumb.Item>
//           <Breadcrumb.Item href="/turler">Türler</Breadcrumb.Item>
//           <Breadcrumb.Item active>{tur}</Breadcrumb.Item>
//         </Breadcrumb>
//         <hr />
//         <div style={{ marginTop: '60px', marginBottom: '50px' }}>
//         {/* Button Section */}
//         {/* <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
//           {turler.map((turItem, index) => (
//             <Button key={index} as={Link} to={`/turler/${turItem}`} variant="outline-secondary">
//               {turItem}
//             </Button>
//           ))}
//         </div> */}
  
//         {/* Flex Container for ListGroup and Card */}
//         {/* <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginTop: '30px' }}> */}
          
//           {/* ListGroup Section */}
//           <div style={{ display:"flex",justifyContent:"center" }}>
//             <ListGroup style={{ width: '100%', maxWidth: '300px',marginTop: '20px' }}>
//               {yazarlar.map((yazar, index) => (
//                 <ListGroup.Item key={index} action as={Link} to={`/turler/yazar/${yazar}`}>
//                   {yazar}
//                 </ListGroup.Item>
//               ))}
//             </ListGroup>
//           </div>
  
//           {/* Card Section */}
//           {/* <div style={{ flex: '1 1 690px',marginTop: '20px' }}>
//             <Card style={{ width: '420px', height: '300px' }}>
//               <Card.Img variant="top" src="holder.js/100px180" />
//               <Card.Body>
//                 <Card.Title>Card Title</Card.Title>
//                 <Card.Text>
//                   Some quick example text to build on the card title and make up the bulk of the card's content.
//                 </Card.Text>
//                 <Button variant="primary">Go somewhere</Button>
//               </Card.Body>
//             </Card>
//           </div> */}
//         </div>
//       </div>
//       // </div>
//     );
//   };


// export default Writer
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const Writer = () => {
  const { tur } = useParams();
  const [yazarlar, setYazarlar] = useState([]);

  
  useEffect(() => {
    // API'den veriyi alıyoruz
    const fetchYazarlar = async () => {
      try {
        const response = await fetch('/api/yazarlar'); // Backend API'yi çağırıyoruz
        const data = await response.json();
        setYazarlar(data); // Veriyi state'e set ediyoruz
      } catch (error) {
        console.error('Yazarlar alınırken hata oluştu:', error);
      }
    };

    fetchYazarlar();
  }, []); 

  return (
    <div style={{ marginTop: '120px', marginLeft: '40px' }}>
      <h3 style={{ marginBottom: '25px' }}>{tur} Kitapları</h3>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Anasayfa</Breadcrumb.Item>
        <Breadcrumb.Item href="/turler">Türler</Breadcrumb.Item>
        <Breadcrumb.Item active>{tur}</Breadcrumb.Item>
      </Breadcrumb>
      <hr />
      <div style={{ marginTop: '60px', marginBottom: '50px' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ListGroup style={{ width: '100%', maxWidth: '300px', marginTop: '20px' }}>
            {/* Yazarlar listesine tıklanabilir Link ekliyoruz */}
            {yazarlar.map((yazar, index) => (
              <ListGroup.Item key={index} action as={Link} to={`/turler/yazar/${yazar}`}>
                {yazar}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      </div>
    </div>
  );
};

export default Writer;
