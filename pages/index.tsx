import type { NextPage } from 'next'
import Image from 'next/image'

import { Button } from 'antd'

const myLoader = () => {
  return "https://i.imgur.com/MJekAr4.gif"
}


const Home: NextPage = () => {
  return (
    //<head></head>
    <div className='app'>
      <div className='container'>
      <header>
      <Image
      loader={myLoader}
      src="logo.png"
      alt="Logo"
      width={60}
      height={60}
    />
        <div className='title'>
          <h1>BSUIR Helper V2</h1>
          <h3>Помощник студента БГУИР</h3>
        </div>
        <div className='login'>
        <Button type='primary' size='large'>zxc</Button>
        </div>
     </header>
     <nav>
      <ul>
      <li>zxc
      </li>
      <li>zxc
      </li>
      <li>zxc
      </li>
      <li>zxc
      </li>
      <li>zxc
      </li>
      <li>zxc
      </li>

      </ul>
      </nav>
      </div>
     
     <aside>

     </aside>
     <main>

     </main>
    </div>
  )
}

export default Home
