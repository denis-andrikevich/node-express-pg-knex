const dbConfig = {
  'development': {
    'username': 'root',
    'password': 'root',
    'database': 'blog',
    'host': '127.0.0.1',
    'dialect': 'mysql'
  },
  'test': {
    'username': '',
    'password': null,
    'database': '',
    'host': '',
    'dialect': 'mysql'
  },
  'production': {
    'username': '',
    'password': null,
    'database': '',
    'host': '127.0.0.1',
    'dialect': 'mysql'
  }
};

export default dbConfig;