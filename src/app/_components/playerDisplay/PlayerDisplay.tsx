"use client";

import { useState, useEffect } from "react";
import { Player, allies, enemies } from "./mockPlayerData";
import Image from "next/image";

const PlayerDisplay: React.FC = () => {
  // Pretend call to API...
  const [time, setTime] = useState("00:00");
  const currentPlayer: Player = allies[0];
  // Updates to game time state
  useEffect(() => {
    setTime("19:00");
  }, []);

  return (
    <>
      {/* Main Container */}
      <main className="flex flex-col items-center gap-2 p-2 bg-green-500 h-auto w-[95dvw] rounded-3xl lg:flex-row lg:p-8 lg:gap-8">
        {/* Player info container */}
        <section className="flex flex-col items-center bg-neutral-400 h-auto w-full rounded-3xl sm:flex-row sm:justify-evenly lg:flex-col lg:h-[40rem] lg:w-2/6">
          {/* Player icon */}
          <div className="flex items-center gap-2 p-4 lg:p-0 lg:pt-8">
            <Image
              src={currentPlayer.icon as string}
              alt="icon"
              width={100}
              height={100}
              className="h-16 rounded-lg"
            ></Image>
            <div className="flex flex-col">
              <p>
                {currentPlayer.name} #{currentPlayer.tag}
              </p>
              <p className="text-xs">Level {currentPlayer.level}</p>
            </div>
          </div>
          {/* Player ranks */}
          <div className="flex h-full w-full py-4 justify-evenly items-center lg:flex-col lg:w-full text-center lg:justify-evenly">
            <div className="text-xs sm:text-sm flex flex-col items-center lg:text-base lg:w-full">
              <p className="lg:bg-gray-800 lg:w-full lg:p-4">Solo/Duo</p>
              <div className="lg:flex lg:flex-col lg:justify-center">
                <Image
                  src={currentPlayer.soloDuoRankImage as string}
                  alt="Rank"
                  width={100}
                  height={100}
                  className="m-4 h-12 lg:h-16"
                ></Image>
                <p>{currentPlayer.soloDuoRank}</p>
              </div>
            </div>
            <div className="bg-white h-28 w-[1px] lg:hidden"></div>
            <div className="text-xs sm:text-sm flex flex-col items-center lg:text-base lg:w-full">
              <p className="lg:bg-gray-800 lg:w-full lg:p-4">Flex</p>
              <div className="lg:flex lg:flex-col lg:justify-center">
                <Image
                  src={currentPlayer.flexRankImage as string}
                  alt="Rank"
                  width={100}
                  height={100}
                  className="m-4 h-12 lg:h-16"
                ></Image>
                <p>{currentPlayer.flexRank}</p>
              </div>
            </div>
          </div>
        </section>
        {/* Champ Image + Game Meta Data Container */}
        <section className="bg-neutral-400 rounded-3xl h-auto w-[100%] lg:h-[40rem] lg:w-4/6 lg:flex lg:flex-col">
          {/* Champ Image */}
          <div className="flex-1 h-24 lg:h-48">
            <Image
              src={currentPlayer.championImage as string}
              alt="Champion"
              width={100}
              height={100}
              className="object-cover h-full w-full rounded-t-3xl"
            ></Image>
          </div>
          {/* Game data */}
          <div className="flex-1 flex flex-col text-center text-xs lg:auto">
            {/* Time */}
            <div className="bg-black p-1 sm:text-sm lg:text-base">
              <p>Game Time : {time}</p>
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
                  <th>Avg CS/min</th>
                  <th>Rank</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {/* Populate table */}
                {allies.map((player, index) => {
                  return (
                    <tr key={index}>
                      <td>{player.name}</td>
                      <td>{player.champion}</td>
                      <td>{player.avgKda.toFixed(2)}</td>
                      <td>{player.avgCs.toFixed(2)}</td>
                      <td>{player.soloDuoRank}</td>
                    </tr>
                  );
                })}
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
                {/* Populate table */}
                {enemies.map((player, index) => {
                  return (
                    <tr key={index}>
                      <td>{player.name}</td>
                      <td>{player.champion}</td>
                      <td>{player.avgKda.toFixed(2)}</td>
                      <td>{player.avgCs.toFixed(2)}</td>
                      <td>{player.soloDuoRank}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </>
  );
};

export default PlayerDisplay;
