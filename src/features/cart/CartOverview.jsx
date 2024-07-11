import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPizzaQuantity, getPizzaTotalPrice } from "./cartSlice";
import { formatCurrency } from "../utils/helpers";

function CartOverview() {
  const total = useSelector(getPizzaTotalPrice);
  const quantity = useSelector(getPizzaQuantity);

  // function total() {
  //   // return cart.;
  // }

  if (!total) return null;

  return (
    <div className="bg-stone-800 flex items-center justify-between p-4 text-slate-50">
      <p className="space-x-4">
        <span>{quantity} pizzas</span>
        <span>{formatCurrency(total)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
