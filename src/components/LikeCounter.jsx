import React, { useState, useEffect } from 'react';
import { db, ref, get, set, update } from '../firebase'; // import Firebase methods
import { FaHeart, FaRegHeart } from 'react-icons/fa6';

const LikeCounter = () => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    setLiked(localStorage.getItem('liked'));
  }, []);
  // Fetch the likes count from Firebase when the component mounts
  useEffect(() => {
    const likesRef = ref(db, 'likes');
    get(likesRef).then(snapshot => {
      if (snapshot.exists()) {
        setLikes(snapshot.val());
      } else {
        setLikes(0); // Default to 0 if no data exists
      }
    });
  }, []);

  // Update the likes count in Firebase and the local state
  const handleLike = () => {
    if(!liked){
        const likesRef = ref(db, 'likes');
        const newLikes = likes + 1;
        
        setLiked(true);
        // Update the likes count both locally and on Firebase
        setLikes(newLikes);
        set(likesRef, newLikes); // Write to Firebase
        //storing the state in local storage
        localStorage.setItem('liked', true);
    }
    else{
        const likesRef = ref(db, 'likes');
        const newLikes = likes - 1;
        
        setLiked(false);
        // Update the likes count both locally and on Firebase
        setLikes(newLikes);
        set(likesRef, newLikes); // Write to Firebase
        // removing the state from local storage
        localStorage.removeItem('liked');
        localStorage.removeItem('likes');
    }
  };

  return (
    <button onClick={handleLike} className='flex items-center justify-center space-x-2 fixed z-25 bottom-4 right-4 px-3 py-2.5 rounded-xl border border-textSecondary/20 transition duration-300 hover:bg-darkCard'>
      <div className="like-button">
        {liked ? <FaHeart className='w-6 h-6' style={{color:'#B01E28'}}/> : <FaRegHeart className='w-6 h-6'/>}
      </div>
      <p>{likes}</p>
    </button>
  );
};

export default LikeCounter;
