import React from "react";
//import { Link } from "react-router-dom";
// Components
//import Header from "../../components/Header";
//import Button from "../../components/Button";

// Styles
import styles from "./index.module.scss";

const About = () => {
  return (
    <div className={styles.container}>
      <div>
        {" "}
        <img src={require("../../assets/hero.jpg")} alt="" />
        <h2>Компания</h2>
      </div>
      <section>
        <p>
          Наша компания предлагает уход полного цикла за использованным
          текстилем.
        </p>
        <p>
          У вас есть списанный текстиль? Наша команда позаботится, чтобы
          использованный текстиль не попал на полигоны, а получил вторую жизнь в
          виде новых текстильных изделий или был переработан в Финляндии с
          применением инновационных технологи, без причинения вреда окружающей
          среде.
        </p>
        <p>
          Благодаря удачному месторасположению в Санкт-Петербурге, наша компания
          имеет возможность использовать творческий потенциал и сырье с
          российской стороны, и технологические возможности &mdash; с финской.
        </p>
        <p>
          Мы гарантируем нашим клиентам полную прозрачность, высокое качество
          наших изделий и информационную поддержку.
        </p>
      </section>
    </div>
  );
};

export default About;