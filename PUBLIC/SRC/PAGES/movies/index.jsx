import { videos } from '../../data/data';
import { Watchlater } from '../../components/watchlater';
import { Likedvideos } from '../../components/likevideos';
export default function Movies() {
    
    const movieVideos = videos.filter(video => video.tag === 'movie');

    return (
        <div>
            <h2 className='text-3xl text-black text-center mt-5'><b>Movies</b></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {movieVideos.map((video) => (
                    <div key={video.thumbnail_id} className='w-80 h-auto bg-white  rounded-lg p-6 flex flex-col my-12 shadow-lg hover:shadow-2xl transition-shadow duration-300'>
                        <img
                            src={video.url}
                            alt={video.name}
                            className='w-70 h-48 object-cover rounded-lg mb-2 cursor-pointer hover:scale-105 transition-transform duration-300'
                        />
                        <h3 className='font-bold'>{video.name}</h3>
                        <p>Channel: {video.Channel}</p>
                        <p >{video.resolution}          <b className='text-black mx-6'> 👁views</b>  {video.views}</p>
                        <Likedvideos videoId={video.thumbnail_id} />
                        <Watchlater videoId={video.thumbnail_id} />
                    </div>
                ))}
            </div>
        </div>
    );
}
