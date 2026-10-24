// ✏️ Edite aqui os dados da escola. As páginas leem tudo deste arquivo.
export const escola = {
  nome: 'Colégio Tíria',
  slogan: 'Aprender com cor, crescer com propósito.',
  endereco: 'Rua das Acácias, 120 – Boa Viagem, Recife – PE, 51020-000',
  telefone: '(81) 99999-0000',
  whatsapp: '5581999990000',
  whatsappMsg: 'Olá! Gostaria de saber mais sobre a matrícula no Colégio Tíria.',
  email: 'contato@colegiotiria.edu.br',
  horario: 'Segunda a sexta, das 7h às 17h',
}

export const diferenciais = [
  ['BookOpen', 'Leitura todo dia', 'Hora do livro na rotina, com acervo próprio na biblioteca.'],
  ['Languages', 'Inglês desde o 1º ano', 'Aulas semanais com professores certificados.'],
  ['FlaskConical', 'Ciência na prática', 'Laboratório para experimentos a partir do 3º ano.'],
  ['HeartHandshake', 'Inclusão de verdade', 'Sala de recursos e acompanhamento individual.'],
]

export const depoimentos = [
  ['Mariana Albuquerque', 'Mãe do Pedro, 3º ano', 'Meu filho voltou a gostar de estudar. A equipe conhece cada aluno pelo nome.'],
  ['Carlos Mendonça', 'Pai da Luiza, 7º ano', 'A comunicação com a escola é rápida e transparente. Resolvemos tudo pelo WhatsApp.'],
  ['Renata Farias', 'Mãe da Helena, 1º ano', 'A adaptação foi tranquila. Ela chega em casa contando o que descobriu no dia.'],
]

export const missao = {
  missao: 'Formar crianças curiosas, éticas e preparadas para aprender ao longo da vida.',
  visao: 'Ser referência em Recife em ensino fundamental acolhedor e de qualidade.',
  valores: ['Respeito', 'Curiosidade', 'Inclusão', 'Responsabilidade', 'Parceria com as famílias'],
  historia: 'Fundado em 2009 por um grupo de professoras de Boa Viagem, o Colégio Tíria começou com duas turmas e uma biblioteca de 300 livros. Hoje atende mais de 400 alunos do 1º ao 9º ano, mantendo o que sempre nos definiu: turmas pequenas e um olhar atento a cada criança.',
}

export const estrutura = [
  ['Snowflake', 'Salas climatizadas', 'Turmas de até 25 alunos em salas amplas e arejadas.'],
  ['Monitor', 'Laboratório de informática', 'Computadores para pesquisa, programação e robótica.'],
  ['FlaskConical', 'Laboratório de ciências', 'Bancadas, microscópios e kits de experimentos.'],
  ['Library', 'Biblioteca', 'Mais de 5 mil títulos e cantinho de leitura.'],
  ['Trophy', 'Quadra poliesportiva', 'Coberta, para educação física e campeonatos internos.'],
  ['Utensils', 'Refeitório', 'Cardápio orientado por nutricionista.'],
  ['Stethoscope', 'Enfermaria', 'Primeiros socorros e acompanhamento de saúde.'],
  ['Accessibility', 'Sala de recursos', 'Atendimento educacional especializado para inclusão.'],
]

export const docentes = [
  ['Ana Beatriz Lins', 'Coordenadora pedagógica', 'Mestre em Educação (UFPE)'],
  ['Rodrigo Cavalcanti', 'Matemática – Fund. II', 'Licenciado em Matemática (UFPE)'],
  ['Juliana Pessoa', 'Alfabetização – 1º e 2º anos', 'Pedagoga, pós em Psicopedagogia'],
  ['Felipe Barros', 'Ciências – Fund. I e II', 'Biólogo, licenciado (UFRPE)'],
  ['Camila Souto', 'Língua Inglesa', 'Letras, certificação CELTA'],
  ['Marcos Vilela', 'Educação Física', 'Licenciado em Educação Física (UPE)'],
]

export const mensalidades = {
  segmentos: [
    { nome: 'Ensino Fundamental I', anos: '1º ao 5º ano', valor: 890, matricula: 890 },
    { nome: 'Ensino Fundamental II', anos: '6º ao 9º ano', valor: 1050, matricula: 1050 },
  ],
  inclusos: ['Material didático', 'Uniforme (2 camisetas e 1 bermuda/saia)', 'Seguro escolar'],
  descontos: [
    ['Pontualidade', '10% se pago até o dia 5'],
    ['Irmãos', '15% para o segundo filho e 20% a partir do terceiro'],
  ],
}

export const zapLink = `https://wa.me/${escola.whatsapp}?text=${encodeURIComponent(escola.whatsappMsg)}`
