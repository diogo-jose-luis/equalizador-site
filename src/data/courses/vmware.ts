import type { Course } from "@/types/course";

export const vmware: Course = {
  id: "vmware",
  slug: "vmware",

  title: "VMware Datacenter Virtualization Professional(VCP-DCV 2024)",
  shortTitle: "VMware VCP-DCV 2024",
  category: "Virtualização",

  durationHours: 40,
  durationLabel: "• 40h",

  students: 100,
  lessonsCount: 18,
  rating: 5,
  price: "Sob consulta",

  destaque: true,

  image: "/courses/vmware.png",
  image2: "/courses/vmware3.png",
  image3: "/courses/vmware2.png",
  file_url: "/docs/courses/vmware.pdf",

  description:
    "Formação prática em virtualização de datacenter VMware, incluindo configuração de vSphere, NSX e preparação para o exame VCP-DCV 2024.",

  targetAudience:
    "Profissionais de TI, administradores de sistemas, técnicos de virtualização e estudantes que desejam adquirir competências práticas em virtualização VMware e infraestrutura de datacenter.",

  prerequisites: [
    "Conhecimentos básicos de virtualização",
    "Noções de redes (TCP/IP, VLANs, storage, iSCSI/NFS)",
    "Identificação válida (Bilhete de Identidade ou Passaporte)",
  ],

  objectives: [
    "Compreender a arquitetura completa do VMware vSphere e seus principais componentes.",
    "Instalar, configurar e administrar hosts ESXi e o vCenter Server.",
    "Gerir máquinas virtuais, redes virtuais, storage e recursos de datacenter.",
    "Implementar HA, vMotion, DRS e políticas de disponibilidade e balanceamento.",
    "Monitorar, otimizar e proteger ambientes VMware seguindo boas práticas.",
  ],

  modules: [
    {
      code: "01",
      title: "Introdução ao VMware vSphere 8 & Arquitetura",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Conceitos de virtualização e data center definido por software",
            "Componentes principais do vSphere 8",
            "Arquitetura ESXi e vCenter",
            "Licenciamento e modelos de implementação",
            "Casos de uso típicos para ambientes VMware",
          ],
        },
      ],
    },
    {
      code: "02",
      title: "Instalação e Configuração de Hosts ESXi",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Requisitos de hardware e compatibilidade (HCL)",
            "Instalação do VMware ESXi",
            "Configuração inicial de rede, storage e serviços",
            "Gestão de hosts via DCUI e vSphere Client",
            "Atualização e patching de hosts ESXi",
          ],
        },
      ],
    },
    {
      code: "03",
      title: "Administração do vCenter Server",
        lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Instalação do vCenter Server Appliance (VCSA)",
            "Configuração inicial e acesso",
            "Gestão de clusters, permissões e inventário",
            "Templates, Content Library e automação básica",
            "Monitorização e logging no vCenter",
          ],
        },
      ],
    },
    {
      code: "04",
      title: "Gestão de Máquinas Virtuais e Recursos",
       lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Criação e configuração de máquinas virtuais",
            "Recursos de CPU, memória, reservações e limites",
            "Snapshots, clones e templates",
            "Políticas de recursos (Resource Pools)",
            "Gestão do ciclo de vida de VMs",
          ],
        },
      ],
    },
    {
      code: "05",
      title: "Redes Virtuais no vSphere (vSwitch Standard e Distributed)",
       lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Conceitos de networking virtual",
            "vSwitch Standard: criação e gestão",
            "Distributed vSwitch: casos de uso e funcionalidades avançadas",
            "VLANs, NIC teaming e políticas de segurança",
            "Troubleshooting de redes virtuais",
          ],
        },
      ],
    },
    {
      code: "06",
      title: "Armazenamento e Datastores (VMFS, NFS, vSAN)",
       lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Conceitos de storage para VMware",
            "VMFS, NFS, iSCSI e Fibre Channel",
            "Configuração de adaptadores e caminhos de acesso",
            "Introdução ao VMware vSAN",
            "Gestão de datastores e políticas de armazenamento",
          ],
        },
      ],
    },
    {
      code: "07",
      title: "vMotion, HA, DRS e Alta Disponibilidade no Datacenter",
       lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "vMotion e Storage vMotion",
            "vSphere HA: configuração e funcionamento",
            "DRS e balanceamento de carga automático",
            "FT (Fault Tolerance): funcionamento e limitações",
            "Estratégias de resiliência para data centers",
          ],
        },
      ],
    },
    {
      code: "08",
      title: "Monitorização, Troubleshooting e Boas Práticas",
       lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Ferramentas de diagnóstico do vSphere",
            "Logs e métricas essenciais",
            "Identificação de gargalos de CPU, RAM, rede e storage",
            "Recomendações de segurança",
            "Planeamento, manutenção e boas práticas operacionais",
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

  tags: ["Cisco", "Networking", "Routing", "Switching"],
};
