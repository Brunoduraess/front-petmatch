// dependencies
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// hooks and dependencies
import { Helmet } from 'react-helmet';
import useMediaQuery from '../hooks/useMediaQuery';

const Home = () => {
  const matches = useMediaQuery('(max-width: 767px)');

  return (
    <motion.section className='initial' initial={{ width: 0 }} animate={{ width: "auto", transition: { duration: 0.5 } }} exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}>
      <Helmet>
        <style>{"body { background-color: #a788ab; }"}</style>
      </Helmet>
      <img className="initial__logo" src="logo-initial.svg" alt="Logo AdoPet" />
      <h3>Boas-vindas!</h3>
      <p>
        {matches ? 'Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a gente!' : 'Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!'}
      </p>
      <div className='home__buttons'>
        <Link className='button' to='/login'>Já tenho conta</Link>
        <Link className='button' to='/cadastro'>Quero me cadastrar</Link>

      </div>
    </motion.section >
  );
};

export default Home;