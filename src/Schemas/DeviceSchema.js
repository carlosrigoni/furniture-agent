export default class DeviceSchema {
  static schema = {
    name: 'Device',
    primaryKey: 'id',
    properties: {
      id: { type: 'int', indexed: true },
      ambienceId: 'int',
      nome: 'string',
      especificacao: 'string',
    }
  }
}
