import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation} from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import HomePage from "./components/HomePage";
import Types from "./components/Types";
import Game from "./components/Game";
import Writer from "./components/Writer";

import Homepage2 from "./components/Homepage2";
import Register from "./components/Register";
import Writerdetail from "./components/Writerdetail";
import Kitapekleme from "./components/Kitapekleme";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // Veri yükleme durumu için
  const location = useLocation(); // Sayfa yolunu almak için useLocation hook'u
  useEffect(() => {
    // Backend'den kullanıcı verilerini çek
    fetch("http://localhost:8080/api/books")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Veri alınamadı");
        }
        return response.json();
      })
      .then((data) => {
        // Resim URL'lerini tam hale getir
        const updatedUsers = data.map((user) => ({
          ...user,
          image: `http://localhost:8080/public/${user.image}`, // Resim URL'si
          kitapresim: `http://localhost:8080/public/${user.kitapresim}`, // Kitap resmi URL'si
        }));
        setUsers(updatedUsers);
        setLoading(false); // Yükleme tamamlandı
      })
      .catch((error) => {
        console.error("Veri çekme hatası:", error);
        setLoading(false); // Hata durumunda da yükleme tamamlandı
      });
  }, []);

  if (loading) {
    return <div>Yükleniyor...</div>;
  }
  return (
    <div className="App">
      {location.pathname !== "/api/books" && <MyNavbar />}
    
      <div className="main-container">
      {location.pathname !== "/api/books" && <Homepage2 className="homepage2-container"/>}
 
  <Routes>
    <Route path="/" element={<div className="homepage-container"><HomePage veri={users}/></div>} />
    <Route path="/api/books" element={<Kitapekleme/>}/>
    <Route path="/turler" element={<div className="homepage-container"><Types /></div>} />
    {/* <Route path="/turler/:tur" element={<div className="homepage-container"><Selectedtypes /></div>} /> */}
   
    <Route path="/Neokusamoyna" element={<div className="homepage-container"><Game/></div>} />
    <Route path="/yazarlar" element={<div className="homepage-container"><Writer /></div>} />
    <Route path="/register" element={<div className="homepage-container"><Register/></div>} />
    <Route path="/turler/:tur" element={<Writerdetail />} /> {/* Tür parametresi */}
    <Route path="/yazarlar/:yazaradi" element={<div className="homepage-container"><Writerdetail /></div>} />

  </Routes>
</div>



    </div>
  );
}

export default App;
