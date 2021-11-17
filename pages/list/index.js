import Link from "next/link";

// const SortByDate = posts.sort((a, b) => {
//   const beforeDate = DateTime.fromFormat(a.frontmatter.date, 'M/d/yyyy')
//   const afterDate = DateTime.fromFormat(b.frontmatter.date, 'M/d/yyyy')
//   return afterDate - beforeDate
// })

const ListTuitah = ({ posts }) => (
  <>
    <h1>List Tuitah</h1>
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/list/${post.id}`} >
            <a>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </a>
          </Link >
        </li>))}
    </ul>
  </>)
// https://tuitah-sergio-adri.herokuapp.com/

export const getStaticProps = async () => {
  const response = await fetch(`https://isdi-blog-posts-api.herokuapp.com/posts`)
  const tuitahApi = await response.json();
  return { props: { posts: tuitahApi, }, }
}

export default ListTuitah;