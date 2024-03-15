import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height:150px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;

    .header{
    width: 1024px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    
    .header-title{
        font-size: 30px;
        display: flex;
        align-items: center;
    }
    .header-buttonAdd{
        background-color: #F64348;
        color: white;
        border: none;
        border-radius: 5px;
        width: 150px;
        height: 40px;
        font-size: 16px;
    }
    .header-buttonAdd:hover{
        opacity: 0.8;
        cursor: pointer;
        color: black;
    }
}
`;