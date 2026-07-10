import path from "node:path";
import nextra from "nextra";

const sep = path.sep === "/" ? "/" : "\\\\";
const ALLOWED_SVG_REGEX = new RegExp(`components${sep}icons${sep}.+\\.svg$`);

// Old -> new URL mappings introduced by PR #34, which restructured the
// Interview Ready docs (see the "Restructure Interview Ready to match Program
// Content 3.0 roadmap" change). Keys are the now-old paths; values are their
// current equivalents. Keep this in sync whenever docs URLs move.
const IR = "/interview-ready";
const MOVED_PATHS = {
  // --- Consiguiendo Entrevistas (ex soft-fundamentals) ---
  [`${IR}/soft-fundamentals`]: `${IR}/consiguiendo-entrevistas/preparando-linkedin`,
  [`${IR}/soft-fundamentals/consiguiendo-entrevistas`]: `${IR}/consiguiendo-entrevistas/consiguiendo-entrevistas`,
  [`${IR}/soft-fundamentals/consiguiendo-entrevistas/preparando-el-cv`]: `${IR}/consiguiendo-entrevistas/preparando-el-cv`,
  [`${IR}/soft-fundamentals/consiguiendo-entrevistas/preparando-linkedin`]: `${IR}/consiguiendo-entrevistas/preparando-linkedin`,
  [`${IR}/soft-fundamentals/preparando-el-cv`]: `${IR}/consiguiendo-entrevistas/preparando-el-cv`,
  [`${IR}/soft-fundamentals/preparando-linkedin`]: `${IR}/consiguiendo-entrevistas/preparando-linkedin`,

  // --- Recruiter Screening (ex soft-fundamentals/interview-meta & pasando-entrevistas) ---
  [`${IR}/soft-fundamentals/interview-meta`]: `${IR}/recruiter-screening/trabajando-con-recruiters`,
  [`${IR}/soft-fundamentals/interview-meta/trabajando-con-recruiters`]: `${IR}/recruiter-screening/trabajando-con-recruiters`,
  [`${IR}/soft-fundamentals/interview-meta/procesos-de-entrevistas`]: `${IR}/recruiter-screening/procesos-de-entrevistas`,
  [`${IR}/soft-fundamentals/interview-meta/diseno-de-entrevistas`]: `${IR}/recruiter-screening/diseno-de-entrevistas`,
  [`${IR}/soft-fundamentals/interview-meta/feedback`]: `${IR}/career-and-library/career/feedback`,
  [`${IR}/soft-fundamentals/pasando-entrevistas/guia-de-screening`]: `${IR}/recruiter-screening/guia-de-screening`,
  [`${IR}/soft-fundamentals/pasando-la-screening`]: `${IR}/recruiter-screening/guia-de-screening`,
  [`${IR}/soft-fundamentals/procesos-de-entrevistas`]: `${IR}/recruiter-screening/procesos-de-entrevistas`,
  [`${IR}/soft-fundamentals/diseno-de-procesos-de-entrevistas`]: `${IR}/recruiter-screening/diseno-de-entrevistas`,
  [`${IR}/soft-fundamentals/trabajando-con-recruiters`]: `${IR}/recruiter-screening/trabajando-con-recruiters`,

  // --- Hiring Manager Screening (ex soft-fundamentals behavioral pages) ---
  [`${IR}/soft-fundamentals/pasando-entrevistas`]: `${IR}/hiring-manager-screening/behavioral-preguntas-clasicas`,
  [`${IR}/soft-fundamentals/pasando-entrevistas/behavioral-preguntas-clasicas`]: `${IR}/hiring-manager-screening/behavioral-preguntas-clasicas`,
  [`${IR}/soft-fundamentals/behavioral-preguntas-clasicas`]: `${IR}/hiring-manager-screening/behavioral-preguntas-clasicas`,
  [`${IR}/soft-fundamentals/pasando-entrevistas/behavioral-storytelling`]: `${IR}/hiring-manager-screening/behavioral-storytelling`,
  [`${IR}/soft-fundamentals/behavioral-storytelling`]: `${IR}/hiring-manager-screening/behavioral-storytelling`,
  [`${IR}/soft-fundamentals/pasando-entrevistas/behavioral-cultura-americana`]: `${IR}/hiring-manager-screening/behavioral-cultura-americana`,
  [`${IR}/soft-fundamentals/cultura-de-trabajo-americana`]: `${IR}/hiring-manager-screening/behavioral-cultura-americana`,
  [`${IR}/soft-fundamentals/pasando-entrevistas/conectando-con-el-entrevistador`]: `${IR}/hiring-manager-screening/conectando-con-el-entrevistador`,
  [`${IR}/soft-fundamentals/conectando-con-el-entrevistador`]: `${IR}/hiring-manager-screening/conectando-con-el-entrevistador`,
  [`${IR}/soft-fundamentals/feedback`]: `${IR}/career-and-library/career/feedback`,

  // --- Data Structures & Algorithms (ex technical-fundamentals/ctci) ---
  [`${IR}/technical-fundamentals`]: `${IR}/data-structures-algorithms/big-o-notation`,
  [`${IR}/technical-fundamentals/ctci`]: `${IR}/data-structures-algorithms/big-o-notation`,
  [`${IR}/technical-fundamentals/ctci/big-o-notation`]: `${IR}/data-structures-algorithms/big-o-notation`,
  [`${IR}/technical-fundamentals/ctci/strings-arrays`]: `${IR}/data-structures-algorithms/strings-arrays`,
  [`${IR}/technical-fundamentals/ctci/stacks-queues`]: `${IR}/data-structures-algorithms/stacks-queues`,
  [`${IR}/technical-fundamentals/ctci/linked-lists`]: `${IR}/data-structures-algorithms/linked-lists`,
  [`${IR}/technical-fundamentals/ctci/trees`]: `${IR}/data-structures-algorithms/trees`,
  [`${IR}/technical-fundamentals/ctci/recursion`]: `${IR}/data-structures-algorithms/recursion`,
  [`${IR}/technical-fundamentals/ctci/tips-de-grabacion`]: `${IR}/data-structures-algorithms/tips-de-grabacion`,

  // --- Live Coding (ex technical-fundamentals/leetcode-easy) ---
  [`${IR}/technical-fundamentals/leetcode-easy`]: `${IR}/live-coding/automated-challenges`,
  [`${IR}/technical-fundamentals/leetcode-easy/automated-challenges`]: `${IR}/live-coding/automated-challenges`,
  [`${IR}/technical-fundamentals/leetcode-easy/wpm-touch-typing`]: `${IR}/live-coding/wpm-touch-typing`,

  // --- System Design Interviews (ex technical-fundamentals/system-design) ---
  [`${IR}/technical-fundamentals/system-design`]: `${IR}/system-design-interviews/system-design-meta`,
  [`${IR}/technical-fundamentals/system-design/system-design-meta`]: `${IR}/system-design-interviews/system-design-meta`,
  [`${IR}/technical-fundamentals/system-design/open-sea`]: `${IR}/system-design-interviews/open-sea`,

  // --- Takehomes (ex technical-fundamentals/code-quality) ---
  [`${IR}/technical-fundamentals/code-quality`]: `${IR}/takehomes/guia-de-takehomes`,
  [`${IR}/technical-fundamentals/code-quality/guia-de-takehomes`]: `${IR}/takehomes/guia-de-takehomes`,
  [`${IR}/technical-fundamentals/code-quality/entrevistando-con-ai`]: `${IR}/takehomes/entrevistando-con-ai`,
  [`${IR}/technical-fundamentals/code-quality/code-quality-meta`]: `${IR}/takehomes/code-quality-meta`,
  [`${IR}/technical-fundamentals/code-quality/code-reviewing`]: `${IR}/takehomes/code-reviewing`,

  // --- Quizzes (ex technical-fundamentals/quizzes) ---
  [`${IR}/technical-fundamentals/quizzes`]: `${IR}/career-and-library/quizzes`,

  // --- Frontend Challenges & Entrevistas Silver.dev (ex profile-mastery) ---
  [`${IR}/profile-mastery`]: `${IR}/frontend-challenges/react-idioms`,
  [`${IR}/profile-mastery/frontend`]: `${IR}/frontend-challenges/react-idioms`,
  [`${IR}/profile-mastery/frontend/react-idioms`]: `${IR}/frontend-challenges/react-idioms`,
  [`${IR}/profile-mastery/frontend/react-hooks`]: `${IR}/frontend-challenges/react-hooks`,
  [`${IR}/profile-mastery/frontend/promises`]: `${IR}/frontend-challenges/promises`,
  [`${IR}/profile-mastery/frontend/react-signup-form`]: `${IR}/entrevistas-silver-dev/react-signup-form`,
  [`${IR}/profile-mastery/backend`]: `${IR}/entrevistas-silver-dev/connect4`,
  [`${IR}/profile-mastery/backend/connect4`]: `${IR}/entrevistas-silver-dev/connect4`,
  [`${IR}/profile-mastery/backend/lru-cache`]: `${IR}/advanced-leetcode/lru-cache`,

  // --- Quant Dev (ex profile-mastery/quant-dev & library/quant-dev) ---
  [`${IR}/profile-mastery/quant-dev`]: `${IR}/career-and-library/quant-dev/black-scholes`,
  [`${IR}/profile-mastery/quant-dev/black-scholes-implementation`]: `${IR}/career-and-library/quant-dev/black-scholes`,
  [`${IR}/profile-mastery/quant-dev/ml-modeling-quant-analysis`]: `${IR}/career-and-library/quant-dev/ml-modeling`,
  [`${IR}/profile-mastery/quant-dev/option-chain-etl`]: `${IR}/career-and-library/quant-dev/option-chain-etl`,
  [`${IR}/library/quant-dev`]: `${IR}/career-and-library/quant-dev/black-scholes`,
  [`${IR}/library/quant-dev/black-scholes`]: `${IR}/career-and-library/quant-dev/black-scholes`,
  [`${IR}/library/quant-dev/ml-modeling`]: `${IR}/career-and-library/quant-dev/ml-modeling`,
  [`${IR}/library/quant-dev/option-chain-etl`]: `${IR}/career-and-library/quant-dev/option-chain-etl`,

  // --- Career & Library (ex library) ---
  [`${IR}/library`]: `${IR}/career-and-library/career/feedback`,
  [`${IR}/library/english`]: `${IR}/career-and-library/english/english`,
  [`${IR}/library/english/english`]: `${IR}/career-and-library/english/english`,
  [`${IR}/library/ingles`]: `${IR}/career-and-library/english/english`,
  [`${IR}/library/guia-de-tipeo-para-devs`]: `${IR}/live-coding/wpm-touch-typing`,

  // --- Manejando Ofertas (ex library/manejando-ofertas & library/career) ---
  [`${IR}/library/manejando-ofertas`]: `${IR}/manejando-ofertas/evaluando-ofertas`,
  [`${IR}/library/manejando-ofertas/evaluando-ofertas`]: `${IR}/manejando-ofertas/evaluando-ofertas`,
  [`${IR}/library/manejando-ofertas/negociando-salarios`]: `${IR}/manejando-ofertas/negociando-salarios`,
  [`${IR}/library/manejando-ofertas/evaluando-empresas`]: `${IR}/manejando-ofertas/evaluando-empresas`,
  [`${IR}/library/manejando-ofertas/entendiendo-consultoras`]: `${IR}/manejando-ofertas/entendiendo-consultoras`,
  [`${IR}/library/career`]: `${IR}/manejando-ofertas/carreras-exponenciales`,
  [`${IR}/library/career/carreras-exponenciales`]: `${IR}/manejando-ofertas/carreras-exponenciales`,
  [`${IR}/library/career/perfiles-y-seniority`]: `${IR}/manejando-ofertas/perfiles-y-seniority`,
  [`${IR}/library/carreras-exponenciales`]: `${IR}/manejando-ofertas/carreras-exponenciales`,
  [`${IR}/library/negociando-salarios`]: `${IR}/manejando-ofertas/negociando-salarios`,
  [`${IR}/library/evaluando-equity`]: `${IR}/manejando-ofertas/evaluando-ofertas`,
  [`${IR}/soft-fundamentals/entendiendo-consultoras`]: `${IR}/manejando-ofertas/entendiendo-consultoras`,
  [`${IR}/soft-fundamentals/evaluando-empresas`]: `${IR}/manejando-ofertas/evaluando-empresas`,
};

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

export default withNextra({
  async redirects() {
    return Object.entries(MOVED_PATHS).map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg"),
    );
    fileLoaderRule.exclude = ALLOWED_SVG_REGEX;

    config.module.rules.push({
      test: ALLOWED_SVG_REGEX,
      use: ["@svgr/webpack"],
    });
    return config;
  },
});
