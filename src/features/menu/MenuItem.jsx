import { formatCurrency } from "../utils/helpers";
import Button from "../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(id));

  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const data = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(data));
  }

  return (
    <li className="flex gap-4 py-2 font-semibold">
      <img
        src={imageUrl}
        alt={name}
        className={`h-28 ${soldOut ? "opacity-60 grayscale" : ""}`}
      />
      <div className="flex flex-col grow">
        <p>{name}</p>
        <p className="font-medium capitalize italic text-sm text-slate-700">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex justify-between">
          {!soldOut ? (
            <p>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm uppercase text-slate-600">Sold out</p>
          )}

          {isInCart && (
            <div className="flex gap-3">
              <UpdateItemQuantity id={id} quantity={currentQuantity} />
              <DeleteItem id={id} />
            </div>
          )}

          {!soldOut && !isInCart && (
            <>
              <Button onclick={handleAddToCart} type="small">
                Add To Cart
              </Button>
            </>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
