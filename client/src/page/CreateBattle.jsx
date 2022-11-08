import React from 'react';

import { PageHOC } from '../components';

const Home = () => {
  return (
    <div>
     <h1 className='text-white text-xl'> Hello From CreateBattle</h1>
    </div>
  )
};

export default PageHOC(
  Home,
<>
Create <br/> a new Battle 
</>,
<>
Create your own battle and wait for other players to join
</>
);