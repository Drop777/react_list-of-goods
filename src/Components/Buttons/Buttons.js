import React from 'react';
import PropTypes from 'prop-types';

class Buttons extends React.Component {
  state = {
    value: 0,
  }

  handleSelectChange(event) {
    this.setState({ value: event.target.value });

    return (this.props.selectGoodsItem(
      event.target.value,
      this.props.goodsFromServer
    )
    );
  }

  render() {
    const {
      reverseGoodsList,
      sortGoodsList,
      resetGoodsList,
      sortAlphGoodsList,
    } = this.props;

    return (
      <>
        <button
          type="button"
          onClick={() => reverseGoodsList(1)}
        >
        Reverse
        </button>
        <button
          type="button"
          onClick={() => sortAlphGoodsList(2)}
        >
        Sort alphabetically
        </button>
        <button type="button" onClick={() => resetGoodsList(0)}>Reset</button>
        <button type="button" onClick={() => sortGoodsList(3)}>Sort</button>
        <select
          value={this.state.value}
          onChange={this.handleSelectChange.bind(this)
          }
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            .map(item => <option value={item} key={item}>{item}</option>)}
        </select>
      </>
    );
  }
}

Buttons.propTypes = {
  goodsFromServer: PropTypes.arrayOf(PropTypes.string),
  reverseGoodsList: PropTypes.func,
  sortGoodsList: PropTypes.func,
  resetGoodsList: PropTypes.func,
  sortAlphGoodsList: PropTypes.func,
}.isRequaired;

export default Buttons;
