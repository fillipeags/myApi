# myApi

## Basic API for CRUD Practicing

### How to Run:

```bash
// INSTALL DEPENDENCIES
yarn 

// RUN SERVER
yarn start 
```

## Basic Routes:

### Get All Contacts:

> /contacts

```jsx
async index(request, response) {
    const contacts = await ContactsRepository.findAll();

    response.json(contacts);
}
```

### Get Contact By Id:

> /contacts/:id

```jsx
async show(request, response) {
    const { id } = request.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'User not found' });
    }

    response.json(contact);
}
```

### Delete:

> /contacts/:id

```jsx
async delete(request, response) {
    const { id } = request.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'User not found' });
    }
    await ContactsRepository.delete(id);

    // 204 - No Content
    response.sendStatus(204);
  }
}
```

### Post:

> /contacts

```jsx
async store(request, response) {
    const {
      name, email, phone, category_id,
    } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const contactExists = await ContactsRepository.findByEmail(email);

    if (contactExists) {
      return response.status(400).json({ error: 'This email has already been taken' });
    }

    const contact = await ContactsRepository.create({
      name, email, phone, category_id,
    });
    response.json(contact);
}
```

### Put:

> /contacts/:id

```jsx
async update(request, response) {
    const { id } = request.params;
    const {
      name, email, phone, category_id,
    } = request.body;

    const contactExists = await ContactsRepository.findById(id);

    if (!contactExists) {
      return response.status(404).json({ error: 'User not found' });
    }

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const contactByEmail = await ContactsRepository.findByEmail(email);

    if (contactByEmail && contactByEmail.id !== id) {
      return response.status(400).json({ error: 'This email has already been taken' });
    }

    const contact = await ContactsRepository.update(id, {
      name, email, phone, category_id,
    });

    response.json(contact);
}
```