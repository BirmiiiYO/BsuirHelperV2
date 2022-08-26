import 'antd/dist/antd.css';
import { Button, Checkbox, Form, Input } from 'antd';
import { ValidateErrorEntity } from 'rc-field-form/lib/interface';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { authSlice } from '../reducs/reducers/AuthorizationSlice';
import { CloseOutlined } from '@ant-design/icons';
import { FC } from 'react';

const Authorization: FC = () => {
  const dispatch = useAppDispatch();
  const { setActiveAuthForm, setAuthorization } = authSlice.actions;
  const { authActive, isAuth } = useAppSelector((state) => state.authReducer);

  const onFinish = (values: string) => {
    console.log('Success:', values);
    dispatch(setActiveAuthForm(false));
    dispatch(setAuthorization(true));
  };

  const onFinishFailed = (errorInfo: ValidateErrorEntity<string>) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="authorization" style={authActive ? { display: 'block' } : { display: 'none' }}>
      <div className="close">
        <CloseOutlined onClick={() => dispatch(setActiveAuthForm(false))} />{' '}
      </div>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Authorization;
