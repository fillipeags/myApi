const { v4 } = require('uuid');

const contacts = [
  {
    id: v4(),
    name: 'Fillipe',
    email: 'fillipe@gmail.com',
    phone: '707070707',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }
}

module.exports = new ContactsRepository();
