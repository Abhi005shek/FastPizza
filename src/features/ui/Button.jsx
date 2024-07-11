import { Link } from "react-router-dom";

const Button = ({ children, disabled, to, type, onclick }) => {
  // const classname =
  //   "bg-lime-400 inline-block px-4 py-3 uppercase font-semibold rounded-full disabled:cursor-not-allowed";

  const classname =
    "bg-lime-400 text-sm inline-block uppercase font-semibold rounded-full disabled:cursor-not-allowed ";
  const styles = {
    primary: classname + " px-4 py-3",
    small: classname + " px-3 py-2 text-xs",
    round: classname + " px-4 py-2 text-sm",
    secondary:
      "border-2 text-sm hover:bg-lime-400 border-stone-300 inline-block uppercase font-semibold rounded-full disabled:cursor-not-allowed  px-4 py-3",
  };
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onclick) {
    return (
      <button onClick={onclick} className={styles[type]}>
        {children}
      </button>
    );
  }

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
};

export default Button;
