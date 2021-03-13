const UserDto = ({ _id, name, email, phoneNumber }) => ({
    id: _id,
    name,
    email,
    phone: phoneNumber,
  });
  
  module.exports = {UserDto};