const db = require('../utils/db');

module.exports = {
    all() {
        return db('users');
      },
    
      async single(id) {
        const users = await db('users').where('id', id);
        if (users.length === 0) {
          return null;
        }
    
        return users[0];
      },
    
      async singleByUserName(username) {
        const users = await db('users').where('username', username);
        if (users.length === 0) {
          return null;
        }
    
        return users[0];
      },
    
      add(user) {
        return db('users').insert(user);
      },

      patchRFToken(id, rfToken){
          return db('users').where('id',id).update('rfToken',rfToken);
      },

      async isValidRFToken(id, rfToken){
          const list = await db('users').where('id', id).andWhere('rfToken',rfToken);
          if(list.length >  0){
              return true;
          }
          return false;
      }
}