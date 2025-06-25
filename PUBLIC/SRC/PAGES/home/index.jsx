import { videos } from '../../data/data';
import { Watchlater } from '../../components/watchlater';
import { Likedvideos } from '../../components/likevideos';
export default function Home() {
    return (
        <div className="flex-1 bg-white p-6">
            <div className='flex items-center justify-between mb-6'>
            <input
                type="text"
                placeholder="Search videos..."
                className="w-auto p-4 ml-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 "
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                LOGIN</button>
            </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {videos.map((video) => (
        <div key={video.thumbnail_id} className='w-80 h-auto bg-white  rounded-lg p-6 flex flex-col my-12 shadow-lg hover:shadow-2xl transition-shadow duration-300'>
    
        
          <img
            src={video.url}
            alt={video.name}
            className='w-70 h-48 object-cover rounded-lg mb-2 cursor-pointer hover:scale-105 transition-transform duration-300'
          />
          <h3 className='font-bold'>{video.name}</h3>
          <p>Channel: {video.Channel}</p>
          <p >{video.resolution}          <b className='text-black mx-6'> 👁views</b>  {video.views}</p>
          <Likedvideos videoId={video.thumbnail_id} />  <Watchlater videoId={video.thumbnail_id} />
        </div>
      ))}
    </div>
        </div>
    );
}

