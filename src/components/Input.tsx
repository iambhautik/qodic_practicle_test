import styled from "styled-components"

const HtmlInput = styled.input`
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #dddfe2;
    border-radius: 5px;
`

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = (props: InputProps) => {

    const {...restProps} = props


    return (
        <HtmlInput
            {...restProps}
        />
    )
}