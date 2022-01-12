module.exports = {
  apps: [
    {
      name: 'Backend',
      script: 'npm',
      args: 'develop',
      ignore_watch : ["node_modules", "public/uploads"]
    },
  ],
};