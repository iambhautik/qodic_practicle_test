import { useDispatch } from "react-redux";
import styled from "styled-components";
import { AppDispatch } from "../store";
import { toggleSidebar } from "../store/slices/themeSlice";

const HeaderWrapper = styled.header`
    background-color: #1a1a1a;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 5px rgba(255, 215, 0, 0.2);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;

    .menu-icon {
        display: none;
        font-size: 24px;
        cursor: pointer;

        @media (max-width: 768px) {
            display: block;
        }
    }
`;

export const HeaderButtonWrapper = styled.div`
    display: flex;
    gap: 10px;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const Header = () => {
    const dispatch = useDispatch<AppDispatch>();

    return (
        <HeaderWrapper>
            <div
                className='menu-icon'
                onClick={() => dispatch(toggleSidebar())}
            >
                ☰
            </div>
            <div className='user-info'>
                {/* <span className='user-name'>Welcome, User</span> */}
            </div>
            {/* <AuthButtons /> */}
        </HeaderWrapper>
    );
};
