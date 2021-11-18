import Link from "next/link";
import { useRouter } from "next/router";

const TuitId = ({ post }) => {
  const router = useRouter();

  const onDelete = async (id) => {
    await fetch(`https://tuitah-sergio-adri.herokuapp.com/tuitah/delete`,
      {
        method: "DELETE",
        body: JSON.stringify({ id }),
        headers: {
          "Content-Type": "application/json",
        }
      })
  }

  const onLike = async () => {
    await fetch(
      `https://tuitah-sergio-adri.herokuapp.com/tuitah/like`,
      {
        method: "PATCH",
        body: JSON.stringify({ id: post.id }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  if (router.isFallback) {
    return <h2>LOADING...</h2>
  }
  return (<>
    <div className="card">
      <div className="card-header">Numbah of likes: {post.likes}</div>
      <div className="card-body">
        <h5 className="card-title">{post.text}</h5>

        <button className="btn btn-primary" onClick={() => onLike()}>
          Like
        </button>
        <button
          className="btn btn-danger"
          id={post.id}
          onClick={(e) => onDelete(e.target.id)}
        >
          <Link href="/list">
            <a>Delete</a>
          </Link >
        </button>
      </div>
    </div>
  </>)
}

export const getStaticPaths = async () => {
  const response = await fetch("https://tuitah-sergio-adri.herokuapp.com/tuitah/all");
  const tuitahApi = await response.json();
  console.log(tuitahApi)
  const paths = tuitahApi.map((tuit) => ({ params: { id: `${tuit.id}` } }));

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps = async ({ params: { id } }) => {
  const response = await fetch(`https://tuitah-sergio-adri.herokuapp.com/tuitah/tuit/${id}`)
  const tuitApi = await response.json();
  return {
    props: { post: tuitApi, },
    revalidate: 10,
  }
}

export default TuitId;