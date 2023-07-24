import { globalStyles } from "../styles/global";
import logoImg from "../assets/logo.svg";
import {
  CartQty,
  Container,
  HandbagContainer,
  Header,
} from "../styles/pages/app";
import Image from "next/image";
import { Handbag } from "@phosphor-icons/react";

globalStyles();

export default function App({ Component, pageProps }) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
        <HandbagContainer>
          <Handbag size={24} color="#8D8D99" />
          <CartQty>
            <span>1</span>
          </CartQty>
        </HandbagContainer>
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
