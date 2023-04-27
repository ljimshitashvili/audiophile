import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Checkout, Details, Category, Home } from "./pages";
import { GlobalStyles, BlackScreen } from "./styled-components";
import { Helmet } from "react-helmet";
import { Footer, Header } from "./components";
import ScrollToTop from "./ScrollOnTop";
import { createContext, useState } from "react";

export const MyContext = createContext<ContextProps | null>(null);
function App() {
  const [menu, setMenu] = useState<Boolean>(false);
  const [cart, setCart] = useState<Boolean>(false);
  const [submit, setSubmit] = useState<Boolean>(false);
  const [cartObject, setCartObject] = useState<CartObject[]>([]);

  let total = 0;

  return (
    <MyContext.Provider
      value={{
        menu,
        setMenu,
        cartObject,
        setCartObject,
        cart,
        setCart,
        total,
        setSubmit,
        submit,
      }}
    >
      <GlobalStyles />

      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <BrowserRouter>
        <ScrollToTop />
        {(menu || cart || submit) && (
          <BlackScreen
            onClick={() => {
              setMenu(false);
              setCart(false);
              setSubmit(false);
            }}
          />
        )}
        ;
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":category" element={<Category />} />
          <Route path=":category/:product" element={<Details />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
