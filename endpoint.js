app.get('/users', (req, res) => {
  // Static data of users
  const users = [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }];
  res.json(users);
});