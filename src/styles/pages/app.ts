import { styled } from "..";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  minHeight: "100vh",
});

export const Header = styled("header", {
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const HandbagContainer = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0.75rem",
  backgroundColor: "$gray800",
  position: "relative",
});

export const CartQty = styled("div", {
  position: "absolute",
  top: -10,
  right: -10,
  border: "3px solid #121214",
  borderRadius: "100%",
  width: 27,
  height: 27,
  backgroundColor: "$green500",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  span: {
    color: "$white",
    fontSize: 14,
    fontWeight: "bold",
  },
});
