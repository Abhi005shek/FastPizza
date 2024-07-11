// Test ID: IIDSAT

import { useFetcher, useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import { calcMinutesLeft, formatCurrency, formatDate } from "../utils/helpers";
import OrderItem from "./OrderItem";
import { useEffect } from "react";
import UpdateOrder from "./UpdateOrder";

function Order() {
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const order = useLoaderData();
  const fetcher = useFetcher();

  useEffect(() => {
    if (!fetcher.data && fetcher.state === "idle") fetcher.load("/menu");
  }, []);

  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="space-y-8 py-4 px-6 sm:px-20 md:px-28">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <h2 className="text-xl font-semibold">Order #{id} status</h2>

        <div className="space-x-2">
          {priority && (
            <span className="tracking-wide text-red-50 bg-red-500 uppercase text-xs font-semibold px-3 py-1 rounded-full">
              Priority
            </span>
          )}
          <span className="tracking-wide text-green-50 bg-green-500 uppercase text-xs font-semibold px-3 py-1 rounded-full">
            {status} order
          </span>
        </div>
      </div>

      <div className="rounded bg-stone-200 p-3 flex justify-between items-center flex-wrap gap-2">
        <p>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <ul className="divide-stone-200 divide-y border-b border-t">
        {cart.map((item) => (
          <OrderItem
            item={item}
            key={item.pizzaId}
            isLoadingIngredients={fetcher.state === "loading"}
            ingredients={
              fetcher?.data?.find((i) => i.id === item.pizzaId).ingredients ??
              []
            }
          />
        ))}
      </ul>

      <div className="bg-stone-200 p-3 rounded space-y-2">
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className="font-semibold text-stone-800">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>

      {!priority && <UpdateOrder order={order} />}
    </div>
  );
}

export const loader = async ({ params }) => {
  const { orderid } = params;
  const data = await getOrder(orderid);
  return data;
};

export default Order;
