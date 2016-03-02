'use strict'

module.exports = function (SuperClass) {
  return class CustomLinks extends SuperClass {
    anchor () {
      if (this.data.inherited) {
        return 'the anchor of the super class'
      }
      return [
        this.data.isExported ? 'exp_' : '',
        this.data.isConstructor() ? 'new_' : '',
        this.data.id
          .replace(/:/g, '_')
          .replace(/~/g, '..')
          .replace(/\(\)/g, '_new')
          .replace(/#/g, '+')
      ].join('')
    }

    /**
     * An anchor member-index items can link to
     * @example
     * <a name="#ExampleClass"></a>
     */
    anchorTag () {
      const anchor = this.anchor()
      if (anchor) return `<a name="${anchor}"></a>\n`
    }

    preHeading () {
      return [
        this.anchorTag(),
        super.preHeading()
      ].join('')
    }

    indexItem () {
      return this.getSignature({ skipParentName: true, link: true })
    }
  }
}
