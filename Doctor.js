export class Doctor {
  #name;        
  #experience;  
  #isOnDuty;   
  #deleted = false;

  constructor(name, experience, isOnDuty) {
    this.#name = name;
    this.#experience = experience;
    this.#isOnDuty = isOnDuty;
  }

  #check() {
    if (this.#deleted) throw new Error("Экземпляр удалён");
  }

  get name() { this.#check(); return this.#name; }
  set name(value) { this.#check(); this.#name = value; }

  get experience() { this.#check(); return this.#experience; }
  set experience(value) { this.#check(); this.#experience = value; }

  get isOnDuty() { this.#check(); return this.#isOnDuty; }
  set isOnDuty(value) { this.#check(); this.#isOnDuty = value; }

  #putOnDuty() {
    this.#isOnDuty = true;
  }

  show() {
    this.#check();
    console.log(this.#name, this.#experience, this.#isOnDuty);
  }

  delete() {
    this.#check();
    this.#deleted = true;
  }

  copy() {
    this.#check();
    return this;
  }

  static clone(doctor) {
    return new Doctor(doctor.name, doctor.experience, doctor.isOnDuty);
  }
}
