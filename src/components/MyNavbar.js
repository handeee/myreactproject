// import React from 'react';
// import { Navbar, Nav, NavDropdown, Container, Form, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// const MyNavbar = () => {
//   const turlerbas = ["Çok okunanlar", "favori yazarlar"];
//   const yazarlar=["kahraman tazeoğlu","murat tavlı","mehmet rauf"]
//   return (
//     <Navbar bg="light" expand="lg" fixed="top">
//       <Container>
//         <Navbar.Brand as={Link} to="/" className='m'>Kitap Dünyası</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-0 justify-content-center flex-grow-1">
//             <Nav.Link as={Link} to="/">Anasayfa</Nav.Link>

//             <NavDropdown title="Türler" id="basic-nav-dropdown" className='me-4 ms-5' as={Link} to={`/turler`} >
//               {turlerbas.map((tur, index) => (
//                 <NavDropdown.Item as={Link} to={`/turler/${tur}`} key={index}>
//                   {tur}
//                 </NavDropdown.Item>
//               ))}
//             </NavDropdown>

//             <NavDropdown title="Yazarlar" id="basic-nav-dropdown" className='me-4'>
//             {yazarlar.map((yazar, index) => (
//                 <NavDropdown.Item as={Link} to={`/yazar/${yazar}`} key={index}>
//                   {yazar}
//                 </NavDropdown.Item>
//               ))}
//             </NavDropdown>
//             <Nav.Link as={Link} to="/cokokunanlar">Çok okunanlar</Nav.Link>
//           </Nav>
//           {/* Arama Formu ve Bugün ne okusam? Butonu */}
//           <div className="d-flex align-items-center justify-content-center mx-auto">
//             <Link to="/neokusamoyna"><Button variant="outline-primary" className='me-5'>Bugün ne okusam?</Button></Link>
            
//             <Form className="d-flex">
//               <Form.Control
//                 type="search"
//                 placeholder="Search"
//                 className="me-2"
//                 aria-label="Search"
//               />
//               <Button variant="outline-success" type="submit">Search</Button>
//             </Form>
//           </div>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default MyNavbar;
import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const MyNavbar = () => {
  const turlerbas = ["Çok okunanlar", "favori yazarlar"];
  const yazarlar = ["kahraman tazeoğlu", "murat tavlı", "mehmet rauf"];
  
  const navigate = useNavigate();

  const handleTurlerClick = () => {
    // Yönlendirme işlemi için types sayfasına git
    navigate('/turler');
  };
const handleYazarlarClick=()=>{
  navigate('/yazarlar')
}
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className='m'>Kitap Dünyası</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-0 justify-content-center flex-grow-1">
            <Nav.Link as={Link} to="/">Anasayfa</Nav.Link>

            {/* Türler Dropdown */}
            <NavDropdown
              title="Türler"
              id="basic-nav-dropdown"
              className='me-4 ms-5'
              onClick={handleTurlerClick} // Tıklanıldığında types sayfasına yönlendirme
            >
              {turlerbas.map((tur, index) => (
                <NavDropdown.Item as={Link} to={`/turler/${tur}`} key={index}>
                  {tur}
                </NavDropdown.Item>
              ))}
            </NavDropdown>

            {/* Yazarlar Dropdown */}
            <NavDropdown title="Yazarlar" id="basic-nav-dropdown" className='me-4' onClick={handleYazarlarClick} >
              {yazarlar.map((yazar, index) => (
                <NavDropdown.Item as={Link} to={`/yazar/${yazar}`} key={index}>
                  {yazar}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <Nav.Link as={Link} to="/cokokunanlar">Çok okunanlar</Nav.Link>
          </Nav>

          {/* Arama Formu ve Bugün ne okusam? Butonu */}
          <div className="d-flex align-items-center justify-content-center mx-auto">
            <Link to="/neokusamoyna"><Button variant="outline-primary" className='me-5'>Bugün ne okusam?</Button></Link>

            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success" type="submit">Search</Button>
            </Form>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
