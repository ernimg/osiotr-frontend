import React from 'react';
import './Css/About.css';
const About = () => {
  var ref1 = React.createRef();
  return (
    <>
      <section id='ref1' className='about' ref={ref1}>
        <div className='heading'>
          <h2 className='heading__title'>O Nas</h2>
          <span className='heading__item'>
            <i className='fa fa-star '></i>
          </span>
        </div>

        <article className='about__child1'>
          <p className='about__introduction'>
            Nasza firma "Osiotr" powstała w 2003 roku. Założycielami są
            specjaliści z wieloletnim doświadczeniem w hodowli ryb. Widzimy
            rozwój we współpracy z firmami i gospodarstwami zajmującymi się
            reprodukcją zasobów naturalnych, produkcją jesiotra konsumpcyjnego i
            rybami ozdobnymi. Hodowla jest dostosowana do całego procesu
            reprodukcji.
          </p>
          <div className='about__list'>
            <p className='about__item'>
              <i
                class='fa fa-check-circle-o about__item-ico'
                aria-hidden='true'
              ></i>
              Posiadamy 6 obiegów zamkniętych z biologicznym oczyszczaniem wody
              do hodowli narybku jesiotra o wadze do 5 gram,
            </p>
            <p className='about__item'>
              <i
                class='fa fa-check-circle-o about__item-ico'
                aria-hidden='true'
              ></i>
              Hodowlę ryb akwariowych,
            </p>
            <p className='about__item'>
              <i
                class='fa fa-check-circle-o about__item-ico'
                aria-hidden='true'
              ></i>
              Baseny, które są chronione przed opadami atmosferycznymi, do
              podchowu jesiotra od 1 do 2000 gram ,
            </p>
            <p className='about__item'>
              <i
                class='fa fa-check-circle-o about__item-ico'
                aria-hidden='true'
              ></i>
              Stawy dla tarlaków. Wysokiej jakości narybek adaptowany do
              naturalnych warunków, duży przyrost, profilaktyka i zapobieganie
              chorobom- to nasze priorytety nad którymi ciągle pracujemy. Stały
              kontakt i współpraca z najlepszymi ekspertami rosyjskimi
              przyczyniają się do naszych postępów w tym kierunku.
            </p>
          </div>
          <p className='about__summary'>
            W akwarystyce zajmujemy się rozmnażaniem takich gatunków które w
            większości są importowane z kierunków azjatyckich. Z 40 gatunków ryb
            akwariowych w stałej sprzedaży mamy około 20 gatunków w zależności
            od zapotrzebowania rynku w danym okresie.
          </p>
        </article>
      </section>
    </>
  );
};

export default About;
