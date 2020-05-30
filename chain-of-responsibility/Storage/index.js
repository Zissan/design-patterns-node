class Storage {
  constructor(name, items = [], deliveryTime = 0) {
    this.name = name;
    this.items = items;
    this.time = deliveryTime;
    this.next = null;
  }

  find(itemName) {
    const item = this.items.find((item) => {
      return item.name === itemName;
    });
    if (item)
      return {
        ...item,
        storageName: this.name,
        deliveryTime: this.time
          ? `WILL BE DELIVERED AFTER ${this.time}`
          : "NOW",
        error: "",
      };
    if (this.next) return this.next.find(itemName);

    return { error: "NO MATCH FOUND" };
  }

  setNext(storage) {
    this.next = storage;
  }
}

module.exports = Storage;
