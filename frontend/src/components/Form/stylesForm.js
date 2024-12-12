// import styled from "styled-components";

// export const formContainer = styled.form`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     padding: 5px 8px;
//     @media (max-width: 420px) {
//         flex-direction: column;
//     }
// `;

// export const Input = styled.input`
//     background-color: f7f7f7;
//     width: 100%;
//     padding: 8px;
//     border: 1px solid #ef7360;
//     border-radius: 8px

//     :focus {
//     border: 3px solid #ef7360;
//     outline: none;
//     }
//     `;

// export const Button = styled.button`
//     background-color: #ef7360;
//     border-radius: 18px;
//     border: 2px solid #ef7360;
//     color: white;
//     margin-left: 1em;
//     padding: 8px 20px;
//     cursor: pointer;
//     font-size: 0.8rem;
//     font-weight: 600;
//     @media (max-width: 420px) {
//         margin-top: 10px;
//         margin-left: 0;
//         width: 100%;
//     }
// `;

import styled from "styled-components";

export const formContainer = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;
    border: 1px solid #ddd;
    border-radius: 10px;
    background-color: #fffff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

    @media (max-width: 420px) {
        flex-direction: column;
        padding: 15px;
    }
`;

export const Input = styled.input`
    background-color: #f9f9f9;
    width: 100%;
    padding: 30px;
    border: 1px solid #ccc;
    border-radius: 8px;
    transition: border 0.3s ease;
    font-size: 3rem;

    :focus {
        border: 2px solid #ef7360;
        outline: none;
        background-color: #fff;
    }
`;

export const Button = styled.button`
    background-color: green;
    border-radius: 20px;
    border: none;
    color: #fff;
    margin-left: 1em;
    margin-top: 3em;
    padding: 15px 30px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    transition: background-color 0.3s ease;

    :hover {
        background-color: #d96050;
    }

    @media (max-width: 420px) {
        margin-top: 10px;
        margin-left: 0;
        width: 100%;
    }
`;
