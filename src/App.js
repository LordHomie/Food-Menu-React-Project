import { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <CartProvider>
      {isModalVisible && <Cart onCloseModal={closeModal} />}
      <Header onShowModal={showModal} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
