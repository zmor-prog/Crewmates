import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './EditPost.css';
import { supabase } from '../client';

const ViewPost = ({ data }) => {
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

  
  return (
    <div>
      <h3>Name: {post.name}</h3>
      <h3>Speed: {post.speed}</h3>
      <h3>Color: <span style={{ color: post.color }}>{post.color}</span></h3>
      <h3>Wow, this look at this crewmates speed!</h3>     
    </div>
  )
}

export default ViewPost;
