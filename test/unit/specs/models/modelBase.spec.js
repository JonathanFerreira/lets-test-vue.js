import ModelBase from '@/models/modelBase'

describe('ModelBase', () => {
  describe('.constructor', () => {
    it('initialize a object with id null', () => {
      const model = new ModelBase()
      expect(model.id).to.eq(null)
    })
  })
  describe('#isPersisted', () => {
    const model = new ModelBase()

    it('returns true when id is present', () => {
      model.id = 1
      expect(model.isPersisted()).to.eq(true)
    })

    it('return false when id is null', () => {
      model.id = null
      expect(model.isPersisted()).to.eq(false)
    })
  })

  describe('#isNewResource', () => {
    const model = new ModelBase()

    it('returns true when id is null', () => {
      model.id = null
      expect(model.isNewResource()).to.eq(true)
    })

    it('return false when id is present', () => {
      model.id = 1
      expect(model.isNewResource()).to.eq(false)
    })
  })

  describe('#paramName', () => {
    const model = new ModelBase()

    it('returns class_name underscored', () => {
      expect(model.paramName()).to.eq('model_base')
    })
  })

  describe('#toParams', () => {
    const model = new ModelBase()

    it('returns a hash with class name as key and attributes', () => {
      expect(model.toParams()).to.have.property('model_base')
    })
  })

  describe('#assignAttributes', () => {
    const attributes = {
      id: 10,
      name: 'Testing'
    }
    const model = new ModelBase()
    model.assignAttributes(attributes)

    it('assigns attributes based on params', () => {
      expect(model.id).to.eq(10)
      expect(model.name).to.eq('Testing')
    })
  })
})
