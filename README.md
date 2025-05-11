# Programacao-Web - Sistema de Reserva de um Restaurante

Escopo: um sistema que permite que os clientes do restaurante realizem reservas de mesas de maneira online e que a administração do restaurante gerencie as reservas, controlando os horários e a disponibilidade. 

Funcionalidades principais:

CRUD de clientes: cadastro de clientes (nome, email, telefone, senha), edição e exclusão de cadastro, lista dos clientes cadastrados.

CRUD de reservas: criação de reserva (cliente, data, número de pessoas), edição e exclusão de reservas, lista das reservas ativas. 

Transação: tanto o cliente quanto o restaurante podem confirmar uma reserva, garantindo que a mesa será disponibilizada; ambos também poderão cancelar uma reserva, assim liberando a mesa para outras reservas. 

Requisitos Funcionais (RF)

RF001: o sistema deve permitir o cadastro de novos clientes com informações como nome, email, telefone e CPF. 

RF002: o sistema deve permitir que os clientes editem e excluam os seus cadastros. 

RF003: o sistema deve permitir a visualização da lista de clientes cadastrados pelos administradores. 

RF004: o sistema deve permitir que os clientes realizem reservas informando data e número de pessoas.  

RF005: o sistema deve permitir a edição ou cancelamento de reservas. 

RF006: o sistema deve exibir uma lista das reservas ativas para os administradores. 

RF007: o sistema deve permitir a confirmação de reservas. 

RF008: o sistema deve permitir que o cliente visualize o status da sua reserva (pendente, confirmada, cancelada). 

Requisitos Não Funcionais (RNF)

RNF001: o sistema deve utilizar um banco de dados para armazenar informações de clientes, reservas e disponibilidade de mesas.

RNF002: o tempo de resposta do sistema deve ser inferior a 10 segundos.

RNF003: o sistema deve permitir, no mínimo, 30 reservas simultâneas sem perda de desempenho.

RNF004: o sistema deve ter autenticação segura para clientes e administração, com e-mail e senha.

RNF005: o sistema deve permitir reservas apenas no horário de funcionamento do restaurante. 

RNF006: as senhas dos usuários devem ser armazenadas de forma segura. 

RNF007: o sistema deve apresentar mensagens de erro claras e compreensíveis. 

RNF008: o sistema deve estar disponível a maior parte do tempo. 

RNF009: o sistema deve limitar o número de reservas simultâneas conforme a capacidade total de mesas do restaurante. 

RNF010: o sistema deve impedir reservas duplicadas para o mesmo cliente. 

Tipo de Arquitetura: Monolítica - projetar já com separação lógica clara entre módulos (ex: autenticação, cliente, reserva, administração) facilitará a migração futura para microsserviços, se necessário.

Principais tecnologias: 

Front-End: JavaScript (React.js): é uma biblioteca moderna, robusta e muito bem exigida no ecossistema web. Sua abordagem baseada em componentes facilita tanto a manutenção quanto a escalabilidade da interface. Além disso, o React permite a criação de aplicativos de página única (SPA), o que melhora significativamente a experiência do usuário para evitar recarregamentos constantes da página.

Back-End: JavaScript (Node.js e Express.js): o Node oferece um ambiente leve e eficiente, tanto para aplicações que excluem múltiplas requisições simultâneas, como um sistema de reservas. O Express, por sua vez, adiciona uma camada de estrutura ao Node, permitindo a organização mais clara de rotas e lógica de negócio.

Banco de Dados: MySQL: possui ampla documentação, é amplamente apoiado por ferramentas de desenvolvimento e é conhecido por sua estabilidade. 

Autentificação: JWT (JSON Web Token): importante permitir uma autenticação sem a necessidade de manter sessões ativas no servidor. Isso contribui para a escalabilidade do sistema. 

Organização das tarefas:

Mariele Vieira: Back-End: JavaScript (Node.js e Express.js) e Banco de Dados: MySQL; 

Maria Giuliari: Front-End: JavaScript (React.js) e Autentificação: JWT (JSON Web Token);

Equipe: Maria Giuliari e Mariele

