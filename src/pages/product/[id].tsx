import { useRouter } from "next/router";
import { styled } from "../../styles";

const Button = styled("button", {
  backgroundColor: "$green300",
  padding: 10,
});

export default function Product() {
  const { query } = useRouter();

  return (
    <>
      <h1>Product: {JSON.stringify(query)}</h1>
      <Button>Enviar</Button>
    </>
  );
}
