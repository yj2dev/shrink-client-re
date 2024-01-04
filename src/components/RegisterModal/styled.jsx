import styled from "styled-components";

export const Container = styled.div`
    width:300px;

    .titleWrap {
        font-size: 20px;
        font-weight: 700;
        color:#262626;
    }

    .contentWrap {
        margin-top: 26px;
        flex: 1;
    }

    .inputTitle {
        font-size: 14px;
        font-weight: 600;
        color: #262626;
        margin-left: 5px;
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
        font-size: 14px;
    }
    .timeCountingWrap {
        color : #1555cb;
        font-weight: 400;
    }

    .phone-Button {
        width: 100%;
        height: 48px;
        border: none;
        font-weight: 700;
        background-color: #0F62FE;
        border-radius: 64px;
        color: white;
        cursor: pointer;
        margin-bottom: 3%;
        margin-top: 8%;
    }

    .code-Button {
        width: 100%;
        height: 48px;
        border: none;
        font-weight: 700;
        background-color: #0F62FE;
        border-radius: 64px;
        color: white;
        cursor: pointer;
        margin-bottom: 3%;
        margin-top: 8%;
    }

    .register-Button {
        width: 100%;
        height: 48px;
        border: none;
        font-weight: 700;
        background-color: #0F62FE;
        border-radius: 64px;
        color: white;
        cursor: pointer;
        margin-bottom: 3%;
        margin-top: 8%;
    }

    .loginLine {
        text-align: center;
        color: #bcbcbc;
        font-size: 13px;
        margin-bottom: 10px;
        .loginButton {
            border: none;
            color: black;
            background-color: white;
            text-decoration: underline;
            cursor: pointer;
        }
    }
`