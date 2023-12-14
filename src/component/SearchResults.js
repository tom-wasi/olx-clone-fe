import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchResults({ products }) {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (Array.isArray(products)) {
      setLoading(false);
    } else {
      navigate("/not-found");
    }
  }, [navigate, products]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {Array.isArray(products) && products.length > 0 ? (
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
}

export default SearchResults;