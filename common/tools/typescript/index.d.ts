/// <reference types="@types/node" />
/// <reference types="vite/client.d.ts" />
/// <reference types="vue/macros-global" />

declare module '*.gql' {
  const src: any;
  export default src;
}

declare module '*.svg?raw' {
  const src: string;
  export default src;
}
