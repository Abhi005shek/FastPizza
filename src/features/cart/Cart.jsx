import { Link } from "react-router-dom";
import Button from "../ui/Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";

function Cart() {
  // const cart = fakeCart;
  const userName = useSelector((state) => state.user.username);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="py-4 px-3 sm:px-20 md:px-28">
      <Link to="/menu" className="text-blue-400 hover:text-blue-600">
        &larr; Back to menu
      </Link>

      <h2 className="text-xl mt-7 font-semibold">Your cart, {userName}</h2>

      <ul className="divide-y border-b border-b-stone-300 divide-stone-400">
        {cart.map((item, i) => (
          <CartItem item={item} key={i} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button type="primary" to="/order/new">
          Order pizzas
        </Button>
        <Button onclick={() => dispatch(clearCart())} type={"secondary"}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
