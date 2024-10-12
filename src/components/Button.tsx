import styled from "styled-components";

const ButtonWrapper = styled.button`
    background-color: #ffd700;
    color: #000;
    border: none;
    padding: 8px 15px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #ffa500;
    }

    &:disabled {
        background-color: #555;
        cursor: not-allowed;
    }
`;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    btnType?: "primary" | "secondary";
}

export const Button = (props: ButtonProps) => {
    const { children, btnType, ...rest } = props;

    return <ButtonWrapper {...rest}>{children}</ButtonWrapper>;
};
