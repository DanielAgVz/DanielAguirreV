import { useEffect, useRef, useState } from "react";
import { Send, X } from "lucide-react";
import { faq, matchFaq, quickReplies } from "../data/faq";
import { profile } from "../data/resume";
import WhatsappIcon from "./icons/WhatsappIcon";

interface Message {
  id: string;
  from: "bot" | "user";
  text: string;
  cta?: boolean;
}

const GREETING: Message = {
  id: "greeting",
  from: "bot",
  text: "¡Hola! Soy el asistente de Daniel. Pregúntame sobre su experiencia, stack técnico, educación, certificaciones o disponibilidad.",
};

const FALLBACK_TEXT =
  "No tengo esa información a la mano, pero Daniel puede responderte directamente por WhatsApp.";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages]);

  function pushExchange(userText: string, botMessage: Omit<Message, "id" | "from">) {
    setMessages((prev) => [
      ...prev,
      { id: crypto.randomUUID(), from: "user", text: userText },
      { id: crypto.randomUUID(), from: "bot", ...botMessage },
    ]);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    const match = matchFaq(trimmed);
    pushExchange(
      trimmed,
      match ? { text: match.answer } : { text: FALLBACK_TEXT, cta: true },
    );
    setInput("");
  }

  function handleQuickReply(id: string) {
    const entry = faq.find((f) => f.id === id);
    const reply = quickReplies.find((q) => q.id === id);
    if (!entry || !reply) return;
    pushExchange(reply.label, { text: entry.answer });
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="flex h-[28rem] w-[22rem] max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-2xl border border-border bg-panel shadow-2xl shadow-black/40">
          <div className="flex items-center gap-3 border-b border-border bg-panel-soft px-4 py-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-white">
              <WhatsappIcon size={18} />
            </span>
            <div>
              <p className="text-sm font-semibold text-text-bright">
                Asistente de Daniel
              </p>
              <p className="text-xs text-text-dim">Responde preguntas frecuentes</p>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m) => (
              <div
                key={m.id}
                className={m.from === "bot" ? "flex justify-start" : "flex justify-end"}
              >
                <div
                  className={`max-w-[85%] rounded-xl px-3 py-2 text-sm ${
                    m.from === "bot"
                      ? "bg-panel-soft text-text"
                      : "bg-cyan text-bg"
                  }`}
                >
                  <p className="whitespace-pre-line">{m.text}</p>
                  {m.cta && (
                    <a
                      href={profile.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-3 py-1.5 text-xs font-semibold text-white"
                    >
                      <WhatsappIcon size={12} />
                      Continuar por WhatsApp
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 border-t border-border px-4 py-3">
            {quickReplies.map((q) => (
              <button
                key={q.id}
                type="button"
                onClick={() => handleQuickReply(q.id)}
                className="rounded-full border border-border px-3 py-1.5 text-xs text-text-dim transition-colors hover:border-cyan/50 hover:text-cyan"
              >
                {q.label}
              </button>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 border-t border-border p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu pregunta..."
              className="flex-1 rounded-lg border border-border bg-panel-soft px-3 py-2 text-sm text-text-bright outline-none focus:border-cyan/50"
            />
            <button
              type="submit"
              aria-label="Enviar"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan text-bg"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Cerrar chat" : "Abrir chat"}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition-transform hover:scale-105"
      >
        {open ? <X size={26} /> : <WhatsappIcon size={28} />}
      </button>
    </div>
  );
}
