module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f2d1e4773ed84e8d43026670b7fce172'),
  },
});
