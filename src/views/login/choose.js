class Person {
  active
  constructor(obj) {
    Object.assign(this, obj)
  }
  get activeToBoolean() {
    return this.active === 1
  }

  set activeToBoolean(val) {
    this.active = val ? 1 : 0
    console.log('------->', val)
  }
}

console.log('class===>', Person)

export default Person
