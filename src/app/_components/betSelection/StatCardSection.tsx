import {StatData} from './mockBetData';
import StatCard from './StatCard';
import React from 'react';


const StatCardSection: React.FC = ({}) => {
  return (
    <div className='grid gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
        {StatData.map((e, i) => (
            <StatCard
            key={i}
            playerName={e.playerName}
            betStat={e.betStat}
            betType={e.betType}
            playerImage={e.playerImage} />
        ))}
    </div>
  );
};

export default StatCardSection;
