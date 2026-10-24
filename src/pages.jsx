import { useState } from 'react'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import { MessageCircle, MapPin, Phone, Mail, Clock, Star, BookOpen, Languages, FlaskConical, HeartHandshake, Snowflake, Monitor, Library, Trophy, Utensils, Stethoscope, Accessibility } from 'lucide-react'
import Logo from './Logo.jsx'
import { escola, zapLink, diferenciais, depoimentos, missao, estrutura, docentes, mensalidades } from './data/escola.js'

const mapa = { BookOpen, Languages, FlaskConical, HeartHandshake, Snowflake, Monitor, Library, Trophy, Utensils, Stethoscope, Accessibility }
const Icone = ({ nome, size = 28 }) => { const I = mapa[nome] || Star; return <I size={size} /> }
const brl = v => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
const Topo = ({ titulo, texto }) => <div className="pagina-topo"><div className="wrap"><h1>{titulo}</h1><p>{texto}</p></div></div>

export function Home() {
  return (
    <>
      <div className="hero"><div className="wrap">
        <div>
          <h1>{escola.slogan}</h1>
          <p>Ensino Fundamental I e II em Boa Viagem, com turmas pequenas e acompanhamento próximo de cada aluno.</p>
          <div className="acoes">
            <a className="btn claro" href={zapLink} target="_blank" rel="noreferrer"><MessageCircle size={18} />Chamar no WhatsApp</a>
            <Link className="btn vazio" to="/mensalidades">Ver mensalidades</Link>
          </div>
        </div>
        <Logo className="grande" size={380} />
      </div></div>

      <section><div className="wrap">
        <h2>O que faz do Tíria diferente</h2>
        <p className="lead">Quatro compromissos que as famílias sentem no dia a dia.</p>
        <div className="grade">{diferenciais.map(([i, t, d]) => <div className="item" key={t}><Icone nome={i} /><h3>{t}</h3><p>{d}</p></div>)}</div>
      </div></section>

      <section className="alt"><div className="wrap">
        <h2>Quem já faz parte</h2>
        <p className="lead">Depoimentos de pais e mães de alunos.</p>
        <div className="grade">{depoimentos.map(([n, r, t]) => <div className="depo" key={n}><q>{t}</q><strong>{n}</strong><br /><small>{r}</small></div>)}</div>
      </div></section>

      <section className="cta"><div className="wrap">
        <h2>Venha conhecer a escola</h2>
        <p>Agende uma visita e tire suas dúvidas com a nossa secretaria.</p>
        <Link className="btn claro" to="/contato">Agendar visita</Link>
      </div></section>
    </>
  )
}

export function Sobre() {
  return (
    <>
      <Topo titulo="Sobre o Colégio Tíria" texto="Missão, visão, valores e a história de quem constrói a escola todos os dias." />
      <section><div className="wrap dois">
        <div><h2>Missão</h2><p>{missao.missao}</p><h2 style={{ marginTop: '1.5rem' }}>Visão</h2><p>{missao.visao}</p></div>
        <div><h2>Valores</h2><div className="chips">{missao.valores.map(v => <span key={v}>{v}</span>)}</div></div>
      </div></section>
      <section className="alt"><div className="wrap"><h2>Nossa história</h2><p className="lead" style={{ color: 'var(--texto)' }}>{missao.historia}</p></div></section>
    </>
  )
}

export function Estrutura() {
  return (
    <>
      <Topo titulo="Estrutura" texto="Espaços pensados para aprender, brincar e se sentir seguro." />
      <section><div className="wrap grade">
        {estrutura.map(([i, t, d]) => (
          <div key={t}><div className="foto" role="img" aria-label={`Foto ilustrativa: ${t}`}><Icone nome={i} size={56} /></div><h3>{t}</h3><p>{d}</p></div>
        ))}
      </div></section>
    </>
  )
}

export function Docentes() {
  return (
    <>
      <Topo titulo="Corpo docente" texto="Professores formados, atualizados e próximos dos alunos." />
      <section><div className="wrap grade">
        {docentes.map(([n, c, f]) => (
          <div className="item" key={n}><div className="avatar">{n.split(' ').map(p => p[0]).slice(0, 2).join('')}</div><h3>{n}</h3><strong>{c}</strong><p>{f}</p></div>
        ))}
      </div></section>
    </>
  )
}

export function Mensalidades() {
  const m = mensalidades
  return (
    <>
      <Topo titulo="Mensalidades" texto="Valores de 2026, sem taxas escondidas. Material, uniforme e seguro já estão incluídos." />
      <section><div className="wrap">
        <div className="rolagem"><table>
          <thead><tr><th>Segmento</th><th>Turmas</th><th>Mensalidade</th><th>Matrícula</th></tr></thead>
          <tbody>{m.segmentos.map(s => <tr key={s.nome}><td><strong>{s.nome}</strong></td><td>{s.anos}</td><td className="preco">{brl(s.valor)}</td><td>{brl(s.matricula)}</td></tr>)}</tbody>
        </table></div>
        <div className="dois" style={{ marginTop: '3rem' }}>
          <div><h2>O que está incluso</h2><ul className="check">{m.inclusos.map(i => <li key={i}>{i}</li>)}</ul></div>
          <div><h2>Descontos</h2><ul className="check">{m.descontos.map(([t, d]) => <li key={t}><strong>{t}:</strong> {d}</li>)}</ul></div>
        </div>
        <p className="aviso" style={{ marginTop: '2rem' }}>Valores ilustrativos para este projeto acadêmico.</p>
      </div></section>
    </>
  )
}

const env = import.meta.env
export function Contato() {
  const [estado, setEstado] = useState('')
  async function enviar(e) {
    e.preventDefault()
    const dados = Object.fromEntries(new FormData(e.target))
    if (env.VITE_EMAILJS_SERVICE_ID && env.VITE_EMAILJS_TEMPLATE_ID && env.VITE_EMAILJS_PUBLIC_KEY) {
      setEstado('enviando')
      try {
        await emailjs.send(env.VITE_EMAILJS_SERVICE_ID, env.VITE_EMAILJS_TEMPLATE_ID, { ...dados, to_email: escola.email }, env.VITE_EMAILJS_PUBLIC_KEY)
        setEstado('ok'); e.target.reset()
      } catch { setEstado('erro') }
    } else {
      const corpo = `Nome: ${dados.nome}\nE-mail: ${dados.email}\nTelefone: ${dados.telefone}\n\n${dados.mensagem}`
      window.location.href = `mailto:${escola.email}?subject=${encodeURIComponent(dados.assunto)}&body=${encodeURIComponent(corpo)}`
      setEstado('mailto')
    }
  }
  return (
    <>
      <Topo titulo="Fale com a gente" texto="Envie uma mensagem ou chame direto no WhatsApp. Respondemos em até um dia útil." />
      <section><div className="wrap dois">
        <form onSubmit={enviar}>
          <div className="dupla">
            <label>Nome<input name="nome" required autoComplete="name" /></label>
            <label>Telefone<input name="telefone" type="tel" required autoComplete="tel" /></label>
          </div>
          <label>E-mail<input name="email" type="email" required autoComplete="email" /></label>
          <label>Assunto<select name="assunto"><option>Matrícula</option><option>Agendar visita</option><option>Mensalidades</option><option>Outro assunto</option></select></label>
          <label>Mensagem<textarea name="mensagem" rows="5" required /></label>
          <button className="btn" disabled={estado === 'enviando'}>{estado === 'enviando' ? 'Enviando...' : 'Enviar mensagem'}</button>
          {estado === 'ok' && <p className="aviso" role="status">Mensagem enviada. Entraremos em contato em breve.</p>}
          {estado === 'erro' && <p className="aviso" role="alert">Não foi possível enviar. Tente novamente ou chame no WhatsApp.</p>}
          {estado === 'mailto' && <p className="aviso" role="status">Abrimos seu aplicativo de e-mail para concluir o envio.</p>}
        </form>
        <div>
          <ul className="contatos">
            <li><MapPin /><span>{escola.endereco}</span></li>
            <li><Phone /><span>{escola.telefone}</span></li>
            <li><Mail /><span>{escola.email}</span></li>
            <li><Clock /><span>{escola.horario}</span></li>
          </ul>
          <a className="btn" href={zapLink} target="_blank" rel="noreferrer" style={{ marginTop: '.8rem' }}><MessageCircle size={18} />Conversar no WhatsApp</a>
          <iframe title="Mapa da escola" loading="lazy" src={`https://www.google.com/maps?q=${encodeURIComponent(escola.endereco)}&output=embed`} />
        </div>
      </div></section>
    </>
  )
}
