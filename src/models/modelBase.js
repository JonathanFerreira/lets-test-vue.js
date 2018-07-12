class ModelBase {
  constructor () {
    this.id = null
  }

  assignAttributes (attributes) {
    var promises = []
    for (var key in attributes) {
      promises.push(
        new Promise(resolve => {
          this[key] = attributes[key]
          resolve(this[key])
        })
      )
    }
    return Promise.all(promises)
  }

  isPersisted () {
    return !!this.id
  }

  isNewResource () {
    return !this.isPersisted()
  }

  paramName () {
    return this.constructor.name.replace(/([A-Z])/g, '_$1').replace(/(^_|_$)/g, '').toLowerCase()
  }

  toParams () {
    let paramKey = this.paramName()
    var params = {}
    params[paramKey] = this
    return params
  }
}

export { ModelBase as default }
