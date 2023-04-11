import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Home = () => {
    const [searchParams] = useSearchParams();
    console.log(searchParams.get("id"),searchParams.get("name") );
  return (
    <div>Home</div>
  )
}

export default Home