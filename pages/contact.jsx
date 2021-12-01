import Circle from '../components/Circle';
import style from '../styles/Contact.module.css';

const Contact = () => {
  return (
    <div className={style.container}>
      <Circle
        backgroundColor="black"
        left="-40vh"
        top="-20vh"
        className={style.circle}
      />
      <Circle
        backgroundColor="black"
        right="-30vh"
        bottom="-60vh"
        className={style.circle}
      />
      <h1 className={style.title}>Get in Touch</h1>
      <form className={style.form}>
        <input className={style.inputS} type="text" placeholder="NAME" />
        <input className={style.inputS} type="text" placeholder="PHONE" />
        <input className={style.inputL} type="text" placeholder="EMAIL" />
        <input className={style.inputL} type="text" placeholder="SUBJECT" />
        <textarea
          className={style.textArea}
          type="text"
          rows={6}
          placeholder="MESSAGE"
        />
        <button className={style.button}>SUBMIT</button>
      </form>
    </div>
  );
};

export default Contact;
