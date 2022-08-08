import Link from 'next/link';


export default function Nav() {
  return (
    <nav>
      <ul>
      <li><Link href="/subjects">Предметы</Link>
      </li>
      <li><Link href="/employees">Преподаватели</Link>
      </li>
      <li><Link href="/location">Расположение</Link>
      </li>
      <li><Link href="/news">Новости</Link>
      </li>
      <li><Link href="/contacts">Контакты</Link>
      </li>
      <li><Link href="/latestPublications">Последние публикации</Link>
      </li>
      </ul>
      </nav>
  )
}
