import { Card, Image, Typography } from 'antd';
import { HeaderCard } from './HeaderCard/HeaderCard';
import { useWindowSize } from '../../hooks/useWindowWidth';
import { BottomCard } from './BottomCard/BottomCard';
import { Tags } from './Tags/Tags';
const Image_url = 'https://image.tmdb.org/t/p/w500';

const { Text } = Typography;
function MovieCard({ title, img, rate, date, genres, rateValue, description }) {
  const { width } = useWindowSize();
  return (
    <Card className={'card'} hoverable bodyStyle={{ padding: 0 }}>
      <div className={'cardContent'}>
        <div className={'top-card'}>
          <Image width={width >= 992 ? 'auto' : 60} src={Image_url + img} />
          <div className={'right-side'}>
            <HeaderCard title={title} rate={rate} />
            <Text type='secondary'>{date}</Text>
            <Tags genres={genres} />
            {width >= 992 && <BottomCard description={description} rateValue={rateValue} />}
          </div>
        </div>
        {width < 992 && <BottomCard description={description} rateValue={rateValue} />}
      </div>
    </Card>
  );
}

export { MovieCard };
