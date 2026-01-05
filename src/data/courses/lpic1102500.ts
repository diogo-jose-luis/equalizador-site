import type { Course } from "@/types/course";

export const lpic1102500: Course = {
  id: "lpic-1-102-500",
  slug: "lpic-1-102-500",

  title: "LPIC-1 – Linux System Administrator (102-500)",
  shortTitle: "LPIC-1 102-500",
  category: "Administração de Sistemas",

  durationHours: 40,
  durationLabel: "• 40h",

  students: 180,
  lessonsCount: 15,
  rating: 5,
  price: "Sob consulta",

  destaque: false,

  image: "/courses/lpic1.png",
  image2: "/courses/lpic1-2.png",
  image3: "/courses/lpic1-3.png",
  file_url: "/docs/courses/lpic-1-102-500.pdf",

  description:
    "Formação prática em administração Linux, cobrindo kernel, sistemas de ficheiros, automação com shell, redes e segurança, com preparação para o exame LPIC-1 (102-500).",

  targetAudience:
    "Profissionais de TI, administradores de sistemas, técnicos de suporte, estudantes de informática e todos que desejam adquirir competências práticas em administração Linux.",

  prerequisites: [
    "Noções básicas de informática",
    "Preferencial: conhecimentos fundamentais de Linux (linha de comandos)",
    "Identificação válida (Bilhete de Identidade ou Passaporte)",
  ],

  objectives: [
    "Compreender e operar eficientemente no ambiente Linux através da linha de comandos.",
    "Configurar serviços essenciais, permissões, utilizadores, grupos e sistemas de ficheiros.",
    "Administrar pacotes, processos, tarefas e configurações do sistema.",
    "Realizar operações de rede, troubleshooting e ajustes essenciais de segurança.",
    "Preparar-se para o exame oficial LPIC-1 (102-500) com domínio dos tópicos cobridos.",
  ],

  modules: [
    {
      code: "01",
      title: "Configuração de Dispositivos, Kernel e Arranque do Sistema",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Gestão de módulos do kernel",
            "Configuração e compilação do kernel",
            "Processo de arranque do Linux",
            "GRUB e systemd: configuração e gestão",
            "Identificação e gestão de dispositivos (udev)",
          ],
        },
      ],
    },
    {
      code: "02",
      title: "Gestão de Discos, Sistemas de Ficheiros e Permissões",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Partições e sistemas de ficheiros (ext4, xfs, btrfs, etc.)",
            "Montagem e desmontagem de sistemas de ficheiros",
            "Permissões, grupos, ACLs e atributos especiais",
            "Quotas de disco",
            "Ferramentas de diagnóstico e verificação",
          ],
        },
      ],
    },
    {
      code: "03",
      title: "Shell Scripts, Ferramentas de Linha de Comando e Automação",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Comandos fundamentais (grep, sed, awk, find, tar, etc.)",
            "Pipes, redirecionamento e manipulação de streams",
            "Estrutura de scripts bash (variáveis, loops e condições)",
            "Criação de tarefas automáticas com cron e systemd timers",
            "Boas práticas para scripts administrativos",
          ],
        },
      ],
    },
    {
      code: "04",
      title: "Configuração de Redes e Serviços Essenciais",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Configuração de interfaces e endereçamento de rede",
            "DNS, resolução de nomes e ficheiro hosts",
            "Ferramentas de diagnóstico (ping, ss/netstat, traceroute, etc.)",
            "Configuração de serviços essenciais (SSH, NTP, DHCP client)",
            "Introdução a servidores web e partilhas de rede",
          ],
        },
      ],
    },
    {
      code: "05",
      title: "Segurança, Administração de Utilizadores e Troubleshooting",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Gestão de utilizadores, grupos e políticas de password",
            "Sistemas de logs (journalctl, rsyslog)",
            "Troubleshooting de rede, processos e serviços",
            "Firewalls (ufw, iptables)",
            "Hardening básico de sistemas Linux",
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

  tags: ["Linux", "LPIC-1", "System Administration", "Shell", "Networking", "Security"],
};
