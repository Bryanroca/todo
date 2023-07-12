import { Button } from "@mui/material";
import useStore from "../store/store";
const Button1 = () => {
  const { addTodo, todos } = useStore();
  console.log(todos);
  return <Button onClick={addTodo}>asd</Button>;
};

export default Button1;
