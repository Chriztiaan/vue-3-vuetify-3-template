import { createPinia } from "pinia";

export const piniaPlugin = createPinia();

// export function ensureStoreHMR(store: StoreDefinition<any>): void {
//     if (import.meta.hot) {
//         import.meta.hot.accept(acceptHMRUpdate(store, import.meta.hot))
//     }
// }