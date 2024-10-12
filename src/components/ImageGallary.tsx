import styled from "styled-components";

const ImageGallaryWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 3fr));
    gap: 20px;
    padding: 20px;
`;

export const ImageGallary = ({ children }: { children: React.ReactNode }) => {
    return <ImageGallaryWrapper>{children}</ImageGallaryWrapper>;
};
