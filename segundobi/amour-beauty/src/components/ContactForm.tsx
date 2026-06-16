import { useState, useRef, type FormEvent } from "react"
import ReCAPTCHA from "react-google-recaptcha"
import Button from "./Button"

const ContactForm = () => {
    const [formData, setFormData] = useState({ email: "", message: "" })
    const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)
    const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
    const [formError, setFormError] = useState("")
    const recaptchaRef = useRef<ReCAPTCHA>(null)

    function isValidForm() {
        const isValidFields = formData.email.trim() !== "" && formData.message.trim() !== ""
        return isValidFields && !!recaptchaToken
    }

    function handleCompleteChallenge(token: string | null) {
        setRecaptchaToken(token)
    }

    function resetFields() {
        setFormData({ email: "", message: "" })
    }

    async function handleSendEmail() {
        const response = await fetch("/api/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: formData.email,
                message: formData.message,
                recaptchaToken: recaptchaToken,
            }),
        })

        if (!response.ok) {
            const body = await response.json().catch(() => ({}))
            throw new Error(body.error ?? "Erro ao enviar mensagem.")
        }
    }

    async function handleSubmit(e: FormEvent) {
        e.preventDefault()

        if (!isValidForm()) return

        setRecaptchaToken(null)
        setFormStatus("sending")
        setFormError("")

        try {
            await handleSendEmail()

            setFormStatus("success")
            resetFields()
            recaptchaRef.current?.reset()
        } catch (err: unknown) {
            const msg = err instanceof Error ? err.message : "Erro inesperado."
            setFormError(msg)
            setFormStatus("error")
            recaptchaRef.current?.reset()
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="Email"
                id="contact-email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                disabled={formStatus === "sending"}
            />
            <textarea
                placeholder="Motivo do contato. Ex: Gostaria de agendar uma coloração, qual o valor?"
                id="contact-message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                disabled={formStatus === "sending"}
            />

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

            <div>
                <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY ?? "KEY_RECAPTCHA"}
                    onChange={handleCompleteChallenge}
                />
            </div>

            <Button text={formStatus === "sending" ? "Enviando..." : "Enviar"} />
        </form>
    )
}

export default ContactForm