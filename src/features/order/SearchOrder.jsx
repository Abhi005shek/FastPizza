import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const SearchOrder = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="rounded-full px-4 py-2 text-sm bg-lime-100 sm:w-64 focus:w-72 transition-all duration-300
        focus:outline-none focus:ring focus:ring-lime-100 focus:ring-opacity-40"
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Search Order Number"
        value={query}
      />
    </form>
  );
};

export default SearchOrder;
