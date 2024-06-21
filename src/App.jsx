import "./App.css";
import { CartProvider } from "./Components/CartContext";
import MobileAccessories from "./Components/MobileAccessories";

function App() {
  return (
    <>
      <div className="w-full ">
        <CartProvider>
          <MobileAccessories />
        </CartProvider>
      </div>
    </>
  );
}

export default App;
