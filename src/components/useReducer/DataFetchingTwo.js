import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

const initialState = {
    post: {},
    loading: true,
    error: ''
}

const reducer = (state,action) => {
    switch(action.type) {
        case 'FETCH_SUCCESS':
            return {
                post: action.payload,
                loading: false,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                post: {},
                loading: false,
                error: 'Something went wrong'
            }
        default:
            return state
    }
}

function DataFetchingTwo(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/1`).then(response => {
            console.log("called");
            dispatch({type: 'FETCH_SUCCESS', payload: response.data})
         }).catch(error => {
            dispatch({type: 'FETCH_ERROR'})
         }) 
    }, [])
    return (
        <div>
            {state.loading? state.loading : state.post.title}
            {state.error? state.error : ''}
        </div>
    );
}

export default DataFetchingTwo;