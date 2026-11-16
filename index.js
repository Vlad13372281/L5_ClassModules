import { Surgeon } from "./Surgeon.js";

const surgeons = [
  new Surgeon("Пал Палыч", 12, true, 540),
  new Surgeon("Валера Солевой", 5, false, 130),
];

surgeons.forEach((s) => s.show());
