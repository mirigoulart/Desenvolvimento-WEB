import { useState, useEffect } from "react"
import Logo from "../assets/logo.svg"
import Menu from "../assets/menu.svg"
import Close from "../assets/close.svg"
import HeroRectangleTwo from "../assets/images/rectangleTwo.png"
import HairIcon from "../assets/hair.svg"
import NailsIcon from "../assets/nails.svg"
import AestheticsIcon from "../assets/aesthetics.svg"
import Check from "../assets/check.svg"
import ArianaImg from "../assets/images/ariana.jpg"
import EmmaImg from "../assets/images/emma.jpg"
import ZendayaImg from "../assets/images/zendaya.jpg"
import Button from "../components/Button"
import Card from "../components/Card"
import TestimonialCard from "../components/TestimonialCard"
import "../styles/header.css"
import "../styles/utility.css"
import "../styles/hero.css"
import "../styles/solution.css"
import "../styles/testimonials.css"
import "../styles/pricing.css"
import "../styles/contact.css"
import "../styles/footer.css"
import Instagram from "../assets/instagram.svg"
import Facebook from "../assets/facebook.svg"
import Youtube from "../assets/youtube.svg"

export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    // ── Estados do formulário de contato ──
    const [contactEmail, setContactEmail] = useState("")
    const [contactMessage, setContactMessage] = useState("")
    const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
    const [formError, setFormError] = useState("")

    // ── Melhoria: trava o scroll do HTML quando o menu mobile está aberto ──
    useEffect(() => {
        const html = document.querySelector("html")
        if (html) {
            html.style.overflow = showMobileMenu ? "hidden" : "auto"
        }
    }, [showMobileMenu])

    // ── Envio de e-mail via Netlify Function ──
    async function sendContactEmail(e: React.FormEvent) {
        e.preventDefault()
        setFormStatus("sending")
        setFormError("")

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: contactEmail, message: contactMessage }),
            })

            if (!response.ok) {
                const body = await response.json().catch(() => ({}))
                throw new Error(body.error ?? "Erro ao enviar mensagem.")
            }

            setFormStatus("success")
            setContactEmail("")
            setContactMessage("")
        } catch (err: unknown) {
            const msg = err instanceof Error ? err.message : "Erro inesperado."
            setFormError(msg)
            setFormStatus("error")
        }
    }

    return (
        <>
            <header className="site-header">
                <nav className="container py-sm flex items-center justify-between">

                    {/* Logo */}
                    <img src={Logo} alt="Logo Amour Beauty" width={200} height={60} />

                    {/* Links desktop */}
                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#services">Serviços</a>
                            </li>
                            <li>
                                <a href="#testimonials">Depoimentos</a>
                            </li>
                            <li>
                                <a href="#pricing">Planos</a>
                            </li>
                            <li>
                                <a href="#contact">Contato</a>
                            </li>
                        </ul>
                    </div>

                    {/* Ações desktop (Login + Botão) */}
                    <div className="desktop-only">
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg" href="#">Login</a>
                            <Button text="Agendar agora" />
                        </div>
                    </div>

                    {/* Menu mobile */}
                    <div className="mobile-menu">
                        {showMobileMenu ? (
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li>
                                            <a href="#" onClick={() => setShowMobileMenu(false)}>Home</a>
                                        </li>
                                        <li>
                                            <a href="#services" onClick={() => setShowMobileMenu(false)}>Serviços</a>
                                        </li>
                                        <li>
                                            <a href="#testimonials" onClick={() => setShowMobileMenu(false)}>Depoimentos</a>
                                        </li>
                                        <li>
                                            <a href="#pricing" onClick={() => setShowMobileMenu(false)}>Preços</a>
                                        </li>
                                        <li>
                                            <a href="#contact" onClick={() => setShowMobileMenu(false)}>Contato</a>
                                        </li>
                                        <li>
                                            <a className="reverse-color" href="#">Login</a>
                                        </li>
                                    </ul>
                                    <span
                                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                                        className="btn-wrapper"
                                    >
                                        <img src={Close} alt="Fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <span
                                onClick={() => setShowMobileMenu(!showMobileMenu)}
                                className="btn-wrapper"
                            >
                                <img src={Menu} alt="Abrir menu" width={24} height={24} />
                            </span>
                        )}
                    </div>

                </nav>
            </header>

            {/* Spacer para compensar header fixo */}
            <div style={{ height: "72px" }} />

            <main>

                {/* ── Section Hero ── */}
                <section id="hero">
                    <span className="hero-bg">
                        <img src={HeroRectangleTwo} alt="Fundo floral Amour Beauty" />
                    </span>

                    <div className="container content">
                        <p className="desktop-only">
                            ✦ Bem-vinda ao Amour Beauty ✦
                        </p>

                        <h1>Sua beleza em sua melhor versão</h1>

                        <p>
                            Cuidamos de cada detalhe para que você saia ainda mais radiante.
                            Cabelos, unhas e estética com amor e profissionalismo.
                        </p>

                        <div className="flex gap-1">
                            <span>
                                <Button text="Agendar agora" />
                            </span>
                            <span className="desktop-only">
                                <Button text="Veja nossos serviços" secondary />
                            </span>
                        </div>
                    </div>
                </section>

                {/* ── Section Serviços (Solutions) ── */}
                <section className="container" id="services">

                    <header>
                        <span>
                            <h2>Serviços</h2>
                            <span className="desktop-only">
                                <h2>Sob medida para você</h2>
                            </span>
                        </span>
                        <p>
                            Cuidar de você é a nossa prioridade! O{" "}
                            <strong>Amour Beauty </strong>
                            já conquistou diversas clientes apaixonadas pela nossa qualidade.
                            Conheça tudo que temos a oferecer para realçar a sua beleza.
                        </p>
                    </header>

                    <section className="even-columns">
                        <Card
                            icon={HairIcon}
                            alt="ícone cabelos"
                            title="Cabelos"
                            description="Corte, coloração, tratamentos e penteados. Nossos especialistas cuidam dos seus fios com técnicas modernas e produtos premium."
                        />
                        <Card
                            icon={NailsIcon}
                            alt="ícone unhas"
                            title="Unhas"
                            description="Manicure, pedicure, nail art e alongamentos. Realce a beleza das suas mãos e pés com acabamento impecável e duradouro."
                        />
                        <Card
                            icon={AestheticsIcon}
                            alt="ícone estética"
                            title="Estética"
                            description="Limpeza de pele, sobrancelhas, maquiagem e rituais de beleza. Cuide da sua pele com tratamentos que trazem brilho e renovação."
                        />
                    </section>

                </section>

                {/* ── Section Depoimentos ── */}
                <section id="testimonials">

                    <header>
                        <span>
                            <p className="desktop-only">Palavras de quem nos ama</p>
                            <h2>Cada cliente importa!</h2>
                        </span>
                        <p>
                            Quem já passou pelo <strong>Amour Beauty</strong> sabe da qualidade
                            e do carinho que colocamos em cada atendimento. Confira o que nossas
                            clientes têm a dizer!
                        </p>
                    </header>

                    {/* Carrossel — duplicado para loop infinito perfeito */}
                    <section className="carousel">
                        <div className="carousel-content">
                            <TestimonialCard
                                profileImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_9RV36uovdWkNPRrXnKDtrv16xN2p0FAfBw&s"
                                testimony="Saí completamente transformada! O corte e a coloração ficaram perfeitos. Nunca me senti tão bonita. Super recomendo!"
                                stars={5}
                                name="Ariana Grande"
                                role="Cliente Fiel"
                            />
                            <TestimonialCard
                                profileImage="https://beautyeditor.com.br/wp-content/uploads/2017/02/beleza-beauty-editor-acontece-oscar-2017-cabelo-e-maquiagem-emma-stone-oscars-2017-red-carpet.jpg"
                                testimony="Fiz as unhas em gel e simplesmente amei! A profissional foi muito atenciosa e caprichosa em cada detalhe. Voltarei sempre!"
                                stars={5}
                                name="Emma Stone"
                                role="Primeira Visita"
                            />
                            <TestimonialCard
                                profileImage="https://marciatravessoni.com.br/wp-content/uploads/2022/09/zendaya_272350445_470989791066853_8963836764632250176_n.jpg"
                                testimony="Tratamento de pele incrível! Minha pele nunca esteve tão hidratada e brilhante. O ambiente é lindíssimo e o atendimento é ótimo."
                                stars={4}
                                name="Zendaya"
                                role="Cliente VIP"
                            />
                        </div>

                        {/* Segunda cópia para loop infinito ── */}
                        <div className="carousel-content">
                            <TestimonialCard
                                profileImage={ArianaImg}
                                testimony="Saí completamente transformada! O corte e a coloração ficaram perfeitos. Nunca me senti tão bonita. Super recomendo!"
                                stars={5}
                                name="Ariana Grande"
                                role="Cliente Fiel"
                            />
                            <TestimonialCard
                                profileImage={EmmaImg}
                                testimony="Fiz as unhas em gel e simplesmente amei! A profissional foi muito atenciosa e caprichosa em cada detalhe. Voltarei sempre!"
                                stars={5}
                                name="Emma Stone"
                                role="Primeira Visita"
                            />
                            <TestimonialCard
                                profileImage={ZendayaImg}
                                testimony="Tratamento de pele incrível! Minha pele nunca esteve tão hidratada e brilhante. O ambiente é lindíssimo e o atendimento é ótimo."
                                stars={4}
                                name="Zendaya"
                                role="Cliente VIP"
                            />
                        </div>
                    </section>

                </section>

                {/* ── Section Planos (Guia 5) ── */}
                <section id="pricing" className="container">

                    <header>
                        <p className="desktop-only">Planos e preços</p>
                        <h2>Nossos planos</h2>
                    </header>

                    <section className="even-columns gap-1\.5">

                        {/* Plano Essencial */}
                        <div className="pricing-card">
                            <span className="plan">
                                <h3>Essencial</h3>
                                <p>Perfeito para quem quer experimentar a qualidade do Amour Beauty.</p>
                            </span>
                            <h2>R$ 149,90</h2>
                            <Button text="Agendar agora" secondary />
                            <span className="hr" />
                            <span className="features">
                                <img src={Check} alt="ícone check" width={24} height={24} />
                                <p>1 serviço por mês</p>
                            </span>
                            <span className="features">
                                <img src={Check} alt="ícone check" width={24} height={24} />
                                <p>Corte ou escova incluso</p>
                            </span>
                            <span className="features">
                                <img src={Check} alt="ícone check" width={24} height={24} />
                                <p>Desconto em produtos</p>
                            </span>
                        </div>

                        {/* Plano Premium (destaque) */}
                        <div className="pricing-card premium">
                            <span className="bonus">
                                <p>1º MÊS COM DESCONTO</p>
                            </span>
                            <span className="plan">
                                <h3>Premium</h3>
                                <p>Para quem ama cuidar da beleza com regularidade e qualidade.</p>
                            </span>
                            <span className="price">
                                <h2>R$ 249,90</h2>
                                <p>/mês</p>
                            </span>
                            <Button text="Agendar agora" />
                            <span className="hr" />
                            <span className="features">
                                <img src={Check} alt="ícone check" width={24} height={24} />
                                <p>3 serviços por mês</p>
                            </span>
                            <span className="features">
                                <img src={Check} alt="ícone check" width={24} height={24} />
                                <p>Coloração ou tratamento</p>
                            </span>
                            <span className="features">
                                <img src={Check} alt="ícone check" width={24} height={24} />
                                <p>Manicure + pedicure</p>
                            </span>
                            <span className="features">
                                <img src={Check} alt="ícone check" width={24} height={24} />
                                <p>Prioridade no agendamento</p>
                            </span>
                        </div>

                        {/* Plano VIP Luxo */}
                        <div className="pricing-card">
                            <span className="plan">
                                <h3>VIP Luxo</h3>
                                <p>Experiência completa de beleza e bem-estar sem limites.</p>
                            </span>
                            <span className="price">
                                <h2>R$ 399,90</h2>
                                <p>/mês</p>
                            </span>
                            <Button text="Agendar agora" secondary />
                            <span className="hr" />
                            <span className="features">
                                <img src={Check} alt="ícone check" width={24} height={24} />
                                <p>Serviços ilimitados</p>
                            </span>
                            <span className="features">
                                <img src={Check} alt="ícone check" width={24} height={24} />
                                <p>Estética facial inclusa</p>
                            </span>
                            <span className="features">
                                <img src={Check} alt="ícone check" width={24} height={24} />
                                <p>Produtos premium exclusivos</p>
                            </span>
                            <span className="features">
                                <img src={Check} alt="ícone check" width={24} height={24} />
                                <p>Atendimento VIP personalizado</p>
                            </span>
                        </div>

                    </section>

                </section>

                {/* ── Section Contato ── */}
                <section id="contact" className="container">

                    <header>
                        <p>Agende sua visita</p>
                        <h2>Entre em contato</h2>
                        <p>
                            Entre em contato, estamos prontas para tirar qualquer dúvida.
                            Seja para agendar um serviço, saber mais sobre nossos planos
                            ou solicitar um orçamento. Estamos à disposição para te atender! 💄
                        </p>
                    </header>

                    <form onSubmit={sendContactEmail}>
                        <input
                            type="email"
                            placeholder="Seu melhor Email"
                            id="contact-email"
                            value={contactEmail}
                            onChange={(e) => setContactEmail(e.target.value)}
                            required
                            disabled={formStatus === "sending"}
                        />
                        <textarea
                            placeholder="Motivo do contato. Ex: Gostaria de agendar uma coloração, qual o valor?"
                            id="contact-message"
                            value={contactMessage}
                            onChange={(e) => setContactMessage(e.target.value)}
                            required
                            disabled={formStatus === "sending"}
                        />

                        {/* Feedback de status */}
                        {formStatus === "success" && (
                            <p className="form-feedback form-success">
                                ✔ Mensagem enviada com sucesso! Entraremos em contato em breve.
                            </p>
                        )}
                        {formStatus === "error" && (
                            <p className="form-feedback form-error">
                                ⚠️ {formError}
                            </p>
                        )}

                        <Button
                            text={formStatus === "sending" ? "Enviando..." : "Enviar"}
                        />
                    </form>

                </section>

            </main>

            {/* ── Footer ── */}
            <footer>
                <div className="container footer-content">

                    {/* Coluna: Logo + Redes Sociais */}
                    <div className="footer-brand">
                        <img
                            src={Logo}
                            alt="Logo Amour Beauty"
                            className="footer-logo"
                            width={160}
                        />
                        <div className="social-icons">
                            <a href="#" aria-label="Instagram">
                                <img src={Instagram} alt="Instagram" />
                            </a>
                            <a href="#" aria-label="Facebook">
                                <img src={Facebook} alt="Facebook" />
                            </a>
                            <a href="#" aria-label="YouTube">
                                <img src={Youtube} alt="YouTube" />
                            </a>
                        </div>
                    </div>

                    {/* Coluna: Salão */}
                    <div className="footer-links">
                        <h4>Salão</h4>
                        <ul>
                            <li><a href="#">Sobre nós</a></li>
                            <li><a href="#">Nossa equipe</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>

                    {/* Coluna: Serviços */}
                    <div className="footer-links">
                        <h4>Serviços</h4>
                        <ul>
                            <li><a href="#services">Cabelos</a></li>
                            <li><a href="#services">Unhas</a></li>
                            <li><a href="#services">Estética</a></li>
                            <li><a href="#pricing">Agendamento</a></li>
                        </ul>
                    </div>

                    {/* Coluna: Informações */}
                    <div className="footer-links">
                        <h4>Informações</h4>
                        <ul>
                            <li><a href="#">Política de Privacidade</a></li>
                            <li><a href="#">Termos de Uso</a></li>
                            <li><a href="#contact">Contato</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>

                </div>

                <div className="footer-bottom">
                    <p>Feito com amor ❤️ ©2026 Amour Beauty — Todos os direitos reservados.</p>
                </div>
            </footer>

        </>
    )
}
