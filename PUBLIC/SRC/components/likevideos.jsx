import { useState , useEffect} from 'react';
import { videos } from '../data/data'; 


export function Likedvideos({ videoId }) {
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const liked = JSON.parse(localStorage.getItem('likedvideos')) || [];
    setIsLiked(liked.includes(videoId));
  }, [videoId]);

  function toggleSave() {
    const liked = JSON.parse(localStorage.getItem('likedvideos')) || [];
    let update;

    if (isLiked) {
      update = liked.filter(id => id !== videoId);
      <p>videos[videoId-1].likes+=1</p>
    } else {
      update = [...liked, videoId];
      <p></p>
    }

    localStorage.setItem('likedvideos', JSON.stringify(update));
    setIsLiked(!isLiked);
  }

return (
    <button
        onClick={toggleSave}
        className='text-white px-4 py-2 rounded-lg mt-2 transition-colors duration-300'
    >
        <p className={isLiked ? 'text-black  hover:scale-110' : 'text-black hover:scale-110'}>
            {isLiked
                ? '⁠❤️                                     '  +   (parseInt(videos[videoId - 1].likes, 10) + 1)
                : '♡                                      ' + videos[videoId - 1].likes}
        </p>
    </button>
);
}