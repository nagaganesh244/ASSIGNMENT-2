
import React, { useEffect, useState } from 'react';
import { videos } from '../../data/data';
import { Watchlater } from '../../components/watchlater';
import { Likedvideos } from '../../components/likevideos';

export default function WatchLaterPage() {
  const [savedVideos, setSavedVideos] = useState([]);

  useEffect(() => {
    const savedIds = JSON.parse(localStorage.getItem('watchLater')) || [];
    const filteredVideos = videos.filter(video => savedIds.includes(video.thumbnail_id));
    setSavedVideos(filteredVideos);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Watch Later</h1>
      {savedVideos.length === 0 ? (
        <p className="text-center text-gray-600">No videos saved yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {savedVideos.map((video) => (
            <div key={video.thumbnail_id} className='w-80 bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300'>
              <img src={video.url} alt={video.name} className='w-full h-48 object-cover rounded mb-4' />
              <h3 className='font-bold'>{video.name}</h3>
              <p>Channel: {video.Channel}</p>
              <p >{video.resolution}          <b className='text-black mx-6'> 👁 views</b>  {video.views}</p>
              <Likedvideos videoId={video.thumbnail_id} />
              <Watchlater videoId={video.thumbnail_id} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
