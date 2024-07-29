const mongoose = require('mongoose');

const club_schema = new mongoose.Schema({
	//club information
	club_name: String,
	core_member: [String], //core member list
	teacher: [String], //teacher list
	manager: [String], //manager list
	student: [String], //student list
	dc: [String], //dc list
	web_site: String, //club website
	
	project: [{
		project_name: String,
		leader: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
		member: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
		teacher: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
		dc: [String],
		qualification: Boolean,
		qualification_expiration: Date,
		start_date: Date,
	}],

}); 

const Club = mongoose.model('Club', club_schema);

module.exports = Club;