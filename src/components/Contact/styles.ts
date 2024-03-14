import styled from "styled-components";

export const Button = styled.button`
    border: none;
    color: black;
    width: 60px;
    height: 30px;
    text-align: center;
    text-decoration: none;
    font-size: 14px;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
    .button-delete {
        background-color: #F64348;
        border: none;
        color: white;
        width: 60px;
        height: 30px;
        text-align: center;
        text-decoration: none;
        font-size: 14px;
        border-radius: 4px;
        cursor: pointer;
    }
    .button-update {
        background-color: blue;
        border: none;
        color: white;
        width: 60px;
        height: 30px;
        text-align: center;
        text-decoration: none;
        font-size: 14px;
        border-radius: 4px;
        cursor: pointer;
    }
`;