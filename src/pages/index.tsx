import { stripe } from "../lib/stripe";
import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
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
          <Link href={`/product/${id}`} key={id}>
            <Product className="keen-slider__slide">
              <Image src={imageUrl} alt="" width={520} height={480} />
              <footer>
                <strong>{name}</strong>
                <span>{price}</span>
              </footer>
            </Product>
          </Link>
        );
      })}
    </HomeContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;
    return {
      id: product.id,
      name: product.name,
      description: product.description,
      price: formatPrice(price.unit_amount / 100),
      imageUrl: product.images[0],
    };
  });

  return {
    props: { products },
    revalidate: 60 * 60 * 2, // every 2 hours
  };
};
