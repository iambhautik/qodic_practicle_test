import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
    background-color: #222;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(255, 215, 0, 0.3);
    transition: transform 0.3s ease;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
    }
`;

const CharactorInfoWrapper = styled.div`
    padding: 10px;
`;

const CharactorImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`;

const CharacterName = styled.div`
    font-weight: bold;
    margin-bottom: 5px;
    color: #fff;
`;

const CharactorInfo = ({ CharName }: { CharName: string }) => {
    return (
        <CharactorInfoWrapper>
            <CharacterName className='character-name'>{CharName}</CharacterName>
        </CharactorInfoWrapper>
    );
};

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    CharName: string;
    imageId: number;
    onClick: () => void;
}

const Card = (props: CardProps) => {
    const { CharName, imageId, ...restProps } = props;
    return (
        <CardWrapper {...restProps}>
            <CharactorImage
                src={`https://picsum.photos/id/${imageId}/200/300`}
                alt='Luke Skywalker'
            />
            <CharactorInfo CharName={CharName} />
        </CardWrapper>
    );
};

export default React.memo(Card);
