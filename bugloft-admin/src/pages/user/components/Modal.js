import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Form, Input, Radio, Modal, Select } from 'antd'
import { withI18n } from '@lingui/react'
import md5 from 'md5'
import { find } from 'lodash'
import { getRandomColor } from 'utils'
const { Option } = Select

const FormItem = Form.Item

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
}
@withI18n()
@Form.create()
class UserModal extends PureComponent {
  state = {
    roleSelectPermission: [],
  }
  handleOk = () => {
    const { item = {}, onOk, form, modalType } = this.props
    const { validateFields, getFieldsValue } = form
    validateFields(errors => {
      if (errors) {
        return
      }
      const data = {
        ...getFieldsValue(),
        _id: item._id,
        controlCode: window.localStorage.getItem('controlCode'),
        // key: item.key,
      }
      if (!!this.state.roleSelectPermission.length) {
        data.visit = this.state.roleSelectPermission
      }
      if (modalType === 'create') {
        data.avatar = getRandomColor()
      }
      if (data.password) {
        data.password = md5(data.password)
      }

      onOk(data)
    })
  }
  selectRoles = rolesName => {
    const { roleSelectList } = this.props
    const roles = find(roleSelectList, ['roleName', rolesName])
    this.setState({
      roleSelectPermission: roles.permission,
    })
  }

  render() {
    const {
      item = {},
      onOk,
      form,
      i18n,
      roleSelectList,
      ...modalProps
    } = this.props
    const { getFieldDecorator } = form

    return (
      <Modal {...modalProps} onOk={this.handleOk}>
        <Form layout="horizontal">
          <FormItem label={i18n.t`Name`} hasFeedback {...formItemLayout}>
            {getFieldDecorator('userName', {
              initialValue: item.userName ? item.userName : '',
              rules: [
                {
                  required: true,
                },
              ],
            })(<Input />)}
          </FormItem>
          <FormItem label={i18n.t`Password`} hasFeedback {...formItemLayout}>
            {getFieldDecorator('password', {
              initialValue: item.password || '',
            })(<Input.Password password="true" />)}
          </FormItem>
          <FormItem label={i18n.t`Email`} hasFeedback {...formItemLayout}>
            {getFieldDecorator('email', {
              initialValue: item.email || '',
              rules: [
                {
                  required: true,
                },
              ],
            })(<Input />)}
          </FormItem>
          <FormItem label={i18n.t`Roles`} hasFeedback {...formItemLayout}>
            {getFieldDecorator('refUserRoleCode', {
              initialValue: item.refUserRoleCode,
              rules: [
                {
                  required: true,
                },
              ],
            })(
              <Select onChange={this.selectRoles}>
                {roleSelectList.map(e => (
                  <Option key={e.roleName}>{e.roleName}</Option>
                ))}
              </Select>
            )}
          </FormItem>
          <FormItem label={i18n.t`Status`} hasFeedback {...formItemLayout}>
            {getFieldDecorator('status', {
              initialValue: item.status || 'ENABLE',
              rules: [
                {
                  required: true,
                },
              ],
            })(
              <Radio.Group style={{ width: 150 }}>
                <Radio value={'ENABLE'}>Enable</Radio>
                <Radio value={'CLOSE'}>Disable</Radio>
              </Radio.Group>
            )}
          </FormItem>
        </Form>
      </Modal>
    )
  }
}

UserModal.propTypes = {
  type: PropTypes.string,
  item: PropTypes.object,
  onOk: PropTypes.func,
}

export default UserModal
