'use client';
import {
  BellFilled,
  CaretDownOutlined,
  FormOutlined,
  UserOutlined,
} from '@ant-design/icons/lib/icons';
import { Avatar, Col, Input, Row, Typography } from 'antd';

const { Title, Text } = Typography;

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div>
          <Title>Qiita</Title>
          <div>
            <CaretDownOutlined />
            <Input placeholder='キーワードを入力' />
          </div>
          <div>
            <div>
              <FormOutlined />
              <Text>
                投稿する
              </Text>
            </div>
            <div>
              <BellFilled />
            </div>
            <Avatar size='large' icon={<UserOutlined />} />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
