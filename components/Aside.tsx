import { useAppSelector } from "../hooks/redux"


export default function Aside() {
  const {isAuth} = useAppSelector(state=>state.authReducer)
  return (
    <aside>
    <div className='content'>
    {isAuth ? 'Вы успешно авторизировались на сайте':'Добро пожаловать, войдите в личный кабинет'}
    </div>
</aside>
  )
}
