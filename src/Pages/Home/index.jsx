import { useState, useEffect } from "react";
import { Card } from "../../Card";
import { ProductDetail } from "../../Components/ProductDetail";

function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setItems(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="text-2xl font-bold mb-4">All Products</div>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {items.map((item) => (
          <Card key={item.id} data={item}
           />
        ))}
      </div>
      <ProductDetail />
    </div>
  );
}

export { Home };

