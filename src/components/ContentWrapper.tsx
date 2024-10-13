import styled from "styled-components";

const ContentWrapper = styled.div`
    padding: 60px 20px 20px 20px; 
    
`;

export const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <ContentWrapper>
            {children}
        </ContentWrapper>
    );
}