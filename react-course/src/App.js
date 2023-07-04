import './App.css';
import SimpsonsComponent from "./components/SimpsonsComponent/SimpsonsComponent";
import CharacterComponent from "./components/CharacterComponent/CharacterComponent";

function App() {
  return (
    <div className="App">
      <main className="App-header">
          <div className={'Simpsons'}>
              <h1>Simpsons:</h1>
              <SimpsonsComponent/>
          </div>
          <div className={'CharactersBlock'}>
              <h1>Characters:</h1>
              <div className={'Characters'}>
                  <CharacterComponent
                      id={'3'}
                      name={'Summer Smith'}
                      status={'Alive'}
                      species={'Human'}
                      gender={'Female'}
                      image={'https://rickandmortyapi.com/api/character/avatar/3.jpeg'}
                  />
                  <CharacterComponent
                      id={'48'}
                      name={'Black Rick'}
                      status={'Alive'}
                      species={'Human'}
                      gender={'Male'}
                      image={'https://rickandmortyapi.com/api/character/avatar/48.jpeg'}
                  />
                  <CharacterComponent
                      id={'102'}
                      name={'Donna Gueterman'}
                      status={'Dead'}
                      species={'Robot'}
                      gender={'Female'}
                      image={'https://rickandmortyapi.com/api/character/avatar/102.jpeg'}
                  />
                  <CharacterComponent
                      id={'221'}
                      name={'Melissa'}
                      status={'Alive'}
                      species={'Mythological Creature'}
                      gender={'Female'}
                      image={'https://rickandmortyapi.com/api/character/avatar/221.jpeg'}
                  />
                  <CharacterComponent
                      id={'381'}
                      name={'Woman Rick'}
                      status={'Alive'}
                      species={'Alien'}
                      gender={'Female'}
                      image={'https://rickandmortyapi.com/api/character/avatar/381.jpeg'}
                  />
                  <CharacterComponent
                      id={'803'}
                      name={'40 Years Old Morty'}
                      status={'unknown'}
                      species={'Human'}
                      gender={'Male'}
                      image={'https://rickandmortyapi.com/api/character/avatar/803.jpeg'}
                  />
              </div>
          </div>
      </main>
    </div>
  );
}

export default App;
