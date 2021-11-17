const TuitCard = ({ tuitPost }) => (
  <div className="card">
    <div className="card-header">
      Numbah of likes: {tuitPost.likes}
    </div>
    <div className="card-body">
      <h5 className="card-title">{tuitPost.text}</h5>
      <p className="card-text">{tuitPost.date}</p>
      <a href="#" className="btn btn-primary">Like</a>
    </div>
  </div>)

export default TuitCard;
