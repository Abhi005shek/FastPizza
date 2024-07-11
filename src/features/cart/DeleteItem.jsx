import { useDispatch } from "react-redux";
import Button from "../ui/Button";
import { deleteItem } from "./cartSlice";

const DeleteItem = ({ id }) => {
  const dispatch = useDispatch();
  return (
    <Button type={"small"} onclick={() => dispatch(deleteItem(id))}>
      Delete
    </Button>
  );
};

export default DeleteItem;