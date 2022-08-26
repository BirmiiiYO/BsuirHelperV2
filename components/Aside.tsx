import { FC } from 'react';
import { useAppSelector } from '../hooks/redux';

const Aside: FC = () => {
  const { isAuth } = useAppSelector((state) => state.authReducer);
  return (
    <aside>
      <div className="content">
        {isAuth
          ? 'Вы успешно авторизировались на сайте'
          : 'Добро пожаловать, войдите в личный кабинет'}
      </div>
    </aside>
  );
};

export default Aside;
