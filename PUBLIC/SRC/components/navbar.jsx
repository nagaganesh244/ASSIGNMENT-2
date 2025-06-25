

export default function Navbar() {
    return (
        
            <aside className="w-60 h-full flex-wrap bg-gray-800 text-white p-4">          
            <a href="/" > <h1 className="text-3xl m-4"><b>▶️YOUTUBE </b></h1> </a>
        
            <ul className="my-10 ">
                <li>
                  <button className="p-6  hover:scale-125 text-white">   <a href="/" >🏠 HOME</a> </button><br />
                  <button className="p-6  hover:scale-125 text-white">  <a href="/favorites" >🕓 WATCH LATER</a></button><br />
                  <button className="p-6  hover:scale-125 text-white"> <a href="/likedvideos" > ❤   LIKED VIDEOS</a></button><br />
                  <button className="p-6  hover:scale-125 text-white">  <a href="/trending" >📈 TRENDING</a></button><br />
                  <button className="p-6  hover:scale-125 text-white">   <a href="/movies" > 🎬 FILMS</a></button><br />
                  <button className="p-6  hover:scale-125 text-white">   <a href="/songs" > 🎵   SONGS</a></button>
                </li>
            </ul>
            </aside>
        
    
    );
}