import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: `http://localhost:4000/graphql`,
  documents: 'src/**/*.graphql.ts',
  generates: {
    'src/app/graphql/generated/index.tsx': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
    },
  },
}
export default config
