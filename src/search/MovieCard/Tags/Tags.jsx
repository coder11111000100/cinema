import { Space, Tag, Typography } from 'antd';
import React from 'react';

const { Text } = Typography;
export const Tags = ({ genres }) => {
  return (
    <div>
      <Space size={[0, 8]} wrap style={{ marginTop: 7 }}>
        {genres.map(tag => (
          <Tag>
            <Text type='secondary'>{tag}</Text>
          </Tag>
        ))}
      </Space>
    </div>
  );
};
