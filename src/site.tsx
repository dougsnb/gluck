import { useEffect, useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Instagram, Menu, MessageCircle, X } from 'lucide-react';

const A = './assets/';
const gallery = [
  { src: 'AREA-DA-PISCINA-02-1024x576.png', title: 'Piscina de borda infinita', kind: 'Lazer' },
  { src: 'ss-1024x576.png', title: 'Convivência ao ar livre', kind: 'Lazer' },
  { src: 'ACADEMIA-1-1024x576.png', title: 'Academia', kind: 'Lazer' },
  { src: 'AEREA-GOURMET-1-1024x576.png', title: 'Espaço gourmet', kind: 'Lazer' },
  { src: 'dsa-1024x576.png', title: 'Lounge da piscina', kind: 'Lazer' },
  { src: 'ESPACO-PUB_001-1024x576.jpg', title: 'Espaço de convivência', kind: 'Lazer' },
  { src: 'Living-Tipo-01-1024x576.jpeg', title: 'Living tipo 01', kind: 'Interiores' },
  { src: 'Suite-tipo-01-1024x576.jpeg', title: 'Suíte tipo 01', kind: 'Interiores' },
  { src: 'Living-tipo-02-1024x570.jpeg', title: 'Living tipo 02', kind: 'Interiores' },
  { src: 'Suite-tipo-02-1024x576.jpeg', title: 'Suíte tipo 02', kind: 'Interiores' },
  { src: 'Duplex-Tipo-03-1024x576.jpeg', title: 'Duplex tipo 03', kind: 'Interiores' },
  { src: 'atualizada-3-1024x576.png', title: 'Living duplex', kind: 'Interiores' },
  { src: 'atualizada-2-1024x576.png', title: 'Living e jantar', kind: 'Interiores' },
  { src: 'atualizada-1-1-1024x576.png', title: 'Suíte com vista', kind: 'Interiores' },
];

export default function App() {
  const [filter, setFilter] = useState('Todos');
  const [menuOpen, setMenuOpen] = useState(false);
  const shownGallery = filter === 'Todos' ? gallery : gallery.filter((item) => item.kind === filter);
  useEffect(() => {
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const revealElements = document.querySelectorAll<HTMLElement>(
      '.highlights > div, .project-intro, .project-image, .amenities-head > *, .amenity, .gallery-head > *, .gallery-item, .location-photo, .location-copy, .about-photo, .about-copy, .quote-section > *, .contact-content > *, .footer-top > *, .footer-details > *',
    );
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

    document.documentElement.classList.add('motion-ready');
    revealElements.forEach((element) => {
      element.classList.add('scroll-reveal');
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove('motion-ready');
      revealElements.forEach((element) => element.classList.remove('scroll-reveal', 'is-visible'));
    };
  }, []);
  const closeMenu = () => setMenuOpen(false);
  return <main>
    <section className="hero" id="inicio">
      <video className="hero-video" autoPlay muted loop playsInline poster={`${A}327AD670-9CC0-4B7D-8DF0-93B74276C0F6.png`} aria-label="Vídeo do terreno do Skyline Residence"><source src={`${A}handbrakeTerrenoGluk.mp4`} type="video/mp4" /></video>
      <div className="hero-shade" />
      <header className="site-header">
        <a href="#inicio" className="brand"><img src={`${A}logo-gluck-teste-1536x768.png`} alt="Gluck Empreendimentos" /></a>
        <button className="mobile-menu" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'}>
          <a href="#empreendimento" onClick={closeMenu}>Empreendimento</a><a href="#lazer" onClick={closeMenu}>Lazer</a><a href="#galeria" onClick={closeMenu}>Galeria</a><a href="#localizacao" onClick={closeMenu}>Localização</a><a href="#gluck" onClick={closeMenu}>A Gluck</a>
          <a className="header-cta" href="#contato" onClick={closeMenu}>Fale conosco <ArrowUpRight size={15} /></a>
        </nav>
      </header>
      <div className="hero-copy"><span className="overline"><i /> PORTO BELO · SANTA CATARINA</span><h1>Skyline<br/><em>Residence</em></h1><p>Um novo empreendimento que traduz a visão da GLUCK sobre morar bem, unindo arquitetura contemporânea, planejamento e uma localização escolhida para acompanhar o desenvolvimento da região.</p><a className="gold-button" href="#empreendimento">SABER MAIS <ArrowRight size={16} /></a></div>
      <div className="hero-caption"><span>UM NOVO OLHAR SOBRE PORTO BELO</span><a href="#destaques">DESCUBRA <ArrowDown size={14}/></a><span>01 — 04</span></div>
    </section>

    

    

    

    

    

<section className="highlights" id="destaques" aria-label="Destaques do empreendimento"><div><strong>31</strong><span>PAVIMENTOS</span></div><div><strong>800 <small>m²</small></strong><span>DE LAZER E CONVIVÊNCIA</span></div><div><strong>PORTO BELO</strong><span>SANTA CATARINA</span></div></section><section className="project-section" id="empreendimento"><div className="project-intro"><span className="section-label">O EMPREENDIMENTO</span><h2>Um novo horizonte<br/>para <em>Porto Belo.</em></h2><p>O Skyline Residence apresenta uma nova proposta de morar em Porto Belo, unindo arquitetura contemporânea, plantas inteligentes e uma estrutura pensada para diferentes estilos de vida. Com <b>31 pavimentos</b> e unidades que vão de studios e apartamentos compactos a coberturas duplex, o empreendimento combina funcionalidade, conforto e uma relação privilegiada com uma das regiões de maior desenvolvimento do litoral catarinense.</p><a className="under-link" href="#galeria">Explore o Skyline <ArrowRight size={16}/></a></div><div className="project-image"><img src={`${A}atualizada-2-1024x576.png`} alt="Living contemporâneo com vista para a cidade e o mar"/><span>ESPAÇOS PENSADOS EM CADA DETALHE</span></div></section><section className="amenities-section" id="lazer"><div className="amenities-head"><div><span className="section-label">VIVER, CONVIVER, DESFRUTAR</span><h2>Seu tempo ganha<br/><em>novos espaços.</em></h2></div><p>São <b>800 m²</b> dedicados ao lazer e à convivência. Ambientes para desacelerar, se encontrar e aproveitar cada momento.</p></div><div className="amenities-grid"><article className="amenity amenity-pool"><img src={`${A}AREA-DA-PISCINA-02-1024x576.png`} alt="Piscina de borda infinita ao pôr do sol"/><span>01 / LAZER</span><h3>Piscina de<br/>borda infinita</h3></article><article className="amenity"><img src={`${A}AEREA-GOURMET-1-1024x576.png`} alt="Espaço gourmet e convivência"/><span>02 / CONVIVÊNCIA</span><h3>Espaços gourmet<br/>e salões de festas</h3></article><article className="amenity"><img src={`${A}ACADEMIA-1-1024x576.png`} alt="Academia equipada com vista"/><span>03 / BEM-ESTAR</span><h3>Academia e quadra<br/>poliesportiva</h3></article><article className="amenity amenity-text"><span className="amenity-icon">✳</span><span>04 / PARA TODA A FAMÍLIA</span><h3>Um lugar para<br/>cada jeito de viver.</h3><p>Playground, brinquedoteca e pet place completam os espaços para curtir junto.</p></article></div></section><section className="gallery-section" id="galeria"><div className="gallery-head"><div><span className="section-label">DETALHES QUE FAZEM SENTIDO</span><h2>Uma ideia de morar<br/><em>por inteiro.</em></h2></div><div className="gallery-controls">{['Todos','Lazer','Interiores'].map((item) => <button key={item} className={filter === item ? 'filter-button active' : 'filter-button'} onClick={() => setFilter(item)}>{item}</button>)}</div></div><div className={`gallery-grid${shownGallery.length % 3 === 2 ? ' has-centered-last-row' : ''}`}>{shownGallery.map((item) => <article className="gallery-item" key={item.src}><img src={`${A}${item.src}`} alt={item.title}/><span>{item.kind}</span><strong>{item.title}</strong></article>)}</div></section>
    <section className="location-section" id="localizacao"><div className="location-photo"><img src={`${A}327AD670-9CC0-4B7D-8DF0-93B74276C0F6.png`} alt="Perspectiva do Skyline Residence em Porto Belo"/><span>SKYLINE RESIDENCE · PORTO BELO</span></div><div className="location-copy"><span className="section-label">NO LITORAL CATARINENSE</span><h2>Porto Belo.<br/><em>Um lugar em movimento.</em></h2><p>Uma localização escolhida para acompanhar o desenvolvimento da região e se conectar a novas possibilidades de viver, investir e construir patrimônio.</p><div className="location-address"><span>ESCRITÓRIO GLUCK EM PORTO BELO</span><strong>R. Dorvalino Voltolini, 850<br/>Porto Belo · SC</strong></div><a className="under-link" href="https://maps.google.com/?q=R.+Dorvalino+Voltolini,+850,+Porto+Belo,+SC" target="_blank" rel="noreferrer">Ver endereço <ArrowUpRight size={15}/></a></div></section><section className="about-section" id="gluck"><div className="about-photo"><img src={`${A}atualizada-3-1024x576.png`} alt="Interior contemporâneo de um apartamento Skyline"/><span>ARQUITETURA PARA VIVER BEM</span></div><div className="about-copy"><span className="section-label">QUEM SOMOS</span><h2>Nós somos a<br/><em>Gluck Empreendimentos</em></h2><p>Com forte atuação em Curitiba, a Gluck Empreendimentos vive um novo momento de expansão para o litoral catarinense e Foz do Iguaçu. Desenvolvemos projetos que unem arquitetura, qualidade e inteligência imobiliária, a partir de uma visão criteriosa sobre o potencial de cada região, criando novas possibilidades para viver, investir e construir patrimônio.</p><div className="stats"><div><strong>20</strong><span>ANOS DE EXPERIÊNCIA</span></div><div><strong>+1.300</strong><span>HISTÓRIAS CONSTRUÍDAS</span></div><div><strong>+20</strong><span>EMPREENDIMENTOS</span></div></div></div></section><section className="quote-section" id="visao"><span className="section-label">UMA VISÃO QUE CONSTRÓI FUTURO</span><div className="quote-mark">“</div><blockquote>Nossa visão é desenvolver em Porto Belo empreendimentos que elevem a experiência de investir, unindo sofisticação, exclusividade e valor patrimonial em cada escolha.</blockquote><div className="quote-author"><span className="author-rule"/><span><strong>Sillas Schuenck</strong><small>Fundador e Diretor da Gluck Empreendimentos</small></span></div></section>

    <section className="contact-cta"><img src={`${A}ss-1024x576.png`} alt="Área externa de convivência do Skyline Residence"/><div className="contact-overlay"/><div className="contact-content"><span className="section-label">SKYLINE RESIDENCE · PORTO BELO</span><h2>O próximo capítulo<br/>pode ser <em>seu.</em></h2><p>Conheça o Skyline Residence e descubra uma nova forma de viver e investir no litoral catarinense.</p><a className="gold-button" href="https://wa.me/5541999511718" target="_blank" rel="noreferrer">FALE COM A GLUCK <ArrowUpRight size={16}/></a></div></section>

    <footer className="footer" id="contato"><div className="footer-top"><a href="#inicio" className="footer-brand"><img src={`${A}logo-gluck-teste-1536x768.png`} alt="Gluck Empreendimentos"/></a><p>Construindo novas possibilidades<br/>para viver, investir e pertencer.</p><a className="footer-contact" href="mailto:sac@gluckempreendimentos.com.br">Vamos conversar <ArrowUpRight size={16}/></a></div><div className="footer-details"><div><span className="section-label">CURITIBA</span><p>Av. Paraná, 1755<br/>Boa Vista</p></div><div><span className="section-label">PORTO BELO</span><p>R. Dorvalino Voltolini, 850<br/>Porto Belo · SC</p></div><div><span className="section-label">CONTATO</span><p><a href="tel:+5541999511718">(41) 99951-1718</a><br/><a href="mailto:sac@gluckempreendimentos.com.br">sac@gluckempreendimentos.com.br</a></p></div><div className="footer-social"><span className="section-label">ACOMPANHE</span><p><a href="https://www.instagram.com/" aria-label="Instagram"><Instagram size={16}/> Instagram</a><a href="https://www.facebook.com/" aria-label="Facebook">f&nbsp; Facebook</a></p></div></div><div className="footer-bottom"><span>© GLUCK EMPREENDIMENTOS</span><a href="#inicio">VOLTAR AO TOPO ↑</a><span>PORTO BELO · SANTA CATARINA</span></div></footer>
    <a className="whatsapp-float" href="https://wa.me/5541999511718" target="_blank" rel="noreferrer" aria-label="Fale com a Gluck pelo WhatsApp"><MessageCircle size={19}/> <span>Fale pelo WhatsApp</span></a>
  </main>;
}
