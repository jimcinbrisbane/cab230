import { useState,useEffect } from 'react';


export function useData() {
    const[loading, setLoading] = useState(true);
    const[datas, setdatas] = useState([]);
    const[error, setError] = useState(null);
useEffect(() => {
    fetch("http://131.181.190.87:3000/stocks/symbols")
    .then((res) => res.json())
    .then((datas) => {setdatas(datas); setLoading(false);})
    .catch((e) => {setError(e);setLoading(false);});}, []);
    return{loading,datas,error,};}