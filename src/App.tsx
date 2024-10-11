import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { getStarWarsCharactors } from "./store/slices/SWCharactorsSlice";

function App() {

    const dispatch = useDispatch<AppDispatch>()

    const { swChractors, isLoadingCharactors, totalPages } = useSelector((state: RootState) => state.swSlice)

    const [page, setPage] = useState<number>(1)

    useEffect(() => {
        dispatch(getStarWarsCharactors({ page }))
    }, [page])

    return (
        <>
            <p>Current Page = {page}</p>
            <button disabled={page === 1} onClick={() => setPage((prev) => prev - 1)} > Previous </button>
            {Array(totalPages).fill(1).map((_, index) => <button onClick={() => setPage(index + 1)} >{index + 1}</button>)}
            <button disabled={page >= totalPages} onClick={() => setPage((prev) => prev + 1)} > Next </button>

            {isLoadingCharactors && <p>Loading...</p>}

            {!isLoadingCharactors && swChractors.map(({ name }) => (
                <p>{name}</p>
            ))}
        </>
    );
}

export default App;
