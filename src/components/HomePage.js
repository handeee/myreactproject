import React, { useEffect, useState } from "react";  // useState'i import ettik
import myuseroneImage from "../resimler/indir.jpg"; // Resmi import et
import myusertwoImage from "../resimler/indir1.jpg"; // Başka bir resim eklemek için
import kitapresmi from "../resimler/sabahattinali.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons';  // Kalp ve yorum ikonları

const HomePage = ({veri}) => {
  const [isLiked, setIsLiked] = useState(false);  // Beğenme durumu için state tanımlıyoruz
 const [data,setdata]=useState([]);
  // Her kullanıcının ismi ve resmini bir nesne olarak saklıyoruz
  // const users = [
  //   {
  //     name: "hande",
  //     image: myuseroneImage,
  //     command: "kitap çok sürükleyici",
  //     kitapyazar: "sabahattin ali",
  //     kitapismi: "Değirmen",
  //     kitapresim: kitapresmi,
  //   },
  //   {
  //     name: "eda",
  //     image: myusertwoImage,
  //     command: "“Hiçbirimizin yüzünde gülmek takati kalmamıştı…”",
  //     kitapyazar: "sabahattin ali",
  //     kitapismi: "Değirmen",
  //     kitapresim: kitapresmi,
  //   },
  //   {
  //     name: "ela",
  //     image: myuseroneImage,
  //     command: "kitap çok sürükleyici",
  //     kitapyazar: "sabahattin ali",
  //     kitapismi: "Değirmen",
  //     kitapresim: kitapresmi,
  //   },
  //   {
  //     name: "hatice",
  //     image: myusertwoImage,
  //     command: "kitap çok sürükleyici",
  //     kitapyazar: "sabahattin ali",
  //     kitapismi: "Değirmen",
  //     kitapresim: kitapresmi,
  //   },
  // ];
 

  // Beğenme (kalp) ikonu için toggle fonksiyonu
  const toggleLike = () => {
    setIsLiked(!isLiked);  // Tıklama ile beğenme durumu değişiyor
  };

  return (
    <div>
      {/* Navbar */}
      <div
        style={{
          position: "sticky",
          top: "0",
          zIndex: "1000",
          backgroundColor: "#fff",
          borderBottom: "2px solid #ddd",
          padding: "10px",
          display: "flex",
          justifyContent: "flex-start", // Sola hizalama
          gap: "30px",
          alignItems: "flex-start", // Üst kısımdan hizalama
        }}
      >
        <p
          style={{
            fontWeight: "bold",
            fontSize: "18px",
            cursor: "pointer",
            marginLeft: "90px",
          }}
        >
          Akış
        </p>
        <p
          style={{
            fontWeight: "bold",
            fontSize: "18px",
            cursor: "pointer",
            marginLeft: "50px",
          }}
        >
          Popüler
        </p>
      </div>

      {/* Gönderi kutuları */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start", // Sol tarafa hizalama
          flexDirection: "column",
          marginTop: "30px",
          gap: "20px",
          padding: "0 20px",
        }}
      >
        {veri.map((user, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "20px",
              width: "65%",
              height: "270px",
              textAlign: "center",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#f9f9f9",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start", // Sol tarafa hizalama
            }}
          >
            {/* Kullanıcıya ait resim */}
            <img
              src={user.image}
              alt={user.name}
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            />
            <p style={{ margin: "0", fontWeight: "bold", fontSize: "16px" }}>
              {user.name}
            </p>
            <p style={{ fontSize: "14px", color: "#777" }}> {user.command} </p>
            {/* Kitap resmi ve bilgileri */}
            <div style={{ marginTop: "9px", display: "flex" }}>
              <img
                src={user.kitapresim}
                alt={user.kitapismi}
                style={{ width: "100px", height: "80px" }}
              />
              <div>
                <p style={{ fontWeight: "bold", marginBottom: "2px",marginLeft:"9px" }}>
                  {user.kitapyazar}
                </p>
                <p>{user.kitapismi}</p>
              </div>
            </div>
            {/* Beğenme (kalp) ve yorum (baloncuk) ikonları */}
            <div style={{ display: 'flex', gap: '20px', cursor: 'pointer',marginLeft:'12px',marginTop:'7px' }}>
              {/* Beğenme (kalp) ikonu */}
              <div onClick={toggleLike}>
                <FontAwesomeIcon
                  icon={faHeart}
                  style={{
                    color: isLiked ? "red" : "#777", // Tıklanınca kırmızı olacak, aksi halde gri
                    transition: "color 0.3s ease",
                    fontSize: "18px",
                  }}
                />
              </div>

              {/* Yorum (baloncuk) ikonu */}
              <div>
                <FontAwesomeIcon
                  icon={faComment}
                  style={{
                    color: "#777", // Yorum ikonu rengini gri yapıyoruz
                    fontSize: "18px",
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
