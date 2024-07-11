import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="py-4 px-3 sm:px-20 md:px-28">
      <Link className="text-blue-400 hover:text-blue-600" to="/menu">
        &larr; Back to menu
      </Link>

      <p className="font-semibold mt-7">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
