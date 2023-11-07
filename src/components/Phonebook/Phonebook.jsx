import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'services/getFilteredContactsByName';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import css from "./Phonebook.module.css";

export const Phonebook = () => {
	const contactsLists = useSelector(selectContacts);
	const filteredValue = useSelector(state => state.filter);

	const filteredContacts = getFilteredContacts(filteredValue, contactsLists);

	const isLoading = useSelector(selectIsLoading)
	const error = useSelector(selectError);

	return (
		<>
			<div className={css.form}>
			<h1 className={css.phonebook__title}>Phonebook</h1>
				<ContactForm />
				{
					contactsLists?.length > 0
					&&
					<>
						<h2 className={css.phonebook__title}>Contacts</h2>
						<Filter />
						{isLoading && <p className={css.contact__text}>Is Loading...</p>}
						{error && <p className={css.contact__text}>error</p>}
						<ContactList filteredContacts={filteredContacts} />
					</>
				}
			</div>
		</>
	)
}