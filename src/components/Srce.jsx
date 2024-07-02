import React from "react";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Srce = () => {
  let navigate = useNavigate();
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(false);
  const [sarcevalo, setSarcevalo] = useState();
  const faceData = async (sarcevalo) => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://dummyjson.com/products/search?q=${sarcevalo}`
      );
      setProducts(data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  const handelSerce = (e) => {
    setSarcevalo(e.target.value);
    if (sarcevalo) {
      faceData(sarcevalo);
    }
  };
  const seaceClick = (id) =>{

    navigate(`proudct/${id}`)
  }

  return (
    <div>
      <div className="relative ml-4 ">
        <input
          className="w-full py-5 pl-5"
          type="text"
          placeholder="Search Products"
          value={sarcevalo}
          onChange={(e) => handelSerce(e)}
        />
        <FaSearch className="absolute right-10 top-6" />
      </div>
      <div className=" absolute bg-white left-[260px] w-[653px]  border shadow-lg mt-5">
        {loading
          ? "loding....."
          : products &&
            sarcevalo &&
            products.products.map((el) => (
              <p className="text-center py-2 font-semibold" onClick={ ()=> seaceClick(el.id)}>{el.title}</p>
            ))}
      </div>
    </div>
  );
};

export default Srce;
