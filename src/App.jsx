import { useEffect, useState } from 'react'
import { NavLink, Link, Routes, Route, useLocation } from 'react-router-dom'
import { Menu, X, MessageCircle, MapPin, Phone, Mail } from 'lucide-react'
import Logo from './Logo.jsx'
import { escola, zapLink } from './data/escola.js'
import { Home, Sobre, Estrutura, Docentes, Mensalidades, Contato } from './pages.jsx'

const links = [['/', 'Início'], ['/sobre', 'Sobre'], ['/estrutura', 'Estrutura'], ['/docentes', 'Docentes'], ['/mensalidades', 'Mensalidades'], ['/contato', 'Contato']]

export default function App() {
  const [aberto, setAberto] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0); setAberto(false); document.title = pathname === '/' ? escola.nome : `${escola.nome} – ${links.find(l => l[0] === pathname)?.[1] ?? ''}` }, [pathname])

  return (
    <>
      <header>
        <div className="wrap">
          <Link to="/" className="brand"><Logo />{escola.nome}</Link>
          <button className="burger" aria-label="Abrir menu" onClick={() => setAberto(!aberto)}>{aberto ? <X /> : <Menu />}</button>
          <nav className={aberto ? 'open' : ''} aria-label="Principal">
            {links.map(([to, nome]) => <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => (isActive ? 'active' : '')}>{nome}</NavLink>)}
          </nav>
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/estrutura" element={<Estrutura />} />
          <Route path="/docentes" element={<Docentes />} />
          <Route path="/mensalidades" element={<Mensalidades />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<section><div className="wrap"><h1>Página não encontrada</h1><p className="lead">Use o menu para voltar ao início.</p></div></section>} />
        </Routes>
      </main>
      <footer>
        <div className="wrap">
          <div><h3>{escola.nome}</h3><p>{escola.slogan}</p></div>
          <div><h3>Fale conosco</h3>
            <p><Phone size={14} /> {escola.telefone}</p>
            <p><Mail size={14} /> {escola.email}</p>
            <p>{escola.horario}</p></div>
          <div><h3>Onde estamos</h3><p><MapPin size={14} /> {escola.endereco}</p></div>
          <small>© {new Date().getFullYear()} {escola.nome}. Projeto acadêmico – UNINASSAU, Ciência da Computação.</small>
        </div>
      </footer>
      <a className="zap" href={zapLink} target="_blank" rel="noreferrer" aria-label="Conversar no WhatsApp"><MessageCircle /></a>
    </>
  )
}
