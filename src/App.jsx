import "./App.css";
import AreaRating from "./components/AreaRating.jsx";
import data from "./data/data.json";


function App() {

  function getScoreByCategory(data, category) {
    for (let item of data) {
        if (item.category === category) {
            return item.score;
        }
    }
    return null;
  }
  
  const reactionRating = getScoreByCategory(data, "Reaction");
  const memoryRating = getScoreByCategory(data, "Memory");
  const verbalRating = getScoreByCategory(data, "Verbal");
  const visualRating = getScoreByCategory(data, "Visual");

  const totalRating = Math.floor((reactionRating + memoryRating + verbalRating + visualRating) / 4);

  return (
    <main>
      <div className="card">
        <div className="result">
          <h2>Your Result</h2>
          <div className="rating">
            <h1>{totalRating}</h1>
            <p>of 100</p>
          </div>
          <h1>Great</h1>
          <p>
            Your performace exceed 65% of the people conductig the test here!
          </p>
        </div>

        <div className="summary">
          <h2>Summary</h2>
          <AreaRating area="Reaction" rating={reactionRating} />
          <AreaRating area="Memory" rating={memoryRating} />
          <AreaRating area="Verbal" rating={verbalRating} />
          <AreaRating area="Visual" rating={visualRating} />
          <button>Continue</button>
        </div>

      </div>
    </main>
  );
}

export default App;
