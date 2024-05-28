import { Uuid } from "../../shared/domain/value-objects/uuid.vo"
import { Category } from "./category.entity"

describe('Category Entity', () => {
  describe('Create Category', () => {
    it('should create a category with default', () => {
      const category = Category.create({
        name: 'Movie',
      })
  
      expect(category.category_id).toBeInstanceOf(Uuid)
      expect(category.name).toBe('Movie')
      expect(category.description).toBeNull()
      expect(category.is_active).toBeTruthy()
      expect(category.created_at).toBeInstanceOf(Date)
    })
  
    it('should create a category witch static method', () => {
      const category = Category.create({
        name: 'Movie',
        description: 'A category description',
        is_active: false
      })
  
      expect(category.category_id).toBeInstanceOf(Uuid)
      expect(category.name).toBe('Movie')
      expect(category.description).toBe('A category description')
      expect(category.is_active).toBeFalsy()
      expect(category.created_at).toBeInstanceOf(Date)
    })
  
    it('should create a category witch all values', () => {
      const created_at = new Date()
      const category_id = new Uuid()
  
      const category = new Category({
        category_id,
        name: 'Movie',
        description: 'A category description',
        is_active: false,
        created_at: created_at
      })
  
      expect(category.category_id).toBe(category_id)
      expect(category.name).toBe('Movie')
      expect(category.description).toBe('A category description')
      expect(category.is_active).toBeFalsy()
      expect(category.created_at).toBe(created_at)
    })
  })

  describe('Category changes', () => {
    it('should change is_active when call deativate', () => {
      const category = Category.create({
        name: 'Movie'
      })

      expect(category.is_active).toBeTruthy()
      category.deactivate()
      expect(category.is_active).toBeFalsy()
    })

    it('should change is_active when call activate', () => {
      const category = Category.create({
        name: 'Movie',
        is_active: false
      })

      expect(category.is_active).toBeFalsy()
      category.activate()
      expect(category.is_active).toBeTruthy()
    })

    it('should change name', () => {
      const category = Category.create({
        name: 'Movie',
      })

      expect(category.name).toBe('Movie')
      category.changeName('Anime')
      expect(category.name).toBe('Anime')
    })

    it('should change description', () => {
      const category = Category.create({
        name: 'Movie',
        description: 'Category'
      })

      expect(category.description).toBe('Category')
      category.changeDescription('Category Movie')
      expect(category.description).toBe('Category Movie')
    })

    it('should return an category object', () => {
      const category = Category.create({
        name: 'Movie',
        description: 'Category Description',
        is_active: true
      })

      expect(category.toJSON()).toEqual({
        category_id: expect.any(String),
        name: 'Movie',
        description: 'Category Description',
        is_active: true,
        created_at: expect.any(Date)
      })
    })
  })

  describe('Category validations', () => {
    const category = Category.create({
      name: 'va'
    })
  })
})