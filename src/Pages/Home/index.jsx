import { useContext } from "react";
import { Card } from "../../Card";
import { ProductDetail } from "../../Components/ProductDetail";
import { ShoppingContext } from "/src/Context/index";
import "./styles.css";

function Home() {
  const context = useContext(ShoppingContext);

  const renderView = () => {
    if (context.searchByTitle?.length > 0) {
      if (context.filteredItems?.length > 0) {
        return (
          <>
            {context.filteredItems.map((item) => (
              <Card key={item.id} data={item} />
            ))}
          </>
        );
      } else {
        return <div>We don't have any matching items.</div>;
      }
    } else {
      return (
        <>
          {context.items?.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </>
      );
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {renderView()}
      </div>
      <ProductDetail />
    </div>
  );
}

export { Home };
