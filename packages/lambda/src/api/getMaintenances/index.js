import { Maintenances } from 'model/maintenances'

export async function handle (event, context, callback) {
  try {
    const maintenances = await new Maintenances().all()
    callback(null, JSON.stringify(maintenances.map(maintenance => maintenance.objectify())))
  } catch (error) {
    console.log(error.message)
    console.log(error.stack)
    callback('Error: failed to get maintenances list')
  }
}
