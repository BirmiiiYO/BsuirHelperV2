import Image from 'next/image'

import { Button } from 'antd'
import { useAppDispatch } from '../hooks/redux'
import { authSlice } from '../reducs/reducers/AuthorizationSlice'
import { CloseOutlined } from '@ant-design/icons';

export default function Header() {

  const dispatch = useAppDispatch();
  const {setActiveAuth}= authSlice.actions

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
        <Button type='primary' size='large' onClick={()=>dispatch(setActiveAuth(true))}>Login</Button>
        </div>
     </header>
  )
}
