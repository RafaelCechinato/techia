import React from 'react';
import Card  from '../../components/Cards/index';

const Home = () => {
  return (
    <div className='home'>
      <Card 
        title={'Total de Produtos'}
        className = "shadow"
        description={'505'}
      />
    </div>
  );
};

export default Home;
