import { BetData } from './mockBetData';
import BetCard from './BetCard';
import React from 'react';


const BetSelection: React.FC = ({ }) => {
  return (
    <div className='grid gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
      {BetData.map((e, i) => (
        <BetCard
          key={i}
          playerName={e.playerName}
          stat={e.stat}
          type={e.type}
          playerImage={e.playerImage} />
      ))}
    </div>
  );
};

export default BetSelection;
