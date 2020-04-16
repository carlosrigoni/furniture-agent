export default class ProjectSchema {
  static schema = {
    name: 'Projeto',
    primaryKey: 'id',
    properties: {
      id: { type: 'int', indexed: true },
      nomeProjeto: 'string',
      nomeCliente: 'string',
      endereco: 'string',
    }

  }
}
