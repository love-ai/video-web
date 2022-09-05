import {
  PageContainer,
  ProForm,
  ProFormText,
  ProFormUploadButton,
} from '@ant-design/pro-components';
import { Card } from 'antd';
import React from 'react';

const UploadVideo: React.FC = () => {
  return (
    <PageContainer>
      <Card>
        <ProForm>
          <ProFormText
            name={['contract', 'name']}
            width="md"
            label="视频名称"
            placeholder="请输入名称"
          />
          <ProFormUploadButton name="pic" label="视频封面" />
          <ProFormUploadButton name="video" label="上传视频" />
        </ProForm>
      </Card>
    </PageContainer>
  );
};

export default UploadVideo;
