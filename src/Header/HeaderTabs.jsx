import React from 'react';
import { Tabs } from 'antd';
import { Search } from '../search/search';

class HeaderTabs extends React.Component {
  constructor() {
    super();
    this.items = [
      {
        key: '1',
        label: `Search`,
        children: <Search />,
      },
      {
        key: '2',
        label: `Rated`,
        children: `Content of Tab Pane 2`,
      },
    ];
  }
  onChange = key => {
    console.log(key);
  };
  render() {
    return (
      <div className='container'>
        <Tabs
          defaultActiveKey='1'
          items={this.items}
          onChange={this.onChange}
          centered
          tabBarStyle={{ margin: 'auto', marginTop: '32px' }}
        />
      </div>
    );
  }
}
export { HeaderTabs };
