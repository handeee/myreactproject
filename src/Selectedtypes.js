import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Selectedtypes = () => {
    const yazarlar = [
        { id: 1, ad: "Ahmet Ümit", kitaplar: ["Beyoğlu Rapsodisi", "Sis ve Gece"], tur: "Dünya Klasikleri" },
        { id: 2, ad: "Orhan Pamuk", kitaplar: ["Kırmızı Saçlı Kadın", "Benim Adım Kırmızı"], tur: "Dünya Klasikleri" },
        { id: 3, ad: "Elif Şafak", kitaplar: ["Aşk", "Mahrem"], tur: "Aşk" },
      ];
    
    const { tur } = useParams();
   
    return (
        <h1 style={{ marginTop:"80px" }}>{tur}</h1>
    );
};

export default Selectedtypes;
