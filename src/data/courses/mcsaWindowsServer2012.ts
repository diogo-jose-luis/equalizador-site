import type { Course } from "@/types/course";

export const mcsaWindowsServer2012: Course = {
  id: "mcsa-windows-server-2012",
  slug: "mcsa-windows-server-2012",

  title: "MCSA – Windows Server 2012",
  shortTitle: "MCSA Server 2012",
  category: "Administração de Sistemas",

  durationHours: 40,
  durationLabel: "• 40h",

  students: 130,
  lessonsCount: 15,
  rating: 5,
  price: "Sob consulta",

  destaque: true,

  image: "/courses/mcsa.png",
  image2: "/courses/mcsa2.png",
  image3: "/courses/mcsa3.png",
  file_url: "/docs/courses/mcsa-windows-server-2012.pdf",

  description:
    "Formação prática focada na instalação, configuração e administração do Windows Server 2012, incluindo serviços de rede, Active Directory e segurança, com preparação para certificação MCSA.",

targetAudience:
    "Profissionais de TI, administradores de sistemas, técnicos de suporte e estudantes que desejam adquirir competências práticas na gestão de ambientes Windows Server 2012 e preparar-se para a certificação MCSA.",

  objectives: [
    "Dominar a instalação e configuração do Windows Server 2012",
    "Administrar utilizadores, grupos, permissões e recursos do servidor",
    "Implementar e gerir serviços de rede essenciais",
    "Instalar e administrar o Active Directory Domain Services",
    "Aplicar boas práticas de segurança, backup e monitorização",
  ],

  prerequisites: [
    "Conhecimentos básicos de informática",
    "Noções gerais de redes (TCP/IP, DNS, DHCP)",
    "Bilhete de Identidade ou Passaporte",
  ],

  modules: [
    {
      code: "01",
      title: "Instalação e Configuração do Windows Server 2012",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Visão geral do Windows Server 2012",
            "Requisitos de hardware e planeamento",
            "Instalação GUI e Server Core",
            "Configuração inicial do servidor",
            "Gestão de discos e volumes",
            "Introdução ao Server Manager",
            "Instalação de roles e features",
          ],
        },
      ],
    },
    {
      code: "02",
      title: "Administração de Servidores e Gestão de Utilizadores",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Administração local e remota",
            "Gestão de utilizadores e grupos",
            "Permissões NTFS e partilhas",
            "Políticas de segurança local",
            "Introdução ao Group Policy",
            "Automação com PowerShell",
            "Gestão de serviços e processos",
          ],
        },
      ],
    },
    {
      code: "03",
      title: "Configuração Avançada de Serviços de Rede",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Configuração avançada de TCP/IP",
            "Implementação de DHCP",
            "Configuração e gestão de DNS",
            "Serviços de acesso remoto (RRAS)",
            "NAT e redes virtuais",
            "Políticas de acesso à rede",
            "Diagnóstico e troubleshooting de rede",
          ],
        },
      ],
    },
    {
      code: "04",
      title: "Active Directory Domain Services (AD DS)",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Conceitos fundamentais de Active Directory",
            "Instalação e configuração do AD DS",
            "Utilizadores, grupos e OUs",
            "Gestão de controladores de domínio",
            "Replicação do Active Directory",
            "Group Policy Management",
            "Integração com DNS e DHCP",
          ],
        },
      ],
    },
    {
      code: "05",
      title: "Segurança, Atualizações e Monitorização",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Firewall e políticas de segurança",
            "Auditoria e controlo de acessos",
            "Windows Server Update Services (WSUS)",
            "Hardening do servidor",
            "Backup e recuperação",
            "Monitorização de desempenho",
            "Boas práticas de manutenção",
          ],
        },
      ],
    },
  ],

  assessment: {
    exams: [
      "Avaliação prática para os módulos mais práticos.",
      "Avaliação por observação para os outros módulos.",
    ],
    accreditation: ["Licença e certificado emitidos pela Equalizador."],
  },

  tags: ["Windows Server", "Active Directory", "Networking", "Security"],
};
