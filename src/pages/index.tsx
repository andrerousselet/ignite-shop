import { stripe } from "../lib/stripe";
import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  HandbagContainer,
  HomeContainer,
  Product,
  ProductFooter,
} from "../styles/pages/home";
import { useKeenSlider } from "keen-slider/react";

import "keen-slider/keen-slider.min.css";
import Stripe from "stripe";
import { formatPrice } from "../utils/formatPrice";
import Head from "next/head";
import { Handbag } from "@phosphor-icons/react";

interface HomeProps {
  products: {
    id: string;
    name: string;
    price: string;
    imageUrl: string;
  }[];
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48,
    },
  });

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          const { id, name, imageUrl, price } = product;
          return (
            <Link href={`/product/${id}`} key={id} prefetch={false}>
              <Product className="keen-slider__slide">
                <Image src={imageUrl} alt="" width={520} height={480} />
                <ProductFooter>
                  <div>
                    <strong>{name}</strong>
                    <span>{price}</span>
                  </div>
                  <HandbagContainer>
                    <Handbag size={24} color="#FFFFFF" />
                  </HandbagContainer>
                </ProductFooter>
              </Product>
            </Link>
          );
        })}
      </HomeContainer>
    </>
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
      price: formatPrice(price.unit_amount / 100),
      imageUrl: product.images[0],
    };
  });

  return {
    props: { products },
    revalidate: 60 * 60 * 2, // every 2 hours
  };
};
