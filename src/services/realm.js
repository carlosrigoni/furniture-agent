import Realm from 'realm'

import RepositorySchema from '../schemas/RepositorySchema'
import ProjectSchema from '../schemas/ProjectSchema'
import AmbienceSchema from '../schemas/AmbienceSchema'

export default function getRealm() {
  return Realm.open({
    schema: [RepositorySchema, ProjectSchema, AmbienceSchema],
  })
}
