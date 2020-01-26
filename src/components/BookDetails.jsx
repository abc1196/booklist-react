import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import * as types from "../reducers/types";

const BookDetails = ({ book }) => {
    const { dispatch } = useContext(BookContext);
    return (
        <li onClick={() => dispatch({type: types.REMOVE_BOOK, id: book.id})}>
            <div className="title">
                { book.title }
            </div>
            <div className="author">
                { book.author }
            </div>
        </li>
    )
}

export default BookDetails;