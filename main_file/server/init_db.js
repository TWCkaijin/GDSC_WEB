const User = require('./models/user');
const Club = require('./models/club');

async function initDatabase() {
  const users = [
    {
      name: "Admin_account",
      email: 'nsysu.gdsc@gmail.com',
      googleId: '000000000000000000000',
    }
  ];

  try {
    const userCount = await User.countDocuments();
    if (userCount > 0) {
      console.log('Database is already initialized.');
      return;
    }
    await User.insertMany(users);
    console.log('Initial users have been added to the database');
  } catch (err) {
    console.error('Error initializing database:', err);
  }
}

module.exports = initDatabase;
