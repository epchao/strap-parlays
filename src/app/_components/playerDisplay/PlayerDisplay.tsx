const PlayerDisplay: React.FC = () => {
  const championImg: string =
    "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Warwick_0.jpg";

  const rank: string = "Challenger";
  const rankImage: string =
    "https://cdn3.emoji.gg/emojis/2370-lol-border9-challenger.png";

  const playerName: string = "beerman562";
  const playerLevel: number = 1000;
  const playerIcon: string =
    "https://static.bigbrain.gg/assets/lol/riot_static/14.24.1/img/profileicon/1439.png";

  return (
    <>
      {/* Main Container */}
      <main className="flex flex-col items-center gap-2 p-2 bg-green-500 h-auto w-[95dvw] rounded-3xl lg:h-[80dvh] lg:flex-row lg:p-8 lg:gap-8">
        {/* Player info container */}
        <section className="flex flex-col items-center bg-neutral-400 h-auto w-full rounded-3xl sm:flex-row sm:justify-evenly lg:flex-col lg:h-full lg:w-2/6">
          {/* Player icon */}
          <div className="flex items-center gap-2 p-4 lg:p-0 lg:pt-8">
            <img src={playerIcon} className="h-16 rounded-lg"></img>
            <div className="flex flex-col">
              <p>{playerName} #NA1</p>
              <p className="text-xs">Level {playerLevel}</p>
            </div>
          </div>
          {/* Player ranks */}
          <div className="flex h-full w-full py-4 justify-evenly items-center lg:flex-col lg:w-full text-center lg:justify-evenly">
            <div className="text-xs sm:text-sm flex flex-col items-center lg:text-base lg:w-full">
              <p className="lg:bg-gray-800 lg:w-full lg:p-4">Solo/Duo</p>
              <div className="lg:flex lg:flex-col lg:justify-center">
                <img src={rankImage} className="m-4 h-12 lg:h-16"></img>
                <p>Challenger</p>
              </div>
            </div>
            <div className="bg-white h-28 w-[1px] lg:hidden"></div>
            <div className="text-xs sm:text-sm flex flex-col items-center lg:text-base lg:w-full">
              <p className="lg:bg-gray-800 lg:w-full lg:p-4">Flex</p>
              <div className="lg:flex lg:flex-col lg:justify-center">
                <img src={rankImage} className="m-4 h-12 lg:h-16"></img>
                <p>{rank}</p>
              </div>
            </div>
          </div>
        </section>
        {/* Champ Image + Game Meta Data Container */}
        <section className="h-auto w-[100%] lg:h-full lg:w-4/6 bg-neutral-400 rounded-3xl pb-2">
          {/* Champ Image */}
          <div className="h-24 lg:h-1/4">
            <img
              src={championImg}
              className="object-cover h-full w-full rounded-t-3xl"
            ></img>
          </div>
          {/* Game data */}
          <div className="flex flex-col text-center text-xs lg:h-3/4">
            {/* Time */}
            <div className="bg-black p-1 sm:text-sm lg:text-base">
              <p>Game Time : 19:00</p>
            </div>
            {/* Blue Team Table */}
            <div className="bg-blue-400 p-1 sm:text-sm lg:text-base">
              <p>Blue Team</p>
            </div>
            <table className="flex-1 table-fixed w-full text-[0.6rem] sm:text-sm lg:text-base">
              <thead className="bg-gray-800">
                <tr>
                  <th>Player</th>
                  <th>Champion</th>
                  <th>Avg KDA</th>
                  <th>Avg CS</th>
                  <th>Rank</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr>
                  <td>beerman562</td>
                  <td>Warwick</td>
                  <td>3.25</td>
                  <td>120</td>
                  <td>Challenger</td>
                </tr>
                <tr>
                  <td>Player 2</td>
                  <td>Nunu</td>
                  <td>3.25</td>
                  <td>120</td>
                  <td>Challenger</td>
                </tr>
                <tr>
                  <td>Player 3</td>
                  <td>Nunu</td>
                  <td>3.25</td>
                  <td>120</td>
                  <td>Challenger</td>
                </tr>
                <tr>
                  <td>Player 4</td>
                  <td>Nunu</td>
                  <td>3.25</td>
                  <td>120</td>
                  <td>Challenger</td>
                </tr>
                <tr>
                  <td>Player 5</td>
                  <td>Nunu</td>
                  <td>3.25</td>
                  <td>120</td>
                  <td>Challenger</td>
                </tr>
              </tbody>
            </table>
            {/* Red Team Table */}
            <div className="bg-red-400 p-1 mt-1 text-xs sm:text-sm lg:text-base">
              <p>Red Team</p>
            </div>
            <table className="flex-1 table-fixed w-full text-[0.6rem] sm:text-sm lg:text-base">
              <thead className="bg-gray-800">
                <tr>
                  <th>Player</th>
                  <th>Champion</th>
                  <th>Avg KDA</th>
                  <th>Avg CS</th>
                  <th>Rank</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr>
                  <td>Player 1</td>
                  <td>Nunu</td>
                  <td>3.25</td>
                  <td>120</td>
                  <td>Challenger</td>
                </tr>
                <tr>
                  <td>Player 2</td>
                  <td>Nunu</td>
                  <td>3.25</td>
                  <td>120</td>
                  <td>Challenger</td>
                </tr>
                <tr>
                  <td>Player 3</td>
                  <td>Nunu</td>
                  <td>3.25</td>
                  <td>120</td>
                  <td>Challenger</td>
                </tr>
                <tr>
                  <td>Player 4</td>
                  <td>Nunu</td>
                  <td>3.25</td>
                  <td>120</td>
                  <td>Challenger</td>
                </tr>
                <tr>
                  <td>Player 5</td>
                  <td>Nunu</td>
                  <td>3.25</td>
                  <td>120</td>
                  <td>Challenger</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </>
  );
};

export default PlayerDisplay;
