import { ValueObject } from "./value-object";

class StringValueObject extends ValueObject {
  constructor(readonly value: string) {
    super()
  }
}

describe('Value Object', () => {
  it ('should be equals', () => {
    const vo1 = new StringValueObject('test')
    const vo2 = new StringValueObject('test')

    expect(vo1.equals(vo2)).toBeTruthy()
  })

  it ('should not be equals', () => {
    const vo1 = new StringValueObject('test1')
    const vo2 = new StringValueObject('test2')

    expect(vo1.equals(vo2)).toBeFalsy()
  })
})