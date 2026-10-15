'use client'

import { useState } from 'react'
import Image from 'next/image'

import {
  ArrowUpRight,
  Clock3,
  MapPin,
  Menu,
  MessageCircle,
  X,
} from 'lucide-react'

const links = {
  whatsapp: 'https://wa.me/5511930907305',
  instagram: 'https://instagram.com/lojamogistore',
  facebook: 'https://facebook.com/lojamogistore/?locale=pt_BR',
  tiktok: 'https://tiktok.com/@mogi.store?_r=1&_t=ZS-98Iu53aKhOO',
}

const catalog = [
  { image: '/images/premium-shirts.png', label: 'Camisas Premium (Ellus & Baw)' },
  { image: '/images/summer-kit.png', label: 'Kit Verão Streetwear' },
  { image: '/images/sneakers.png', label: 'Sneakers Exclusivos' },
  { image: '/images/cap.png', label: 'Acessórios Hype' },
]

const reviews = [
  {
    quote: 'Passei na loja para adquirir um look masculino e simplesmente obtive uma experiência incrível! Desde o atendimento da Verônica e da Kelly até a música ambiente que traz muito conforto. Diversas marcas que eu sou fã: Osklen, Lacoste, Colcci...',
    author: 'Renato Polimeno',
  },
  {
    quote: 'Muito bom lugar, sempre muito bem atendido por todos. Recomendo para quem busca peças diferenciadas e atendimento próximo.',
    author: 'Cliente Mogi Store',
  },
  {
    quote: 'Uma curadoria muito bonita, com marcas que fazem sentido e looks fáceis de levar para a vida real.',
    author: 'Cliente verificado',
  },
]

function SocialIcon({ label, href }: { label: string; href: string }) {
  return (
    <a className="social-link" href={href} target="_blank" rel="noreferrer" aria-label={label}>
      {label === 'Instagram' && (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>
      )}
      {label === 'Facebook' && (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M14 8h3V4h-3c-3.3 0-5 1.9-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.7.3-1 1-1Z" fill="currentColor" /></svg>
      )}
      {label === 'TikTok' && (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M15 4h3.2c.3 1.8 1.5 3.2 3.3 3.7v3.1a8 8 0 0 1-3.3-1v5.3a5.9 5.9 0 1 1-5.9-5.9c.3 0 .6 0 .9.1v3.2a2.8 2.8 0 1 0 1.8 2.6V4Z" fill="currentColor" /></svg>
      )}
    </a>
  )
}

export default function Page() {
  const [isSocialMenuOpen, setIsSocialMenuOpen] = useState(false)

  return (
    <main className="min-h-screen overflow-hidden bg-[#f2f0eb] text-[#161616]">
      <nav className="site-nav">
        <a href="#inicio" className="brand-mark" aria-label="Mogi Store início">
          <span className="brand-dot" /> MOGI STORE
        </a>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#sobre">A loja</a>
          <a href="#avaliacoes">Avaliações</a>
          <a href="#visite">Visite-nos</a>
          <div className="nav-socials" aria-label="Redes sociais">
            <SocialIcon label="Instagram" href={links.instagram} />
            <SocialIcon label="TikTok" href={links.tiktok} />
            <SocialIcon label="Facebook" href={links.facebook} />
          </div>
        </div>
        <div className="mobile-nav-actions">
          <a className="nav-cta" href={links.whatsapp} target="_blank" rel="noreferrer" aria-label="Falar no WhatsApp">
            <MessageCircle aria-hidden="true" /><span>Falar no WhatsApp</span>
          </a>
          <div className="social-menu-wrap">
            <button className="social-menu-trigger" type="button" aria-label={isSocialMenuOpen ? 'Fechar redes sociais' : 'Abrir redes sociais'} aria-expanded={isSocialMenuOpen} aria-controls="mobile-social-menu" onClick={() => setIsSocialMenuOpen((open) => !open)}>
              {isSocialMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </button>
            {isSocialMenuOpen && <div id="mobile-social-menu" className="mobile-social-menu" role="menu">
              <SocialIcon label="Instagram" href={links.instagram} />
              <SocialIcon label="TikTok" href={links.tiktok} />
              <SocialIcon label="Facebook" href={links.facebook} />
            </div>}
          </div>
        </div>
      </nav>

      <section id="inicio" className="hero-shell">
        <div className="hero-copy">
          <p className="eyebrow">Moda masculina · Mogi das Cruzes</p>
          <h1>Vista o seu<br /><em>melhor.</em></h1>
          <p className="hero-description">
            Curadoria de peças para quem entende que estilo não é detalhe. É a primeira impressão.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href={links.whatsapp} target="_blank" rel="noreferrer">
              <MessageCircle aria-hidden="true" /> Conheça a loja
            </a>
            <a className="text-link" href="#sobre">Descubra a Mogi <ArrowUpRight aria-hidden="true" /></a>
          </div>
          <div className="hero-note"><span className="live-dot" /> Aberta hoje até 19h</div>
        </div>
        <div className="hero-image-wrap">
          <Image src="/images/storefront.png" alt="Fachada arquitetônica da Mogi Store em Mogi das Cruzes" fill priority sizes="(max-width: 720px) 100vw, 55vw" className="hero-image" />
          <div className="hero-stamp">MOGI<br /><span>STORE</span></div>
          <div className="hero-caption">01 — presença<br /><span>Rua Vitória Partênio</span></div>
        </div>
      </section>

      <section id="sobre" className="intro-section">
        <div className="section-kicker">02 — sobre a Mogi</div>
        <div className="intro-content">
          <h2>Mais que uma loja.<br /><span>Seu próximo look.</span></h2>
          <div className="intro-text">
            <p>Um espaço para descobrir marcas, experimentar possibilidades e sair se sentindo bem. Da escolha da peça ao atendimento, cada detalhe é pensado para você.</p>
            <a className="text-link" href={links.instagram} target="_blank" rel="noreferrer">Ver no Instagram <ArrowUpRight aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <section className="look-section" aria-label="Look principal da Mogi Store">
        <div className="look-image-wrap"><Image src="/images/main-look.png" alt="Modelo usando conjunto roxo na entrada da Mogi Store" fill sizes="(max-width: 720px) 100vw, 58vw" className="look-image" /></div>
        <div className="look-copy"><div className="section-kicker">02 — main look</div><h2>Presença que<br /><span>fala por você.</span></h2><p>Peças selecionadas para construir um estilo marcante, confortável e genuinamente seu.</p><a className="text-link" href={links.instagram} target="_blank" rel="noreferrer">Ver no Instagram <ArrowUpRight aria-hidden="true" /></a></div>
      </section>

      <section className="catalog-section" aria-labelledby="catalog-title">
        <div className="catalog-heading"><div className="section-kicker">03 — curadoria Mogi</div><h2 id="catalog-title">Escolha seu<br /><em>próximo movimento.</em></h2></div>
        <div className="catalog-grid">{catalog.map((item) => <article className="catalog-card" key={item.label}><div className="catalog-image"><Image src={item.image} alt={item.label} fill sizes="(max-width: 720px) 100vw, 25vw" /></div><h3>{item.label}</h3><a className="catalog-link" href={links.whatsapp} target="_blank" rel="noreferrer" aria-label={`Falar sobre ${item.label} no WhatsApp`}>Descobrir peça <ArrowUpRight aria-hidden="true" /></a></article>)}</div>
      </section>

      <section id="visite" className="visit-section">
        <div className="visit-copy"><div className="section-kicker light">04 — encontre seu caminho</div><h2>Seu próximo<br /><em>look começa aqui.</em></h2><a className="button button-light" href="https://maps.google.com/?q=Rua+Vit%C3%B3ria+Part%C3%AAnio+37+Mogi+das+Cruzes" target="_blank" rel="noreferrer">Como chegar <ArrowUpRight aria-hidden="true" /></a></div>
        <div className="visit-details"><div><MapPin aria-hidden="true" /><p>R. Vitória Partênio, 37<br />Vila Partênio, Mogi das Cruzes — SP<br />08780-410</p></div><div><Clock3 aria-hidden="true" /><p><strong>Aberto hoje</strong><br />Segunda a sábado · 09h às 19h</p></div></div>
      </section>

      <section id="avaliacoes" className="reviews-section" aria-labelledby="reviews-title">
        <div className="reviews-intro"><div className="section-kicker">05 — quem veste</div><h2 id="reviews-title">Quem veste,<br /><em>recomenda.</em></h2></div>
        <div className="review-grid">{reviews.map((review) => <article key={review.author}><div className="review-stars" aria-label="5 de 5 estrelas">★★★★★</div><blockquote>“{review.quote}”</blockquote><cite>— {review.author}</cite></article>)}</div>
      </section>

      <footer><a href="#inicio" className="brand-mark"><span className="brand-dot" /> MOGI STORE</a><p>Moda para viver o seu melhor.</p><div className="socials"><SocialIcon label="Instagram" href={links.instagram} /><SocialIcon label="Facebook" href={links.facebook} /><SocialIcon label="TikTok" href={links.tiktok} /></div></footer>
    </main>
  )
}
