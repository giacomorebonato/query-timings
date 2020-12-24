import { fakeQuery } from './fake-query'

export const handler = async () => {
  await Promise.all([
    fakeQuery(3000),
    fakeQuery(3000),
    fakeQuery(4000),
    fakeQuery(4000),
    fakeQuery(4000),
  ])
}
