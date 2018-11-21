var mongoose = require( 'mongoose' )

var projectSchema = mongoose.Schema( {
  // ownership & permissions
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  private: { type: Boolean, default: false },
  canRead: [ { type: mongoose.Schema.Types.ObjectId, ref: 'User' } ],
  canWrite: [ { type: mongoose.Schema.Types.ObjectId, ref: 'User' } ],
  anonymousComments: { type: Boolean, default: false },

  // comments
  comments: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Comment' } ],

  // project name
  name: { type: String, default: 'A Simple Speckle Project' },
  description: { type: String, default: 'This is a project.' },

  //  streams in  this project
  streams: [ { type: String } ],

  teamMembers: [ { type: mongoose.Schema.Types.ObjectId, ref: 'User' } ],

  //  users in  this project
  permissions: {
    canRead: [ { type: mongoose.Schema.Types.ObjectId, ref: 'User' } ],
    canWrite: [ { type: mongoose.Schema.Types.ObjectId, ref: 'User' } ]
  }

  // strict false so peeps can expand the schema if they wanna add shit 💩
}, { timestamps: true, strict: false } )

module.exports = mongoose.model( 'Project', projectSchema )
