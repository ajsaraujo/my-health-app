module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: '.',
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          alias: {
            '@shared': './src/shared',
            '@modules': './src/modules',
            // Para adicionar novos path mappings, lembre-se
            // também de alterar o tsconfig.json para que o editor
            // de texto reconheça os mapeamentos
          },
        },
      ],
    ],
  }
}
