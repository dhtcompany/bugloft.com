import React from 'react';
import { NextPage } from 'next';
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router';
import { changePassApi } from '../api';
import { Form, Input, Button, message, Breadcrumb } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import md5 from 'md5';
import Link from 'next/link';
import { AppStateType } from '../redux/reducers'
import { User } from '../@types'

interface changePassProps {
  userInfo: User
}

const changePass: NextPage<changePassProps> = (props) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch()
  const router = useRouter()
  const handleSubmit = async () => {
    const { userInfo } = props;
    const fieldsValue = await form.validateFields()
    const _oldPass = md5(fieldsValue.oldPass);
    const _newPass = md5(fieldsValue.newPass);
    const data = await changePassApi({
      oldPass: _oldPass,
      newPass: _newPass,
      userName: userInfo.userName,
    });
    if (data.success) {
      message.success('Your password changed, you can login again.');
      dispatch({
        type: 'USER_SIGN_OUT',
      });
      window.localStorage.removeItem('userName');
      window.localStorage.removeItem('Token');
      router.push('/login');
    } else {
      message.error(data.message);
    }
  }

  const compareToFirstPassword = (rule, value, callback) => {
    if (value && value !== form.getFieldValue('newPass')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
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
          <Link href={`/changePass`}>
            <a>Change password</a>
          </Link>

        </Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Form 
          className='login-form' 
          onFinish={handleSubmit}
          form={form}>
          <Form.Item
            name='oldPass'
            rules={[{ required: true, message: 'Enter your old password!' }]}>
            <Input.Password
              prefix={
                <LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />
              }
              type='password'
              placeholder='Enter your old password!'
            />
          </Form.Item>
          <Form.Item
            name='newPass'
            rules={[{ required: true, message: 'Enter new password!' }]}>
            <Input.Password
              prefix={
                <LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />
              }
              type='password'
              placeholder='Enter new password'
            />
          </Form.Item>
          <Form.Item
            name='confirm'
            rules={[
              { required: true, message: 'Please input your Password!' },
              {
                validator: compareToFirstPassword,
              },
            ]}>
            <Input.Password
              prefix={
                <LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />
              }
              type='confirm'
              placeholder='Confirm'
            />
          </Form.Item>
          <Form.Item>
            <Button
              type='primary'
              htmlType='submit'
              className='login-form-button'
            >
              Submit
                  </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

const mapStateToProps = (state: AppStateType) => ({
  userInfo: state.user,
});

export default connect(mapStateToProps)(changePass)