import Image from "next/image";
import { HomeContainer, Product } from "../styles/pages/home";

import shirt1 from "../assets/shirts/1.png";
import shirt2 from "../assets/shirts/2.png";
// import shirt3 from "../assets/shirts/3.png";
// import shirt4 from "../assets/shirts/4.png";

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={shirt1} alt="" width={520} height={480} />
        <footer>
          <strong>Camiseta 1</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product>
        <Image src={shirt2} alt="" width={520} height={480} />
        <footer>
          <strong>Camiseta 2</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      {/* <Product>
        <Image src={shirt3} alt="" width={520} height={480} />
        <footer>
          <strong>Camiseta 3</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product>
        <Image src={shirt4} alt="" width={520} height={480} />
        <footer>
          <strong>Camiseta 4</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product> */}
    </HomeContainer>
  );
}
