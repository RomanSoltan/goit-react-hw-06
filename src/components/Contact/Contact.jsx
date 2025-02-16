import { HiUser } from 'react-icons/hi';
import { HiPhone } from 'react-icons/hi';
import s from './Contact.module.css';

const Contact = ({ name, number, id, onDelete }) => {
  return (
    <li className={s.item}>
      <div className={s.contact}>
        <p className={s.descr}>
          <HiUser className={s.icon} size="20" /> {name}
        </p>
        <p className={s.descr}>
          <HiPhone className={s.icon} size="20" /> {number}
        </p>
      </div>
      <div className={s.btnWrap}>
        <button className={s.btn} onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </li>
  );
};
export default Contact;
