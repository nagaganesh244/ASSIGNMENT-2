
import React, { useEffect, useState } from 'react';
import { videos } from '../../data/data';
import { Likedvideos } from '../../components/likevideos';
import { Watchlater } from '../../components/watchlater';

export default function Likedpage() {
  const [likedVideos, setLikedVideos] = useState([]);

  useEffect(() => {
    const likedIds = JSON.parse(localStorage.getItem('likedvideos')) || [];
    const filterVideos = videos.filter(video => likedIds.includes(video.thumbnail_id));
    setLikedVideos(filterVideos);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">LIKED VIDEOS</h1>
      {likedVideos.length === 0 ? (
        <p className="text-center text-gray-600">No videos liked yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {likedVideos.map((video) => (
            <div key={video.thumbnail_id} className='w-80 bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300'>
              <img src={video.url} alt={video.name} className='w-full h-48 object-cover rounded mb-4' />
              <h3 className='font-bold'>{video.name}</h3>
              <p>Channel: {video.Channel}</p>
              <p >{video.resolution}          <b className='text-black mx-6'> 👁views</b>  {video.views}</p>
              <Likedvideos videoId={video.thumbnail_id} />
              <Watchlater videoId={video.thumbnail_id} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
