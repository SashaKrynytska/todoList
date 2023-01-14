// тут храним компоненты обновления, а значение в апп
import React from 'react';

const Filter = ({ value, onChange }) => (
  <label>
    Фильтр по имени <input type="text" value={value} onChange={onChange} />
  </label>
);

// const Filter = () => (
//   <label>
//     Фильтр по имени{' '}
//     <input type="text" value={filter} onChange={this.changeFilter} />
//   </label>
// );

export default Filter;
