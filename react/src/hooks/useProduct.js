import axios from "axios";
import { useEffect, useState } from "react";

export const useProduct = (url) => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const data = await axios.get(url);
    setProducts(data.data.data.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []); // dependency array \ if empty -> it works once on reload

  return { products, loading };
};
