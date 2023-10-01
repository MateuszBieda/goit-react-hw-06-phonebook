import { setFilter } from "../../redux/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import { getFilter } from "../../redux/selectors";

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <label>
      Find contacts by name
      <input
        type="text"
        value={filter}
        onChange={(event) => dispatch(setFilter(event.target.value.trim()))}
      />
    </label>
  );
};
