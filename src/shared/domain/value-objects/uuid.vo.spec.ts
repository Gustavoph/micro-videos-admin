import { randomUUID } from "crypto"
import { InvalidUuidError, Uuid } from "./uuid.vo"

describe('Uuid', () => {
  const validateSpy = jest.spyOn(Uuid.prototype as any , 'validate')

  it('should throw an error when uuid is invalid', () => {
    expect(() => {
      new Uuid('invalid-uuid')
    }).toThrow(new InvalidUuidError())
    expect(validateSpy).toHaveBeenCalledTimes(1)
  })

  it('should return an Uuid with no data provided', () => {
    const uuid = new Uuid()

    expect(uuid).toBeInstanceOf(Uuid)
    expect(uuid.id).toBeDefined()
    expect(validateSpy).toHaveBeenCalledTimes(1)
  })

  it('should return an Uuid with no valid data provided', () => {
    const value = randomUUID()
    const uuid = new Uuid(value)

    expect(uuid).toBeInstanceOf(Uuid)
    expect(uuid.id).toBe(value)
    expect(validateSpy).toHaveBeenCalledTimes(1)
  })
})