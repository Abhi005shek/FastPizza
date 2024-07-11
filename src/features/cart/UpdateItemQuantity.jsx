import React from "react";
import Button from "../ui/Button";
import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

const UpdateItemQuantity = ({ id, quantity }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-2 items-center">
      <Button type={"round"} onclick={() => dispatch(decreaseItemQuantity(id))}>
        -
      </Button>
      {quantity}
      <Button type={"round"} onclick={() => dispatch(increaseItemQuantity(id))}>
        +
      </Button>
    </div>
  );
};

export default UpdateItemQuantity;
