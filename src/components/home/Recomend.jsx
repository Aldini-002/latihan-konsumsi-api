import axios from "axios";
import { useEffect, useState } from "react";

const Recomend = () => {
  const [animes, setAnimes] = useState([]);

  const index = async () => {
    await axios
      .get("https://api.jikan.moe/v4/top/anime?limit=10")
      .then((data) => setAnimes(data.data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    index();
  });

  return (
    <div className="mb-10 mt-5 bg-stone-900 p-5">
      <h1 className="font-bold text-lg mb-3">Recomended Anime</h1>

      <div className="flex flex-wrap mb-5 mt-2 gap-x-[3rem] gap-y-5">
        {animes.map((anime) => (
          <div
            className="w-2/12 h-[300px] relative group bg-cover"
            key={anime.mal_id}
            style={{
              backgroundImage: `url(${anime.images.jpg.large_image_url})`,
            }}
          >
            <span className="absolute top-0 left-0 px-1 text-sm font-light bg-teal-700">
              {anime.type}
            </span>
            <span className="absolute top-0 right-0 px-1 text-sm font-light bg-teal-700">
              {anime.score}
            </span>
            <div className="absolute bottom-0 text-center pt-10 px-2 group-hover:pb-2 bg-gradient-to-t from-black from-0% via-black via-50% to-[rgba(0,0,0,0.0)] to-100% w-full">
              <h1 className="text-sm mb-1">{anime.title}</h1>
              <div className="flex-wrap gap-1 justify-center hidden group-hover:flex">
                {anime.genres.map((genre) => (
                  <span
                    className="px-[0.3rem] bg-teal-700 text-[0.7rem] font-light rounded-sm"
                    key={genre.mal_id}
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-right">
        <a href="#" className="px-2 bg-teal-700 rounded-md text-sm font-light">
          see more...
        </a>
      </div>
    </div>
  );
};

export default Recomend;
