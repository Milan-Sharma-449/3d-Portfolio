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
        Want to know about me? <br className='sm:block hidden' />
        Visit to my website.  <br className='sm:block hidden' />
      </p>
      <Link to='https://milansharma.me/portfolio' className='btn'>
        Website
      </Link>
    </section>
  );
};

export default CTA;
