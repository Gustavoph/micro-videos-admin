import { randomUUID } from 'node:crypto'
import { z } from 'zod'
import { ValueObject } from "../value-object";

export class Uuid extends ValueObject {
  readonly id: string

  constructor(id?: string) {
    super()

    this.id = id ?? randomUUID()
    this.validate()
  }

  private validate() {
    const isValid = z.string().uuid().safeParse(this.id)
    if (isValid.error) {
      throw new InvalidUuidError()
    }
  }
}
 
export class InvalidUuidError extends Error {
  constructor(message?: string) {
    super(message || 'ID must be a valid Uuid')
    this.name = 'InvalidUuidError'
  }
}