import React from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const Writer = () => {
    const { tur } = useParams();
    const navigate = useNavigate();

    const yazarlar=["Ahmet Ümit","Orhan Pamuk","Elif Şafak"];
   
    const handleYazarClick=(yazaradi)=>{

    navigate(`/yazarlar/${yazaradi}`);
    }
    return (
      <div style={{ marginTop: '0px',marginLeft:"0px" }}> {/* Navbar sabit olduğu için biraz boşluk bırakıyoruz */}
       
        <h3 style={{marginBottom:"25px"}}>Yazarlar</h3>
        <Breadcrumb>
          <Breadcrumb.Item href="/" >Anasayfa</Breadcrumb.Item>
          <Breadcrumb.Item href="/turler">Türler</Breadcrumb.Item>
          <Breadcrumb.Item active>{tur}</Breadcrumb.Item>
        </Breadcrumb>
        <hr />
        <div style={{ marginTop: '60px', marginBottom: '50px' }}>
      
          {/* ListGroup Section */}
          <div style={{ display:"flex",justifyContent:"center" }}>
            <ListGroup style={{ width: '100%', maxWidth: '300px',marginTop: '20px' }}>
              {yazarlar.map((yazar, index) => (
                <ListGroup.Item key={index}  onClick={() => handleYazarClick(yazar.replace(/\s+/g, '-').toLowerCase()
                )}>
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

// export default Writer
// import React, { useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { ListGroup } from 'react-bootstrap';
// import Breadcrumb from 'react-bootstrap/Breadcrumb';

// const Writer = () => {
//   const { tur } = useParams();
//   const [yazarlar, setYazarlar] = useState([]);

  
//   useEffect(() => {
//     // API'den veriyi alıyoruz
//     const fetchYazarlar = async () => {
//       try {
//         const response = await fetch('/api/yazarlar'); // Backend API'yi çağırıyoruz
//         const data = await response.json();
//         setYazarlar(data); // Veriyi state'e set ediyoruz
//       } catch (error) {
//         console.error('Yazarlar alınırken hata oluştu:', error);
//       }
//     };

//     fetchYazarlar();
//   }, []); 

//   return (
//     <div style={{ marginTop: '120px', marginLeft: '40px' }}>
//       <h3 style={{ marginBottom: '25px' }}>{tur} Yazarlar</h3>
//       <Breadcrumb>
//         <Breadcrumb.Item href="/">Anasayfa</Breadcrumb.Item>
//         <Breadcrumb.Item href="/turler">Türler</Breadcrumb.Item>
//         <Breadcrumb.Item active>{tur}</Breadcrumb.Item>
//       </Breadcrumb>
//       <hr />
//       <div style={{ marginTop: '60px', marginBottom: '50px' }}>
//         <div style={{ display: 'flex', justifyContent: 'center' }}>
//           <ListGroup style={{ width: '100%', maxWidth: '300px', marginTop: '20px' }}>
//             {/* Yazarlar listesine tıklanabilir Link ekliyoruz */}
//             {yazarlar.map((yazar, index) => (
//               <ListGroup.Item key={index} action as={Link} to={`/turler/yazar/${yazar}`}>
//                 {yazar}
//               </ListGroup.Item>
//             ))}
//           </ListGroup>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Writer;
