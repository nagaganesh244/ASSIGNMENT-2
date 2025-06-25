import { useState , useEffect} from 'react';



export function Watchlater({ videoId }) {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('watchLater')) || [];
    setIsSaved(saved.includes(videoId));
  }, [videoId]);

  function toggleSave() {
    const saved = JSON.parse(localStorage.getItem('watchLater')) || [];
    let updated;

    if (isSaved) {
      updated = saved.filter(id => id !== videoId);
      alert('Removed from Watch Later');
    } else {
      updated = [...saved, videoId];
      alert('Saved to Watch Later');
    }

    localStorage.setItem('watchLater', JSON.stringify(updated));
    setIsSaved(!isSaved);
  }

  return (
    <button
      onClick={toggleSave}
      className='text-white px-4 py-2 rounded-lg mt-2 transition-colors duration-300'
    >
      <p className={isSaved ? 'bg-black hover:bg-gray-800' : 'bg-blue-500 hover:bg-blue-600'}>
        {isSaved ? 'Remove from Watch Later' : 'Save to Watch Later'}
      </p>
    </button>
  );
}
