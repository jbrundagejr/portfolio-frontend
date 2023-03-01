import resume from "../BrundageResume.pdf"
import headShot from "../assets/headShot.jpg"

const About = () => {
  return (
    <div id="aboutContainer" className="fadeIn">
      <div id="aboutHeader">
        <h2>About.</h2>
      </div>
      <div id="aboutContent">
        <div id="bioPhoto">
          <img src={headShot} alt="Jon Brundage Jr." />
        </div>
        <div id="bioBlurb">
          <p>
            As a creative technologist, I am constantly adapting my skillset to
            build many projects in many different formats. I am primarily a
            front-end developer, with strong skills in Javascript. I am
            proficient in modern JS libraries and frameworks like Vue3, Svelte
            and React. I especially enjoy building interactive data
            visualizations to transform information that is abstract and
            inaccessible into something that is insightful and understandable.
            If the last two years in web development has taught me anything, it
            is that I will be happily learning for the rest of my life.
          </p>
          <p>
            Before pivoting to software engineering in 2021, I was a freelance
            director of photography and camera operator in television for over
            twelve years. I was lucky enough to travel the globe filming for
            numerous networks including AMC, HBOMax, NatGeo and Comedy Central.
          </p>
          <p>
            When not building out new websites, I can be found playing hockey,
            doing the crossword or going for a family jog with my wife and son.
            I’ve been in Crown Heights, Brooklyn since 2008 and love every
            adventure that New York City has to offer.
          </p>
          <a id="resumeLink" href={resume} target="_blank" rel="noreferrer">
            View Jon's Resume
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
