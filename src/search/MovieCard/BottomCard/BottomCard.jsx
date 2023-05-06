import { Rate, Typography } from 'antd';

const { Paragraph } = Typography;
function BottomCard({ description, rateValue }) {
  const text = description.split(' ').slice(0, 22).join(' ');
  return (
    <>
      <Paragraph className='description-text'>{`${text}...`}</Paragraph>
      <Rate count={10} allowHalf defaultValue={rateValue} rootClassName={'stars'} />
    </>
  );
}

export { BottomCard };
