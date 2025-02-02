import BetSelection from "./_components/betSelection/BetSelection";
import BetSubmission from "./_components/betSubmission/BetSubmission";


export default function Home() {
  return (
    <div className="px-10 flex flex-col gap-5 justify-center items-center">
      {/* Player display section */}
      {/* 
      Picture of champion being played (use static image from online resource)
      Player name
      Champion playing
      Picture of rank of player
      Rank of player
      Game metadata
      */}

      <BetSelection />

      <BetSubmission balance={300} />
    </div>
  );
}
