module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'https://springscommunityempowermentfoundation.org/api',
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '8c1620de6ce99ac1afbfffe73e96807b'),
    },
  },
});
