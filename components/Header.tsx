import Image from 'next/image';
import { Button } from 'antd';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { authSlice } from '../reducs/reducers/AuthorizationSlice';
import { FC } from 'react';

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const { setActiveAuthForm, setAuthorization } = authSlice.actions;
  const { isAuth } = useAppSelector((state) => state.authReducer);

  return (
    <header>
      <div className="logo-name">
        <Image src="/../public/Logo.gif" alt="Logo" width={70} height={70} />
        <div className="title">
          <h1>BSUIR Helper V2</h1>
          <h3>Помощник студента БГУИР</h3>
        </div>
      </div>
      <div className="login">
        {/* <Button type='primary' size='large' 
        onClick={()=> {dispatch(setAuthorization(!isAuth));
          {isAuth ? dispatch(setActiveAuthForm(false)) : dispatch(setActiveAuthForm(true))}
        }}>
          {isAuth ? 'Logout' : 'Login'}</Button> */}
        {isAuth ? (
          <Button
            onClick={() => {
              dispatch(setActiveAuthForm(false));
              dispatch(setAuthorization(false));
            }}
          >
            Logout
          </Button>
        ) : (
          <Button
            onClick={() => {
              dispatch(setActiveAuthForm(true));
            }}
          >
            Login
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
