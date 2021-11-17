const ListTuitah = ({ posts }) => (
  <>
    <h1>List Tuitah</h1>
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </li>))}
    </ul>
  </>
)
// https://tuitah-sergio-adri.herokuapp.com/

export const getStaticProps = async () => {
  const response = await fetch(`https://isdi-blog-posts-api.herokuapp.com/posts`)
  const tuitahApi = await response.json();
  return { props: { posts: tuitahApi, }, }
}

export default ListTuitah;