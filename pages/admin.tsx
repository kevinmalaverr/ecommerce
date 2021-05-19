import React from 'react'

const admin = () => {
  return <div>...redirecting</div>
}

export const getServerSideProps = async ({ req, res }) => {
  if (res) {
    res.writeHead(302, {
      Location: `${process.env.NEXT_PUBLIC_API_URL}/admin`,
    })
    res.end()
  }

  return { props: {} }
}

export default admin
