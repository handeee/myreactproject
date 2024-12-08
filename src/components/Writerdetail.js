import React from 'react';
import { useParams } from 'react-router-dom';
import myusertwoImage from "../resimler/indir1.jpg"; // Başka bir resim eklemek için
import kitapresmii from "../resimler/sabahattinali.jpg"; // Başka bir resim eklemek için

const Writerdetail = () => {
  const { yazaradi, tur } = useParams(); // URL parametrelerini al

  const yazarlar = [
    { 
      id: 1, 
      ad: "Ahmet Ümit", 
      kitaplar: [
        { isim: "Beyoğlu Rapsodisi", kitapresmi: myusertwoImage }, 
        { isim: "Sis ve Gece", kitapresmi: kitapresmii }
      ], 
      tur: "Dünya Klasikleri", 
      yazarresim: myusertwoImage 
    },
    { 
      id: 2, 
      ad: "Orhan Pamuk", 
      kitaplar: [
        { isim: "Kırmızı Saçlı Kadın", kitapresmi: myusertwoImage }, 
        { isim: "Benim Adım Kırmızı", kitapresmi: kitapresmii }
      ], 
      tur: "Dünya Klasikleri",
      yazarresim: myusertwoImage
    },
    { 
      id: 3, 
      ad: "Elif Şafak", 
      kitaplar: [
        { isim: "Aşk", kitapresmi: myusertwoImage },
        { isim: "Mahrem", kitapresmi: kitapresmii }
      ], 
      tur: "Aşk", 
      yazarresim: myusertwoImage 
    },
  ];

  // Yazar adıyla eşleşme
  const yazar = yazarlar.find((y) => {
    const processedYazarAdi = y.ad.toLowerCase().replace(/\s+/g, '-').toLowerCase();
    return processedYazarAdi === yazaradi;
  });

  // Tür adıyla eşleşme
  const turKitaplar = yazarlar.filter((y) => {
    const processedTurAdi = y.tur.toLowerCase().replace(/\s+/g, '-').toLowerCase();
    return processedTurAdi === tur;
  });

  // Eğer yazar parametresi varsa, yazara ait kitapları göster
  if (yazar) {
    return (
      <div className='detay'>
        <div className='yazarresim'>
          <img src={yazar.yazarresim} alt="Yazar Resmi" />
       
          <h1>{yazar.ad}</h1>
        </div>
        <div className="hakkında">
          <h3>Hakkında</h3>
          <div className="pet">
            <p>Tam adı:</p>
            <p>{yazar.ad}</p>
        
          </div>
          <div className="pet">
            <p>Doğum:</p>
            <p>Bursa, Türkiye</p>
          </div>
          <div className="pet">
            <p>Konular:</p>
            <p>A, B</p>
          </div>
          <div>
            <h4>Kitaplar</h4>
          </div>
    
          {/* Kitapları göstermek için map kullanıyoruz */}
          {yazar.kitaplar.map((kitap, index) => (
            <div key={index}>
              <img className="kirresim" src={kitap.kitapresmi} alt={kitap.isim} />
              <p>{kitap.isim}</p> {/* Burada kitap ismini yazdırıyoruz */}
            </div>
          ))}
        </div>
       
      </div>
    );
  }

  // Eğer tür parametresi varsa, türle ilgili kitapları göster
  if (turKitaplar.length > 0) {
    return (
      <div>
        <h1>{tur} Türüne Ait Kitaplar:</h1>
        {turKitaplar.map((yazar, index) => (
          <div key={index}>
            <h2>{yazar.ad}</h2>
            <ul>
              {yazar.kitaplar.map((kitap, idx) => (
                <li key={idx}>{kitap.isim}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }

  // Eğer yazar veya tür bulunamazsa hata mesajı göster
  return <p>Yazar veya tür bulunamadı!</p>;
};

export default Writerdetail;
