function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.type = "Car"
}

const civic = new Car("Civic", "Honda", "2021")
const accord = new Car("Accord", "Honda", "2021")
const passport = new Car("Passport", "Honda", "2021")
const pilot = new Car("Pilot", "Honda", "2021")
const crv = new Car("CR-V", "Honda", "2021")
const clarity = new Car("Clarity", "Honda", "2021")
const ridgeline = new Car("Ridgeline", "Honda", "2021")
const insight = new Car("Insight", "Honda", "2021")
const odyssey = new Car("Odyssey", "Honda", "2021")
const hrv = new Car("HR-V", "Honda", "2021")


const garage = [civic, accord, passport, pilot, crv, clarity, ridgeline, insight, odyssey, hrv]
console.log(garage);