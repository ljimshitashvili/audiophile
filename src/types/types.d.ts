/// <reference types="vite/client" />

type ContextProps = {
  menu: Boolean;
  setMenu(menu: Boolean): void;
  cartObject: CartObject[];
  setCartObject(cartObject: CartObject[]): void;
  cart: Boolean;
  setCart(cart: Boolean): void;
  total: number;
  submit: Boolean;
  setSubmit(submit: Boolean): void;
};

type CartObject = {
  name: string | undefined;
  price?: number;
  quantity: number;
  img: string;
};

type Product = {
  id: number;
  slug: string;
  name: string;
  model: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  category: string;
  categoryImage: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: {
    quantity: number;
    item: string;
  }[];
  gallery: {
    first: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    second: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    third: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  };
  others: {
    slug: string;
    name: string;
    image: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }[];
};
