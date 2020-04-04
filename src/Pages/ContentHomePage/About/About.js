import React from 'react';
const About = () => {
  var ref1 = React.createRef();
  return (
    <>
      <section id='ref1' className='about' ref={ref1}>
        <div className='about__header'>
          <h2 className='about__title'>O nas</h2>
          <i className='fa fa-star' aria-hidden='true'></i>
          <hr className='about__star'></hr>
        </div>
        <div className='about__child1'>
          <article className='about__introduction'>
            <p>
              Nasza firma " Osiotr "powstała w 2003roku. Założycielami są
              specjaliści z wieloletnim doświadczeniem w hodowli ryb. Widzimy
              rozwój we współpracy z firmami i gospodarstwami zajmującymi się
              reprodukcją zasobów naturalnych, produkcją jesiotra konsumpcyjnego
              i rybami ozdobnymi. Hodowla jest dostosowana do całego procesu
              reprodukcji.
            </p>
          </article>
          <article className='about__list'>
            <p className='about__item'>
              <span>
                <i class='fa fa-check-circle-o' aria-hidden='true'></i>
              </span>
              Posiadamy 6 obiegów zamkniętych z biologicznym oczyszczaniem wody
              do hodowli narybku jesiotra o wadze do 5 gram,
            </p>
            <p className='about__item'>
              <span>
                <i class='fa fa-check-circle-o' aria-hidden='true'></i>
              </span>
              Hodowlę ryb akwariowych,
            </p>
            <p className='about__item'>
              <span>
                <i class='fa fa-check-circle-o' aria-hidden='true'></i>
              </span>
              baseny, które są chronione przed opadami atmosferycznymi, do
              podchowu jesiotra od 1 do 2000 gram ,
            </p>
            <p className='about__item'>
              <span>
                <i class='fa fa-check-circle-o' aria-hidden='true'></i>
              </span>
              stawy dla tarlaków. Wysokiej jakości narybek adaptowany do
              naturalnych warunków, duży przyrost, profilaktyka i zapobieganie
              chorobom- to nasze priorytety nad którymi ciągle pracujemy. Stały
              kontakt i współpraca z najlepszymi ekspertami rosyjskimi
              przyczyniają się do naszych postępów w tym kierunku.
            </p>
          </article>
          <article className='about__summary'>
            W akwarystyce zajmujemy się rozmnażaniem takich gatunków które w
            większości są importowane z kierunków azjatyckich. Z 40 gatunków ryb
            akwariowych w stałej sprzedaży mamy około 20 gatunków w zależności
            od zapotrzebowania rynku w danym okresie.
          </article>
        </div>
      </section>
    </>
  );
};

export default About;
