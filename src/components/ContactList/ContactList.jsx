import css from "./ContactList.module.css";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { removeContact } from "redux/operations";

export const ContactList = ({ filteredContacts }) => {
	const dispatch = useDispatch();

	return (
		<>
			{
				filteredContacts.length === 0
				? <p className={css.contact__text}>Contact not found</p>
				: <ul className={css.contacts__list}>
					{filteredContacts.map(({ name, id, number }) =>
						<li className={css.contact__item} key={id}>
							<span className={css.contact__text}>{name}: {number}</span>
							<button
								id={id}
								onClick={() => dispatch(removeContact(id))}
								className={css.contact__button}
								type="button">
								Delete
							</button>
						</li>
					)}
					</ul>
			}
		</>
	)
}

ContactList.propTypes = {
	filteredContacts: PropTypes.arrayOf(PropTypes.exact({
		name: PropTypes.string.isRequired,
		number: PropTypes.string.isRequired,
		id: PropTypes.string.isRequired
	}))
}