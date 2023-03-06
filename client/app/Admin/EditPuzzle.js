import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { selectSinglePuzzle, fetchSinglePuzzle, updateSinglePuzzle } from '../../features/store/singlePuzzleSlice';


const EditPuzzle = () => {
    const { id } = useParams();
    //console.log(`puzzleId from useParams in EditPuzzle: ${id}`)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    //set state for Form components to create a controlled React form
    const[name, setName] = useState('');
    const[description, setDescription] = useState('');
    const[stockQuantity, setStockQuantity] = useState(0);
    const[imgURL, setImgURL] = useState('');
    const[puzzlePieces, setPuzzlePieces] = useState('');
    const[price, setPrice] = useState(0.00);
    const[stripeId, setStripeId] = useState('');

    useEffect(() => {
        console.log(`puzzleId from useEffect in EditPuzzle: ${id}`);
        dispatch(fetchSinglePuzzle(id)); 
    }, [dispatch, id]);

    let singlePuzzle = useSelector(selectSinglePuzzle);

    //use information in state to set values to edit
    useEffect(() => {
        setName(singlePuzzle.name);
        setDescription(singlePuzzle.description);
        setStockQuantity(singlePuzzle.stockQuantity);
        setImgURL(singlePuzzle.imgURL);
        setPuzzlePieces(singlePuzzle.puzzlePieces);
        setPrice(singlePuzzle.price);
        setStripeId(singlePuzzle.stripeId);
    }, [singlePuzzle])

    const handleSubmit = async (event) => {
        event.preventDefault();
        await dispatch(updateSinglePuzzle({ id, name, description, stockQuantity, imgURL, puzzlePieces, price, stripeId }));
        navigate("/dashboard");
    }

    return (
        <div id='edit-puzzles'>
            <h1>Current Puzzle</h1>
            <Link to='/dashboard'>Return to Dashboard</Link>

            <form id='puzzle-form' onSubmit={handleSubmit}>
                <h3>Edit Puzzle Information:</h3>

                <label htmlFor='puzzleName'>
                    <strong>New Name:</strong>
                </label>
                <input 
                    type='text'
                    name='puzzleName'
                    value={name}
                    onChange={(event) => (setName(event.target.value))}
                ></input>
                <label htmlFor='description'>
                    <strong>New Description:</strong>
                </label>
                <textarea
                    type='text'
                    name='description'
                    value={description}
                    onChange={(event) => (setDescription(event.target.value))}
                    rows='5'
                    cols='50'
                ></textarea>
                <label htmlFor='puzzleName'>
                    <strong>New Stock Quantity:</strong>
                </label>
                <input 
                    type='text'
                    name='stockQuantity'
                    value={stockQuantity}
                    onChange={(event) => (setStockQuantity(event.target.value))}
                ></input>
                <label htmlFor='imageUrl'>
                    <strong>New ImageUrl:</strong>
                </label>
                <textarea
                    type='text'
                    name='imgUrl'
                    value={imgURL}
                    onChange={(event) => (setImgURL(event.target.value))}
                    rows='1'
                    cols='70'
                ></textarea>
                <label htmlFor='puzzlePieces'>
                    <strong>New Number of Pieces:</strong>
                </label>
                <input 
                    type='number'
                    name='puzzlePieces'
                    value={puzzlePieces}
                    onChange={(event) => (setPuzzlePieces(event.target.value))}
                ></input>
                <label htmlFor='price'>
                    <strong>New Price:</strong>
                </label>
                <input 
                    type='number'
                    name='price'
                    value={price}
                    onChange={(event) => (setPrice(event.target.value))}
                ></input>
                <label htmlFor='stripeId'>
                    <strong>New Stripe Id:</strong>
                </label>
                <input 
                    type='text'
                    name='stripeId'
                    value={stripeId}
                    onChange={(event) => (setStripeId(event.target.value))}
                ></input>
                <button type='submit'>Submit Changes</button>
            </form>
        </div>
    );
};

export default EditPuzzle;