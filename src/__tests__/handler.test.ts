import { performance } from 'perf_hooks'
import { handler } from '../handler'
import * as queries from '../fake-query'

describe('handler', () => {
  afterEach(() => {
    jest.clearAllMocks()
    jest.resetAllMocks()
    jest.restoreAllMocks()
  })

  describe('with mocking', () => {
    it('runs query in parallels', async () => {
      const mock = jest.spyOn(queries, 'fakeQuery')
  
      mock.mockImplementation(async () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve()
          }, 1000)
        })
      })
  
      const start = performance.now()
  
      await handler()
  
      const end = performance.now()
  
      expect(end - start).toBeGreaterThan(1000)
      expect(end - start).toBeLessThan(1500)
    })
  })

  describe('without mocking', () => {
    it('runs query in parallels', async () => {
      const start = performance.now()
  
      await handler()
  
      const end = performance.now()
  
      expect(end - start).toBeGreaterThan(4000)
      expect(end - start).toBeLessThan(4500)
    })
  })
})
