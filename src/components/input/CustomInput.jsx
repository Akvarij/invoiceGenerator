import { styled } from 'styled-components'

const Label = styled.label`
    display: block;
    flex-direction: center;
    margin-bottom: 0.25rem;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 0.75rem;
    font-weight: bold;
    text-transform: uppercase;
`

const Input = styled.input`
    width: 100%;
    padding: 0.5rem;
    border: 0.5px rgba(16, 40, 73, 0.09);
    box-shadow: 0 0 17px 0 rgba(16, 40, 73, 0.09);
    border-radius: 0.25rem;
    background-color: ${({$invalid}) => $invalid ? '#fed2d2' : '#fff'};
    font-size: 1rem;
`

export const CustomInput = ({label, invalid, ...props}) => {
    return (
        <p>
            <Input {...props}/>
        </p>
    )
}