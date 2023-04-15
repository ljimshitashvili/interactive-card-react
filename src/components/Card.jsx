import styled from "styled-components";
import cardLogo from "/public/card-logo.svg";

function Card({ name, cardNumber, month, year, cvc }) {
  return (
    <CardContainer>
      <div className="backCard">
        <p>{cvc}</p>
      </div>
      <div className="frontCard">
        <img src={cardLogo} alt="card logo" />
        <div>
          <h2>{cardNumber}</h2>
          <div>
            <p>{name}</p>
            <p>
              {month}/{year}
            </p>
          </div>
        </div>
      </div>
    </CardContainer>
  );
}

export default Card;

const CardContainer = styled.div`
  width: 100%;
  max-width: 375px;
  height: 280px;
  position: relative;
  p {
    font-weight: 500;
    font-size: 9px;
    line-height: 11px;
    letter-spacing: 1.28571px;
    text-transform: uppercase;
    color: #ffffff;
  }

  .frontCard {
    width: 285px;
    height: 156px;
    border-radius: 6px;
    background-image: url(/public/bg-card-front.png);
    background-size: 100%;
    background-repeat: no-repeat;
    position: absolute;
    top: 126px;
    left: -7px;
    gap: 37px;
    display: flex;
    flex-direction: column;
    padding: 19px;

    img {
      height: 30px;
      width: 54px;
    }

    h2 {
      font-weight: 500;
      font-size: 18px;
      line-height: 23px;
      letter-spacing: 2.2px;
      color: #ffffff;
    }
    div {
      display: flex;
      flex-direction: column;
      gap: 17px;
      div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
    }
  }

  .backCard {
    width: 285px;
    height: 156px;
    border-radius: 6px;
    background-image: url(/public/bg-card-back.png);
    background-size: 100%;
    background-repeat: no-repeat;
    position: absolute;
    top: 32px;
    left: 49px;
    position: relative;

    p {
      position: absolute;
      top: 73px;
      right: 37px;
    }
  }
`;
