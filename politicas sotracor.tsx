import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  AlertTriangle, ArrowDown, Award, BellRing, BookOpen,
  BusFront, ChevronRight, ClipboardCheck, HeartPulse, LifeBuoy,
  Menu, MessageCircleQuestion, PhoneOff, Play, RotateCcw, ShieldCheck, Sparkles,
  Users, X, Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/sotracor-logo.png.asset.json";
import cartagenaAsset from "@/assets/sotracor-cartagena.jpeg.asset.json";
import terminalAsset from "@/assets/sotracor-terminal.png.asset.json";
import { policies } from "@/lib/policies";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Políticas corporativas | SOTRACOR S.A." },
      { name: "description", content: "Una guía interactiva sobre las políticas de seguridad, calidad y vida de SOTRACOR." },
      { property: "og:title", content: "Políticas corporativas | SOTRACOR S.A." },
      { property: "og:description", content: "Seguridad, calidad y vida: conoce y pon a prueba tus conocimientos." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const quiz = [
  { q: "¿Cuál es el límite en carreteras nacionales o departamentales?", options: ["50 km/h", "70 km/h", "90 km/h"], answer: 1 },
  { q: "¿Qué debes hacer para utilizar el celular mientras conduces?", options: ["Usar manos libres", "Pedir ayuda a un pasajero", "Detenerte en un lugar seguro"], answer: 2 },
  { q: "¿Qué significa PAS en una emergencia?", options: ["Parar, avanzar y seguir", "Proteger, avisar y socorrer", "Prevenir, actuar y salir"], answer: 1 },
  { q: "¿Qué verificamos si un menor viaja con un tercero?", options: ["Solo el tiquete", "Autorización y documentación", "Solamente la edad"], answer: 1 },
];

const dailyActions = ["Cumplir políticas y procedimientos", "Reportar condiciones inseguras", "Participar en capacitaciones", "Respetar las normas de tránsito", "Proteger a los pasajeros y menores", "Mantener una actitud preventiva", "Trabajar libre de alcohol y drogas", "Promover la calidad y la mejora continua"];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResult, setShowResult] = useState(false);
  const score = quiz.reduce((total, item, index) => total + (answers[index] === item.answer ? 1 : 0), 0);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <img src={logoAsset.url} alt="SOTRACOR" className="h-11 w-auto max-w-[210px] object-contain" />
          <nav className="hidden items-center gap-8 text-sm font-bold md:flex" aria-label="Navegación principal">
            <button className="cursor-pointer transition-colors hover:text-primary" onClick={() => scrollTo("politicas")}>Políticas</button>
            <button className="cursor-pointer transition-colors hover:text-primary" onClick={() => scrollTo("prevencion")}>Prevención</button>
            <button className="cursor-pointer transition-colors hover:text-primary" onClick={() => scrollTo("actividad")}>Actividad</button>
          </nav>
          <Button size="icon" variant="ghost" className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú">{menuOpen ? <X /> : <Menu />}</Button>
        </div>
        {menuOpen && <nav className="grid border-t border-border bg-background p-4 md:hidden"><button className="p-3 text-left font-bold" onClick={() => scrollTo("politicas")}>Políticas</button><button className="p-3 text-left font-bold" onClick={() => scrollTo("prevencion")}>Prevención</button><button className="p-3 text-left font-bold" onClick={() => scrollTo("actividad")}>Actividad</button></nav>}
      </header>

      <section className="relative isolate flex min-h-[92vh] items-center overflow-hidden bg-ink pt-20 text-primary-foreground">
        <img src={cartagenaAsset.url} alt="Bus de SOTRACOR recorriendo la vía costera de Cartagena" className="absolute inset-0 h-full w-full object-cover object-[62%_center] transition-transform duration-1000 hover:scale-[1.02]" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/20" />
        <div className="absolute bottom-0 left-0 right-0 h-3 road-line" />
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.2fr_.8fr] lg:px-8">
          <div className="max-w-3xl soft-rise">
            <div className="mb-7 inline-flex items-center gap-2 border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-bold text-primary"><Sparkles className="h-4 w-4" /> Nuestra ruta de compromiso</div>
            <h1 className="text-5xl font-black leading-[1.03] sm:text-6xl lg:text-8xl">Seguridad,<br /><span className="text-caution">calidad</span> y vida.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-primary-foreground/75">Conoce las cinco políticas que orientan cada decisión, cada recorrido y cada acción del equipo SOTRACOR.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button variant="brand" size="lg" onClick={() => scrollTo("politicas")}><Play /> Iniciar recorrido</Button>
              <Button variant="outline" size="lg" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" onClick={() => scrollTo("actividad")}><Zap /> Ponme a prueba</Button>
            </div>
          </div>
          <div className="relative hidden min-h-96 lg:block" aria-hidden="true">
            <div className="absolute bottom-[8%] right-[2%] flex items-center gap-3 border-l-4 border-caution bg-background/95 px-5 py-4 text-foreground shadow-xl backdrop-blur"><Users className="text-primary" /><span className="font-black">Todos hacemos parte</span></div>
          </div>
        </div>
        <button onClick={() => scrollTo("compromiso")} className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 cursor-pointer md:block" aria-label="Continuar"><ArrowDown className="h-7 w-7 animate-bounce" /></button>
      </section>

      <section id="compromiso" className="bg-caution py-16 text-caution-foreground">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[.75fr_1.25fr] lg:px-8">
          <div><p className="text-sm font-black uppercase">Nuestro compromiso</p><h2 className="mt-3 text-4xl font-black sm:text-5xl">¿Por qué son importantes?</h2></div>
          <div className="grid gap-px bg-caution-foreground/20 sm:grid-cols-2">
            {["Proteger la vida y la integridad", "Brindar un servicio confiable", "Prevenir siniestros viales", "Cumplir la legislación", "Promover la responsabilidad", "Fortalecer la mejora continua"].map((item, i) => <div key={item} className="flex items-center gap-3 bg-caution p-4 font-bold"><span className="grid h-8 w-8 shrink-0 place-items-center bg-caution-foreground text-xs text-caution">0{i + 1}</span>{item}</div>)}
          </div>
        </div>
      </section>

      <section id="politicas" className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl"><p className="text-sm font-black uppercase text-emerald">Cinco políticas · un compromiso</p><h2 className="mt-3 text-4xl font-black sm:text-6xl">Explora cada política</h2><p className="mt-4 text-lg text-muted-foreground">Selecciona una ruta para conocer sus lineamientos esenciales.</p></div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {policies.map((policy, index) => { const Icon = policy.icon; return <Link key={policy.id} to="/politicas/$policyId" params={{ policyId: policy.id }} className={`group relative flex min-h-72 flex-col overflow-hidden border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-[8px_8px_0_var(--caution)] ${index === 0 ? "lg:col-span-2" : ""}`}><span className="absolute right-4 top-2 text-7xl font-black text-muted transition-colors group-hover:text-secondary">{policy.number}</span><span className="relative grid h-14 w-14 place-items-center bg-primary text-primary-foreground"><Icon className="h-7 w-7" /></span><h3 className="relative mt-auto pt-10 text-2xl font-black">{policy.title}</h3><p className="relative mt-2 text-sm font-semibold leading-6 text-muted-foreground">{policy.short}</p><span className="relative mt-5 flex items-center gap-2 text-sm font-black text-primary">Abrir política <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></Link>; })}
          </div>
        </div>
      </section>

      <section id="prevencion" className="bg-ink py-24 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
            <div><div className="group relative mb-8 aspect-[4/3] overflow-hidden border-b-8 border-primary"><img src={terminalAsset.url} alt="Colaborador de SOTRACOR junto a un bus en la terminal" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /><div className="absolute bottom-4 left-4 flex items-center gap-2 bg-ink/90 px-4 py-3 text-sm font-black"><ShieldCheck className="h-5 w-5 text-caution" /> Preparados para cada recorrido</div></div><p className="text-sm font-black uppercase text-primary">Antes de iniciar el recorrido</p><h2 className="mt-3 text-4xl font-black sm:text-6xl">Vehículos seguros</h2><p className="mt-5 max-w-xl leading-7 text-primary-foreground/70">La prevención comienza con documentación vigente, mantenimiento preventivo, seguros requeridos e inspección del vehículo.</p>
              <div className="mt-8 space-y-3">{["Revisión técnico-mecánica y SOAT vigentes", "Pólizas de responsabilidad contractual y extracontractual", "Plan de mantenimiento e inspección preventiva", "Reporte inmediato de cualquier anomalía"].map(item => <div key={item} className="flex items-center gap-3 border-b border-primary-foreground/15 py-3 font-bold"><ClipboardCheck className="text-primary" />{item}</div>)}</div>
            </div>
            <div className="relative border border-primary-foreground/20 p-6 sm:p-10"><div className="absolute right-0 top-0 h-16 w-16 bg-signal [clip-path:polygon(100%_0,100%_100%,0_0)]" /><p className="text-sm font-black text-caution">CONDUCTA PAS</p><h2 className="mt-2 text-3xl font-black">Respuesta ante emergencias</h2><div className="mt-8 grid gap-4 sm:grid-cols-3">{[{l:"P",t:"Proteger",d:"El lugar y las personas."},{l:"A",t:"Avisar",d:"A emergencias y responsables."},{l:"S",t:"Socorrer",d:"Sin exponerse a más riesgos."}].map((item, i) => <div key={item.l} className="bg-background p-5 text-foreground"><div className={`grid h-12 w-12 place-items-center text-2xl font-black ${i === 1 ? "bg-caution text-caution-foreground" : i === 2 ? "bg-signal text-signal-foreground" : "bg-primary text-primary-foreground"}`}>{item.l}</div><h3 className="mt-4 font-black">{item.t}</h3><p className="mt-1 text-sm text-muted-foreground">{item.d}</p></div>)}</div><p className="mt-6 text-sm text-primary-foreground/70">La formación incluye primeros auxilios básicos, evacuación y rescate, y manejo de conatos de incendio.</p></div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center"><p className="text-sm font-black uppercase text-signal">Nuestro compromiso diario</p><h2 className="mt-3 text-4xl font-black sm:text-5xl">Acciones que sí hacen la diferencia</h2></div>
          <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">{dailyActions.map((action, i) => <div key={action} className="group min-h-48 bg-background p-6 transition-colors hover:bg-secondary"><span className="text-5xl font-black text-border transition-colors group-hover:text-primary">{String(i + 1).padStart(2,"0")}</span><p className="mt-8 font-black leading-6">{action}</p></div>)}</div>
        </div>
      </section>

      <section id="actividad" className="bg-primary py-24 text-primary-foreground">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-sm font-black uppercase">Actividad interactiva</p><h2 className="mt-3 text-4xl font-black sm:text-6xl">Pon a prueba lo aprendido</h2></div><MessageCircleQuestion className="h-20 w-20 text-caution" /></div>
          <div className="mt-12 grid gap-5">{quiz.map((item, qIndex) => <fieldset key={item.q} className="border border-primary-foreground/30 p-5 sm:p-7"><legend className="px-2 text-lg font-black"><span className="mr-2 text-caution">{qIndex + 1}.</span>{item.q}</legend><div className="mt-4 grid gap-3 sm:grid-cols-3">{item.options.map((option, oIndex) => { const selected = answers[qIndex] === oIndex; const revealCorrect = showResult && oIndex === item.answer; const revealWrong = showResult && selected && oIndex !== item.answer; return <button key={option} type="button" onClick={() => !showResult && setAnswers({...answers,[qIndex]:oIndex})} className={`min-h-16 cursor-pointer border p-3 text-left text-sm font-bold transition-all ${revealCorrect ? "border-caution bg-caution text-caution-foreground" : revealWrong ? "border-signal bg-signal text-signal-foreground" : selected ? "border-primary-foreground bg-primary-foreground text-primary" : "border-primary-foreground/30 hover:border-primary-foreground"}`}><span className="mr-2 opacity-70">{String.fromCharCode(65 + oIndex)}.</span>{option}</button>; })}</div></fieldset>)}</div>
          <div className="mt-8 flex flex-wrap items-center gap-4">{!showResult ? <Button variant="signal" size="lg" disabled={Object.keys(answers).length !== quiz.length} onClick={() => setShowResult(true)}><Award /> Ver mi resultado</Button> : <><div className="bg-background px-6 py-4 text-xl font-black text-foreground">Resultado: <span className="text-primary">{score} / {quiz.length}</span></div><Button variant="outline" size="lg" className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" onClick={() => { setAnswers({}); setShowResult(false); }}><RotateCcw /> Intentar de nuevo</Button></>}{!showResult && Object.keys(answers).length !== quiz.length && <span className="text-sm text-primary-foreground/75">Responde las cuatro preguntas para continuar.</span>}</div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-caution py-24 text-caution-foreground"><HeartPulse className="absolute -right-10 -top-8 h-72 w-72 opacity-10" /><div className="relative mx-auto max-w-5xl px-5 text-center lg:px-8"><LifeBuoy className="mx-auto h-14 w-14" /><h2 className="mt-6 text-4xl font-black sm:text-6xl">Todos somos parte de la solución.</h2><p className="mx-auto mt-6 max-w-3xl text-lg font-semibold leading-8">La calidad se construye entre todos. La conducción segura protege vidas. La protección de los menores es una prioridad.</p><p className="mt-8 text-2xl font-black">Conduce seguro, trabaja responsablemente y cuidemos juntos la vida.</p></div></section>

      <footer className="bg-ink py-10 text-primary-foreground"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 sm:flex-row lg:px-8"><img src={logoAsset.url} alt="SOTRACOR" className="h-9 w-auto brightness-0 invert" /><p className="text-center text-sm text-primary-foreground/60">Políticas corporativas · Comprometidos con la seguridad, la calidad y la vida.</p><div className="flex gap-2"><AlertTriangle className="text-caution" /><BellRing className="text-signal" /><BookOpen className="text-primary" /><PhoneOff className="text-primary" /></div></div></footer>
    </main>
  );
}
