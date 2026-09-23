"use client";

import { ArrowUpRight } from "lucide-react";
import { FormEvent, useState } from "react";

export function ContactSection() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const company = String(form.get("company") ?? "");
    const email = String(form.get("email") ?? "");
    const pain = String(form.get("pain") ?? "");
    const goal = String(form.get("goal") ?? "");
    const message = String(form.get("message") ?? "");

    const body = [
      `Nome: ${name}`,
      `Empresa: ${company}`,
      `E-mail: ${email}`,
      `Maior dor hoje: ${pain}`,
      `O que gostaria de resolver: ${goal}`,
      `Contexto: ${message}`,
    ].join("\n\n");

    setSent(true);
    window.location.href = `mailto:elevaorigem@gmail.com?subject=${encodeURIComponent(`Quero conversar sobre a ${company || "minha empresa"}`)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="section-shell contact-shell">
        <div className="contact-intro">
          <p className="eyebrow eyebrow-dark">Contato</p>
          <h2 id="contact-title">Qual é a parte que precisa avançar agora?</h2>
          <p>Conte o que está travando sua empresa. A primeira conversa serve para organizar o problema, encontrar a prioridade e entender se a Eleva é o próximo passo certo.</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-grid">
            <label>
              <span>Seu nome</span>
              <input name="name" type="text" autoComplete="name" placeholder="Como podemos chamar você?" required />
            </label>
            <label>
              <span>Empresa</span>
              <input name="company" type="text" autoComplete="organization" placeholder="Nome da empresa" required />
            </label>
            <label>
              <span>Seu e-mail</span>
              <input name="email" type="email" autoComplete="email" placeholder="voce@empresa.com" required />
            </label>
            <label>
              <span>Maior dor hoje</span>
              <select name="pain" defaultValue="" required>
                <option value="" disabled>O que mais pesa agora?</option>
                <option>Minha marca não comunica o valor que entrega</option>
                <option>Meu site ou produto digital não converte</option>
                <option>Falta clareza para atrair as pessoas certas</option>
                <option>Tenho processos manuais e retrabalho</option>
                <option>Outro desafio</option>
              </select>
            </label>
          </div>

          <label>
            <span>O que você gostaria de resolver?</span>
            <textarea name="goal" rows={3} placeholder="Se pudesse destravar uma coisa nos próximos meses, qual seria?" required />
          </label>
          <label>
            <span>Contexto adicional <em>opcional</em></span>
            <textarea name="message" rows={3} placeholder="Pode contar um pouco mais sobre o momento da empresa." />
          </label>

          <div className="contact-form-footer">
            <p>{sent ? "Abrindo seu e-mail para concluir a mensagem." : "Sem roteiro pronto. Vamos começar pelo que está acontecendo de verdade."}</p>
            <button type="submit">Enviar contexto <ArrowUpRight size={17} /></button>
          </div>
        </form>
      </div>
    </section>
  );
}
