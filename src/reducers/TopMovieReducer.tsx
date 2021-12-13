import React from 'react'
import { TopMovieActionType } from './types'

const { GET_TOP_MOVIES } = TopMovieActionType

interface TopMovie {
    imdbID: string
    Title: string
    Watched: boolean
}

type TopMovieState = TopMovie[]

type TopMovieAction = {
    type: TopMovieActionType
    payload: TopMovie[]
}

export const topMovieReducer = (state: TopMovieState, action: TopMovieAction) => {
    switch (action.type) {
        case GET_TOP_MOVIES:
            return action.payload        
        default:
            return state
    }
}