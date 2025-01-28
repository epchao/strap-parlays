
import StatCard from './StatCard';
import React from 'react';

interface CardProps {
    playerName: string;
    betType: string;
    betStat: string;
    playerImage: string;
}

interface StatCardSectionProps {
    stats: CardProps[];
}

const StatCardSection: React.FC<StatCardSectionProps> = ({stats}) => {
  return (
    <div className='grid gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
        {stats.map((e, i) => (
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