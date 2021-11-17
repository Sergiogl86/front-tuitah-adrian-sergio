import { useRouter } from "next/router";
import { useState } from "react";

const CreateTuit = () => {
  const router = useRouter();
  const initialTuit = {
    text: "",
  };

  const [tuit, setTuit] = useState(initialTuit);

  const onChange = (event) => {
    setTuit({
      ...tuit,
      [event.target.id]: event.target.value,
    });
  };

  const postMethod = async (post) => {
    // https://tuitah-sergio-adri.herokuapp.com/
    await fetch("https://tuitah-sergio-adri.herokuapp.com/tuitah/add", {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json",
      },
    });
    router.push("/list");
  };

  const onSubmit = (event) => {
    event.preventDefault();
    postMethod(tuit);
    setTuit(initialTuit);
  };

  return (
    <>
      <div className="container">
        <form onSubmit={onSubmit}>
          <div className="list-group">
            <h2 className="list-group-item active"> Create Tuit </h2>
            <textarea
              className="list-group-item list-group-item-dark"
              type="text"
              name="text"
              id="text"
              value={tuit.text}
              /* tuit.text */ onChange={onChange}
              placeholder="Max 200 characters"
            />
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateTuit;
