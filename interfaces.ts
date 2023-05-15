interface Reportable {
  summary(): string;
}
interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const drink2 = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `sugar: ${this.sugar}`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary);
};

printSummary(oldCivic);
