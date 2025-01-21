import React from "react";

const Card: React.FC = () => {

    // Betting player card
    /*
    Image of player summoner icon
    Name
    Current game i.e. solo/duo, flex, aram maybe??
    Bet: KDA amount to be bet on
    Less or More betting button
    */

    const playerName: string="beerman562";
    const betType: string ="Kills";
    const betStat: string ="5.5";
    const playerImage: string ="https://pbs.twimg.com/media/F4uuyKAXEAE-GYF.jpg";

    return (
        <div className="relative px-10 py-10 bg-gray-700 text-white rounded shadow-md w-58 h-80 p-4 flex flex-col">
            {/* Player info */}
            <img 
            src={playerImage} 
            alt={playerName} 
            className="w-32 h-32 rounded-full mb-4" 
            />
            <h2 className="text-xl font-bold flex justify-center item-center">{playerName}</h2>

            {/* Bet type and amount */}
            <div className="grid grid-cols-2 w-38 h-10 rounded shadow-md overflow-hidden">
                {/* Bet type */}
                <div className="bg-gray-800 flex items-center justify-center">
                    <p className="text-sm font-bold ">{betType}</p>
                </div>
                {/* Bet Stat */}
                <div className="bg-gray-600 flex items-center justify-center">
                    <p className="text-md font-bold ">{betStat}</p>
                </div>
            </div> 


            {/* Buttons */}
            <div className="absolute bottom-0 left-0 w-full h-12 flex">
                <button 
                    className="flex-1 bg-gray-900 text-white  hover:bg-red-600
                    tracking-tighter font-bold hover:text-green-500 transition-colors duration-500 ease-in-out"
                    >
                    Less
                </button>
                <button 
                    className="flex-1 bg-gray-900 text-white  hover:bg-blue-600
                    tracking-tighter font-bold hover:text-green-500 transition-colors duration-500 ease-in-out"
                    >
                    More
                </button>
            </div>
        </div>
    );
    
}



export default Card;