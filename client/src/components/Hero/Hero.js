import React from "react";
import styles from "./Hero.module.css";
import background from "../../images/feedback-small.jpg";

const Hero = () => {
  return (
    <article className={styles.article}>
      <picture className={styles.picture}>
        <source media="(min-width: 0px)" srcSet={background} />
        <img src={background} alt="background" />
        <h1 className={styles.header}>Data Analyst Professionals</h1>
        <p>
          We are an organization focused analyzing and providing feedback
          about...well...feedback! We provide users the tools to customize and
          email dynamic surveys to a distribution list of their choosing. Join
          us for an experience that will educate and forever change you.
        </p>
      </picture>
    </article>

    // <div>
    //   <header className={styles.hero} id="home">
    //     <img
    //       src="images/feedback-small.jpg"
    //       className={styles.img}
    //       alt="feedback-banner"
    //     >
    //       <article>
    //         <h1>Data Analyst Professionals</h1>
    //         <p>
    //           We are an organization focused analyzing and providing feedback
    //           about...well...feedback! We provide users the tools to customize
    //           and email dynamic surveys to a distribution list of their
    //           choosing. Join us for an experience that will educate and forever
    //           change you.
    //         </p>
    //       </article>
    //     </img>
    //   </header>
    // </div>
  );
};

export default Hero;
