import { CARD_INFO } from "./data";
import Card from "./components/card.jsx";


function App() {
  return (
    <>
      {
      <body>
        <header>
          <h1>Card</h1>
        </header>
    
        <div class="cards-view">
          <div class="cards-grid">
            {CARD_INFO.map((card, index) => (
             <Card key={index} cardInfo={card}/>
            ))}
          </div>
        </div>
      </body>
      }
    </>
  );
}

export default App;