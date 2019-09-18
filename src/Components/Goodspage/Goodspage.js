import React from 'react';
import PropTypes from 'prop-types';
import './Goodspage.css';
import Goodslist from '../Goodslist/Goodslist';
import Buttons from '../Buttons/Buttons';

class Goodspage extends React.Component {
  state = {
    currentRenderIndex: 0,
    currentRenderList: [...this.props.goodsFromServer],
  }

  sortGoodsList = index => (
    this.setState(prevState => (
      {
        currentRenderIndex: index,
        currentRenderList: prevState.currentRenderList.sort(
          (a, b) => a.length - b.length
        ),
      })));

  sortAlphGoodsList = index => (
    this.setState(prevState => (
      {
        currentRenderIndex: index,
        currentRenderList: prevState.currentRenderList.sort(),
      }
    )));

  reverseGoodsList = index => (
    this.setState(prevState => (
      {
        currentRenderIndex: index,
        currentRenderList: prevState.currentRenderList.reverse(),
      }
    )));

  selectGoodsItem = (value, list) => (
    this.setState(
      {
        currentRenderList: list.slice(value - 1),
      }
    ));

  resetGoodsList = index => (
    this.setState({
      currentRenderIndex: index,
      currentRenderList: [...this.props.goodsFromServer],
    })
  );

  render() {
    const { goodsFromServer } = this.props;
    const { currentRenderIndex, currentRenderList } = this.state;
    const {
      sortGoodsList,
      reverseGoodsList,
      resetGoodsList,
      sortAlphGoodsList,
      selectGoodsItem,
    } = this;

    return (
      <>
        <Buttons
          sortGoodsList={sortGoodsList}
          reverseGoodsList={reverseGoodsList}
          resetGoodsList={resetGoodsList}
          sortAlphGoodsList={sortAlphGoodsList}
          selectGoodsItem={selectGoodsItem}
          goodsFromServer={goodsFromServer}
        />
        <Goodslist
          currentRenderList={currentRenderList}
          currentRender={currentRenderIndex}
        />
      </>
    );
  }
}

Goodspage.propTypes = {
  goodsFromServer: PropTypes.arrayOf(PropTypes.string),
}.isRequaired;
export default Goodspage;
