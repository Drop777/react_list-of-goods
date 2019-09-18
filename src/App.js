import React from 'react';
import Goodspage from './Components/Goodspage/Goodspage';

const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

class App extends React.Component {
  state = {
    isLoaded: false,
  }

  render() {
    const { isLoaded } = this.state;

    return (
      <div className="App">
        <h1>Goods 1</h1>
        {isLoaded
          ? <Goodspage goodsFromServer={goodsFromServer} />
          : (
            <button
              type="button"
              onClick={() => this.setState({ isLoaded: true })}
            >
            Start
            </button>
          )
        }
      </div>
    );
  }
}

export default App;
