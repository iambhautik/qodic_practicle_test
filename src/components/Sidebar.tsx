import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { AppDispatch, RootState } from "../store";
import { toggleSidebar } from "../store/slices/themeSlice";
import { AuthButtons } from "./AuthButtons";

const SidebarWrapper = styled.div<{ open: boolean }>`
    position: fixed;
    top: 0;
    left: ${(props) => (props.open ? "0" : "-250px")};
    width: 250px;
    height: 100%;
    background-color: #1a1a1a;
    transition: left 0.3s ease;
    z-index: 1000;
    padding: 20px;
    box-sizing: border-box;

    span.close-btn {
        font-size: 30px;
    }
`;

export const Sidebar = () => {
    const dispatch = useDispatch<AppDispatch>();

    const { sidebarStatus } = useSelector(
        (state: RootState) => state.themeSlice,
    );
    return (
        <SidebarWrapper open={sidebarStatus}>
            <div onClick={() => dispatch(toggleSidebar())}>
                {" "}
                <span className='close-btn'>&times;</span>
            </div>
            <AuthButtons />
        </SidebarWrapper>
    );
};
