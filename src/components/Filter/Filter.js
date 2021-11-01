import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/contacts/contacts-actions';
import { getFilter } from '../../redux/contacts/contacts-selectors';

import { Inner, Input, Label } from './Filter.styled';

function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChangeFilter = e => dispatch(actions.FILTER(e.target.value));

  return (
    <Inner>
      <Label>Find contact</Label>
      <Input
        name="filter"
        placeholder="Enter search word..."
        filter={filter}
        onChange={onChangeFilter}
      />
    </Inner>
  );
};


export default Filter;