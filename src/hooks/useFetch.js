import { useState, useEffect } from 'react';
import axios from "axios";                    // axios yardımı ile apilerden verileri alıyorz. 

function useFetch(url) {

  /* States */
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Asenkron olarak verileri axios ile çekiyoruz ve data dizisinin içerisine atıyoruz.
  const fetchData = async () => {
    try {
        const {data: responseData} = await axios.get(url);
        setData(responseData);
        setLoading(false);
    } catch (error) {
        setError(error);
        console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])
  
  // data, loading ve error bilgilerini return ederek dışarıdan erişebilir hale getiriyoruz.
  return { data, loading, error };
}

export default useFetch;