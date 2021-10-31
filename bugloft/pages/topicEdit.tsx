
import React, { useState } from 'react';
import { NextPage } from 'next';
import { Form, Input, Select, Button, message, Breadcrumb } from 'antd';
import { connect } from 'react-redux';
import Router from 'next/router';
import Link from 'next/link';
import { createTopic } from '../api';
import TopicEditor from '../components/TopicEditor';
import { AppStateType } from '../redux/reducers'
import { User, Topic } from '../@types'


interface TopicEditProps {
  userInfo: User,
  channelList: object[]
}

const TopicEdit: NextPage<TopicEditProps> = (props) => {
  const [form] = Form.useForm();
  const [content, setContent] = useState(null)
  const handleSubmit = async () => {
    const fieldsValue = await form.validateFields()
    const { userInfo } = props;
    const _params = fieldsValue;
    _params.userName = userInfo.userName;
    _params.userAvatar = userInfo.avatar;
    _params.status = "PUBLISH";
    if (!content) {
      message.error('Please enter content');
      return;
    }
    _params.desc = content.toRAW(true).blocks[0].text.slice(0, 50);
    _params.content = content.toHTML();
    const { success } = await createTopic(_params);
    if (success) {
      message.success('Successful');
      Router.push('/');
    }
  }
  const handleEditorChange = (e: any) => {
    setContent(e)
  }

  const { channelList } = props;
  return (
    <div className='main-inside-container'>
      <Breadcrumb style={{ marginTop: '10px' }}>
        <Breadcrumb.Item>
          <Link href={`/`}>
            <a>Home page</a>
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link href={`/topicEdit`}>
            <a>Topic editing</a>
          </Link>
        </Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Form layout="vertical"
          onFinish={handleSubmit}
          form={form}
          className='editer-container'>
          <Form.Item
            label='Topic title'
            name='topicTitle'
            rules={[{ required: true, message: 'Please enter a title!' }]}>
            <Input
              placeholder='title'
            />
          </Form.Item>
          <Form.Item
            label='category'
            name='categoryName'
            rules={[{ required: true, message: 'Please choice category!' }]}>
            <Select>
              {channelList.map((e: Topic) => (
                <Select.Option
                  value={e.categoryName}
                  placeholder='Cateory name'
                  key={e._id}>
                  {e.categoryName}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label='content'>
            <TopicEditor
              editorValue={content}
              editorChange={handleEditorChange}
            />
          </Form.Item>
          <Form.Item>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Button style={{ width: '200px' }} type='primary' htmlType='submit'
                className='login-form-button'>It's done!</Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

const mapStateToProps = (state: AppStateType) => ({
  userInfo: state.user,
  channelList: state.channel.list,
});

export default connect(mapStateToProps)(TopicEdit);