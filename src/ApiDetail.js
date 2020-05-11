import { useState,useEffect } from 'react';


export function useData(url) {
    const[loading, setLoading] = useState(true);
    const[datas, setdatas] = useState([]);
    const[error, setError] = useState(null);
useEffect(() => {
    fetch(url)
    .then((res) => res.json())
    .then((datas) => {setdatas(datas); setLoading(false);})
    .catch((e) => {setError(e);setLoading(false);});}, []);
    return{loading,datas,error,};}