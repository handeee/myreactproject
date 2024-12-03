import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Selectedtypes = () => {
    const { tur } = useParams();
    useEffect(() => {
        console.log(tur)
    })
    return (
        <h1 style={{ marginTop:"80px" }}>{tur}</h1>
    );
};

export default Selectedtypes;
