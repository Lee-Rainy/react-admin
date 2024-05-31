// import { create } from "zustand";
// import createContext from "zustand/context";
// import { immer } from 'zustand/middleware/immer'
// import { persist, createJSONStorage, PersistOptions } from 'zustand/middleware'
// type State = {
//     data: number | undefined
// }

// type Actions = {
//     increment: (qty: number) => void | undefined
//     decrement: (qty: number) => void | undefined
// }

// interface StoreState {
//     data: number | undefined,
//     increment: (qty: number) => void | undefined,
//     decrement: (qty: number) => void | undefined,
// }

// type MyPersist = (
//     config: (set: any, get: any, api: any) => StoreState,
//     options: PersistOptions<StoreState>
// ) => (set: any, get: any, api: any) => StoreState;

// const persistCfg = {
//     name: 'app name',
//     storage: createJSONStorage(() => sessionStorage)
// }


// // const store = create<State & Actions>()(
// //     immer((set, get) => ({
// //         data: 1,
// //         increment: (qty = 1) => {
// //             set((state) => {
// //                 state.data += qty
// //             })
// //         },
// //         decrement: (qty = 1) => {
// //             set((state) => {
// //                 state.data -= qty
// //             })
// //         }
// //     }))
// // )

// // const store = create<State & Actions>((set) => ({
// //     data: 1,
// //     increment: (qty = 1) => set((state) => ({ data: state.data + qty })),
// //     decrement: (qty = 1) => set((state) => ({ data: state.data - qty }))
// // }))

// // const Model = (set: any, get: any):<State & Actions> => ({
// //     data: 1,
// //     increment: (qty = 1) => set((state: State) => ({ data: state.data + qty })),
// //     decrement: (qty = 1) => set((state: State) => ({ data: state.data - qty }))
// // })

// const usePersistStore = create<StoreState>(
//     (persist as MyPersist)(
//         (set, get) => ({
//             data: 1,
//             increment: (qty = 1) => set((data: any) => {
//                 console.log(data)
//                 console.log(get)
//             }),
//             decrement: (qty = 1) => set((data: any) => {
//                 console.log(data)
//                 console.log(get)
//             })
//         }),
//         (persistCfg as PersistOptions<any>)
//     )
// )


// // const persistStore = create(
// //     persist(
// //         (set, get) => ({
// //             data: 1,
// //             increment: (qty = 1) => set((data: any) => {
// //                 console.log(data)
// //                 console.log(get)
// //             }),
// //         }),
// //         persistCfg,
// //     )
// // )

// // const persistStore = create<StoreState>()(
// //     persist(
// //         (set, get) => ({
// //             data: 1,
// //             increment: (qty = 1) => set((data: any) => {
// //                 console.log(data)
// //                 console.log(get)
// //             }),
// //         }),
// //         persistCfg,
// //     )
// // )

// const globalStore = () => persistStore

// export {
//     persistStore as useGlobalStore,
//     usePersistStore,
//     globalStore
// }