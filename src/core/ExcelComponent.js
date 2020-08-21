import { DOMListener } from '@core/DOMListener'

export class ExcelComponent extends DOMListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name
  }

  toHTML() {
    throw new Error(`Method not defined`)
  }

  init() {
    this.initDOMListener()
  }

  destroy() {
    this.removeDOMListener()
  }
}
