import Realm from 'realm'

import ProjectSchema from '../schemas/ProjectSchema'
import AmbienceSchema from '../schemas/AmbienceSchema'
import DeviceSchema from '../schemas/DeviceSchema'

export default function getRealm() {
  return Realm.open({
    schema: [ProjectSchema, AmbienceSchema, DeviceSchema],
  })
}
