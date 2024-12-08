import React,{useState} from 'react'

const Kitapekleme = () => {
    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [message, setMessage] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Yeni kitap verisi
      const newBook = {
        name,
        author,
        image,
        description,
      };
  
      // Kitap ekleme isteği gönder
      fetch("http://localhost:8080/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBook),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.message) {
            setMessage(data.message);
          }
        })
        .catch((error) => {
          console.error("Hata:", error);
          setMessage("Bir hata oluştu.");
        });
    };
  
    return (
      <div>
        <h1>Admin Kitap Ekleme Sayfası</h1>
        {message && <p>{message}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label>Kitap İsmi:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Yazar:</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Resim Adı (örnek: indir.jpg):</label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Açıklama:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Kitap Ekle</button>
        </form>
      </div>
    );
}

export default Kitapekleme
