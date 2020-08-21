import { capitalize } from '@core/utils'

export class DOMListener {
  constructor(root, listeners = []) {
    this.$root = root
    this.listeners = listeners

    if (!root) {
      throw new Error('No $el provided for DOMListener')
    }
  }

  initDOMListener() {
    this.listeners.forEach(el => {
      const method = getMethodName(el)
      if (!this[method]) {
        throw new Error(
            `Method ${method} is not implemented in ${this.name || ''}`)
      }
      this[method] = this[method].bind(this)
      this.$root.on(el, this[method])
    })
  }

  removeDOMListener() {
    this.listeners.forEach(el => {
      const method = getMethodName(el)
      this.$root.off(el, this[method])
    })
  }
}

function getMethodName(eventName) {
  return `on${capitalize(eventName)}`
}
