import { useRouter } from "next/router";
import { styled } from "../../styles";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/product";

export default function Product() {
  const { query } = useRouter();

  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>
      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta nulla
          hic magnam, neque vero quia nisi fugiat. Nihil quasi ut earum! Nisi
          officia pariatur eos aspernatur quas sed ex quis!
        </p>
        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
