import React from 'react';

class ProductCategoryRow extends React.Component {
  render() {
    // eslint-disable-next-line prefer-destructuring
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="2">{category}</th>
      </tr>
    );
  }
}
export default ProductCategoryRow;
