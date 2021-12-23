import { createContext, ReactNode, useReducer } from "react"
import { topMovieReducer, TopMovieState } from "../reducers/TopMovieReducer"
import { TopMovieActionType } from "../reducers/types"
import topMoviesInfo from "../api/getTopMovies"

const  { GET_TOP_MOVIES, TOGGLE_TOP_MOVIE_WATCHED } = TopMovieActionType

interface TopMovieContextProps {
    children: ReactNode
}
interface TopMovieContextDefault {
    topMovies: TopMovieState
    getTopMovies: () => Promise<void>
    toggleWatched: (id: string) => void

}
const topMovieDefault: TopMovieState = []
export const TopMovieContext = createContext<TopMovieContextDefault>({
    topMovies: topMovieDefault,
    getTopMovies: () => Promise.resolve(void 0),
    toggleWatched: (id: string) => {}
})


const TopMovieContextProvider = ({ children }: TopMovieContextProps) => {
    const [topMovies, dispatch] = useReducer(topMovieReducer, topMovieDefault)

    // get top movies from api
    const getTopMovies = async () => {
        const topMovies = await Promise.all(topMoviesInfo)
        dispatch({
            type: GET_TOP_MOVIES,
            payload: topMovies.map(topMovie => ({ ...topMovie.data, Watched: false }))
        })
    }
    // toggle watched
    const toggleWatched = (imdbID: string) => 
        dispatch({ type: TOGGLE_TOP_MOVIE_WATCHED, payload: imdbID })

    const topMovieContextData = {
        topMovies,
        getTopMovies,
        toggleWatched
    }
    return (
        <TopMovieContext.Provider value={topMovieContextData}>
            {children}
        </TopMovieContext.Provider>
    )
}

export default TopMovieContextProvider