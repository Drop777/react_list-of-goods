import React from 'react';
import PropTypes from 'prop-types';

// // eslint-disable-next-line react/prefer-stateless-function
// class Buttons extends React.Component {

//   render() {
//     const {
//       reverseGoodsList,
//       sortGoodsList,
//       resetGoodsList,
//       sortAlphGoodsList,
//       handleSelectChange,
//       value,
//     } = this.props;

//     return (
//       <>
//         <button
//           type="button"
//           onClick={reverseGoodsList}
//         >
//         Reverse
//         </button>
//         <button
//           type="button"
//           onClick={sortAlphGoodsList}
//         >
//         Sort alphabetically
//         </button>
//         <button type="button" onClick={resetGoodsList}>Reset</button>
//         <button type="button" onClick={sortGoodsList}>Sort</button>
//         <select
//           value={value}
//           onChange={handleSelectChange}
//         >
//           {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//             .map(item => <option value={item} key={item}>{item}</option>)}
//         </select>
//       </>
//     );
//   }
// }

const Buttons = props => (
  <>
    <button
      type="button"
      onClick={props.reverseGoodsList}
    >
    Reverse
    </button>
    <button
      type="button"
      onClick={props.sortAlphGoodsList}
    >
    Sort alphabetically
    </button>
    <button type="button" onClick={props.resetGoodsList}>Reset</button>
    <button type="button" onClick={props.sortGoodsList}>Sort</button>
    <select
      value={props.value}
      onChange={props.handleSelectChange}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        .map(item => <option value={item} key={item}>{item}</option>)}
    </select>
  </>
);

Buttons.propTypes = {
  goodsFromServer: PropTypes.arrayOf(PropTypes.string),
  reverseGoodsList: PropTypes.func,
  sortGoodsList: PropTypes.func,
  resetGoodsList: PropTypes.func,
  sortAlphGoodsList: PropTypes.func,
}.isRequaired;

export default Buttons;
