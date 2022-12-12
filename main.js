/*
    Produce a car chassis (no input, outputs new chassis object)
    Add 4 wheels to chassis (input is a chassis, output is chassis with wheels)
    Add an engine to chassis (input is a chassis, output is chassis with an engine)
    Add a steering wheel to chassis (input is a chassis, output is chassis with a steering wheel)
    Add a body to chassis (input is a chassis, output is chassis with a body)
    Add a drive train to chassis (input is a chassis, output is chassis with a drive train)
*/



// No parameters defined because function needs nothing to do its job
const createChassis = () => {
	// Create a new object. No properties yet.
	const chassisObject = {	}

	return chassisObject
}


/*
    Add 4 wheels to chassis (input is a chassis, output is chassis with wheels)
*/

const addWheels = (chassisObject) => {
	// Use dot notation to add a new property
	chassisObject.wheels = 4

	// Return the chassis that it now has a wheels property on it
	return chassisObject
}



/*
    Add an engine to chassis (input is a chassis, output is chassis with an engine)
*/

const addEngine = (chassisObject) => {
	// Use dot notation to add a new property
	chassisObject.engine = "4.8L"

	// Return the chassis that it now has an engine property on it
	return chassisObject
}



/*
    Add a steering wheel to chassis (input is a chassis, output is chassis with a steering wheel)
*/

const addSteeringWheel = (chassisObject) => {
	// Use dot notation to add a new property
	chassisObject.steeringWheel = "Tilting"

	// Return the chassis now that it has a steering wheel property on it
	return chassisObject
}



/*
    Add a drive train to chassis (input is a chassis, output is chassis with a drive train)
*/

const addDriveTrain = (chassisObject) => {
	// Use dot notation to add a new property
	chassisObject.driveTrain = "Two wheel drive"

	// Return the chassis now that it has a drive train property on it
	return chassisObject
}



//  Add a body to chassis (input is a chassis, output is chassis with a body)

const addBody = (chassisObject) => {
	// Use dot notation to add a new property
	chassisObject.body = "Fever"

	// Return the chassis now that it has a body property on it
	return chassisObject
}



let chassis = createChassis()
console.log(chassis)

let chassisWithWheels = addWheels(chassis)
console.log(chassisWithWheels)

let chassisWithEngine = addEngine(chassisWithWheels)
console.log(chassisWithEngine)

let chassisWithSteeringWheel = addSteeringWheel(chassisWithEngine)
console.log(chassisWithSteeringWheel)

let chassisWithDriveTrain = addDriveTrain(chassisWithSteeringWheel)
console.log(chassisWithDriveTrain)

let chassisWithBody = addBody(chassisWithDriveTrain)
console.log(chassisWithBody)