export default class AmbienceSchema {
  static schema = {
    name: 'Ambience',
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
