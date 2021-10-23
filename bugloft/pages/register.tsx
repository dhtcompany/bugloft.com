import { NextPage } from 'next';
import { Form, Input, Button, Breadcrumb } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import md5 from 'md5';
import { userRegister } from '../api';
import { message } from 'antd';
import Router from 'next/router';
import { User } from '../@types'
import { getRandomColor } from '../utils';
import Link from 'next/link';


const Register: NextPage<{}> = () => {
  const [form] = Form.useForm();
  const handleSubmit = async () => {
    const fieldsValue: User = await form.validateFields()
    fieldsValue.avatar = getRandomColor();
    fieldsValue.password = md5(fieldsValue.password)
    const data = await userRegister(fieldsValue);
    if (data.success) {
      message.success('Registered successfully, welcome to Bugloft');
      Router.push('/login');
    }
  }

  return (
    <div className='main-inside-container'>
      <Breadcrumb style={{ marginTop: '10px' }}>
        <Breadcrumb.Item>
          <Link href={`/`}>
            <a>Home page</a>
          </Link>

        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link href={`/register`}>
            <a>Register</a>
          </Link>

        </Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Form
          form={form}
          onFinish={handleSubmit}
          className='login-form'>
          <Form.Item
            name='userName'
            rules={[{ required: true, message: 'Please input your username!' }]}>
            <Input
              prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder='username'
            />
          </Form.Item>
          <Form.Item
            name='password'
            rules={[{ required: true, message: 'Please input your Password!' }]}>
            <Input.Password
              prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
              type='password'
              placeholder='password'
            />
          </Form.Item>
          <Form.Item
            name='confirm'
            rules={
              [{ required: true, message: 'Please input your Password!' },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject('The two passwords that you entered do not match!');
                },
              })]
            }>
            <Input.Password
              prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
              type='confirm'
              placeholder='confirm'
            />
          </Form.Item>
          <Form.Item
            name='email'
            rules={[{ required: true, message: 'Please input your Email' }]}>
            <Input
              prefix={<MailOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
              type='email'
              placeholder='email'
            />
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType='submit' className='login-form-button'>
              Submit
                </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )

};

export default connect(state => state)(Register);