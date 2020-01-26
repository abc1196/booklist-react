import * as types from "./types";

export const bookReducer = (state, action) => {
    switch(action.type) {
        case types.ADD_BOOK:
            return [...state, {
                id: Math.random()*100,
                title: action.book.title,
                author: action.book.author
            }];
        
        case types.REMOVE_BOOK:
            return state.filter(book => book.id !== action.id);
        default:
            return state;
    }
}