import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import { GlobalState } from '../../interfaces'

const globalState: GlobalState = {
    token: "",
    userInfo: "",
    assemblySize: "middle",
    language: "",
    themeConfig: {
        // 默认 primary 主题颜色
        primary: "#1890ff",
        // 深色模式
        isDark: false,
        // 色弱模式(weak) || 灰色模式(gray)
        weakOrGray: "",
        // 面包屑导航
        breadcrumb: true,
        // 标签页
        tabs: true,
        // 页脚
        footer: true
    }
}

type Actions = {
    updateToken: (token: string) => void,
    // deleteToken: (token: string) => void
}


const useGlobalState = create<GlobalState & Actions>()(
    immer((set) => ({
        ...globalState,
        updateToken: (token: string) => set((state) => state.token = token)
    })),
)


// function curry(fn) {
//     return function curried(...args) {
//         if (args.length >= fn.length) {
//             return fn(...args);
//         } else {
//             return function (...moreArgs) {
//                 return curried(...args, ...moreArgs);
//             };
//         }
//     };
// }


export default useGlobalState

