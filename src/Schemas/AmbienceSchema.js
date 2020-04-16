export default class AmbienceSchema {
  static schema = {
    name: 'Ambiente',
    primaryKey: 'id',
    properties: {
      id: { type: 'int', indexed: true },
      projetoId: 'int',
      nome: 'string',
    }

  }
}
