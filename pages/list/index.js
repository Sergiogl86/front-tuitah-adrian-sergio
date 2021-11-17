/* eslint-disable @next/next/link-passhref */

import { useState } from "react";
import TuitCard from "../../components/TuitCard/TuitCard";

const ListTuitah = ({ posts }) => {

  const [posted, setPosted] = useState(posts);

  const onDelete = async (id) => {
    await fetch(`https://tuitah-sergio-adri.herokuapp.com/tuitah/delete`,
      {
        method: "DELETE",
        body: JSON.stringify({ id }),
        headers: {
          "Content-Type": "application/json",
        }
      })
    setPosted(
      posted.filter((post) => (post.id !== id))
    );
  }

  return (
    <>
      <h1>List Tuitah</h1>
      <ul>
        {posted.map((post) => (
          <TuitCard key={post.id} post={post} onDelete={onDelete} />
        ))
        }
      </ul>
    </>
  )
}

export const getStaticProps = async () => {
  const response = await fetch(`https://tuitah-sergio-adri.herokuapp.com/tuitah/all`)
  const tuitahApi = await response.json();
  console.log(tuitahApi);
  return { props: { posts: tuitahApi, }, }
}

export default ListTuitah;
