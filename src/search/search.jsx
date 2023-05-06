import { Main } from './Main';
import { Input } from 'antd';
function Search() {
  return (
    <div className='search-container search-gap'>
      <Input placeholder='Type to search...' />
      <Main />
    </div>
  );
}

export { Search };
