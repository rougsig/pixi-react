import {UserConfig} from 'vite'
import {createRequire} from 'node:module'
import {resolve} from 'path'
import tsconfigPaths from 'vite-tsconfig-paths'
import dts from 'vite-plugin-dts'
import {merge} from 'ts-deepmerge'

export const createConfig = (dirname: string, overrideConfig: UserConfig = {}) => {
  const require = createRequire(import.meta.url)
  const pkg = require(resolve(dirname, 'package.json'))

  const defaultConfig: UserConfig = {
    build: {
      outDir: 'dist',
      minify: false,
      sourcemap: true,
      target: 'es2022',
      lib: {
        formats: ['es'],
        entry: resolve(dirname, 'src/index'),
        fileName: (_format, entryName) => `${entryName}.js`,
      },
      rollupOptions: {
        output: {
          preserveModules: true,
          preserveModulesRoot: `${dirname}/src`,
        },
        external: [
          '.*__generated__.*',
          ...Object.keys(pkg.dependencies || {}),
          ...Object.keys(pkg.peerDependencies || {}),
        ].map(dep => new RegExp(`^${dep}`)),
      },
    },
    test: {
      include: [resolve(dirname, 'test', '**', '*.test.ts?(x)')],
    },
    plugins: [
      tsconfigPaths(),
      dts({
        exclude: [resolve(dirname, 'test', '**')],
        entryRoot: resolve(dirname, 'src'),
      }),
    ],
  }

  return merge(defaultConfig, overrideConfig) as UserConfig
}
