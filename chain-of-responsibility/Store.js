const Storage = require("./Storage");
/**
 * It is representating a actual store, where a request would come and goes through the chain of objects available in the store.
 * Here the objects referred are the sections available in a store.
 * The request for a item will pass through the the sections to find its availability.
 */
class Store {
  constructor(name, inventory = {}) {
    this.name = name;
    const floor = new Storage("FIRST FLOOR", inventory.floor);
    const backroom = new Storage("BACKROOM", inventory.backroom);
    const localStore = new Storage("LOCAL STORE", inventory.localStore);
    const warehouse = new Storage("WAREHOUSE", inventory.warehouse);

    floor.setNext(backroom);
    backroom.setNext(localStore);
    localStore.setNext(warehouse);

    this.storage = floor;
  }
  /**
   *
   * @param {*} itemName Item to be searched in the store.
   */
  find(itemName) {
    return this.storage.find(itemName);
  }
}

module.exports = Store;
