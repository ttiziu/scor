import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | Devscor",
  description:
    "Política de privacidad, misión y visión de Devscor para productos digitales y soluciones inteligentes.",
};

export default function PoliticaDePrivacidadPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-6 py-12">
      <header className="mb-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-500">
          Devscor
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Política de Privacidad
        </h1>
        <p className="mt-3 max-w-3xl text-zinc-600 dark:text-zinc-300">
          En esta página explicamos cómo tratamos la información y compartimos
          nuestra misión y visión como empresa tecnológica enfocada en crear
          productos digitales y soluciones basadas en inteligencia artificial.
        </p>
      </header>

      <section className="mb-8 rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
        <h2 className="text-xl font-semibold">Misión</h2>
        <p className="mt-3 leading-7 text-zinc-700 dark:text-zinc-300">
          Diseñar, desarrollar y lanzar productos digitales y soluciones
          inteligentes que ayuden a los negocios a crecer, automatizar procesos
          y generar valor real.
        </p>
      </section>

      <section className="mb-8 rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
        <h2 className="text-xl font-semibold">Visión</h2>
        <p className="mt-3 leading-7 text-zinc-700 dark:text-zinc-300">
          Convertirse en una empresa tecnológica que crea productos digitales y
          soluciones basadas en inteligencia artificial, permitiendo a los
          negocios escalar y depender cada vez más de sistemas propios.
        </p>
      </section>

      <section className="mb-8 rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
        <h2 className="text-xl font-semibold">Versión directa (startup)</h2>
        <p className="mt-3 leading-7 text-zinc-700 dark:text-zinc-300">
          <strong>Mission:</strong> Build digital products and intelligent
          systems that help businesses grow and operate more efficiently.
        </p>
        <p className="mt-2 leading-7 text-zinc-700 dark:text-zinc-300">
          <strong>Vision:</strong> Become a technology company that creates
          scalable products and AI-driven solutions used by businesses
          worldwide.
        </p>
      </section>

      <section className="mb-8 rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
        <h2 className="text-xl font-semibold">Qué datos recopilamos</h2>
        <p className="mt-3 leading-7 text-zinc-700 dark:text-zinc-300">
          Podemos recopilar información que el cliente comparte de forma
          voluntaria al contactarnos, como nombre, correo electrónico, teléfono
          y mensajes comerciales.
        </p>
      </section>

      <section className="mb-8 rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
        <h2 className="text-xl font-semibold">Cómo usamos la información</h2>
        <p className="mt-3 leading-7 text-zinc-700 dark:text-zinc-300">
          Usamos esta información para responder consultas, ofrecer nuestros
          servicios, mejorar la experiencia de atención y comunicar propuestas
          relacionadas con productos digitales y automatización.
        </p>
      </section>

      <section className="mb-8 rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
        <h2 className="text-xl font-semibold">Protección y confidencialidad</h2>
        <p className="mt-3 leading-7 text-zinc-700 dark:text-zinc-300">
          Aplicamos medidas razonables para proteger los datos de accesos no
          autorizados, uso indebido o divulgación no permitida.
        </p>
      </section>

      <section className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
        <h2 className="text-xl font-semibold">Contacto</h2>
        <p className="mt-3 leading-7 text-zinc-700 dark:text-zinc-300">
          Para consultas sobre privacidad y tratamiento de datos, escríbenos al
          correo oficial de Devscor.
        </p>
      </section>
    </main>
  );
}
