import styled from 'styled-components';
import React from 'react';
import PulseLoader from 'react-spinners/PulseLoader';
import { Typography } from '@material-ui/core';
import harrypotter from './harrypotter.jpg';

const FlexBox = styled.div`
    display: flex
`;

const BookContainer = styled.div`
    height: 300px;
    width: 250px;
    border: 1px solid white;
    margin: 10px;
`;

const formatPrice = (price) => `$${Number(price).toFixed(2)}`

const BookImage = styled.img`
    max-height: 200px;
`;

const Book = ({ book: {name, author, price, imgUrl} = {}}) => {
    console.error({name, author, price})
    return <BookContainer>
        <Typography variant='h5'>{name}</Typography>
        {imgUrl && <BookImage alt='book' src={imgUrl}/>}
        <Typography variant='h6'>{price && formatPrice(price)}</Typography>
    </BookContainer>;
};

const Row = ({books = []}) => <FlexBox>
    <Book book={books[0]}/>
    <Book book={books[1]}/>
    <Book book={books[2]}/>
</FlexBox>;

export const Dashboard = () => {
    const [books, setBooks] = React.useState(undefined);
    
    const getBooks = () => {
        return Promise.resolve([
            {
                name: `Harry Potter et le prisonnier d'Azkaban`,
                author: 'J.K. Rowling',
                price: 5,
                imgUrl: harrypotter
            }
        ]);
    };

    React.useEffect(() => {
        getBooks().then(setBooks)
    }, [])
    return books ? <>
        <Row books={books.slice(0, 3)}/>
        <Row books={books.slice(3, 7)}/>
        <Row books={books.slice(7, 10)}/>
    </> : <PulseLoader color='white' size={100} loading={true}/>;
}