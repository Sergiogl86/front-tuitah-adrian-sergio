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
      <div className="container m-5">
        <form onSubmit={onSubmit}>
          <div className="list-group">
            <h2 className="list-group-item list-group-item-dark">
              {" "}
              Create Tuit{" "}
            </h2>
            <textarea
              className="list-group-item list-group-item-secondary"
              type="text"
              name="text"
              id="text"
              value={tuit.text}
              maxLength="200"
              /* tuit.text */ onChange={onChange}
              placeholder="Max 200 characters"
            />
            <button className="btn btn-dark" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateTuit;
