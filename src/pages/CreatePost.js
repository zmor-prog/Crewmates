import React, {useState} from 'react';
import './CreatePost.css'

import { supabase } from '../client'
import { useEffect } from 'react';

console.log("About to run Post")
const CreatePost = ()=> {
    const [post, setPost] = useState({name: "", speed: "", color: ""})
    console.log("Running Post")
    const createPost = async (event) => {
        event.preventDefault();
       await supabase
        .from('Posts')
        .insert({name: post.name, speed: post.speed, color: post.color})
        .select();
    
        window.location = "/";
    }
    const handleChange = (event) => {
        const {name, value} = event.target;
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }
    return (
        <div>
            <form >
                <label for="name">Name</label> <br />
                <input onChange={handleChange} value={post.name} type="text" id="name" name="name" /><br />
                <br/>

                <label for="speed">Speed (mph):</label><br />
                <input onChange={handleChange} value={post.speed} type="text" id="speed" name="speed" /><br />
                <br/>

                <label for="color">Color:</label><br />
            
                <br/>
                <label htmlFor='red'>Red:</label>
                <input
                type='radio'
                id="red"
                name="color"
                value="red"
                checked={post.color === 'red'}
                onChange={handleChange}/>
                <br/>
                <label htmlFor='green'>Green:</label>
                <input
                type='radio'
                id="green"
                name="color"
                value="green"
                checked={post.color === 'green'}
                onChange={handleChange}/>
                <br/>
                <label htmlFor='blue'>Blue:</label>
                <input
                type='radio'
                id="blue"
                name="color"
                value="blue"
                checked={post.color === 'blue'}
                onChange={handleChange}/>
                <br/>
                <label htmlFor='purple'>Purple:</label>
                <input
                type='radio'
                id="purple"
                name="color"
                value="purple"
                checked={post.color === 'purple'}
                onChange={handleChange}/>
                <br/>
                <label htmlFor='orange'>Orange:</label>
                <input
                type='radio'
                id="orange"
                name="color"
                value="orange"
                checked={post.color === 'orange'}
                onChange={handleChange}/>
                <br/>
                <label htmlFor='pink'>Pink:</label>
                <input
                type='radio'
                id="pink"
                name="color"
                value="pink"
                checked={post.color === 'pink'}
                onChange={handleChange}/>
                
                <input onClick={createPost} type="submit" value="Create Crewmate" />
            </form>
        </div>
    )
}

export default CreatePost