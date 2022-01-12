module.exports = ({ env }) => {
  const port = env('PORT', '1337');
  const host = env('HOST', '0.0.0.0');
  const url = env('URL', `http://localhost${port !== '80' ? ':'+port : ''}`);
  const adminAuthSecret = env('ADMIN_JWT_SECRET', '8c1620de6ce99ac1afbfffe73e96807b');
  
  return {
    host, port, url,
    cron: { enabled: true },
    cors: { enabled: true, origin: ['*'] },
    admin: {
      auth: { secret: adminAuthSecret },
    }
  }
};