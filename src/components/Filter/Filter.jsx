import { useDispatch, useSelector } from "react-redux";
import { filteredByName } from "redux/filterReducer";
import css from "./Filter.module.css";

export const Filter = () => {
	const dispatch = useDispatch();
	const filteredValue = useSelector(state => state.filter);

	const onChangeInput = event => {
		dispatch(filteredByName(event.target.value));
	}

	return (
		<>
			<p className={css.filter__label}>Find contacts by name</p>
			<input
				className={css.filter__input}
				value={filteredValue}
				type="text"
				onChange={onChangeInput}
			/>
		</>
	)
}