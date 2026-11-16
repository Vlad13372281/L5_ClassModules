import { Doctor } from "./Doctor.js";

export class Surgeon extends Doctor {
  #operationsCount; // number
  #deleted = false;

  constructor(name, experience, isOnDuty, operationsCount) {
    super(name, experience, isOnDuty);
    this.#operationsCount = operationsCount;
  }

  get operationsCount() {
    if (this.#deleted) throw new Error("Экземпляр удалён");
    return this.#operationsCount;
  }
  set operationsCount(value) {
    if (this.#deleted) throw new Error("Экземпляр удалён");
    this.#operationsCount = value;
  }

  show() {
    console.log(this.name, this.experience, this.isOnDuty, this.operationsCount);
  }

  delete() {
    super.delete();
    this.#deleted = true;
  }

  static clone(surgeon) {
    return new Surgeon(surgeon.name, surgeon.experience, surgeon.isOnDuty, surgeon.operationsCount);
  }
}
