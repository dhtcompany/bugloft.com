import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Form, Input, message } from 'antd';
import md5 from 'md5';
import { NextPage } from 'next';
import Link from 'next/link';
import Router from 'next/router';
import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { userLogin } from '../api';


const Login: NextPage<{}> = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch()
  const handleSubmit = async (values) => {
    const _userInfo = await form.validateFields()
    _userInfo.password = md5(_userInfo.password);
    window.localStorage.setItem('userName', _userInfo.username);
    const { success, data } = await userLogin(_userInfo);
    if (success) {
      message.success('Loggged successful!');
      window.localStorage.setItem('Token', data.token);
      dispatch({
        type: 'GET_USER_INFO',
        payload: {
          userName: _userInfo.username,
        },
      });
      Router.push('/');
    }
  };

  return (
    <div className='main-inside-container'>
      <Breadcrumb style={{ marginTop: '10px' }}>
        <Breadcrumb.Item>
          <Link href={`/`}>
            <a>Home page</a>
          </Link>

        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link href={`/login`}>
            <a>Login</a>
          </Link>

        </Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Form
          className='login-form'
          onFinish={handleSubmit}
          form={form}
        >
          <Form.Item
            name='username'
            rules={[{ required: true, message: 'Please enter username!' }]}
          >
            <Input
              prefix={
                <UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />
              }
              placeholder='username'
            />
          </Form.Item>
          <Form.Item
            name='password'
            rules={[{ required: true, message: 'Please enter password!' }]}>
            <Input
              prefix={
                <LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />
              }
              type='password'
              placeholder='password'
            />
          </Form.Item>
          <Form.Item>
            <Link href='/'>
              <a>Forgot password</a>
            </Link>
            <Button
              type='primary'
              htmlType='submit'
              className='login-form-button'
            >Login</Button> Or {' '}
            <Link href='/register'>
              <a>Register</a>
            </Link>

          </Form.Item>
        </Form>
      </div>
    </div>
  );
}




export default connect(state => state)(Login)

