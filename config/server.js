module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'http://nxx1ljtyfiq4ax0m3262.cleaver.rocks/api',
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '8c1620de6ce99ac1afbfffe73e96807b'),
    },
  },
});
