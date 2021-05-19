import { fetchData } from '@/utils/fetchData'
import { useRouter } from 'next/router'

const Product = ({ product }) => {
  const router = useRouter()
  const { id } = router.query
  console.log(product)
  return <div></div>
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const products = await fetchData('products')

  // Get the paths we want to pre-render based on posts
  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  console.log(params.id)
  const product = await fetchData('products/' + params.id)

  // Pass post data to the page via props
  return { props: { product } }
}

export default Product
