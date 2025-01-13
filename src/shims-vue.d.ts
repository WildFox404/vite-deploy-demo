// filepath: /Users/zhuanz/vite-deploy-demo/src/shims-vue.d.ts
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// filepath: /Users/zhuanz/vite-deploy-demo/src/shims-router.d.ts
declare module './router' {
  const router: any;
  export default router;
}