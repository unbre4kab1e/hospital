module.exports = {
      attributes: {
          name: {
             type: 'string',
             unique: true,
             required: true
          },
          access_level: 'integer',
      }
};