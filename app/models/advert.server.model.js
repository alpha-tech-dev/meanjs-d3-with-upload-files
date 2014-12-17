'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Advert Schema
 */
var AdvertSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Se il vous plaît remplissez le nom de l\'annonce',
		trim: true
	},
	surfaceH: {
		type: Number,
		default: '',
		required: 'Se il vous plaît remplissez surface habitable',
		trim: true
	},
	surfaceT: {
		type: Number,
		default: '',
		required: 'Se il vous plaît remplissez surface du terrain',
		trim: true
	},
	prix: {
		type: Number,
		default: '',
		required: 'Se il vous plaît remplissez le prix',
		trim: true
	},
	typebien: {
		type: String,
		default: '',
		required: 'Se il vous plaît remplissez le type de bien',
		trim: true
	},
	nbpiece: {
		type: String,
		default: '',
		required: 'Se il vous plaît remplissez le nombre de piéce',
		trim: true
	},
	exampleInputEmail1: {
		type: String,
		default: '',
		required: 'Se il vous plaît remplissez l\'email',
		trim: true
	},
	energie: {
		type: String,
		default: '',
		required: 'Se il vous plaît remplissez l\'energie',
		trim: true
	},
	textA: {
		type: String,
		default: '',
		required: 'Se il vous plaît remplissez le texte de l\'annonce',
		trim: true
	},
	emailC: {
		type: String,
		default: '',
		trim: true
	},
	telephone: {
		type: String,
		default: '',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	immoBat: {
		type: String,
		required: 'Se il vous plaît selectionner une parcelle de la carte en dessous',
		unique: true
	},
	image: {
		type: [String],
		default: [],
		required: 'Se il vous plaît ajouter des images'
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Advert', AdvertSchema);
