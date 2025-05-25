import { SearchOutlined } from "@ant-design/icons";
import { useState } from "react";
import styled from "styled-components";

interface OutlinedInputProps {
    onSearch: (query: string) => void;
}

function OutlinedInput({ onSearch }: OutlinedInputProps) {
    const [value, setValue] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!value.trim()) return;
        onSearch(value);
    }

    return (
        <>
            <form
                onSubmit={handleSubmit}
                style={{
                    position: 'relative',
                    width: '100%',
                }}
            >
                <Input
                    type="search"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    hasValue={value.trim() !== ''}
                    placeholder="Buscar"
                    aria-label="Buscar"
                />
                <SearchButton type="submit">
                    <SearchOutlined style={{ fontSize: '15rem', color: 'white' }} />
                </SearchButton>
            </form>
        </>
    );
}

interface InputProps {
    hasValue: boolean;
}

const SearchButton = styled.button`
    position: absolute;
    top: 50%;
    left: 12rem;
    transform: translateY(-50%);
    background: transparent;
`

const Input = styled.input<InputProps>`
    border: none;
    background: transparent;
    margin: 0;
    outline: unset;
    width: 100%;
    height: 39rem;
    padding-left: 33rem;
    padding-right: 12rem;
    font-size: 12rem;
    border: 1px solid white;
    border-radius: 24rem;
    color: white;

&:focus-visible { 
    outline: none;
}

&::placeholder {
    color: white;
    font-size: 12rem;
}

${({ hasValue }) => hasValue && `
&::placeholder {
    opacity: 0;
}`}


&:focus::placeholder{
    opacity: 0;
}

&::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none;
  }
`;

export default OutlinedInput;