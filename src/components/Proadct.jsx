import Flex from "../components/Flex";
import { FaHeart } from "react-icons/fa";
import { FaCartShopping, FaRepeat } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addCart, removCart } from "../features/cartSlice";

const Proadct = ({ products }) => {

  const dispatch = useDispatch();
  const handelCard = (products) => {
    dispatch(addCart({ ...products, qun: 1 }));
  };
  const handelRemovCard = (products) => {
    dispatch(removCart(products));
  };
  return (
    <>
      <div className="">
        <div className="">
          <div className="relative group">
            <img
              className="w-[370px] h-[370px]"
              src={products.thumbnail}
              alt=""
            />
            <div className="absolute bottom-0 left-0 invisible w-full h-40 bg-white group-hover:visible">
              <div className="pr-5 ">
                <Flex className="items-center justify-end gap-4 pt-6 ">
                  {" "}
                  <button className=" hover:text-black hover:font-bold">
                    Add to Wish List
                  </button>
                  <FaHeart />
                </Flex>

                <Flex className="items-center justify-end gap-4 py-4 ">
                  {" "}
                  <button className=" hover:text-black hover:font-bold">
                    Compare
                  </button>
                  <FaRepeat />
                </Flex>
                <Flex className="items-center justify-end gap-4 ">
                  {" "}
                  <button
                    className=" hover:text-black hover:font-bold"
                    onClick={() => handelCard(products)}
                  >
                    Add to Cart
                  </button>
                  <FaCartShopping />
                </Flex>
                <Flex className="items-center justify-end gap-4 pt-4 ">
                  <button
                    className=" hover:text-black hover:font-bold"
                    onClick={() => handelRemovCard(products)}
                  >
                    Remov to Cart
                  </button>
                  <FaCartShopping />
                </Flex>
              </div>
            </div>
          </div>
          <h1 className="w-[370px] ">{products.title}</h1>
          <p className="text-base w-[300px] ">{products.description}</p>
          <p className="text-base w-[300px] ">{products.price}</p>
        </div>
      </div>
    </>
  );
};

export default Proadct;
