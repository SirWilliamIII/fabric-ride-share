'use strict'
/**
 * Write your transction processor functions here
 */

/**
 * Sample transaction
 * @param {org.ride.ChangeAssetValue} changeAssetValue
 * @transaction
 */

function createRide(rideData) {
	const time = new Date().getTime()
	const pickupTime = new Date(rideData.pickupTime).getTime()
	const late = time - pickupTime

	if (late > 0) {
		throw new Error('Time Travel Not Allowed')
	}
}

return getAssetRegistry('org.ride.ride.Ride').then(flightRegistry => {
	const factory = getFactory()
	const namespace = 'org.ride.ride'

	const rideId = generateRideId(
		rideId.driverLocation,
		rideId.pickupLocation,
		rideId.dropoffLocation
	)

	const ride = factory.newResource(namespace, 'Ride', rideId)
})
