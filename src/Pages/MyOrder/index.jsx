import "../App/App.css";
import { useContext } from "react";
import { ShoppingContext } from "../../Context";
import { OrdenCard } from "../../Components/OrderCard";
import "./styles.css";

function MyOrder() {
  const context = useContext(ShoppingContext);

  return (
    <div className="CardOrden">
      <div className="text-xl font-bold mb-4">My Order</div>
  
      <div className="grid grid-cols-2 gap-10 Grilla">
        <div className="h-[500px] w-[800px] border-2 border-gray-400 flex flex-col items-center justify-center p-5 rounded-2xl">
          <p className="font-bold text-2xl mb-4">Primer Pedido</p>
  
          <div className="table">
            {/* Table Header */}
            <div className="grid grid-cols-5 w-[700px] h-[56px] bg-[#1f2a3c] border-b border-white items-center">
              <p className="text-center">Producto</p>
              <p className="text-center">Nombre</p>
              <p className="text-center">Cantidad</p>
              <p className="text-center">Precio Unitario</p>
              <p className="text-center">Precio Total</p>
            </div>
  
            {/* Table Body */}
            <div className="h-[288px] overflow-y-scroll table-body">
              {["Producto 1", "Producto 2", "Producto 3", "Producto 4"].map(
                (producto, index) => (
                  <div
                    key={index}
                    className={`grid grid-cols-5 w-[700px] h-[72px] items-center border-b border-white ${
                      index % 2 === 0 ? "bg-[#040517]" : "bg-[#1f2a3c]"
                    }`}
                  >
                    <img
                      className="h-[52px] w-[52px] justify-self-center rounded-lg"
                      src="/public/power.png"
                      alt={producto}
                    />
                    <p className="text-center">{producto}</p>
                    <p className="text-center">2</p>
                    <p className="text-center">$20.00</p>
                    <p className="text-center">$40.00</p>
                  </div>
                )
              )}
            </div>
  
            {/* Table Footer */}
            <div className="table-footer">
              <p className="text-right font-bold mt-5 mr-4">Total Final: $ Total</p>
            </div>
          </div>
        </div>

        <div className="h-[500px] w-[800px] border-2 border-gray-400 flex flex-col items-center justify-center p-5 rounded-2xl">
          <p className="font-bold text-2xl mb-4">Primer Pedido</p>
  
          <div className="table">
            {/* Table Header */}
            <div className="grid grid-cols-5 w-[700px] h-[56px] bg-[#1f2a3c] border-b border-white items-center">
              <p className="text-center">Producto</p>
              <p className="text-center">Nombre</p>
              <p className="text-center">Cantidad</p>
              <p className="text-center">Precio Unitario</p>
              <p className="text-center">Precio Total</p>
            </div>
  
            {/* Table Body */}
            <div className="h-[288px] overflow-y-scroll table-body">
              {["Producto 1", "Producto 2", "Producto 3", "Producto 4"].map(
                (producto, index) => (
                  <div
                    key={index}
                    className={`grid grid-cols-5 w-[700px] h-[72px] items-center border-b border-white ${
                      index % 2 === 0 ? "bg-[#040517]" : "bg-[#1f2a3c]"
                    }`}
                  >
                    <img
                      className="h-[52px] w-[52px] justify-self-center rounded-lg"
                      src="/public/power.png"
                      alt={producto}
                    />
                    <p className="text-center">{producto}</p>
                    <p className="text-center">2</p>
                    <p className="text-center">$20.00</p>
                    <p className="text-center">$40.00</p>
                  </div>
                )
              )}
            </div>
  
            {/* Table Footer */}
            <div className="table-footer">
              <p className="text-right font-bold mt-5 mr-4">Total Final: $ Total</p>
            </div>
          </div>
        </div>

        <div className="h-[500px] w-[800px] border-2 border-gray-400 flex flex-col items-center justify-center p-5 rounded-2xl">
          <p className="font-bold text-2xl mb-4">Primer Pedido</p>
  
          <div className="table">
            {/* Table Header */}
            <div className="grid grid-cols-5 w-[700px] h-[56px] bg-[#1f2a3c] border-b border-white items-center">
              <p className="text-center">Producto</p>
              <p className="text-center">Nombre</p>
              <p className="text-center">Cantidad</p>
              <p className="text-center">Precio Unitario</p>
              <p className="text-center">Precio Total</p>
            </div>
  
            {/* Table Body */}
            <div className="h-[288px] overflow-y-scroll table-body">
              {["Producto 1", "Producto 2", "Producto 3", "Producto 4"].map(
                (producto, index) => (
                  <div
                    key={index}
                    className={`grid grid-cols-5 w-[700px] h-[72px] items-center border-b border-white ${
                      index % 2 === 0 ? "bg-[#040517]" : "bg-[#1f2a3c]"
                    }`}
                  >
                    <img
                      className="h-[52px] w-[52px] justify-self-center rounded-lg"
                      src="/public/power.png"
                      alt={producto}
                    />
                    <p className="text-center">{producto}</p>
                    <p className="text-center">2</p>
                    <p className="text-center">$20.00</p>
                    <p className="text-center">$40.00</p>
                  </div>
                )
              )}
            </div>
  
            {/* Table Footer */}
            <div className="table-footer">
              <p className="text-right font-bold mt-5 mr-4">Total Final: $ Total</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
}

export { MyOrder };
