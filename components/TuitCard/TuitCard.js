
import Link from "next/link";
import TimeAgo from "javascript-time-ago";
import es from "javascript-time-ago/locale/es.json";
import { useState } from "react";
import ReactTimeAgo from "react-time-ago";

const TuitCard = ({ post, onDelete }) => {
  const [posted, setPosted] = useState(post);

  TimeAgo.addLocale(es);

  const onLike = async () => {
    const response = await fetch(
      `https://tuitah-sergio-adri.herokuapp.com/tuitah/like`,
      {
        method: "PATCH",
        body: JSON.stringify({ id: post.id }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const responseApi = await response.json();
    setPosted(responseApi);
  };

  return (
    <li key={posted.id}>
      <div className="card">
        <div className="card-header">Numbah of likes: {posted.likes}</div>
        <div className="card-body">
          <a>
            <h5 className="card-title">{posted.text}</h5>
          </a>
          {posted && (
            <p>
              <ReactTimeAgo date={posted.date} locale="es" />
            </p>
          )}
          <button className="btn btn-primary" onClick={onLike}>
            Like
          </button>
          <button
            className="btn btn-danger"
            onClick={() => onDelete(posted.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
};
export default TuitCard;
