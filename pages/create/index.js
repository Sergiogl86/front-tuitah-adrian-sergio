import { useState } from "react";

const CreateTuit = () => {
  const initialTuit = {
    title: "", // text
  }

  const [tuit, setTuit] = useState(initialTuit)

  const onChange = (event) => {
    setTuit({
      ...tuit,
      [event.target.id]: event.target.value,
    });
  };

  const postMethod = async (post) => {
    // https://tuitah-sergio-adri.herokuapp.com/
    await fetch("https://isdi-blog-posts-api.herokuapp.com/posts",
      {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
          "Content-Type": "application/json",
        }
      })
  }

  const onSubmit = (event) => {
    event.preventDefault();
    postMethod(tuit);
    setTuit(initialTuit)
  };

  return (
    <>
      <h2> Create Tuit </h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="body">Text:</label>
        <input type="text" name="body" id="body" value={tuit.body} onChange={onChange} placeholder="Max 200 characters" />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default CreateTuit;