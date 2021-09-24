module.exports = (api) => {
  api.cache(true);

  return {
    presets: [
      [
        // ES features necessary for running mocha test
        '@babel/preset-env',
        {
          targets: {
            node: 'current',
          },
        },
      ],
      [
        '@babel/preset-react',
        {
          useBuiltIns: true,
        },
      ],
    ].filter(Boolean),
  };
};
