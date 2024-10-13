import styled from "styled-components";

const SearchBarWrapper = styled.div`
    max-width: 300px;

    .search-input {
        width: 100%;
        padding: 10px 15px;
        font-size: 16px;
        border: 2px solid #ddd;
        border-radius: 25px;
        outline: none;
        transition: border-color 0.3s;
    }
    .search-input:focus {
        border-color: #4caf50;
    }
    .search-input::placeholder {
        color: #999;
    }
`;

export const SearchBar = () => {
    return (
        <SearchBarWrapper>
            <input
                type='text'
                className='search-input'
                placeholder='Search...'
            />
        </SearchBarWrapper>
    );
};
