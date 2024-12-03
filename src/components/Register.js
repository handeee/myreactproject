import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; 

const Register = () => {
  const navigate = useNavigate();
  
  // State'ler
  const [activeButton, setActiveButton] = useState("register");
  const [kayitdeg, setKayitdeg] = useState("");
  const [kayitdeg3, setKayitdeg3] = useState("");
  const [kayitdeg4, setKayitdeg4] = useState("");
  const [kayitdeg5, setKayitdeg5] = useState("");
  const [kayitdeg2, setKayitdeg2] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Password gizle/göster fonksiyonu
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  // Giriş yap butonu
  const girisyap = () => {
    navigate("/giris");
  };

  // Üye ol butonu
  const kayityap2 = () => {
    navigate("/register");
  };

  // Form submit işlemi
  const kayityap = async (event) => {
    event.preventDefault();

    // Kullanıcı bilgilerini alıyoruz
    const userData = {
      name: kayitdeg,
      surname: kayitdeg3,
      username: kayitdeg5,
      email: kayitdeg4,
      password: kayitdeg2,
    };

    try {
      // Backend API'ye POST isteği gönderiyoruz
      const response = await axios.post("http://localhost:8080/register", userData);

      if (response.status === 200) {
        // Başarılı ise kullanıcıyı yönlendirebiliriz
        alert("Kayıt başarılı!");
        navigate("/giris"); // Giriş sayfasına yönlendir
      } else {
        alert("Bir hata oluştu.");
      }
    } catch (error) {
      console.error("Kayıt sırasında hata oluştu:", error);
      alert("Bir hata oluştu. Lütfen tekrar deneyin.");
    }
  };
  return (
    <div className="register-page" >
     
      <form onSubmit={kayityap}>
        {/* Buttonlar arası geçiş */}
        <div className="baslik">
          <div>
            <button
              type="button"
              className={activeButton === "login" ? "active-button" : ""}
              onClick={girisyap}
            >
              Giriş Yap
            </button>
            <hr className={activeButton === "login" ? "active-hr" : ""} />
          </div>
          <div>
            <button
              type="button"
              className={activeButton === "register" ? "active-button" : ""}
              onClick={kayityap2}
            >
              Üye Ol
            </button>
            <hr className={activeButton === "register" ? "active-hr" : ""} />
          </div>
        </div>

        {/* Kullanıcı Bilgileri */}
        <div className="dis">
          <div className="gir">
            <div className="yanyanainput">
              <input
                type="text"
                value={kayitdeg}
                onChange={(e) => setKayitdeg(e.target.value)}
                placeholder="Ad"
                required
              />
              <input
                type="text"
                value={kayitdeg3}
                onChange={(e) => setKayitdeg3(e.target.value)}
                placeholder="Soyad"
                required
              />
            </div>
          </div>

          <div className="gir">
            <div>
              <input
                type="text"
                value={kayitdeg5}
                onChange={(e) => setKayitdeg5(e.target.value)}
                placeholder="Kullanıcı Adı"
                required
              />
            </div>
          </div>

          <div className="gir">
            <div>
              <input
                type="email"
                value={kayitdeg4}
                onChange={(e) => setKayitdeg4(e.target.value)}
                placeholder="E-posta"
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                title="Lütfen geçerli bir e-posta adresi girin. Örneğin: example@domain.com"
              />
              <small>Format: example@domain.com</small>
            </div>
          </div>

          <div className="gir">
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                value={kayitdeg2}
                onChange={(e) => setKayitdeg2(e.target.value)}
                placeholder="Şifre"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="toggle-password"
              >
                {showPassword ? "Gizle" : "Göster"}
              </button>
            </div>
          </div>
        </div>

        {/* Kayıt butonu */}
        <div className="kayitbut">
          <button type="submit">Oluştur</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
