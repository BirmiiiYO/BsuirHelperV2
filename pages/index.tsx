import type { NextPage } from 'next'
import Image from 'next/image'

import { Button } from 'antd'
import { DatePicker, Select, Space, TimePicker } from 'antd';
import React, { useState } from 'react';


const { Option } = Select;
const PickerWithType = ({ type, onChange }) => {
  if (type === 'time') return <TimePicker onChange={onChange} />;
  if (type === 'date') return <DatePicker onChange={onChange} />;
  return <DatePicker picker={type} onChange={onChange} />;
};

const Home: NextPage = () => {

  const [type, setType] = useState('time');

  return (
    //<head></head>
    <div className='app'>
      <div className='container'>
      <div className='top-container'>
      <header>
      <Image
      src="/../public/Logo.gif"
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
      <li>Предметы
      </li>
      <li>Преподаватели
      </li>
      <li>Форум
      </li>
      <li>Новости
      </li>
      <li>Контакты
      </li>
      <li>Последние публикации
      </li>
      </ul>
      </nav>
      </div>
     <div className='main-container'>
     <aside>
    <Space>
      <Select value={type} onChange={setType}>
        <Option value="time">Time</Option>
        <Option value="date">Date</Option>
        <Option value="week">Week</Option>
        <Option value="month">Month</Option>
        <Option value="quarter">Quarter</Option>
        <Option value="year">Year</Option>
      </Select>
      <PickerWithType type={type} onChange={(value) => console.log(value)} />
    </Space>
</aside>
<main>
zxc
</main>
     </div>
    </div>
    </div>
  )
}

export default Home
