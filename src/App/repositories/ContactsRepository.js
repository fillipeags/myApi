const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Fillipe',
    email: 'fillipe@gmail.com',
    phone: '707070707',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Julia',
    email: 'julia@gmail.com',
    phone: '45445454',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }

  findById(id) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id),
    ));
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id != id);
      resolve();
    });
  }
}

module.exports = new ContactsRepository();
