export default function RoomConfigForm() {
  return (
    <>
      <form className="text-lg font-semibold">
        <div className="doodle-big-border h-[350px] overflow-y-auto px-2 py-3">
          <div className="flex items-center justify-between mb-4">
            <label htmlFor="player" className="text-xl font-bold w-1/3">Players</label>
            <input
              type="number"
              name="player-count"
              id="player"
              className="doodle-border w-2/3"
              placeholder="Enter Number of Players"
            />
          </div>

          <div className="flex items-center justify-between mb-4">
            <label htmlFor="language" className="text-xl font-bold w-1/3">Language</label>
            <select name="language" id="language" className="doodle-border w-2/3">
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
            </select>
          </div>

          <div className="flex items-center justify-between mb-4">
            <label htmlFor="drawing-time" className="text-xl font-bold w-1/3">Drawing Time</label>
            <input
              type="number"
              name="drawing-time"
              id="drawing-time"
              className="doodle-border w-2/3"
              placeholder="Drawing Time in sec"
            />
          </div>

          <div className="flex items-center justify-between mb-4">
            <label htmlFor="rounds" className="text-xl font-bold w-1/3">Rounds</label>
            <input
              type="number"
              name="rounds"
              id="rounds"
              className="doodle-border w-2/3"
              placeholder="Enter Number of Rounds"
            />
          </div>

          <div className="flex items-center justify-between mb-4">
            <label htmlFor="word-clue" className="text-xl font-bold w-1/3">Word Clue</label>
            <input
              type="number"
              name="word-clue"
              id="word-clue"
              className="doodle-border w-2/3"
              placeholder="Number of Clues"
            />
          </div>

          <div className="flex items-center justify-between">
            <label htmlFor="custom-word" className="text-xl font-bold w-1/3">Custom Words</label>
            <textarea
              name="custom-word"
              id="custom-word"
              className="doodle-border w-2/3 h-36"
              placeholder="Enter List of Custom Words with maximum lenght of 32. Seperated by Comma(,)"
            />
          </div>

          <div className="flex justify-end">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="custom-word-only"
                id="custom-word-only"
                className="mr-2"
              />
              <label htmlFor="custom-word-only" className="font-bold">Use Custom Words Only</label>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <button className="doodle-button thick-lined w-full mb-2 text-lg font-bold bg-primary text-white">Start</button>
          <div className="flex gap-2">
            <button className="doodle-button thick-dashed w-full text-lg font-bold">Copy invite</button>
            <button className="doodle-button thick-dashed w-full text-lg font-bold">Share invite</button>
          </div>
        </div>
      </form>
    </>
  );
}
