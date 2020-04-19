import Realm from 'realm'

import ProjectSchema from '../Schemas/ProjectSchema'
import AmbienceSchema from '../Schemas/AmbienceSchema'
import DeviceSchema from '../Schemas/DeviceSchema'

export default function getRealm() {
  return Realm.open({
    schema: [ProjectSchema, AmbienceSchema, DeviceSchema],
  })
}
