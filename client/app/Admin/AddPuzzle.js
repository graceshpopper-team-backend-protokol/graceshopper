import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createPuzzle } from '../../features/store/singlePuzzleSlice';
import { fetchPuzzles } from '../../features/store/allPuzzlesSlice';


const AddPuzzle = () => {
    //const { id } = useParams();
    const dispatch = useDispatch();
    //const navigate = useNavigate();

    //set state for Form components to create a controlled React form
    const[name, setName] = useState('');
    const[description, setDescription] = useState('');
    const[stockQuantity, setStockQuantity] = useState(0);
    const[imgURL, setImgURL] = useState('');
    const[puzzlePieces, setPuzzlePieces] = useState('250 pieces');
    const[price, setPrice] = useState(0.00);
    const[stripeId, setStripeId] = useState('');

    // useEffect(() => {
    //     dispatch(fetchSinglePuzzle(id)); 
    // }, [dispatch, id]);

    // let singlePuzzle = useSelector(selectSinglePuzzle);

    const handleSubmit = async (event) => {
        event.preventDefault();
        await dispatch(createPuzzle({ name, description, stockQuantity, imgURL, puzzlePieces, price, stripeId }));
        console.log("New puzzle added!")
        //this fetches the list of puzzles with the new puzzle added
        await dispatch(fetchPuzzles());

        //reset form to blank
        setName('');
        setDescription('');
        setStockQuantity(0);
        setImgURL('');
        setPuzzlePieces('250 pieces');
        setPrice(0.00);
        setStripeId('');
    }

    return (
        <div id='add-puzzle'>
            <h2>Add a New Puzzle</h2>

            <form id='add-puzzle-form' onSubmit={handleSubmit}>
                <label htmlFor='puzzleName'>
                    <strong>New Puzzle Name:</strong>
                </label>
                <input 
                    type='text'
                    name='puzzleName'
                    value={name}
                    onChange={(event) => (setName(event.target.value))}
                ></input>
                <label htmlFor='description'>
                    <strong>Description:</strong>
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
                    <strong>Stock Quantity:</strong>
                </label>
                <input 
                    type='text'
                    name='stockQuantity'
                    value={stockQuantity}
                    onChange={(event) => (setStockQuantity(event.target.value))}
                ></input>
                <label htmlFor='imageUrl'>
                    <strong>ImageUrl:</strong>
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
                    <strong>Number of Pieces:</strong>
                    <div className="select-options">
                        <select name="sort" onChange={(event) => (setPuzzlePieces(event.target.value))}>
                        <option value="null"> </option>
                        <option value="250 pieces">250 pieces</option>
                        <option value="500 pieces">500 pieces</option>
                        <option value="1000 pieces">1000 pieces</option>
                        </select>
                    </div>
                </label>
                <label htmlFor='price'>
                    <strong>Price:</strong>
                </label>
                <input 
                    type='number'
                    name='price'
                    value={price}
                    onChange={(event) => (setPrice(event.target.value))}
                ></input>
                <label htmlFor='stripeId'>
                    <strong>Stripe Id:</strong>
                </label>
                <input 
                    type='text'
                    name='stripeId'
                    value={stripeId}
                    onChange={(event) => (setStripeId(event.target.value))}
                ></input>
                <button type='submit'>Submit New Puzzle</button>
            </form>
        </div>
    );
};

export default AddPuzzle;