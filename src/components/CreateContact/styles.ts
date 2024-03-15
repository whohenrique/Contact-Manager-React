import styled from 'styled-components';

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
`;

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 8px;
    width: 500px;
    height: 400px;
    margin: auto;
    margin-top: 10%;
    padding: 20px;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const TitleModal = styled.h2`
    margin-bottom: 40px;
    color: black;
`;

export const InputField = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    transition: border-color 0.3s;

    &:focus {
        border-color: #007bff;
    }
`;

export const SubmitButton = styled.button`
    padding: 10px 100px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0056b3;
    }
`;
