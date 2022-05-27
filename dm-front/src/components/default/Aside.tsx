import { Box } from '@mui/system';
import React from 'react';
import Categories from '../tools/Categories';
import HotTags from '../tools/HotTags';
import Search from '../tools/Search';

// import { Container } from './styles';

const Aside: React.FC = () => {
  return (
    <Box sx={{ width: '240px', height: '100vh' }}>
      <Search />
      <Categories />
      <HotTags />
    </Box>
  );
}

export default Aside;