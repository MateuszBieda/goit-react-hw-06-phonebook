import { useDispatch } from 'react-redux';
import { addContact } from 'redux/actions';
import css from './ContactForm.module.css';

export const Form = () => {
  const dispatch = useDispatch();



  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(addContact(form.elements.text.value))
    form.reset();
    
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label>
        <p className={css.paragraph}>Name</p>
        <input
          className={css.input}
          id="name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required

        />
      </label>
      <label>
        <p className={css.paragraph}>Number</p>
        <input
          className={css.input}
          id="number"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};
