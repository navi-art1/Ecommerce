# DevMarket

**DevMarket** es una aplicación de e-commerce desarrollada con React, enfocada en proporcionar una experiencia de compra en línea intuitiva y eficiente. Este proyecto tiene como objetivo poner en práctica habilidades avanzadas de desarrollo frontend, gestión de estado y diseño de interfaces con un enfoque en la escalabilidad y mantenibilidad.

## Descripción del Proyecto

**DevMarket** permite a los usuarios explorar un catálogo de productos, ver detalles específicos, agregar productos a un carrito de compras, y realizar un checkout simulado. El enfoque principal fue la implementación de una estructura robusta para la gestión del estado global y una experiencia de usuario fluida a través de animaciones y transiciones cuidadosas.

### Funcionalidades Principales

- **Navegación por Categorías**: Los usuarios pueden filtrar productos por categorías a través de la barra de navegación.
- **Detalles del Producto**: Cada producto tiene su propio modal de detalles, mostrando la imagen, descripción y precio.
- **Carrito de Compras**: Los usuarios pueden añadir productos al carrito, aumentar o disminuir las cantidades, y eliminar productos.
- **Historial de Pedidos**: Implementación de un sistema para revisar los pedidos anteriores.
- **Animaciones Fluidas**: Uso de `react-transition-group` para animaciones suaves en la apertura/cierre de modales y sidebars.
- **Gestión de Estado Global**: Utilizando Context API para manejar el estado del carrito, detalles de productos y apertura de componentes.
  
## Ciclo de Vida del Desarrollo

1. **Diseño de Interfaz en Figma**: La interfaz fue diseñada y prototipada en Figma, garantizando una experiencia de usuario fluida y centrada en la simplicidad.
2. **Desarrollo con React**: React se utilizó para implementar la interfaz de usuario dinámica y modular.
3. **Implementación de Context API**: Se usó Context API para manejar el estado global de la aplicación de manera eficiente.
4. **Despliegue en GitHub Pages**: El proyecto está desplegado en [Github Pages](https://www.netlify.com/) para una fácil visualización pública y acceso instantáneo a la aplicación.

## Tecnologías Utilizadas

- **React**: Utilizado para construir la interfaz de usuario interactiva y modular.
- **JavaScript (ES6+)**: Para la lógica de la aplicación y la manipulación del DOM.
- **React Context API**: Implementado para manejar el estado global de la aplicación.
- **CSS3 con BEM**: Se utilizó BEM para mantener un código CSS modular, legible y mantenible.
- **React Transition Group**: Para animaciones de transiciones fluidas entre componentes.
- **Netlify**: Para el despliegue rápido y eficiente del proyecto.

## Tecnologías Adicionales Utilizadas

- **Vite**: Utilizado como herramienta de construcción rápida y eficiente para el desarrollo de la aplicación.
- **Tailwind CSS**: Implementado para el diseño responsivo y la personalización rápida de estilos mediante utilidades CSS.

## Diseño en Figma

El diseño de la interfaz de usuario fue realizado en Figma, permitiendo una visualización clara del layout antes de la implementación. Puedes ver el diseño completo en el siguiente enlace:

[Ver Diseño en Figma](https://www.figma.com/design/SzNvZpyOA2Jpy68Iyh6pmM/Task-Master?node-id=0-1&t=TCBsJYsmUAvaQt6y-1)


## Despliegue


TaskMaster ha sido desplegado utilizando GitHub Pages y está disponible en el siguiente enlace:

[Ver DevMarket en GitHub Pages](https://navi-art1.github.io/Ecommerce/)


## Estructura del Proyecto

El proyecto está organizado de manera modular para permitir la escalabilidad y el mantenimiento eficiente. Los componentes principales son:

- **ProductDetail**: Muestra los detalles del producto seleccionado en un modal.
- **CheckoutSideMenu**: Sidebar para gestionar los productos en el carrito de compras.
- **MyOrder**: Visualiza los detalles del pedido actual y los pedidos anteriores.
- **Navbar**: Permite navegar por las diferentes categorías de productos.
- **OrderCard**: Muestra la información del producto en el carrito, con funcionalidad para aumentar/disminuir cantidad y eliminar productos.

## Cómo Empezar

Sigue estos pasos para ejecutar el proyecto localmente:

### Clonar el Repositorio

- git clone https://github.com/yourusername/DevMarket.git

### Instalar Dependencias

- npm install

### Iniciar el Servidor de Desarrollo 

- npm start dev

### construir para producción

- npm run build
