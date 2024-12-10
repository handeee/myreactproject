import React, { useState } from "react";

const Kitapekleme = () => {
  const [name, setName] = useState(""); // Kullanıcı ismi
  const [image, setImage] = useState(""); // Resim adı
  const [command, setCommand] = useState(""); // Alıntı metin
  const [kitapyazar, setKitapYazar] = useState(""); // Yazar adı
  const [kitapismi, setKitapIsmi] = useState(""); // Kitap adı
  const [kitapresim, setKitapResim] = useState(""); // Kitap resim adı
  const [message, setMessage] = useState(""); // Mesaj

  const handleSubmit = (e) => {
    e.preventDefault();

    // Yeni kitap verisi
    const newBook = {
      name,
      image,
      command,
      kitapyazar,
      kitapismi,
      kitapresim,
    };

    // Kitap ekleme isteği gönder
    fetch("http://localhost:8080/api/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBook),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          setMessage(data.message); // Başarılı mesaj
        }
      })
      .catch((error) => {
        console.error("Hata:", error);
        setMessage("Bir hata oluştu."); // Hata mesajı
      });
  };

  return (
    <div >
      <h1>Admin Kitap Ekleme Sayfası</h1>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
       
          <div style={{ display: "flex" }} >
            
            <label>Kullanıcı İsmi:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
      
        <div style={{ display: "flex" }}>
          <label>Resim Adı (örnek: indir1.jpg):</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Alıntı:</label>
          <input
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Yazar:</label>
          <input
            type="text"
            value={kitapyazar}
            onChange={(e) => setKitapYazar(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Kitap İsmi:</label>
          <input
            type="text"
            value={kitapismi}
            onChange={(e) => setKitapIsmi(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Kitap Resim Adı (örnek: indir.jpg):</label>
          <input
            type="text"
            value={kitapresim}
            onChange={(e) => setKitapResim(e.target.value)}
            required
          />
        </div>
        <button type="submit">Kitap Ekle</button>
      </form>
    </div>
  );
};

export default Kitapekleme;
