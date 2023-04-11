import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './EditPost.css';
import { supabase } from '../client';

const EditPost = ({ data }) => {
  const { id } = useParams();
  const [post, setPost] = useState({}); // Use state for form data

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase
        .from('Posts')
        .select()
        .eq('id', id);
      setPost(data[0]); // Set initial form data
    }

    fetchData().catch(console.error());
  }, [id]);

  // Handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPost(prevPost => ({ ...prevPost, [name]: value }));
  }

  // UPDATE post
  const updatePost = async (event) => {
    event.preventDefault();

    await supabase
      .from('Posts')
      .update({ name: post.name, speed: post.speed, color: post.color })
      .eq('id', id);

    window.location = "/";
  }

  // DELETE post
  const deletePost = async (event) => {
    event.preventDefault();

    await supabase
      .from('Posts')
      .delete()
      .eq('id', id);

    window.location = "http://localhost:3000/";
  }

  return (
    <div>
      <form onSubmit={updatePost}>
        <label htmlFor="name">Name</label> <br />
        <input type="text" id="name" name="name" value={post.name} onChange={handleInputChange} /><br />
        <br />

        <label htmlFor="speed">Speed (mph):</label><br />
        <input type="text" id="speed" name="speed" value={post.speed} onChange={handleInputChange} /><br />
        <br />

        <label htmlFor="color">Color:</label><br />
        
        <br />
        <br/>
                <label htmlFor='red'>Red:</label>
                <input
                type='radio'
                id="red"
                name="color"
                value="red"
                checked={post.color === 'red'}
                onChange={handleInputChange}/>
                <br/>
                <label htmlFor='green'>Green:</label>
                <input
                type='radio'
                id="green"
                name="color"
                value="green"
                checked={post.color === 'green'}
                onChange={handleInputChange}/>
                <br/>
                <label htmlFor='blue'>Blue:</label>
                <input
                type='radio'
                id="blue"
                name="color"
                value="blue"
                checked={post.color === 'blue'}
                onChange={handleInputChange}/>
                <br/>
                <label htmlFor='purple'>Purple:</label>
                <input
                type='radio'
                id="purple"
                name="color"
                value="purple"
                checked={post.color === 'purple'}
                onChange={handleInputChange}/>
                <br/>
                <label htmlFor='orange'>Orange:</label>
                <input
                type='radio'
                id="orange"
                name="color"
                value="orange"
                checked={post.color === 'orange'}
                onChange={handleInputChange}/>
                <br/>
                <label htmlFor='pink'>Pink:</label>
                <input
                type='radio'
                id="pink"
                name="color"
                value="pink"
                checked={post.color === 'pink'}
                onChange={handleInputChange}/>
        <input type="submit" value="Edit Crewmate" />
        <button className="deleteButton" onClick={deletePost}>Delete</button> {/* Add onClick event handler */}
      </form>
    </div>
  )
}

export default EditPost;
