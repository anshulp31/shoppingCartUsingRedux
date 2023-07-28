import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div >
    <div className="text-4xl   font-semibold flex items-center justify-center" >Your Cart</div>
  {
    cart.length > 0  ? 
    (<div >


      <div className="max-w-[1280px] flex flex-wrap">
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="flex  mt-5 ml-5 flex-row">

        <div >
          
          <div className="text-lg font-semibold">Summary</div>
          <p>
            <span className="text-lg font-semibold">Total Items: {cart.length}</span>
          </p>
          <p className="text-lg font-semibold"> Total Amount: ₹{totalAmount}</p>
        </div>

        <div>
          
          <button className="text-gray-700 border-2 border-gray-700 rounded-lg font-semibold 
          text-[20px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in cursor-default mt-5 ml-5 ">
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div className="flex items-center flex-col justify-center h-screen">
      <h1 className="text-lg font-bold">Cart Empty</h1>
      <Link to={"/"}>
        <button className="text-gray-700 border-2 border-gray-700 rounded-lg font-semibold 
          text-lg p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in cursor-default mt-5 ml-5 mx-auto">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
