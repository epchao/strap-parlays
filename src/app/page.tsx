export default function Home() {
  return (
    <div className="flex justify-center">
      {/* 
      Steps to create a new component:
      1. navigate to ./src/app/_components directory
      2. create new component folder with name (naming convention: all lowercases)
      3. create new component file (something.tsx; naming convention: pascal case) 
      4. copy and paste the code from either the Footer.tsx inside of /footer or NavBar.tsx 
      inside of /nav to get started.
      5. import your new component into this Home page so you can see your changes live.

      Don't delete anything inside of this file and only add where your section belongs because
      it'll make it more difficult to merge code.

      HARD CODE EVERYTHING FOR NOW.
      */}
      <p>content 1</p>

      {/* Player display section */}
      {/* 
      Picture of champion being played (use static image from online resource)
      Player name
      Champion playing
      Picture of rank of player
      Rank of player
      Game metadata
      */}

      {/* Player Card Section */}
      {/* Only 3 cards in one row, descending afterwards and if i reduce my tab width all the way,
      it should conform to one card per row.

      stat - Players Killed, Towers Destroyed, Assisted Gain, etc...

      The card content will be top-down

      Display - Image of type of stat
      Stat

      Higher or lower button

      When the user selects higher or lower, the button and border will turn green.
       */}

      {/* Submit Bet Section */}
      {/* Create a form that shows the following inputs
      * entry fee
      * to win amount (which is not editable; static for now, later we will make it dynamic based on
      * bets made)
      * 
      * show the balance of the user
      * submit bet button to submit the form
      */}

    </div>
  );
}
