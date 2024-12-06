import { defineConfig } from 'wxt';

export default defineConfig({
  entry: {
    content: './src/content/content.tsx', // Adjusted for TypeScript if content is written in TSX
    popup: './src/index.tsx',            // Entry for the React popup
  },
});
