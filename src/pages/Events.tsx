import { CalendarDays, GraduationCap, Clock, Users, DollarSign } from "lucide-react";

export default function Events() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6 text-primary">Eventos e Cursos</h1>

      <p className="text-lg mb-10 text-foreground/80">
        Nesta seção apresentamos os cursos e escolas de verão organizados pela Hydro-UAI,
        com foco em aplicações de inteligência artificial à hidráulica e aos recursos hídricos.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        
        {/* Curso 1 */}
        <article className="rounded-2xl bg-white shadow-md p-6 flex flex-col h-full">
          <h2 className="text-2xl font-semibold text-primary mb-2">
            Hydro_UAI Course: IA Aplicada aos Sistemas de Abastecimento de Água
          </h2>

          <p className="text-foreground/80 mb-4">
            Curso intensivo sobre o uso de inteligência artificial e modelos computacionais 
            na análise e otimização de sistemas de abastecimento de água.
          </p>

          <ul className="list-disc list-inside space-y-1 mb-4 text-foreground/80 text-sm">
            <li>Redes neurais artificiais e inteligência artificial</li>
            <li>Modelos computacionais (EPANET)</li>
            <li>Previsão de demanda de água</li>
            <li>Hidráulica básica de redes</li>
            <li>Otimização em abastecimento de água</li>
            <li>Calibração de redes de abastecimento</li>
          </ul>

          <div className="space-y-2 text-sm text-foreground/90 mb-2">
            <div className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-primary" />
              <span>26 a 30 de janeiro de 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <span>19h às 22h · Carga horária: 20 horas</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-primary" />
              <span>Curso presencial e remoto síncrono</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              <span>Para estudantes e profissionais</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-primary" />
              <span>Investimento: R$ 1.000,00</span>
            </div>
          </div>
        </article>

        {/* Curso 2 */}
        <article className="rounded-2xl bg-white shadow-md p-6 flex flex-col h-full">
          <h2 className="text-2xl font-semibold text-primary mb-2">
            Escola de Verão: IA na Gestão de Recursos Hídricos
          </h2>

          <p className="text-foreground/80 mb-4">
            Escola de verão focada em modelagem de eventos extremos e aplicações de 
            inteligência artificial na gestão de recursos hídricos e segurança de barragens.
          </p>

          <ul className="list-disc list-inside space-y-1 mb-4 text-foreground/80 text-sm">
            <li>Bases de Hidrologia</li>
            <li>Redes neurais clássicas</li>
            <li>Deep learning</li>
            <li>
              Aplicações especiais: IA na segurança de barragens e na otimização da 
              gestão de reservatórios
            </li>
          </ul>

          <div className="space-y-2 text-sm text-foreground/90 mb-2">
            <div className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-primary" />
              <span>19 a 23 de janeiro de 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <span>Curso intensivo · formato semana inteira</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-primary" />
              <span>Curso presencial e remoto síncrono</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              <span>Público-alvo: graduação, mestrado e doutorado</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-primary" />
              <span>Investimento: R$ 500,00</span>
            </div>
          </div>
        </article>

      </div>
    </section>
  );
}
