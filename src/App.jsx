import { useState } from 'react'
import Layout from './components/layout/HomeLayout'
import Header from './components/header/Header'

function App () {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-black'>
        <Header />
        {/* <Layout>

        <h1 className='bg-red-200'>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis molestiae omnis aut sunt nam, minima pariatur consectetur doloremque odio officia.</p>
        </h1>
      </Layout> */}
        <h1>hiiii </h1>
      </div>
    </>
  )
}

export default App
