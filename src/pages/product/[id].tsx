import { useRouter } from "next/router";
import { styled } from "../../styles";

const Button = styled("button", {
  backgroundColor: "$rocketseat",
  borderRadius: 6,
  border: 0,
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
