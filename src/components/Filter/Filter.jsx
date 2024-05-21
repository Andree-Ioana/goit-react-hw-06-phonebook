import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import style from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  return (
    <label className={style.filterContainer}>
      Find contacts by name
      <input 
        type="text"
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </label>
  );
};

export default Filter;
