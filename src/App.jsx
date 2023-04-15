import { useState } from "react";
import styled from "styled-components";
import Card from "./components/Card";
import Input from "./components/Input";

function App() {
  const [cardNumber, setcardNumber] = useState("0000 0000 0000 0000");
  const [name, setname] = useState("jane applessed");
  const [month, setmonth] = useState("00");
  const [year, setyear] = useState("00");
  const [cvc, setcvc] = useState("000");

  return (
    <Body>
      <Card
        name={name}
        cardNumber={cardNumber}
        month={month}
        year={year}
        cvc={cvc}
      />
      <Input
        setname={setname}
        setcardNumber={setcardNumber}
        setmonth={setmonth}
        setyear={setyear}
        setcvc={setcvc}
      />
    </Body>
  );
}

export default App;

const Body = styled.main`
  width: 100%;
  min-height: 100vh;
  background-image: url("public/bg-main-mobile.png");
  background-repeat: no-repeat;
  background-size: 100% 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  gap: 48px;
`;
