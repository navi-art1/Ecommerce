import { useState, useEffect } from "react";
import { Card } from "../../Card";
import { ProductDetail } from "../../Components/ProductDetail";
import './styles.css'

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
<div className="title">
  <h2 className="text-4xl font-bold text-white mb-2">All Products</h2>
  <div className="border-b-4 border-indigo-500 mb-4" style={{ width: '1200px' }}></div>
</div>

      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {items.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      <ProductDetail />
    </div>
  );
}

export { Home };
