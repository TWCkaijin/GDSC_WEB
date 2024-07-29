const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name: {type: String , required: true},
	email: {type: String , required: true},
	googleId: {type: String , required: true},
	stu_id: {type: String , default: "X000000000"},
	dc_id: {type: String ,default:"X000000000"},
	picture: {type: String}, //user profile picture 


	//course group status
	course:{ 

		//basic course group status
		member_type: {type: String , default:"spectator"}, //member type: student, dc, teacher, manager
		attendence: {type: Number, default:0},


		//qualification status
		qualification: {type: Boolean, default: false}, //qualification status
		qualification_expiration: {type: Date, default: null}, //qualification expiration date
		

		//payment status
		payment: {type: Boolean , default:false},
		pay_date: {type: Date , default: null},
	},

	//project group status
	project: { 
		supreme_member_register_status: {type: Boolean, default: null}, //project group register for more project

		//basic project group status
		member_type: {type: String , default:null}, //member type: student, leader, teacher
		joined_group: {type:[String] , default: null}, //joined group name
		attendence: {type: Number, default: null},
		


		//qualification status
		qualification: {type: Boolean, default:null},  //qualification status
		qualification_expiration: {type: Date, default:null}, //qualification expiration date

		//payment status
		payment: {type: Boolean, default:null},
		pay_date: {type: Date, default:null},
	},
	last_login: {type: Date, default: Date.now},
});

const User = mongoose.model('User', userSchema);

module.exports = User;