import React from "react";
import Image from 'next/image';

interface StatCardProps {
    playerName: string;
    betType: string;
    betStat: string;
    playerImage: string;
}

const StatCard: React.FC<StatCardProps> = ({playerName, betType, betStat, playerImage}) => {



    return (
        <div className="relative p-10 bg-gray-700 text-white rounded shadow-md w-58 h-80 flex flex-col align-center justify-center flex-grow-0">
            {/* Player info */}
            <Image 
            src={playerImage} 
            alt={playerName} 
            width={128}
            height={128}
            className="rounded-full mb-4 mx-auto" 
            />
            <h2 className="text-xl font-bold flex justify-center item-center mb-2">{playerName}</h2>
            

            {/* Bet type and amount */}
            <div className="flex w-38 h-10 rounded shadow-md overflow-under mb-4">
                {/* Bet type */}
                <div className="flex-1 bg-gray-800 flex items-center justify-center">
                    <p className="text-center text-sm font-bold break-words w-14">{betType}</p>
                </div>
                {/* Bet Stat */}
                <div className="flex-1 bg-gray-600 flex items-center justify-center">
                    <p className="text-md font-bold ">{betStat}</p>
                </div>
            </div> 
            

            {/* Buttons */}
            <div className="absolute bottom-0 left-0 w-full h-12 flex">
                <button 
                    className="flex-1 bg-gray-900 text-white  hover:bg-red-600
                    tracking-tighter font-bold hover: transition-colors duration-500 ease-in-out"
                    >
                    Less
                </button>
                <button 
                    className="flex-1 bg-gray-900 text-white  hover:bg-lime-600
                    tracking-tighter font-bold hover: transition-colors duration-500 ease-in-out"
                    >
                    More
                </button>
            </div>
        </div>
    );
    
}



export default StatCard;
