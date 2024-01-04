import styled from "styled-components";

export const Container = styled.div`
  .titleWrap {
    font-size: 20px;
    font-weight: 700;
    color: #262626;
  }

  .contentWrap {
    margin-top: 26px;
    flex: 1;
  }

  .inputTitle {
    font-size: 12px;
    font-weight: 600;
    color: #262626;
  }

  .inputWrap {
    display: flex;
    border-radius: 8px;
    padding: 16px;
    margin-top: 8px;
    background-color: white;
    border: 1px solid #e2e0e0;
  }

  .inputWrap:focus-within {
    border: 1px solid #0f62fe;
  }

  .input {
    width: 100%;
    outline: none;
    border: none;
    height: 17px;
    font-size: 14px;
    font-weight: 400;
  }

  .input::placeholder {
    color: #dadada;
  }

  .errorMessageWrap {
    margin-top: 8px;
    color: #ef0000;
    font-size: 12px;
  }

  .bottomButton {
    width: 100%;
    height: 48px;
    border: none;
    font-weight: 700;
    background-color: #0f62fe;
    border-radius: 64px;
    color: white;
    // margin-bottom: 10px;
    cursor: pointer;
  }
  .content {
    width:300px;
  }

  .titleWrap {
      font-size: 20px;
      font-weight: 700;
      color:#262626;
  }

  .contentWrap {
      margin-top: 26px;
      flex: 1;
      /* flex: 1; 하면 contentWrap말고 다른 애들이 밑으로 붙어야하는데 안 붙음.. */
  }

  .inputTitle {
      font-size: 12px;
      font-weight: 600;
      color: #262626;
  }

  .inputWrap {
      display : flex;
      border-radius: 8px;
      padding:16px;
      margin-top: 8px;
      background-color: white;
      border: 1px solid #e2e0e0
  }

  .inputWrap:focus-within {
      border : 1px solid #0F62FE;
  }

  .input {
      width: 100%;
      outline: none;
      border: none;
      height: 17px;
      font-size: 14px;
      font-weight: 400;
  }

  .input::placeholder {
      color: #dadada;
  }

  .errorMessageWrap {
      margin-top: 8px;
      color: #ef0000;
      font-size: 12px;
  }

  /* .bottomWrap{
      position: fixed;
      
      bottom: 120px;
  } */
  .existErrorMessage{
      color: #ef0000;
      font-size : 14px;
  }
  .bottomButton {
      width: 100%;
      height: 48px;
      border: none;
      font-weight: 700;
      background-color: #0F62FE;
      border-radius: 64px;
      color: white;
      cursor: pointer;
      margin-bottom: 5%;
      /* margin-top: 40px; */
  }

  .registerLine {
      text-align: center;
      color: #bcbcbc;
      font-size: 13px;
      margin-bottom: 10px;
      .registerButton {
          border: none;
          color: black;
          background-color: white;
          text-decoration: underline;
          cursor: pointer;
      }
  }
`;
