const winston = require( '../../../config/logger' )

const Project = require( '../../../models/Project' )
const DataStream = require( '../../../models/DataStream' )
const PermissionCheck = require( '../middleware/PermissionCheck' )

module.exports = async ( req, res ) => {
  if ( !req.params.projectId || !req.params.userId )
    return res.status( 400 ).send( { success: false, message: 'No projectId or userId provided.' } )

  try {
    let project = await PermissionCheck( req.user, 'write', await Project.findOne( { _id: req.params.projectId } ) )

    await Promise.all( [
      DataStream.updateMany( { streamId: { $in: project.streams } }, { $addToSet: { canWrite: req.params.userId } } ),
      // push into permissions.canWrite
      Project.updateOne( { _id: req.params.projectId }, { $addToSet: { 'permissions.canWrite': req.params.userId } } )
    ] )

    return res.send( { success: true, project: project } )
  } catch ( err ) {
    winston.error( JSON.stringify( err ) )
    res.status( err.message.indexOf( 'authorised' ) >= 0 ? 401 : 404 ).send( { success: false, message: err.message } )
  }
}