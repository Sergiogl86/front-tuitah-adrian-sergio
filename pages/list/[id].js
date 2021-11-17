import { useRouter } from "next/router";
import TuitCard from "../../components/TuitCard/TuitCard";

const ListId = ({ post }) => {
  const router = useRouter();
  console.log(post)
  if (router.isFallback) {
    return <h2>LOADING...</h2>
  }
  return (<>
    <TuitCard post={post} />
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
  const response = await fetch(`https://tuitah-sergio-adri.herokuapp.com/tuitah/all/${id}`)
  const tuitApi = await response.json();
  return {
    props: { post: tuitApi, },
    revalidate: 20,
  }
}

export default ListId;