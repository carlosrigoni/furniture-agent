import Realm from 'realm';

import ProjectSchema from '../Schemas/ProjectSchema'

export default function getRealm() {
  return Realm.open({
    schema: [ProjectSchema],
  })
}
