import type { Course } from "@/types/course";

export const lpic2202450: Course = {
  id: "lpic-2-202-450",
  slug: "lpic-2-202-450",

  title: "LPIC-2 – Linux Engineer (202-450)",
  shortTitle: "LPIC-2 202-450",
  category: "Administração de Sistemas",

  durationHours: 40,
  durationLabel: "• 40h",

  students: 110,
  lessonsCount: 15,
  rating: 5,
  price: "Sob consulta",

  destaque: false,

  image: "/courses/lpic2.png",
  image2: "/courses/lpic2-2.png",
  image3: "/courses/lpic2-3.png",
  file_url: "/docs/courses/lpic-2-202-450.pdf",

  description:
    "Formação avançada em administração Linux para ambientes corporativos, cobrindo kernel, armazenamento avançado, redes, serviços essenciais e troubleshooting, com preparação para o exame LPIC-2 (202-450).",

  targetAudience:
    "Profissionais de TI, administradores de sistemas Linux, engenheiros de infraestrutura e todos que desejam aprofundar competências avançadas de administração Linux em ambientes corporativos.",

  prerequisites: [
    "Certificação LPIC-1 ou conhecimentos equivalentes",
    "Experiência prática com linha de comando Linux",
    "Identificação válida (Bilhete de Identidade ou Passaporte)",
  ],

  objectives: [
    "Administrar redes e serviços avançados em ambientes Linux corporativos.",
    "Implementar, configurar e gerir servidores DNS, Web, E-mail e File Sharing.",
    "Dominar mecanismos avançados de armazenamento, dispositivos, RAID e LVM.",
    "Automatizar processos, gerir kernel, dispositivos e troubleshooting avançado.",
    "Preparar-se para o exame oficial LPIC-2 (202-450) com foco prático e orientado ao mercado.",
  ],

  modules: [
    {
      code: "01",
      title: "Configuração e Gestão Avançada do Kernel",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Compilação e personalização do kernel",
            "Gestão avançada de módulos dinâmicos",
            "Parâmetros do kernel e sysctl",
            "Tuning do GRUB2 e do processo de boot",
            "Troubleshooting avançado de arranque",
          ],
        },
      ],
    },
    {
      code: "02",
      title: "Dispositivos, RAID, LVM e Sistemas de Ficheiros Avançados",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "RAID por software (níveis, criação e gestão)",
            "LVM2 (PV, VG, LV) e boas práticas",
            "Snapshots e expansão online de volumes",
            "Sistemas de ficheiros avançados (XFS, Btrfs; introdução a ZFS)",
            "Quotas, permissões especiais e tuning de filesystem",
          ],
        },
      ],
    },
    {
      code: "03",
      title: "Resolução de Problemas e Manutenção de Sistemas",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Monitorização de performance (top/htop, iostat, vmstat, free)",
            "Análise de gargalos (CPU, RAM, disco, rede)",
            "Troubleshooting de serviços e processos (systemd)",
            "Logs avançados, auditoria e rastreio de eventos",
            "Recuperação do sistema e estratégias preventivas",
          ],
        },
      ],
    },
    {
      code: "04",
      title: "Configuração Avançada de Rede",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Routing estático e conceitos de routing dinâmico (visão geral)",
            "Bonding/teaming e VLANs avançadas",
            "Tunneling e VPN (conceitos e implementação base)",
            "Firewall avançada (iptables/nftables) e regras",
            "Diagnóstico e troubleshooting de redes complexas",
          ],
        },
      ],
    },
    {
      code: "05",
      title: "Servidores e Serviços Essenciais (Web, DNS, E-mail, File Sharing)",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "DNS avançado com BIND9 (zonas, delegações, troubleshooting)",
            "Servidor Web Apache/Nginx (virtual hosts e tuning)",
            "Servidores de E-mail (Postfix e Dovecot) – fundamentos e configuração",
            "File Sharing: Samba e NFS em ambientes corporativos",
            "Boas práticas de redundância e introdução à alta disponibilidade",
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

  tags: ["Linux", "LPIC-2", "System Administration", "Kernel", "RAID", "LVM", "Networking", "Services"],
};
