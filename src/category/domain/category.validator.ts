import { z } from "zod"
import { Uuid } from "../../shared/domain/value-objects/uuid.vo"

export const CategoryValidator = z.object({
  category_id: z.instanceof(Uuid),
  name: z.string().min(3).max(255),
  description: z.string().nullable(),
  is_active: z.boolean(),
  created_at: z.date(),
})
