
const Salas = {
    "status": "success",
    "message": "Lista de IDs e nomes das salas recuperada com sucesso.",
    "data": {
      "SALA010": "Auditório Principal",
      "SALA005": "Laboratório de Informática 1",
      "SALA001": "Sala de Aula 1",
      "SALA007": "Sala de Estudo Coletivo",
      "SALA002": "Sala de Reunião 1"
    }
  }
const data = {
    "status": "success",
    "message": "Agendamentos e disponibilidade de salas de 24/07/2025 a 01/08/2025 recuperados com sucesso.",
    "data": {
      "2025-07-24": {
        "SALA010": {
          "nomeSala": "Auditório Principal",
          "bloco": "Bloco A",
          "agendamentosManha": [],
          "agendamentosTarde": [
            {
              "idAgendamento": "AGEN008",
              "horaInicio": "14:00",
              "horaFim": "17:00",
              "finalidade": "Reunião de Coordenação",
              "responsavel": {
                "idUsuario": "USER005",
                "nome": "Coord. Pedro Alvares",
                "email": "pedro.alvares@instituicao.edu.br"
              },
              "recursosAdicionais": []
            }
          ],
          "agendamentosNoite": []
        },
        "SALA005": {
          "nomeSala": "Laboratório de Informática 1",
          "bloco": "Bloco C",
          "agendamentosManha": [],
          "agendamentosTarde": [],
          "agendamentosNoite": []
        },
        "SALA001": {
          "nomeSala": "Sala de Aula 1",
          "bloco": "Bloco A",
          "agendamentosManha": [],
          "agendamentosTarde": [
            {
              "idAgendamento": "AGEN009",
              "horaInicio": "15:30",
              "horaFim": "17:30",
              "finalidade": "Plantão de Dúvidas - Cálculo",
              "responsavel": {
                "idUsuario": "USER001",
                "nome": "Prof. Ana Souza",
                "email": "ana.souza@instituicao.edu.br"
              },
              "recursosAdicionais": [
                "Quadro Branco"
              ]
            }
          ],
          "agendamentosNoite": []
        },
        "SALA007": {
          "nomeSala": "Sala de Estudo Coletivo",
          "bloco": "Bloco D",
          "agendamentosManha": [],
          "agendamentosTarde": [],
          "agendamentosNoite": []
        },
        "SALA002": {
          "nomeSala": "Sala de Reunião 1",
          "bloco": "Bloco B",
          "agendamentosManha": [],
          "agendamentosTarde": [],
          "agendamentosNoite": []
        }
      },
      "2025-07-25": {
        "SALA010": {
          "nomeSala": "Auditório Principal",
          "bloco": "Bloco A",
          "agendamentosManha": [],
          "agendamentosTarde": [
            {
              "idAgendamento": "AGEN002",
              "horaInicio": "14:00",
              "horaFim": "18:00",
              "finalidade": "Palestra sobre Inovação",
              "responsavel": {
                "idUsuario": "USER005",
                "nome": "Coord. Pedro Alvares",
                "email": "pedro.alvares@instituicao.edu.br"
              },
              "recursosAdicionais": [
                "Sistema de Som",
                "Microfone sem Fio",
                "Telão"
              ]
            }
          ],
          "agendamentosNoite": []
        },
        "SALA005": {
          "nomeSala": "Laboratório de Informática 1",
          "bloco": "Bloco C",
          "agendamentosManha": [
            {
              "idAgendamento": "AGEN001",
              "horaInicio": "09:00",
              "horaFim": "12:00",
              "finalidade": "Aula de Programação Avançada",
              "responsavel": {
                "idUsuario": "USER001",
                "nome": "Prof. Ana Souza",
                "email": "ana.souza@instituicao.edu.br"
              },
              "recursosAdicionais": [
                "Projetor",
                "Computadores"
              ]
            }
          ],
          "agendamentosTarde": [],
          "agendamentosNoite": []
        },
        "SALA001": {
          "nomeSala": "Sala de Aula 1",
          "bloco": "Bloco A",
          "agendamentosManha": [],
          "agendamentosTarde": [],
          "agendamentosNoite": []
        },
        "SALA007": {
          "nomeSala": "Sala de Estudo Coletivo",
          "bloco": "Bloco D",
          "agendamentosManha": [],
          "agendamentosTarde": [],
          "agendamentosNoite": []
        },
        "SALA002": {
          "nomeSala": "Sala de Reunião 1",
          "bloco": "Bloco B",
          "agendamentosManha": [],
          "agendamentosTarde": [],
          "agendamentosNoite": []
        }
      },
      "2025-07-26": {
        "SALA010": {
          "nomeSala": "Auditório Principal",
          "bloco": "Bloco A",
          "agendamentosManha": [],
          "agendamentosTarde": [],
          "agendamentosNoite": []
        },
        "SALA005": {
          "nomeSala": "Laboratório de Informática 1",
          "bloco": "Bloco C",
          "agendamentosManha": [],
          "agendamentosTarde": [],
          "agendamentosNoite": []
        },
        "SALA001": {
          "nomeSala": "Sala de Aula 1",
          "bloco": "Bloco A",
          "agendamentosManha": [],
          "agendamentosTarde": [],
          "agendamentosNoite": []
        },
        "SALA007": {
          "nomeSala": "Sala de Estudo Coletivo",
          "bloco": "Bloco D",
          "agendamentosManha": [],
          "agendamentosTarde": [
            {
              "idAgendamento": "AGEN004",
              "horaInicio": "15:00",
              "horaFim": "17:00",
              "finalidade": "Grupo de Estudo",
              "responsavel": {
                "idUsuario": "USER015",
                "nome": "Carlos Roberto",
                "email": "carlos.roberto@instituicao.edu.br"
              },
              "recursosAdicionais": [
                "Quadro Branco"
              ]
            }
          ],
          "agendamentosNoite": []
        },
        "SALA002": {
          "nomeSala": "Sala de Reunião 1",
          "bloco": "Bloco B",
          "agendamentosManha": [
            {
              "idAgendamento": "AGEN003",
              "horaInicio": "10:30",
              "horaFim": "11:30",
              "finalidade": "Reunião de Projeto",
              "responsavel": {
                "idUsuario": "USER012",
                "nome": "Mariana Lima",
                "email": "mariana.lima@instituicao.edu.br"
              },
              "recursosAdicionais": []
            }
          ],
          "agendamentosTarde": [],
          "agendamentosNoite": []
        }
      },
      "2025-07-27": {
        "SALA010": {
          "nomeSala": "Auditório Principal",
          "bloco": "Bloco A",
          "agendamentosManha": [],
          "agendamentosTarde": [],
          "agendamentosNoite": []
        },
        "SALA005": {
          "nomeSala": "Laboratório de Informática 1",
          "bloco": "Bloco C",
          "agendamentosManha": [],
          "agendamentosTarde": [],
          "agendamentosNoite": []
        },
        "SALA001": {
          "nomeSala": "Sala de Aula 1",
          "bloco": "Bloco A",
          "agendamentosManha": [],
          "agendamentosTarde": [],
          "agendamentosNoite": []
        },
        "SALA007": {
          "nomeSala": "Sala de Estudo Coletivo",
          "bloco": "Bloco D",
          "agendamentosManha": [],
          "agendamentosTarde": [],
          "agendamentosNoite": []
        },
        "SALA002": {
          "nomeSala": "Sala de Reunião 1",
          "bloco": "Bloco B",
          "agendamentosManha": [],
          "agendamentosTarde": [],
          "agendamentosNoite": []
        }
      },
      "2025-07-28": {
        "SALA010": {
          "nomeSala": "Auditório Principal",
          "bloco": "Bloco A",
          "agendamentosManha": [],
          "agendamentosTarde": [],
          "agendamentosNoite": []
        },
        "SALA005": {
          "nomeSala": "Laboratório de Informática 1",
          "bloco": "Bloco C",
          "agendamentosManha": [
            {
              "idAgendamento": "AGEN006",
              "horaInicio": "08:30",
              "horaFim": "11:30",
              "finalidade": "Treinamento de Software",
              "responsavel": {
                "idUsuario": "USER020",
                "nome": "João Carlos",
                "email": "joao.carlos@instituicao.edu.br"
              },
              "recursosAdicionais": [
                "Computadores"
              ]
            }
          ],
          "agendamentosTarde": [],
          "agendamentosNoite": []
        },
        "SALA001": {
          "nomeSala": "Sala de Aula 1",
          "bloco": "Bloco A",
          "agendamentosManha": [
            {
              "idAgendamento": "AGEN005",
              "horaInicio": "08:00",
              "horaFim": "10:00",
              "finalidade": "Aula de Matemática",
              "responsavel": {
                "idUsuario": "USER001",
                "nome": "Prof. Ana Souza",
                "email": "ana.souza@instituicao.edu.br"
              },
              "recursosAdicionais": []
            }
          ],
          "agendamentosTarde": [],
          "agendamentosNoite": []
        },
        "SALA007": {
          "nomeSala": "Sala de Estudo Coletivo",
          "bloco": "Bloco D",
          "agendamentosManha": [],
          "agendamentosTarde": [],
          "agendamentosNoite": []
        },
        "SALA002": {
          "nomeSala": "Sala de Reunião 1",
          "bloco": "Bloco B",
          "agendamentosManha": [],
          "agendamentosTarde": [],
          "agendamentosNoite": []
        }
      },
      "2025-07-29": {
        "SALA010": {
          "nomeSala": "Auditório Principal",
          "bloco": "Bloco A",
          "agendamentosManha": [],
          "agendamentosTarde": [],
          "agendamentosNoite": [
            {
              "idAgendamento": "AGEN007",
              "horaInicio": "19:00",
              "horaFim": "22:00",
              "finalidade": "Evento Cultural",
              "responsavel": {
                "idUsuario": "USER030",
                "nome": "Maria Eduarda",
                "email": "maria.eduarda@instituicao.edu.br"
              },
              "recursosAdicionais": [
                "Sistema de Iluminação",
                "Projetor"
              ]
            }
          ]
        },
        "SALA005": {
          "nomeSala": "Laboratório de Informática 1",
          "bloco": "Bloco C",
          "agendamentosManha": [],
          "agendamentosTarde": [],
          "agendamentosNoite": []
        },
        "SALA001": {
          "nomeSala": "Sala de Aula 1",
          "bloco": "Bloco A",
          "agendamentosManha": [],
          "agendamentosTarde": [],
          "agendamentosNoite": []
        },
        "SALA007": {
          "nomeSala": "Sala de Estudo Coletivo",
          "bloco": "Bloco D",
          "agendamentosManha": [],
          "agendamentosTarde": [],
          "agendamentosNoite": []
        },
        "SALA002": {
          "nomeSala": "Sala de Reunião 1",
          "bloco": "Bloco B",
          "agendamentosManha": [],
          "agendamentosTarde": [],
          "agendamentosNoite": []
        }
      },
      "2025-07-30": {
        "SALA010": {
          "nomeSala": "Auditório Principal",
          "bloco": "Bloco A",
          "agendamentosManha": [],
          "agendamentosTarde": [],
          "agendamentosNoite": []
        },
        "SALA005": {
          "nomeSala": "Laboratório de Informática 1",
          "bloco": "Bloco C",
          "agendamentosManha": [],
          "agendamentosTarde": [
            {
              "idAgendamento": "AGEN010",
              "horaInicio": "13:00",
              "horaFim": "16:00",
              "finalidade": "Workshop de Data Science",
              "responsavel": {
                "idUsuario": "USER020",
                "nome": "João Carlos",
                "email": "joao.carlos@instituicao.edu.br"
              },
              "recursosAdicionais": ["Computadores", "Projetor"]
            }
          ],
          "agendamentosNoite": []
        },
        "SALA001": {
          "nomeSala": "Sala de Aula 1",
          "bloco": "Bloco A",
          "agendamentosManha": [
            {
              "idAgendamento": "AGEN011",
              "horaInicio": "08:00",
              "horaFim": "10:00",
              "finalidade": "Reunião Departamental",
              "responsavel": {
                "idUsuario": "USER001",
                "nome": "Prof. Ana Souza",
                "email": "ana.souza@instituicao.edu.br"
              },
              "recursosAdicionais": []
            }
          ],
          "agendamentosTarde": [],
          "agendamentosNoite": []
        },
        "SALA007": {
          "nomeSala": "Sala de Estudo Coletivo",
          "bloco": "Bloco D",
          "agendamentosManha": [],
          "agendamentosTarde": [],
          "agendamentosNoite": []
        },
        "SALA002": {
          "nomeSala": "Sala de Reunião 1",
          "bloco": "Bloco B",
          "agendamentosManha": [],
          "agendamentosTarde": [],
          "agendamentosNoite": []
        }
      },
      "2025-07-31": {
        "SALA010": {
          "nomeSala": "Auditório Principal",
          "bloco": "Bloco A",
          "agendamentosManha": [],
          "agendamentosTarde": [],
          "agendamentosNoite": []
        },
        "SALA005": {
          "nomeSala": "Laboratório de Informática 1",
          "bloco": "Bloco C",
          "agendamentosManha": [],
          "agendamentosTarde": [],
          "agendamentosNoite": []
        },
        "SALA001": {
          "nomeSala": "Sala de Aula 1",
          "bloco": "Bloco A",
          "agendamentosManha": [],
          "agendamentosTarde": [],
          "agendamentosNoite": []
        },
        "SALA007": {
          "nomeSala": "Sala de Estudo Coletivo",
          "bloco": "Bloco D",
          "agendamentosManha": [
            {
              "idAgendamento": "AGEN012",
              "horaInicio": "09:00",
              "horaFim": "12:00",
              "finalidade": "Sessão de Orientação de TCC",
              "responsavel": {
                "idUsuario": "USER015",
                "nome": "Carlos Roberto",
                "email": "carlos.roberto@instituicao.edu.br"
              },
              "recursosAdicionais": ["Lousa Interativa"]
            }
          ],
          "agendamentosTarde": [],
          "agendamentosNoite": []
        },
        "SALA002": {
          "nomeSala": "Sala de Reunião 1",
          "bloco": "Bloco B",
          "agendamentosManha": [],
          "agendamentosTarde": [],
          "agendamentosNoite": []
        }
      },
      "2025-08-01": {
        "SALA010": {
          "nomeSala": "Auditório Principal",
          "bloco": "Bloco A",
          "agendamentosManha": [],
          "agendamentosTarde": [],
          "agendamentosNoite": []
        },
        "SALA005": {
          "nomeSala": "Laboratório de Informática 1",
          "bloco": "Bloco C",
          "agendamentosManha": [],
          "agendamentosTarde": [],
          "agendamentosNoite": []
        },
        "SALA001": {
          "nomeSala": "Sala de Aula 1",
          "bloco": "Bloco A",
          "agendamentosManha": [],
          "agendamentosTarde": [],
          "agendamentosNoite": [
            {
              "idAgendamento": "AGEN013",
              "horaInicio": "19:00",
              "horaFim": "22:30",
              "finalidade": "Defesa de Projeto de Graduação",
              "responsavel": {
                "idUsuario": "USER012",
                "nome": "Mariana Lima",
                "email": "mariana.lima@instituicao.edu.br"
              },
              "recursosAdicionais": ["Projetor", "Sistema de Som"]
            }
          ]
        },
        "SALA007": {
          "nomeSala": "Sala de Estudo Coletivo",
          "bloco": "Bloco D",
          "agendamentosManha": [],
          "agendamentosTarde": [],
          "agendamentosNoite": []
        },
        "SALA002": {
          "nomeSala": "Sala de Reunião 1",
          "bloco": "Bloco B",
          "agendamentosManha": [],
          "agendamentosTarde": [],
          "agendamentosNoite": []
        }
      }
    }
  }

function formatarData(data){
    const anoAtual = data.getFullYear();
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const dia = (data.getDate()).toString().padStart(2, '0');

    return `${anoAtual}-${mes}-${dia}`

}

function dataAtual(diasFuturos=0){
    const dataAtual = new Date();
    dataAtual.setDate(dataAtual.getDate() + diasFuturos)
    // const amanha = hoje + 1;
    return formatarData(dataAtual)
}

function carregarCalendario(){
 
    const calendario = document.getElementById('calendario');
    const salasAgendamentos = document.getElementById('salasAgendamentos');
    // const dataMinima = dataAtual();
    // const amanha = dataAtual(1);
    // const dataMaxima = dataAtual(6);
    const semanaPesquisada = [];
    for (let i = 0; i <=6; i++){
        const data = dataAtual(i);
        semanaPesquisada.push(data)
    }

    console.log(semanaPesquisada)


    // console.log(Object.values(Salas.data).sort())
    Object.keys(Salas.data).forEach(sala => {
        // console.log(sala)
        salasAgendamentos.innerHTML += `<div id="${sala}" class="salaAgendamentos moduloCalendario">${Salas.data[sala]}</div>`
        
    });

    let contadorSemana = 0;
    semanaPesquisada.forEach( data => {
        contadorSemana += 1;
        console.log(data)
        const diaCalendario = document.getElementById(`dia${contadorSemana}`)
        const stringFormatada = `               
                            <div class="dataAgendamentos moduloCalendario">
                                <div>SEX</div>
                                <div>27/06</div>
                            </div>
                            
                            <div class="moduloAgendamentos moduloCalendario">

                            </div>
`
        const stringFormatadaDeDiaSala = `
        <div class="moduloAgendamentos moduloCalendario">
            <div class="reserva rManha">Maria Paula</div>
            <div class="reserva rTarde">Thiago</div>
            <div class="reserva rNoite">Ramiro Junior</div>
        </div>
        `
    }
    )
    // console.log(dataMinima)
    // console.log(amanha)

    // console.log(data['data'][dataMinima])
}