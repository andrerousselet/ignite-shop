import { stripe } from "../lib/stripe";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { HomeContainer, Product } from "../styles/pages/home";
import { useKeenSlider } from "keen-slider/react";

import "keen-slider/keen-slider.min.css";
import Stripe from "stripe";
import { formatPrice } from "../utils/formatPrice";

interface HomeProps {
  products: {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
  }[];
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map((product) => {
        const { id, name, description, imageUrl, price } = product;
        return (
          <Product key={id} className="keen-slider__slide">
            <Image src={imageUrl} alt="" width={520} height={480} />
            <footer>
              <strong>{name}</strong>
              <span>{formatPrice(price)}</span>
            </footer>
          </Product>
        );
      })}
    </HomeContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;
    return {
      id: product.id,
      name: product.name,
      description: product.description,
      price: price.unit_amount / 100,
      imageUrl: product.images[0],
    };
  });

  return {
    props: { products },
  };
};
