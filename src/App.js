import { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Card from "./components/Card";
import Footer from "./components/Footer";
import { data } from "./data/productData";

function App() {
  const [count, setCount] = useState(0);

  const cartCountHandler = (isAdded) => {
    isAdded ? setCount(count - 1) : setCount(count + 1);
  };

  return (
    <div>
      <Navbar cartCount={count} />
      <Header />
      <Section>
        {data.map((productData) => {
          return (
            <Card
              key={productData.id}
              productData={productData}
              onAddToCart={cartCountHandler}
            />
          );
        })}
      </Section>
      <Footer />
    </div>
  );
}

export default App;
