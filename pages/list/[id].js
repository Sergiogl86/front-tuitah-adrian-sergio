import Link from "next/link";
import { useRouter } from "next/router";
import TimeAgo from "javascript-time-ago";
import es from "javascript-time-ago/locale/es.json";
import ReactTimeAgo from "react-time-ago";

const TuitId = ({ post }) => {
  const router = useRouter();
  TimeAgo.addLocale(es);

  const onDelete = async () => {
    await fetch(`https://tuitah-sergio-adri.herokuapp.com/tuitah/delete`, {
      method: "DELETE",
      body: JSON.stringify({ id: post.id }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const onLike = async () => {
    await fetch(`https://tuitah-sergio-adri.herokuapp.com/tuitah/like`, {
      method: "PATCH",
      body: JSON.stringify({ id: post.id }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  if (router.isFallback) {
    return <h2>LOADING...</h2>;
  }
  return (
    <>
      <div className="card">
        <div className="card-header">Numbah of likes: {post.likes}</div>
        <div className="card-body">
          <h5 className="card-title">{post.text}</h5>
          {post && (
            <p>
              <ReactTimeAgo date={Date.parse(post.date)} locale="es" />
            </p>
          )}

          <button className="btn btn-primary m-2" onClick={() => onLike()}>
            <i className="fas fa-thumbs-up"></i>
          </button>
          <button className="btn btn-danger m-2" onClick={() => onDelete()}>
            <Link href="/list">
              <a>
                <i className="fas fa-hand-middle-finger"></i>
              </a>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const response = await fetch(
    "https://tuitah-sergio-adri.herokuapp.com/tuitah/all"
  );
  const tuitahApi = await response.json();
  console.log(tuitahApi);
  const paths = tuitahApi.map((tuit) => ({ params: { id: `${tuit.id}` } }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params: { id } }) => {
  const response = await fetch(
    `https://tuitah-sergio-adri.herokuapp.com/tuitah/tuit/${id}`
  );
  const tuitApi = await response.json();
  return {
    props: { post: tuitApi },
    revalidate: 10,
  };
};

export default TuitId;
