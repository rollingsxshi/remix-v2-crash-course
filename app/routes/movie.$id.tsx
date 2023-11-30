import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";

interface MovieData {
  backdrop_path: string
  title: string
  homepage: string
  original_language: string
  overview: string
  release_date: string
}

export async function loader({ params }: LoaderFunctionArgs) {
  const url = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?language=en-US`,
    {
      headers: {
        accept: "application/json",
        Authorization:
          `Bearer ${process.env.TMDB_API_TOKEN}`,
      },
    }
  );

  return json(await url.json());
}

const MovieId = () => {
  const data: MovieData = useLoaderData();
  const baseImageUrl = "https://image.tmdb.org/t/p/original";
  console.log(data);

  return (
    <div className="min-h-screen p-10">
      <img
        className="h-[40vh] object-cover w-full rounded-lg"
        src={`${baseImageUrl}${data.backdrop_path}`}
        alt=""
      />

      <h1 className="text-4xl font-bold text-center pt-5">{data.title}</h1>
      <div className="flex gap-x-10 mt-10">
        <div className="w-1/2 font-medium">
          <h1>
            <span className="underline">Homepage: </span>
            <Link to={data.homepage} target="_blank">
              Link
            </Link>
          </h1>

          <p>
            <span className="underline">Original Language:</span>{" "}
            {data.original_language}
          </p>

          <p><span className="underline">Overview: </span>{data.overview}</p>
          <p><span className="underline">Release Date: </span>{data.release_date}</p>
        </div>

        <div className="w-1/2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default MovieId;
