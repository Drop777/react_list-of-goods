import React from 'react';
import PropTypes from 'prop-types';
import './Goodspage.css';
import Goodslist from '../Goodslist/Goodslist';
import Buttons from '../Buttons/Buttons';

class Goodspage extends React.Component {
  state = {
    currentRenderList: [...this.props.goodsFromServer],
    value: 0,
  }

  sortGoodsList = () => (
    this.setState(prevState => (
      {
        currentRenderList: prevState.currentRenderList.sort(
          (a, b) => a.length - b.length
        ),
      })));

  sortAlphGoodsList = () => (
    this.setState(prevState => (
      {
        currentRenderList: prevState.currentRenderList.sort(),
      }
    )));

  reverseGoodsList = () => (
    this.setState(prevState => (
      {
        currentRenderList: prevState.currentRenderList.reverse(),
      }
    )));

  selectGoodsItem = (value, list) => (
    this.setState({
      currentRenderList: list.slice(value - 1),
    })
  );

  handleSelectChange = ({ target }) => {
    this.setState({ value: target.value });

    this.selectGoodsItem(
      target.value,
      this.props.goodsFromServer
    );
  };

  resetGoodsList = () => {
    this.setState({
      currentRenderList: [...this.props.goodsFromServer],
      value: 0,
    });
  };

  render() {
    const { currentRenderList, value } = this.state;

    return (
      <>
        <Buttons
          sortGoodsList={this.sortGoodsList}
          reverseGoodsList={this.reverseGoodsList}
          resetGoodsList={this.resetGoodsList}
          sortAlphGoodsList={this.sortAlphGoodsList}
          selectGoodsItem={this.selectGoodsItem}
          goodsFromServer={this.goodsFromServer}
          handleSelectReset={this.handleSelectReset}
          handleSelectChange={this.handleSelectChange}
          value={value}
        />
        <Goodslist
          currentRenderList={currentRenderList}
        />
      </>
    );
  }
}

Goodspage.propTypes = {
  goodsFromServer: PropTypes.arrayOf(PropTypes.string),
}.isRequaired;
export default Goodspage;
