import Link from 'next/link';
import { FC } from 'react';

const Nav:FC = () => {
  return (
    <nav>
      <ul>
      <li><Link href="/subjects">Предметы</Link>
      </li>
      <li><Link href="/employees">Преподаватели</Link>
      </li>
      <li><Link href="/location">Расположение</Link>
      </li>
      <li><Link href="/news">Новости кафедры</Link>
      </li>
      <li><Link href="/contacts">Контакты</Link>
      </li>
      <li><Link href="/latestPublications">Последние публикации</Link>
      </li>
      </ul>
      </nav>
  )
}

export default Nav

