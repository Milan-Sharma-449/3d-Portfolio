import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
        Have a project in mind? <br className='sm:block hidden' />
        Let’s build something together! <br className='sm:block hidden' />
      </p>
      <Link to='/contact' className='btn'>
        Contact
      </Link>
      <br/>
      <p className='cta-text'>
        Want to know more about me? <br className='sm:block hidden' />
        Visit to my Portfolio Website.  <br className='sm:block hidden' />
      </p>
      <div>
        <a className="btn" href="https://milansharma.site/portfolio" > Portfolio</a>
      </div>
    </section>
  );
};

export default CTA;
