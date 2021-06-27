
import React, { useState } from 'react';

import { Form, Button } from 'semantic-ui-react'

const Recipe = () => {

    const [name, setName] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [directions, setDirections] = useState('')
    const [image, setImage] = useState('')
    const [category, setCategory] = useState('')

    const handleForm = e => {
        e.preventDefault()
        const newRecipe = {
            name,
            ingredients,
            directions,
            image,
            category
        }
        console.log(newRecipe)
    }

    return (
        <div>
            <Form onSubmit={ e => handleForm(e)}>
                <div> 
                    <Form.Input 
                        label="Name"
                        name="name"
                        placeholder="Name"
                        onChange={ e => setName(e.target.value) }
                    />
                </div>
                <div>
                    <Form.Input 
                        label="Ingredients"
                        name="ingredients"
                        placeholder="Please use a comma for each ingredient"
                        onChange={ e => setIngredients(e.target.value) }
                    />
                </div>
                <div>
                    <Form.Input 
                        label="Directions"
                        name="directions"
                        placeholder="Please use a comma for each step of direction"
                        onChange={ e => setDirections(e.target.value) }
                    />
                </div>
                <div>
                    <Form.Input 
                        label="Image"
                        type="file"
                        name="image"
                        onChange={ e => setImage(e.target.value) }
                    />
                </div>
                <br/>
                <div className="ui middle aligned center aligned grid inline fields">
                    <input
                        type="radio"
                        value="Breakfast"
                        name="category"
                        onChange={ e => setCategory(e.target.value) }
                        />
                        <label>Breakfast</label>
                    <input 
                        type="radio"
                        value="Lunch"
                        name="category"
                        onChange={ e => setCategory(e.target.value) }
                    />
                        <label>Lunch</label>
                    <input 
                        type="radio"
                        value="Dinner"
                        name="category"
                        onChange={ e => setCategory(e.target.value) }
                    />
                        <label>Dinner</label>
                    <input 
                        type="radio"
                        value="Dessert"
                        name="category"
                        onChange={ e => setCategory(e.target.value) }
                    />
                        <label>Dessert</label>
                    <input 
                        type="radio"
                        value="Appetizer"
                        name="category"
                        onChange={ e => setCategory(e.target.value) }
                    />
                        <label>Appetizer</label>
                </div>
                <div>
                    <Button className="submitbtn" primary>Submit</Button>
                </div>
            </Form>
        </div>
    )
}

export default Recipe; 