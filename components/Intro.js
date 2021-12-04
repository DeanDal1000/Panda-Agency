import style from '../styles/Intro.module.css';
import Image from 'next/image';
import Circle from './Circle';

const Intro = () => {
  return (
    <div className={style.container}>
      <Circle backgroundColor="white" top="-45vh" left="-45vh" />
      <div className={style.card}>
        <h1 className={style.title}>
          <span className={style.brandName}>PANDA</span> DIGITAL PRODUCT AGENCY
        </h1>
        <p className={style.desc}>
          We are PANDA. We combine the trusted expertise and objectivity of
          PANDA with today’s digital marketing capabilities, to help your
          businesses grow and suceed into sucess.
        </p>
        <button className={style.button}>DISCOVER</button>
      </div>
      <div className={style.card}>
        <img classnmae={style.hero} src="/img/hero3.jpg" alt="" />
      </div>
    </div>
  );
};

export default Intro;
