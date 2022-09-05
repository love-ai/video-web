import type { ProColumns } from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import React from 'react';
import { userList } from '@/services/ant-design-pro/api';

const UserList: React.FC = () => {
  // 请求table数据
  const getUserList = async () => {
    try {
      const data = await userList();
      // 请求成功
      if (data && data.code === 0) {
        return {
          // @ts-ignore
          data: data.data.userList,
          success: true,
          // @ts-ignore
          total: data.data.userList.length,
        };
      }
    } catch (err) {
      console.log(err);
    }
    return {};
  };

  const columns: ProColumns<API.NetUser>[] = [
    {
      dataIndex: 'id',
      title: '用户id',
    },
    {
      dataIndex: 'name',
      title: '用户名',
    },
    {
      dataIndex: 'mobile',
      title: '手机号',
    },
    {
      dataIndex: 'user_type',
      title: '用户类型',
      render: (_, record) => {
        if (record.user_type === 1) {
          return '普通用户';
        } else if (record.user_type === 2) {
          return '管理用户';
        } else {
          return '无权限';
        }
      },
    },
  ];

  return (
    <PageContainer>
      <ProTable<API.Video>
        // @ts-ignore
        columns={columns}
        request={getUserList}
        rowKey="outUserNo"
        pagination={{
          pageSize: 10,
          showQuickJumper: true,
        }}
        toolBarRender={false}
        search={false}
      />
    </PageContainer>
  );
};
export default UserList;
