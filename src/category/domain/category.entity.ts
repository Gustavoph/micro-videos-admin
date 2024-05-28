import { Uuid } from "../../shared/domain/value-objects/uuid.vo"
import { CategoryValidator } from "./category.validator"

export type CategoryConstructorProps = {
  category_id: Uuid
  name: string
  description: string | null
  is_active: boolean
  created_at: Date
}

export type CategoryCreateCommand = {
  name: string
  description?: string | null
  is_active?: boolean
}

export class Category {
  category_id: Uuid
  name: string
  description: string | null
  is_active: boolean
  created_at: Date

  constructor(props: CategoryConstructorProps) {
    this.category_id = props.category_id
    this.name = props.name
    this.description = props.description
    this.is_active = props.is_active
    this.created_at = props.created_at
  }

  static create(props: CategoryCreateCommand): Category {
    const category = new Category({
      ...props,
      category_id: new Uuid(),
      description: props.description ?? null,
      is_active:props.is_active ?? true,
      created_at: new Date(),
    })

    this.validate(category)
    return category
  }
  
  static validate(entity: Category) {
   return CategoryValidator.safeParse(entity)
  }

  changeName(name: string) {
    this.name = name
  }

  changeDescription(description: string) {
    this.description = description
  }

  activate() {
    this.is_active = true
  }

  deactivate() {
    this.is_active = false
  }

  toJSON() {
    return {
      category_id: this.category_id.id,
      name: this.name,
      description: this.description,
      is_active: this.is_active,
      created_at: this.created_at,
    }
  }
}