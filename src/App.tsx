import { Contato } from './pages/Contato/Contato';
import { Especialidades } from './pages/Especialidades/especialidades';
import { Experiencia } from './pages/Experiencia/Experiencia';
import { Footer } from './pages/Footer/Footer';
import { Home } from './pages/Home/Home';
import { NavBar } from './components/NavBar/NavBar';
import { Projetos } from './pages/Projetos/Projetos';
import './styles/global.css';
import './styles/theme.css';

export function App() {
  return (
    <>
    <div>
      <NavBar />
      <Home />
      <Especialidades />
      <Experiencia />
      <Projetos />
      <Contato />
      <Footer />
    </div>
    </>
  )
}
