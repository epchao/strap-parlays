import BetSelection from "./_components/betSelection/BetSelection";
import BetSubmission from "./_components/betSubmission/BetSubmission";
import PlayerDisplay from "./_components/playerDisplay/PlayerDisplay";

export default function Home() {
  return (
    <div className="px-10 flex flex-col gap-5 justify-center items-center">
      <PlayerDisplay />
      
      <BetSelection />

      <BetSubmission balance={300} />
    </div>
  );
}
