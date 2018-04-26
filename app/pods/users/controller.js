import Controller from '@ember/controller'

export default Controller.extend({
  name: null,

  actions: {
    setName (name) {
      this.set('name', name)
    },

    submit (event) {
      // Form submission refreshes the page by default (not good for SPAs)
      event.preventDefault()

      const name = this.get('name')
      this.set('name', null)

      const user = this.store.createRecord('user', {
        name
      })
      user.save()
    }
  }
})
