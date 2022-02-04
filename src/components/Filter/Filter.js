import { useSelector, useDispatch } from 'react-redux';
import * as phonebookActions from '../../redux/actions';
import { getFilter } from '../../redux/selectors';
import { Label, Input } from './Filter.styled';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = e => dispatch(phonebookActions.changeFilter(e.target.value));
  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        placeholder="Rosie Simpson"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </Label>
  );
}
