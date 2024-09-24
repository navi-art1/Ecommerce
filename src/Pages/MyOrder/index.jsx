import "../App/App.css";
import { useContext, useEffect, useState } from "react";
import { ShoppingContext } from "../../Context";
import "./styles.css";

function MyOrder() {
  const context = useContext(ShoppingContext);

  const shortenTitle = (title, maxLength) => {
    return title.length > maxLength
      ? title.substring(0, maxLength) + "..."
      : title;
  };

  return (
    <div className="CardOrden">


      <div className="grid grid-cols-2 gap-10">
        {context.orderHistory.length > 0 ? (
          context.orderHistory.map((order, orderIndex) => (
            <div style={{ width: "800px" }} key={orderIndex} className="mb-4">
              <p className="font-bold text-2xl mb-4">
                Pedido #{orderIndex + 1} - {order.date}
              </p>

              <div className="grid grid-cols-2 gap-10 Grilla">
                <div className="h-[500px] w-[800px] border-2 border-gray-400 flex flex-col items-center justify-center p-5 rounded-2xl">
                  <p className="font-bold text-2xl mb-4">Detalles del Pedido</p>

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
                      {order.products.map((producto, index) => (
                        <div
                          key={index}
                          className={`grid grid-cols-5 w-[700px] h-[72px] items-center border-b border-white ${
                            index % 2 === 0 ? "bg-[#040517]" : "bg-[#1f2a3c]"
                          }`}
                        >
                          <img
                            className="h-[52px] w-[52px] justify-self-center rounded-lg"
                            src={producto.image}
                            alt={producto.title}
                          />
                          <p className="text-center">
                            {shortenTitle(producto.title, 25)}
                          </p>
                          <p className="text-center">{producto.quantity}</p>
                          <p className="text-center">
                            ${producto.price.toFixed(2)}
                          </p>
                          <p className="text-center">
                            ${(producto.price * producto.quantity).toFixed(2)}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Table Footer */}
                    <div className="table-footer">
                      <p className="text-right font-bold mt-5 mr-4">
                        Total Final: ${order.totalPrice}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No hay pedidos aún.</p>
        )}
      </div>
    </div>
  );
}

export { MyOrder };
