/**
 * test to check deep trees render ok
 *
 * @module farm
 */
module.exports = farm

/**
 * the farm
 * @alias module:farm
 */
class Farm {
 /**
  * the constructor
  */
  constructor () {
    /**
     * farm equipment
     * @type module:farm~Equipment
     */
    this.equipment = new Equipment()
  }
}

/**
* Equipment class
*/
class Equipment {
 constructor () {
   /**
    * the tractor
    * @type module:farm~Tractor
    */
   this.tractor = new Tractor()
 }
}

/**
* Tractor class
*/
class Tractor {
  constructor () {
    /**
     * engine details
     */
    this.engine = {
      /**
       * who built
       */
      manufacturer: 'one',
      /**
       * the size
       */
      size: 2
    }
  }

  static something () {}
}
