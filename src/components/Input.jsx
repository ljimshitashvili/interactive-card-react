import { useState } from "react";
import styled from "styled-components";

function Input({ setname, setcardNumber, setmonth, setyear, setcvc }) {
  return (
    <Container>
      <div>
        <h1>cardholder name</h1>
        <input
          type="text"
          placeholder="e.g. Jane Applessed"
          onChange={(e) => setname(e.target.value)}
        />
      </div>
      <div>
        <h1>card number</h1>
        <input
          type="text"
          placeholder="e.g. Jane Applessed"
          onChange={(e) => setcardNumber(e.target.value)}
        />
      </div>
      <div className="lastSection">
        <div>
          <h1>exp. date (mm/yy)</h1>
          <select
            type="number"
            id="month"
            onChange={(e) => setmonth(e.target.value)}
          >
            <option value="" disabled selected>
              MM
            </option>
            <option value="1">01</option>
            <option value="2">02</option>
            <option value="3">03</option>
            <option value="4">04</option>
            <option value="5">05</option>
            <option value="6">06</option>
            <option value="7">07</option>
            <option value="8">08</option>
            <option value="9">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>

          <select
            type="age"
            min="2023"
            max="2027"
            required
            onChange={(e) => setyear(e.target.value)}
          >
            <option value="" disabled selected>
              YY
            </option>
            <option value="23">2023</option>
            <option value="24">2024</option>
            <option value="25">2025</option>
            <option value="26">2026</option>
            <option value="27">2027</option>
            <option value="28">2028</option>
          </select>
        </div>
        <div>
          <h1>cvc</h1>
          <input
            id="cvc"
            type="text"
            placeholder="e.g. 123"
            onChange={(e) => setcvc(e.target.value)}
          />
        </div>
      </div>
      <button>Confirm</button>
    </Container>
  );
}

export default Input;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 327px;

  button {
    background: #21092f;
    border-radius: 8px;
    height: 53px;
    border: none;
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    color: #ffffff;
    cursor: pointer;
    margin-top: 8px;
  }

  h1 {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #21092f;
    margin-bottom: 9px;
  }

  input {
    height: 45px;
    width: 327px;
    border-radius: 8px;
    background: #ffffff;
    border: 1px solid #dfdee0;
    padding: 0 16px;

    ::placeholder {
      font-family: "Space Grotesk";
      font-weight: 500;
      font-size: 18px;
      line-height: 23px;
      opacity: 0.5;
    }
  }

  select {
    width: 72px;
    height: 45px;
    border: 1px solid #dfdee0;
    background: #ffffff;
    border-radius: 8px;
    margin-right: 8px;
    padding: 0 10px;
  }

  #cvc {
    width: 164px;
    height: 45px;
    margin-left: 3px;
  }

  .lastSection {
    display: flex;
  }
`;
