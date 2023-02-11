/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WEATHER: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module '*.svg' {
  import React = require('react')

  export const ReactComponent: React.FC<React.HTMLAttributes<HTMLOrSVGElement>>
  const src: string
  export default src
}
