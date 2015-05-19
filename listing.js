var mediaSchema = require('./media');
var coordinateSchema = require('./coordinate');
module.exports = {
  _id: {type:'id'},
  agentID: {type:'string'},
  officeID: {type:'string'},
  listingID: {type:'string'},
  address: {type:'string'},
  unitNumber: {type:'string'},
  streetName: {type:'string'},
  streetNumber: {type:'string'},
  city: {type:'string'},
  state: {type:'string'},
  county: {type:'string'},
  country: {type:'string'},
  zipCode: {type:'string'},
  coordinates: {type:'array',subtype:'number'},
  listDate: {type:'date'},
  lastModified : {type:'date'},
  importDate:  {type:'date'},
  price: {type:'number'},
  yearBuilt: {type:'number'},
  acres: {type:'number'},
  squareFootage: {type:'number'},
  livingArea: {type:'number'},
  stories: {type:'number'},
  subdivision: {type:'string'},
  baths: {type:'number'},
  bedrooms: {type:'number'},
  fireplaces: {type:'number'},
  garageSpaces: {type:'number'},
  halfBaths: {type:'number'},
  pool: {type:'boolean'},
  mlsStatus: {type:'string'},
  type: {type:'string'},
  subtype: {type:'string'},
  publicRemarks: {type:'string'},
  media: {
    type:'array',
    subtype: mediaSchema
  },
  _office:{type:'id'},
  _member:{type:'id'},
  _coordinates: {
    subtype: coordinateSchema,
    type:'object'
  }
};
