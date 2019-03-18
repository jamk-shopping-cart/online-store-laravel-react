import React from 'react';
import Dropdown from 'react-dropdown';

const options = ['Size', 38, 39, 40, 41, 42, 43, 44, 45, 46, 47];
const defaultOption = options[0];

class DropList extends React.Component {
  onSelect(size) {
    // console.log(`size is object:`, size);
    // console.log(`object value is size.value =`, size.value);
    // console.log('onSelect', this.props);
    this.props.setSize(size.value);
  }

  render() {
    return (
      <Dropdown
        options={options}
        onChange={this.onSelect.bind(this)}
        value={defaultOption}
        placeholder="Select an option"
      />
    );
  }
}

export default DropList;
