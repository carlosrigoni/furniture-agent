export default class ProjectSchema {
  static schema = {
    name: 'Project',
    primaryKey: 'id',
    properties: {
      id: { type: 'int', indexed: true },
      nameProject: 'string',
      nameClient: 'string',
      adress: 'string',
      // dataAtualizacao: 'date',
    },
  }
}
