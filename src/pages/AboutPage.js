import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/wine1.jpg'

const AboutPage = () => {
  return <main>
    <PageHero title="about"/>
    <Wrapper className="page section section-center">
      <img src={aboutImg} alt='nice wine' />
      <article>
        <div className='title'>
          <h2>Our story</h2>
          <div className='underline'></div>
        </div>
        <p>
         Lorem ipsum  add sit amett consectetur adipiscing  elit. Conclusum est enim contra Cyrenaicos satis acute, nihil ad Epicurum. Quasi vero, inquit, perpetua oratio rhetorum solum, non etiam philosophorum sit. Ad eas enim res ab Epicuro praecepta dantur. Quis Aristidem non mortuum diligit? 

        Aeque enim contingit omnibus fidibus, ut incontentae  Pison,  one familiaris nooster, et alia multa et hoc loco Stoicos irridebat: Quid enim? At Zeno eum non beatum modo, sed etiam divitem dicere ausus est. Vitae autem degendae ratio maxime quidem illis placuit quieta. Hoc Hieronymus summum bonum esse dixit. Te enim iudicem aequum puto, modo quae dicat ille bene noris. Est igitur officium eius generis, quod nec in bonis ponatur nec in contrariis. Est tamen ea secundum naturam multoque nos ad se expetendam magis hortatur quam superiora omnia. 

        Hoc positum in  a 1  Platone probavit EFpicurus sensitque in  disputatione id fieri . consectetur  elit, familiaris noster, nquit, perpetua oratio rhetorum solum,Quasi vero, inquit, perpetua oratio rhetorum solum, inquit, perpetua oratio rhetorum solum, non etiam philosophorum sit. Ad eas enim res ab Epicuro praecepta dantur. Quis Aristidem non mortuum diligit? 

        </p>
      </article>
    </Wrapper>
  </main>
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 600px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
