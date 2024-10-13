import moment from "moment";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Card from "./components/Card";
import { Container } from "./components/ContentWrapper";
import { Header } from "./components/Header";
import { ImageGallary } from "./components/ImageGallary";
import { Loader } from "./components/Loader";
import Modal from "./components/Modal";
import { Pagination } from "./components/Pagination";
import { SearchBar } from "./components/SearchBar";
import { Sidebar } from "./components/Sidebar";
import { AppDispatch, RootState } from "./store";
import {
    getCharHomeWorldDetails,
    getStarWarsCharactors,
    resetCharactorHomeWord,
    setCharDetails,
} from "./store/slices/SWCharactorsSlice";
import { getRandomId } from "./utils/utilitues";

const CharactorInfoWrapper = styled.div`
    display: grid;
    gap: 15px;

    .info-item {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        align-items: center;
        background-color: rgba(255, 255, 255, 0.05);
        padding: 10px;
        border-radius: 8px;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: rgba(255, 255, 255, 0.1);
        }
    }

    .info-label {
        font-weight: bold;
        color: #ffe81f;
    }

    .homeworld {
        margin-top: 25px;

        h3 {
            font-size: 22px;
            margin-bottom: 15px;
            color: #ffe81f;
            text-shadow: 0 0 10px rgba(255, 232, 31, 0.5);
        }
    }
`;

function App() {
    const dispatch = useDispatch<AppDispatch>();

    const {
        swChractors,
        isLoadingCharactors,
        totalPages,
        charactorHomeWord,
        charDetails,
    } = useSelector((state: RootState) => state.swSlice);

    const [page, setPage] = useState<number>(1);
    const [modalStatus, setModalStatus] = useState<boolean>(false);

    useEffect(() => {
        dispatch(getStarWarsCharactors({ page }));
    }, [page]);

    const handleClick = useCallback(() => setModalStatus((prev) => !prev), []);

    const handleModalClick = (url: string) => {
        dispatch(getCharHomeWorldDetails({ url })).then(() => {
            handleClick();
        });
    };

    const randomIds = useMemo(() => {
        let ids: number[] = [];

        while (ids.length < swChractors.length) {
            const randomId = getRandomId(0);
            if (!ids.includes(randomId)) {
                ids.push(randomId);
            }
        }

        return ids;
    }, [swChractors]);

    return (
        <>
            <Header />
            <Sidebar />
            <Container>
                <h1>Star Wars Character Gallery</h1>
                <SearchBar />
                <ImageGallary>
                    {swChractors.map((charactor, index) => (
                        <Card
                            key={charactor.name}
                            CharName={charactor.name}
                            imageId={randomIds[index]}
                            onClick={() => {
                                dispatch(setCharDetails(charactor));
                                handleModalClick(charactor.homeworld);
                            }}
                        />
                    ))}
                </ImageGallary>
                <Pagination
                    totalPages={totalPages}
                    currentPage={page}
                    onNextPage={() => setPage(page + 1)}
                    onPreviousPage={() => setPage(page - 1)}
                    onPageChange={setPage}
                />
                <Modal
                    title={charDetails.name}
                    open={modalStatus}
                    onClose={() => {
                        dispatch(resetCharactorHomeWord());
                        handleClick();
                    }}
                >
                    <CharactorInfoWrapper>
                        <div className='info-item'>
                            <span className='info-label'>Height:</span>
                            <span>
                                {Number(charDetails.height) / 100} meters
                            </span>
                        </div>
                        <div className='info-item'>
                            <span className='info-label'>Mass:</span>
                            <span>{charDetails.mass}</span>
                        </div>
                        <div className='info-item'>
                            <span className='info-label'>Date Added: :</span>
                            <span>
                                {moment(charDetails.created).format(
                                    "DD-MM-yyyy",
                                )}
                            </span>
                        </div>
                        <div className='info-item'>
                            <span className='info-label'>Films:</span>
                            <span>{charDetails.films.length}</span>
                        </div>
                        <div className='info-item'>
                            <span className='info-label'>Birth Year:</span>
                            <span>{charDetails.birth_year}</span>
                        </div>

                        <div className='homeworld'>
                            <h3>Homeworld</h3>
                            <div className='info-item'>
                                <span className='info-label'>Name:</span>
                                <span className='text-capitalize'>
                                    {charactorHomeWord.name}
                                </span>
                            </div>
                            <div className='info-item'>
                                <span className='info-label'>Terrain:</span>
                                <span className='text-capitalize'>
                                    {charactorHomeWord.terrain}
                                </span>
                            </div>
                            <div className='info-item'>
                                <span className='info-label'>Climate:</span>
                                <span className='text-capitalize'>
                                    {charactorHomeWord.climate}
                                </span>
                            </div>
                            <div className='info-item'>
                                <span className='info-label'>Population:</span>
                                <span>{charactorHomeWord.population}</span>
                            </div>
                        </div>
                    </CharactorInfoWrapper>
                </Modal>

                {isLoadingCharactors && <Loader />}
            </Container>
        </>
    );
}

export default App;
