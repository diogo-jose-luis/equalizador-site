import type { Course } from "@/types/course";

export const comptiaSecurityPlus701: Course = {
  id: "comptia-security-plus-sy0-701",
  slug: "comptia-security-plus-sy0-701",

  title: "CompTIA Security+ (SY0-701)",
  shortTitle: "Security+ SY0-701",
  category: "Cybersecurity",

  durationHours: 40,
  durationLabel: "• 40h",

  students: 180,
  lessonsCount: 15,
  rating: 5,
  price: "Sob consulta",

  destaque: true,

  image: "/courses/security-plus.png",
  image2: "/courses/security-plus-2.png",
  image3: "/courses/security-plus-3.png",
  file_url: "/docs/courses/comptia-security-plus-sy0-701.pdf",

  description:
    "Formação fundamental em cibersegurança que aborda ameaças, vulnerabilidades, arquitetura de segurança, criptografia, resposta a incidentes e governança, com preparação completa para o exame CompTIA Security+ (SY0-701).",

  targetAudience:
    "Profissionais de TI, analistas de segurança, administradores de sistemas e redes, estudantes e todos que desejam adquirir competências fundamentais em cibersegurança.",

  prerequisites: [
    "Noções básicas de informática e redes",
    "Preferencial: experiência com sistemas operacionais (Windows ou Linux)",
    "Identificação válida (Bilhete de Identidade ou Passaporte)",
  ],

  objectives: [
    "Compreender os princípios fundamentais de cibersegurança, ameaças e vulnerabilidades.",
    "Implementar boas práticas de proteção de redes, sistemas e aplicações.",
    "Configurar e gerir controlos de acesso, autenticação e políticas de segurança.",
    "Monitorizar, detetar e responder a incidentes de segurança.",
    "Preparar-se para o exame CompTIA Security+ (SY0-701) com foco prático.",
  ],

  modules: [
    {
      code: "01",
      title: "Ameaças, Vulnerabilidades e Fundamentos de Ataques",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Tipos de ameaças e ataques (malware, ransomware, phishing, etc.)",
            "Vetores de ataque e superfícies de exposição",
            "Vulnerabilidades comuns em sistemas e redes",
            "Engenharia social e técnicas de exploração",
            "Métodos de mitigação e prevenção",
          ],
        },
      ],
    },
    {
      code: "02",
      title: "Arquitetura de Segurança e Controles Defensivos",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Princípios de arquitetura segura",
            "Segurança física e lógica",
            "Firewalls, IDS/IPS e segmentação de rede",
            "Hardening de sistemas e aplicações",
            "Segurança de dispositivos móveis e IoT",
          ],
        },
      ],
    },
    {
      code: "03",
      title: "Criptografia, PKI e Gestão de Identidade",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Criptografia simétrica e assimétrica",
            "Hashing, assinaturas digitais e certificados",
            "Infraestrutura de chave pública (PKI)",
            "Gestão de identidades e acessos (IAM)",
            "Autenticação multifator (MFA)",
          ],
        },
      ],
    },
    {
      code: "04",
      title: "Segurança de Redes, Aplicações e Cloud",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Segurança de redes LAN, WAN e Wireless",
            "Protocolos seguros (TLS, HTTPS, SSH, IPSec)",
            "Segurança de aplicações e SDLC seguro",
            "Fundamentos de segurança em cloud (IaaS, PaaS, SaaS)",
            "Princípios de Zero Trust",
          ],
        },
      ],
    },
    {
      code: "05",
      title: "Monitorização, Resposta a Incidentes e Governança",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "SIEM e ferramentas de monitorização",
            "Gestão de logs e deteção de anomalias",
            "Ciclo de resposta a incidentes",
            "Introdução à forense digital",
            "Políticas, normas e compliance (ISO 27001, NIST)",
          ],
        },
      ],
    },
  ],

  assessment: {
    exams: [
      "Avaliação prática baseada em cenários de segurança.",
      "Avaliação contínua por observação e participação.",
    ],
    accreditation: ["Licença e certificado emitidos pela Equalizador."],
  },

  tags: [
    "Cybersecurity",
    "CompTIA Security+",
    "SY0-701",
    "Network Security",
    "Risk Management",
    "Incident Response",
  ],
};
