declare namespace NodeJS {
  export interface ProcessEnv {
    /* 编译器环境变量 */
    NODE_ENV: 'production' | 'development'
  }
}

declare const process: {
  env: NodeJS.ProcessEnv
}
