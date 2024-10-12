import styled from "styled-components";
import { Button } from "./Button";

const PaginationWrapper = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    padding: 0;

    li {
        cursor: pointer;
        padding: 8px 16px;
        margin: 0 5px;
        color: #333;
        background-color: #f0f0f0;
        border-radius: 4px;
        transition: background-color 0.3s;
    }
    .active {
        background-color: #4caf50;
        color: white;
    }
`;

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPreviousPage: () => void;
    onNextPage: () => void;
    onPageChange: (page: number) => void;
}

export const Pagination = (props: PaginationProps) => {
    return (
        <PaginationWrapper className='pagination'>
            <Button
                onClick={props.onPreviousPage}
                disabled={props.currentPage === 1}
            >
                Previous
            </Button>
            {[...Array(props.totalPages)].map((_, index) => (
                <li
                    key={index}
                    className={`${props.currentPage === index + 1 ? "active" : ""}`}
                    onClick={() => props.onPageChange(index + 1)}
                >
                    {index + 1}
                </li>
            ))}
            <Button
                onClick={props.onNextPage}
                disabled={props.currentPage === props.totalPages}
            >
                Next
            </Button>
        </PaginationWrapper>
    );
};
