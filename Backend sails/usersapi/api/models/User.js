module.exports = {

      attributes: {
          first_name: 'string',
          last_name: 'string',
          email: 'string',
          username: 'string',
          password: 'string',
		  groups: {
              collection: 'group'
          }
      }
    };
    sails.config.models.migrate='drop';