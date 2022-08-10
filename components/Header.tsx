import Image from 'next/image'

import { Button } from 'antd'

export default function Header() {
  return (
    <header>
      <div className='logo-name'>
      <Image
      src="/../public/Logo.gif"
      alt="Logo"
      width={70}
      height={70}
    />
        <div className='title'>
          <h1>BSUIR Helper V2</h1>
          <h3>Помощник студента БГУИР</h3>
        </div>
      </div>
        <div className='login'>
        <Button type='primary' size='large'>Войти</Button>
        </div>
     </header>
  )
}
