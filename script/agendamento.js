const Salas = {
  status: "success",
  message: "Lista de IDs e nomes das salas recuperada com sucesso.",
  data: {
    SALA010: "Auditório Principal",
    SALA005: "Laboratório de Informática 1",
    SALA001: "Sala de Aula 1",
    SALA007: "Sala de Estudo Coletivo",
    SALA002: "Sala de Reunião 1",
  },
};
const dataAntiga = {
  status: "success",
  message:
    "Agendamentos e disponibilidade de salas de 24/07/2025 a 01/08/2025 recuperados com sucesso.",
  data: {
    "2025-07-24": {
      SALA010: {
        nomeSala: "Auditório Principal",
        bloco: "Bloco A",
        agendamentosManha: [],
        agendamentosTarde: [
          {
            idAgendamento: "AGEN008",
            horaInicio: "14:00",
            horaFim: "17:00",
            finalidade: "Reunião de Coordenação",
            responsavel: {
              idUsuario: "USER005",
              nome: "Coord. Pedro Alvares",
              email: "pedro.alvares@instituicao.edu.br",
            },
            recursosAdicionais: [],
          },
        ],
        agendamentosNoite: [],
      },
      SALA005: {
        nomeSala: "Laboratório de Informática 1",
        bloco: "Bloco C",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
      SALA001: {
        nomeSala: "Sala de Aula 1",
        bloco: "Bloco A",
        agendamentosManha: [],
        agendamentosTarde: [
          {
            idAgendamento: "AGEN009",
            horaInicio: "15:30",
            horaFim: "17:30",
            finalidade: "Plantão de Dúvidas - Cálculo",
            responsavel: {
              idUsuario: "USER001",
              nome: "Prof. Ana Souza",
              email: "ana.souza@instituicao.edu.br",
            },
            recursosAdicionais: ["Quadro Branco"],
          },
        ],
        agendamentosNoite: [],
      },
      SALA007: {
        nomeSala: "Sala de Estudo Coletivo",
        bloco: "Bloco D",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
      SALA002: {
        nomeSala: "Sala de Reunião 1",
        bloco: "Bloco B",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
    },
    "2025-07-25": {
      SALA010: {
        nomeSala: "Auditório Principal",
        bloco: "Bloco A",
        agendamentosManha: [],
        agendamentosTarde: [
          {
            idAgendamento: "AGEN002",
            horaInicio: "14:00",
            horaFim: "18:00",
            finalidade: "Palestra sobre Inovação",
            responsavel: {
              idUsuario: "USER005",
              nome: "Coord. Pedro Alvares",
              email: "pedro.alvares@instituicao.edu.br",
            },
            recursosAdicionais: [
              "Sistema de Som",
              "Microfone sem Fio",
              "Telão",
            ],
          },
        ],
        agendamentosNoite: [],
      },
      SALA005: {
        nomeSala: "Laboratório de Informática 1",
        bloco: "Bloco C",
        agendamentosManha: [
          {
            idAgendamento: "AGEN001",
            horaInicio: "09:00",
            horaFim: "12:00",
            finalidade: "Aula de Programação Avançada",
            responsavel: {
              idUsuario: "USER001",
              nome: "Prof. Ana Souza",
              email: "ana.souza@instituicao.edu.br",
            },
            recursosAdicionais: ["Projetor", "Computadores"],
          },
        ],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
      SALA001: {
        nomeSala: "Sala de Aula 1",
        bloco: "Bloco A",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
      SALA007: {
        nomeSala: "Sala de Estudo Coletivo",
        bloco: "Bloco D",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
      SALA002: {
        nomeSala: "Sala de Reunião 1",
        bloco: "Bloco B",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
    },
    "2025-07-26": {
      SALA010: {
        nomeSala: "Auditório Principal",
        bloco: "Bloco A",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
      SALA005: {
        nomeSala: "Laboratório de Informática 1",
        bloco: "Bloco C",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
      SALA001: {
        nomeSala: "Sala de Aula 1",
        bloco: "Bloco A",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
      SALA007: {
        nomeSala: "Sala de Estudo Coletivo",
        bloco: "Bloco D",
        agendamentosManha: [],
        agendamentosTarde: [
          {
            idAgendamento: "AGEN004",
            horaInicio: "15:00",
            horaFim: "17:00",
            finalidade: "Grupo de Estudo",
            responsavel: {
              idUsuario: "USER015",
              nome: "Carlos Roberto",
              email: "carlos.roberto@instituicao.edu.br",
            },
            recursosAdicionais: ["Quadro Branco"],
          },
        ],
        agendamentosNoite: [],
      },
      SALA002: {
        nomeSala: "Sala de Reunião 1",
        bloco: "Bloco B",
        agendamentosManha: [
          {
            idAgendamento: "AGEN003",
            horaInicio: "10:30",
            horaFim: "11:30",
            finalidade: "Reunião de Projeto",
            responsavel: {
              idUsuario: "USER012",
              nome: "Mariana Lima",
              email: "mariana.lima@instituicao.edu.br",
            },
            recursosAdicionais: [],
          },
        ],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
    },
    "2025-07-27": {
      SALA010: {
        nomeSala: "Auditório Principal",
        bloco: "Bloco A",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
      SALA005: {
        nomeSala: "Laboratório de Informática 1",
        bloco: "Bloco C",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
      SALA001: {
        nomeSala: "Sala de Aula 1",
        bloco: "Bloco A",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
      SALA007: {
        nomeSala: "Sala de Estudo Coletivo",
        bloco: "Bloco D",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
      SALA002: {
        nomeSala: "Sala de Reunião 1",
        bloco: "Bloco B",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
    },
    "2025-07-28": {
      SALA010: {
        nomeSala: "Auditório Principal",
        bloco: "Bloco A",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
      SALA005: {
        nomeSala: "Laboratório de Informática 1",
        bloco: "Bloco C",
        agendamentosManha: [
          {
            idAgendamento: "AGEN006",
            horaInicio: "08:30",
            horaFim: "11:30",
            finalidade: "Treinamento de Software",
            responsavel: {
              idUsuario: "USER020",
              nome: "João Carlos",
              email: "joao.carlos@instituicao.edu.br",
            },
            recursosAdicionais: ["Computadores"],
          },
        ],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
      SALA001: {
        nomeSala: "Sala de Aula 1",
        bloco: "Bloco A",
        agendamentosManha: [
          {
            idAgendamento: "AGEN005",
            horaInicio: "08:00",
            horaFim: "10:00",
            finalidade: "Aula de Matemática",
            responsavel: {
              idUsuario: "USER001",
              nome: "Prof. Ana Souza",
              email: "ana.souza@instituicao.edu.br",
            },
            recursosAdicionais: [],
          },
        ],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
      SALA007: {
        nomeSala: "Sala de Estudo Coletivo",
        bloco: "Bloco D",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
      SALA002: {
        nomeSala: "Sala de Reunião 1",
        bloco: "Bloco B",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
    },
    "2025-07-29": {
      SALA010: {
        nomeSala: "Auditório Principal",
        bloco: "Bloco A",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [
          {
            idAgendamento: "AGEN007",
            horaInicio: "19:00",
            horaFim: "22:00",
            finalidade: "Evento Cultural",
            responsavel: {
              idUsuario: "USER030",
              nome: "Maria Eduarda",
              email: "maria.eduarda@instituicao.edu.br",
            },
            recursosAdicionais: ["Sistema de Iluminação", "Projetor"],
          },
        ],
      },
      SALA005: {
        nomeSala: "Laboratório de Informática 1",
        bloco: "Bloco C",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
      SALA001: {
        nomeSala: "Sala de Aula 1",
        bloco: "Bloco A",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
      SALA007: {
        nomeSala: "Sala de Estudo Coletivo",
        bloco: "Bloco D",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
      SALA002: {
        nomeSala: "Sala de Reunião 1",
        bloco: "Bloco B",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
    },
    "2025-07-30": {
      SALA010: {
        nomeSala: "Auditório Principal",
        bloco: "Bloco A",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
      SALA005: {
        nomeSala: "Laboratório de Informática 1",
        bloco: "Bloco C",
        agendamentosManha: [],
        agendamentosTarde: [
          {
            idAgendamento: "AGEN010",
            horaInicio: "13:00",
            horaFim: "16:00",
            finalidade: "Workshop de Data Science",
            responsavel: {
              idUsuario: "USER020",
              nome: "João Carlos",
              email: "joao.carlos@instituicao.edu.br",
            },
            recursosAdicionais: ["Computadores", "Projetor"],
          },
        ],
        agendamentosNoite: [],
      },
      SALA001: {
        nomeSala: "Sala de Aula 1",
        bloco: "Bloco A",
        agendamentosManha: [
          {
            idAgendamento: "AGEN011",
            horaInicio: "08:00",
            horaFim: "10:00",
            finalidade: "Reunião Departamental",
            responsavel: {
              idUsuario: "USER001",
              nome: "Prof. Ana Souza",
              email: "ana.souza@instituicao.edu.br",
            },
            recursosAdicionais: [],
          },
        ],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
      SALA007: {
        nomeSala: "Sala de Estudo Coletivo",
        bloco: "Bloco D",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
      SALA002: {
        nomeSala: "Sala de Reunião 1",
        bloco: "Bloco B",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
    },
    "2025-07-31": {
      SALA010: {
        nomeSala: "Auditório Principal",
        bloco: "Bloco A",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
      SALA005: {
        nomeSala: "Laboratório de Informática 1",
        bloco: "Bloco C",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
      SALA001: {
        nomeSala: "Sala de Aula 1",
        bloco: "Bloco A",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
      SALA007: {
        nomeSala: "Sala de Estudo Coletivo",
        bloco: "Bloco D",
        agendamentosManha: [
          {
            idAgendamento: "AGEN012",
            horaInicio: "09:00",
            horaFim: "12:00",
            finalidade: "Sessão de Orientação de TCC",
            responsavel: {
              idUsuario: "USER015",
              nome: "Carlos Roberto",
              email: "carlos.roberto@instituicao.edu.br",
            },
            recursosAdicionais: ["Lousa Interativa"],
          },
        ],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
      SALA002: {
        nomeSala: "Sala de Reunião 1",
        bloco: "Bloco B",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
    },
    "2025-08-01": {
      SALA010: {
        nomeSala: "Auditório Principal",
        bloco: "Bloco A",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
      SALA005: {
        nomeSala: "Laboratório de Informática 1",
        bloco: "Bloco C",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
      SALA001: {
        nomeSala: "Sala de Aula 1",
        bloco: "Bloco A",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [
          {
            idAgendamento: "AGEN013",
            horaInicio: "19:00",
            horaFim: "22:30",
            finalidade: "Defesa de Projeto de Graduação",
            responsavel: {
              idUsuario: "USER012",
              nome: "Mariana Lima",
              email: "mariana.lima@instituicao.edu.br",
            },
            recursosAdicionais: ["Projetor", "Sistema de Som"],
          },
        ],
      },
      SALA007: {
        nomeSala: "Sala de Estudo Coletivo",
        bloco: "Bloco D",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
      SALA002: {
        nomeSala: "Sala de Reunião 1",
        bloco: "Bloco B",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
    },
  },
};

const dataAgendamentos = {
  status: "success",
  message:
    "Agendamentos e disponibilidade de salas de 04/08/2025 a 12/08/2025 recuperados com sucesso.",
  data: {
    "2025-08-04": {
      SALA010: {
        nomeSala: "Auditório Principal",
        bloco: "Bloco A",
        agendamentosManha: [],
        agendamentosTarde: [
          {
            idAgendamento: "AGEN008",
            horaInicio: "14:00",
            horaFim: "17:00",
            finalidade: "Reunião de Coordenação",
            responsavel: {
              idUsuario: "USER005",
              nome: "Coord. Pedro Alvares",
              email: "pedro.alvares@instituicao.edu.br",
            },
            recursosAdicionais: [],
          },
        ],
        agendamentosNoite: [],
      },
      SALA005: {
        nomeSala: "Laboratório de Informática 1",
        bloco: "Bloco C",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
      SALA001: {
        nomeSala: "Sala de Aula 1",
        bloco: "Bloco A",
        agendamentosManha: [],
        agendamentosTarde: [
          {
            idAgendamento: "AGEN009",
            horaInicio: "15:30",
            horaFim: "17:30",
            finalidade: "Plantão de Dúvidas - Cálculo",
            responsavel: {
              idUsuario: "USER001",
              nome: "Prof. Ana Souza",
              email: "ana.souza@instituicao.edu.br",
            },
            recursosAdicionais: ["Quadro Branco"],
          },
        ],
        agendamentosNoite: [],
      },
      SALA007: {
        nomeSala: "Sala de Estudo Coletivo",
        bloco: "Bloco D",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
      SALA002: {
        nomeSala: "Sala de Reunião 1",
        bloco: "Bloco B",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
    },
    "2025-08-05": {
      SALA010: {
        nomeSala: "Auditório Principal",
        bloco: "Bloco A",
        agendamentosManha: [],
        agendamentosTarde: [
          {
            idAgendamento: "AGEN002",
            horaInicio: "14:00",
            horaFim: "18:00",
            finalidade: "Palestra sobre Inovação",
            responsavel: {
              idUsuario: "USER005",
              nome: "Coord. Pedro Alvares",
              email: "pedro.alvares@instituicao.edu.br",
            },
            recursosAdicionais: [
              "Sistema de Som",
              "Microfone sem Fio",
              "Telão",
            ],
          },
        ],
        agendamentosNoite: [],
      },
      SALA005: {
        nomeSala: "Laboratório de Informática 1",
        bloco: "Bloco C",
        agendamentosManha: [
          {
            idAgendamento: "AGEN001",
            horaInicio: "09:00",
            horaFim: "12:00",
            finalidade: "Aula de Programação Avançada",
            responsavel: {
              idUsuario: "USER001",
              nome: "Prof. Ana Souza",
              email: "ana.souza@instituicao.edu.br",
            },
            recursosAdicionais: ["Projetor", "Computadores"],
          },
        ],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
      SALA001: {
        nomeSala: "Sala de Aula 1",
        bloco: "Bloco A",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
      SALA007: {
        nomeSala: "Sala de Estudo Coletivo",
        bloco: "Bloco D",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
      SALA002: {
        nomeSala: "Sala de Reunião 1",
        bloco: "Bloco B",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
    },
    "2025-08-06": {
      SALA010: {
        nomeSala: "Auditório Principal",
        bloco: "Bloco A",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
      SALA005: {
        nomeSala: "Laboratório de Informática 1",
        bloco: "Bloco C",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
      SALA001: {
        nomeSala: "Sala de Aula 1",
        bloco: "Bloco A",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
      SALA007: {
        nomeSala: "Sala de Estudo Coletivo",
        bloco: "Bloco D",
        agendamentosManha: [
          {
            idAgendamento: "AGEN001",
            horaInicio: "09:00",
            horaFim: "12:00",
            finalidade: "Aula de Programação Avançada",
            responsavel: {
              idUsuario: "USER001",
              nome: "Prof. Ana Souza",
              email: "ana.souza@instituicao.edu.br",
            },
            recursosAdicionais: ["Projetor", "Computadores"],
          },
        ],
        agendamentosTarde: [
          {
            idAgendamento: "AGEN004",
            horaInicio: "15:00",
            horaFim: "17:00",
            finalidade: "Grupo de Estudo",
            responsavel: {
              idUsuario: "USER015",
              nome: "Carlos Roberto Silva",
              email: "carlos.roberto@instituicao.edu.br",
            },
            recursosAdicionais: ["Quadro Branco"],
          },
        ],
        agendamentosNoite: [
          {
            idAgendamento: "AGEN007",
            horaInicio: "19:00",
            horaFim: "22:00",
            finalidade: "Evento Cultural",
            responsavel: {
              idUsuario: "USER030",
              nome: "Maria Eduarda",
              email: "maria.eduarda@instituicao.edu.br",
            },
            recursosAdicionais: ["Sistema de Iluminação", "Projetor"],
          },
        ],
      },
      SALA002: {
        nomeSala: "Sala de Reunião 1",
        bloco: "Bloco B",
        agendamentosManha: [
          {
            idAgendamento: "AGEN003",
            horaInicio: "10:30",
            horaFim: "11:30",
            finalidade: "Reunião de Projeto",
            responsavel: {
              idUsuario: "USER012",
              nome: "Mariana Lima",
              email: "mariana.lima@instituicao.edu.br",
            },
            recursosAdicionais: [],
          },
        ],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
    },
    "2025-08-07": {
      SALA010: {
        nomeSala: "Auditório Principal",
        bloco: "Bloco A",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
      SALA005: {
        nomeSala: "Laboratório de Informática 1",
        bloco: "Bloco C",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
      SALA001: {
        nomeSala: "Sala de Aula 1",
        bloco: "Bloco A",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
      SALA007: {
        nomeSala: "Sala de Estudo Coletivo",
        bloco: "Bloco D",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
      SALA002: {
        nomeSala: "Sala de Reunião 1",
        bloco: "Bloco B",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
    },
    "2025-08-08": {
      SALA010: {
        nomeSala: "Auditório Principal",
        bloco: "Bloco A",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
      SALA005: {
        nomeSala: "Laboratório de Informática 1",
        bloco: "Bloco C",
        agendamentosManha: [
          {
            idAgendamento: "AGEN006",
            horaInicio: "08:30",
            horaFim: "11:30",
            finalidade: "Treinamento de Software",
            responsavel: {
              idUsuario: "USER020",
              nome: "João Carlos",
              email: "joao.carlos@instituicao.edu.br",
            },
            recursosAdicionais: ["Computadores"],
          },
        ],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
      SALA001: {
        nomeSala: "Sala de Aula 1",
        bloco: "Bloco A",
        agendamentosManha: [
          {
            idAgendamento: "AGEN005",
            horaInicio: "08:00",
            horaFim: "10:00",
            finalidade: "Aula de Matemática",
            responsavel: {
              idUsuario: "USER001",
              nome: "Prof. Ana Souza",
              email: "ana.souza@instituicao.edu.br",
            },
            recursosAdicionais: [],
          },
        ],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
      SALA007: {
        nomeSala: "Sala de Estudo Coletivo",
        bloco: "Bloco D",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
      SALA002: {
        nomeSala: "Sala de Reunião 1",
        bloco: "Bloco B",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
    },
    "2025-08-09": {
      SALA010: {
        nomeSala: "Auditório Principal",
        bloco: "Bloco A",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [
          {
            idAgendamento: "AGEN007",
            horaInicio: "19:00",
            horaFim: "22:00",
            finalidade: "Evento Cultural",
            responsavel: {
              idUsuario: "USER030",
              nome: "Maria Eduarda",
              email: "maria.eduarda@instituicao.edu.br",
            },
            recursosAdicionais: ["Sistema de Iluminação", "Projetor"],
          },
        ],
      },
      SALA005: {
        nomeSala: "Laboratório de Informática 1",
        bloco: "Bloco C",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
      SALA001: {
        nomeSala: "Sala de Aula 1",
        bloco: "Bloco A",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
      SALA007: {
        nomeSala: "Sala de Estudo Coletivo",
        bloco: "Bloco D",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
      SALA002: {
        nomeSala: "Sala de Reunião 1",
        bloco: "Bloco B",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
    },
    "2025-08-10": {
      SALA010: {
        nomeSala: "Auditório Principal",
        bloco: "Bloco A",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
      SALA005: {
        nomeSala: "Laboratório de Informática 1",
        bloco: "Bloco C",
        agendamentosManha: [],
        agendamentosTarde: [
          {
            idAgendamento: "AGEN010",
            horaInicio: "13:00",
            horaFim: "16:00",
            finalidade: "Workshop de Data Science",
            responsavel: {
              idUsuario: "USER020",
              nome: "João Carlos",
              email: "joao.carlos@instituicao.edu.br",
            },
            recursosAdicionais: ["Computadores", "Projetor"],
          },
        ],
        agendamentosNoite: [],
      },
      SALA001: {
        nomeSala: "Sala de Aula 1",
        bloco: "Bloco A",
        agendamentosManha: [
          {
            idAgendamento: "AGEN011",
            horaInicio: "08:00",
            horaFim: "10:00",
            finalidade: "Reunião Departamental",
            responsavel: {
              idUsuario: "USER001",
              nome: "Prof. Ana Souza",
              email: "ana.souza@instituicao.edu.br",
            },
            recursosAdicionais: [],
          },
        ],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
      SALA007: {
        nomeSala: "Sala de Estudo Coletivo",
        bloco: "Bloco D",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
      SALA002: {
        nomeSala: "Sala de Reunião 1",
        bloco: "Bloco B",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
    },
    "2025-08-11": {
      SALA010: {
        nomeSala: "Auditório Principal",
        bloco: "Bloco A",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
      SALA005: {
        nomeSala: "Laboratório de Informática 1",
        bloco: "Bloco C",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
      SALA001: {
        nomeSala: "Sala de Aula 1",
        bloco: "Bloco A",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
      SALA007: {
        nomeSala: "Sala de Estudo Coletivo",
        bloco: "Bloco D",
        agendamentosManha: [
          {
            idAgendamento: "AGEN012",
            horaInicio: "09:00",
            horaFim: "12:00",
            finalidade: "Sessão de Orientação de TCC",
            responsavel: {
              idUsuario: "USER015",
              nome: "Carlos Roberto",
              email: "carlos.roberto@instituicao.edu.br",
            },
            recursosAdicionais: ["Lousa Interativa"],
          },
        ],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
      SALA002: {
        nomeSala: "Sala de Reunião 1",
        bloco: "Bloco B",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
    },
    "2025-08-12": {
      SALA010: {
        nomeSala: "Auditório Principal",
        bloco: "Bloco A",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
      SALA005: {
        nomeSala: "Laboratório de Informática 1",
        bloco: "Bloco C",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
      SALA001: {
        nomeSala: "Sala de Aula 1",
        bloco: "Bloco A",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [
          {
            idAgendamento: "AGEN013",
            horaInicio: "19:00",
            horaFim: "22:30",
            finalidade: "Defesa de Projeto de Graduação",
            responsavel: {
              idUsuario: "USER012",
              nome: "Mariana Lima",
              email: "mariana.lima@instituicao.edu.br",
            },
            recursosAdicionais: ["Projetor", "Sistema de Som"],
          },
        ],
      },
      SALA007: {
        nomeSala: "Sala de Estudo Coletivo",
        bloco: "Bloco D",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
      SALA002: {
        nomeSala: "Sala de Reunião 1",
        bloco: "Bloco B",
        agendamentosManha: [],
        agendamentosTarde: [],
        agendamentosNoite: [],
      },
    },
  },
};

// Constantes principais
const DataMinima = new Date();
const DiasSemana = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"];
let SemanaPesquisada = setSemanaPesquisada();
// console.log(SemanaPesquisada)
const btnAvancarCalendario = document.getElementById("btnAvancarCalendario");
const btnVoltarCalendario = document.getElementById("btnVoltarCalendario");

function toogleVoltarCalendarioButton() {
  btnVoltarCalendario.classList.toggle("semVoltarCalendario");
}

function onAvancarCalendario() {
  SemanaPesquisada = avançarSemanaPesquisada();
  // console.log(SemanaPesquisada)
  carregarCalendario();
}

function onVoltarCalendario() {
  // console.log(voltarSemanaPesquisada()[0] < DataMinima)
  if (voltarSemanaPesquisada()[0] < DataMinima) {
    return;
  } else {
    SemanaPesquisada = voltarSemanaPesquisada();
    carregarCalendario();
  }
}

function formatarData(data, formatoData = "yyyy-mm-dd") {
  const anoAtual = data.getFullYear();
  const mes = (data.getMonth() + 1).toString().padStart(2, "0");
  const dia = data.getDate().toString().padStart(2, "0");

  if (formatoData === "yyyy-mm-dd") {
    return `${anoAtual}-${mes}-${dia}`;
  }
  if (formatoData === "dd/mm") {
    return `${dia}/${mes}`;
  }

  return `${anoAtual}-${mes}-${dia}`;
}

function dataAtual(diasFuturos = 0) {
  const dataAtual = new Date();
  dataAtual.setDate(dataAtual.getDate() + diasFuturos);
  // const amanha = hoje + 1;
  return formatarData(dataAtual);
}

function setSemanaPesquisada(semanaPesquisada = []) {
  for (let i = 0; i <= 6; i++) {
    const data = new Date();
    data.setDate(data.getDate() + i);
    semanaPesquisada.push(data);
  }
  return semanaPesquisada;
}

function avançarSemanaPesquisada() {
  const novaSemanaPesquisada = [...SemanaPesquisada];
  novaSemanaPesquisada.forEach((data) => {
    // const novaData = 0
    data.setDate(data.getDate() + 1);
    // novaSemanaPesquisada.push(data)
    // console.log(data)
    // console.log(novaData)
  });
  // console.log(novaSemanaPesquisada)
  return novaSemanaPesquisada;
}

function voltarSemanaPesquisada() {
  const novaSemanaPesquisada = [];
  SemanaPesquisada.map((data) => {
    const novaData = new Date(data);
    // console.log(novaData)
    novaData.setDate(novaData.getDate() - 1);
    novaSemanaPesquisada.push(novaData);
  });
  return novaSemanaPesquisada;
}

function carregarModulosCalendario() {
  let contadorSemana = 0;
  SemanaPesquisada.forEach((data) => {
    contadorSemana += 1;
    const diaSemana = DiasSemana[data.getDay()];
    const diaFormatado = formatarData(data, (formatoData = "dd/mm"));
    const diaCompletamenteFormatado = formatarData(data);
    const diaCalendario = document.getElementById(`dia${contadorSemana}`);
    const stringFormatadaHeaderDia = `               
        <div class="dataAgendamentos moduloCalendario">
            <div>${diaSemana}</div>
            <div>${diaFormatado}</div>
        </div>
      `;

    const stringFormatadaDeDiaSalaExemplo = `
      <div class="moduloAgendamentos moduloCalendario">
          <div class="reserva rManha">Maria Paula</div>
          <div class="reserva rTarde">Thiago</div>
          <div class="reserva rNoite">Ramiro Junior</div>
      </div>
      `;

    const stringFormatadaDeDiaSala = `
      <div class="moduloAgendamentos moduloCalendario">

      </div>
      `;

    diaCalendario.innerHTML = stringFormatadaHeaderDia;

    Object.keys(Salas.data).forEach((sala) => {
      const idModuloDiaSala = `${sala}&${diaCompletamenteFormatado}`;

      const stringFormatadaDeDiaSala = `
        <div id=${idModuloDiaSala} class="moduloAgendamentos moduloCalendario">
    
        </div>
        `;
      diaCalendario.innerHTML += stringFormatadaDeDiaSala;
    });
  });
}

function carregarReservasCalendario() {
  Object.keys(Salas.data).forEach((sala) => {
    SemanaPesquisada.forEach((dataDeSemanaPesquisada) => {
      const dataCompletamenteFormatada = formatarData(dataDeSemanaPesquisada);
      const idModuloDiaSala = `${sala}&${dataCompletamenteFormatada}`;
      const moduloDoDiaSala = document.getElementById(idModuloDiaSala);

      if (dataAgendamentos.data[dataCompletamenteFormatada]) {
        if (dataAgendamentos.data[dataCompletamenteFormatada][sala]) {
          const agendamentosDiaSala =
            dataAgendamentos.data[dataCompletamenteFormatada][sala];
          const moduloReservaDiaSala = document.getElementById(idModuloDiaSala);

          if (agendamentosDiaSala["agendamentosManha"].length !== 0) {
            const idModuloDiaSalaTurno = idModuloDiaSala + `&manha`;
            const nomeResponsavelReserva =
              agendamentosDiaSala["agendamentosManha"][0]["responsavel"][
                "nome"
              ];
            const stringReservaManha = `<div id=${idModuloDiaSalaTurno} class="reserva rManha">${nomeResponsavelReserva}</div>
            `;
            moduloReservaDiaSala.innerHTML += stringReservaManha;
          }
          if (agendamentosDiaSala.agendamentosTarde.length !== 0) {
            const idModuloDiaSalaTurno = idModuloDiaSala + `&tarde`;
            const nomeResponsavelReserva =
              agendamentosDiaSala["agendamentosTarde"][0]["responsavel"][
                "nome"
              ];
            const stringReservaTarde = `<div id=${idModuloDiaSalaTurno} class="reserva rTarde">${nomeResponsavelReserva}</div>
            `;
            moduloReservaDiaSala.innerHTML += stringReservaTarde;
          }
          if (agendamentosDiaSala.agendamentosNoite.length !== 0) {
            const idModuloDiaSalaTurno = idModuloDiaSala + `&noite`;
            const nomeResponsavelReserva =
              agendamentosDiaSala["agendamentosNoite"][0]["responsavel"][
                "nome"
              ];
            const stringReservaNoite = `<div id=${idModuloDiaSalaTurno} class="reserva rNoite">${nomeResponsavelReserva}</div>
            `;
            moduloReservaDiaSala.innerHTML += stringReservaNoite;
          }
        }
      }
    });
  });
}

function resetarCalendario() {
  const calendario = document.getElementById("calendario");
  const stringCalendarioResetado = `                        <div id="salasAgendamentos" class="salasAgendamentos">
                            <div class="voltarAvancar moduloCalendario">
                                <div id="btnVoltarCalendario" class="btnsVoltarEAvancar semVoltarCalendario" onclick="onVoltarCalendario()">
                                <img src="img/V.png" width="35px" height="35px" alt="">
                            </div>
                            <div id="btnAvancarCalendario" class="btnsVoltarEAvancar" onclick="onAvancarCalendario()">
                                <img src="img/A.png" width="35px" height="35px" alt="">
                            </div>
                            </div>
                            <!-- <div class="salaAgendamentos moduloCalendario">Sala</div> -->
                        </div>
                        <div id="dia1" class="diaAgendamentos">

                        </div>
                        <div id="dia2" class="diaAgendamentos">

                        </div>
                        <div id="dia3" class="diaAgendamentos">

                        </div>
                        <div id="dia4" class="diaAgendamentos">

                        </div>
                        <div id="dia5" class="diaAgendamentos">

                        </div>
                        <div id="dia6" class="diaAgendamentos">

                        </div>
                        <div id="dia7" class="diaAgendamentos">

                        </div>
`;
  calendario.innerHTML = stringCalendarioResetado;
}

function carregarCalendario() {
  resetarCalendario();
  const salasAgendamentos = document.getElementById("salasAgendamentos");

  Object.keys(Salas.data).forEach((sala) => {
    salasAgendamentos.innerHTML += `<div id="${sala}" class="salaAgendamentos moduloCalendario">${Salas.data[sala]}</div>`;
  });

  carregarModulosCalendario();

  carregarReservasCalendario();
}

// carregarCalendario()
