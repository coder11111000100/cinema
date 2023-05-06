import React from 'react';
import { HeaderTabs } from '../Header/HeaderTabs';
import { Row, Col } from 'antd';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Row justify='center'>
        <Col span={18}>
          <HeaderTabs />
        </Col>
      </Row>
    );
  }
}
export default App;
