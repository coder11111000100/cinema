import { Typography } from 'antd';

const { Title } = Typography;

function HeaderCard({ title, rate }) {
  return (
    <div className='card-header'>
      <Title style={{ margin: 0 }} level={4}>
        {title}
      </Title>
      <div className={'rate'}>{rate}</div>
    </div>
  );
}

export { HeaderCard };
