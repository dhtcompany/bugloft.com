import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Table, Modal, Tag } from 'antd'
import { DropOption } from 'components'
import { Trans, withI18n } from '@lingui/react'
import styles from './List.less'
const { confirm } = Modal

@withI18n()
class List extends PureComponent {
  handleMenuClick = (record, e) => {
    const { onDeleteItem, onEditItem, i18n } = this.props

    if (e.key === '1') {
      onEditItem(record)
    } else if (e.key === '2') {
      confirm({
        title: i18n.t`Are you sure delete this record?`,
        onOk() {
          onDeleteItem(record._id)
        },
      })
    }
  }

  render() {
    const {
      onDeleteItem,
      onEditItem,
      i18n,
      menuList,
      ...tableProps
    } = this.props

    const columns = [
      {
        title: <Trans>RoleName</Trans>,
        dataIndex: 'roleName',
        key: 'roleName',
      },
      {
        title: <Trans>RolePermission</Trans>,
        dataIndex: 'permission',
        key: 'permission',
        render: permission => (
          <span>
            {permission.map(e => {
              const _tag = menuList[e]
              return (
                <Tag color="blue" key={_tag}>
                  {_tag}
                </Tag>
              )
            })}
          </span>
        ),
      },
      {
        title: <Trans>Operation</Trans>,
        key: 'operation',
        render: (text, record) => {
          return (
            <DropOption
              onMenuClick={e => this.handleMenuClick(record, e)}
              menuOptions={[
                { key: '1', name: i18n.t`Update` },
                { key: '2', name: i18n.t`Delete` },
              ]}
            />
          )
        },
      },
    ]

    return (
      <Table
        {...tableProps}
        pagination={{
          ...tableProps.pagination,
          showTotal: total => i18n.t`Total ${total} Items`,
        }}
        style={{ width: '100%' }}
        className={styles.table}
        bordered
        scroll={{ x: true }}
        columns={columns}
        simple
        rowKey={record => record._id}
      />
    )
  }
}

List.propTypes = {
  onDeleteItem: PropTypes.func,
  onEditItem: PropTypes.func,
  location: PropTypes.object,
}

export default List
