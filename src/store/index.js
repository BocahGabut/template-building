import { createSlice } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'

const initialState = {
    heading: {
        data: [{
            background: {
                id: "002199316",
                backgroundImage: "https://vocasia.id/blog/wp-content/uploads/2021/10/Prewedding-Konsep.jpg",
                repeat: "no-repeat",
                size: "cover",
                position: "center center",
                attachment: "fixed",
                animation: "zoom-in",
                overflowColor: "rgba(252, 192, 30, 0.212)"
            },
            heading: {
                id: "002199317",
                fontFamily: "arial",
                fontWeight: "400",
                fontColor: "rgba(255,255,255,1)",
                animation: "zoom-in",
                text: "The Wedding"
            },
            mempelai: {
                id: "002199318",
                fontFamily: "arial",
                fontWeight: "400",
                fontColor: "rgba(255,255,255,1)",
                animation: "zoom-in",
                text: "Romeo & Juliet"
            },
            date: {
                id: "002199319",
                fontFamily: "arial",
                fontWeight: "400",
                fontColor: "rgba(255,255,255,1)",
                animation: "zoom-in",
                text: "25, Desember 2025"
            },
            scrollAnimation: {
                style: "inner"
            }
        }]
    },
    profile: {
        data: [{
            background: {
                backgroundImage: "https://kingfoto.com/attachments/shop_images/121.jpg",
                size: "cover",
                animation: "fade-up",
            },
            salam: {
                fontFamily: "arial",
                fontWeight: "700",
                animation: "fade-up",
                text: "Assalamu`alaikum Warahmatullaahi Wabarakaatuh"
            },
            quotes: {
                fontFamily: "arial",
                fontWeight: "500",
                text: "Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah semoga ridho-Mu tercurah mengiringi pernikahan kami"
            },
            mempelaiPria: {
                nama: "Romeo Putra Pratama",
                anakKe: "pertama",
                namaBapak: "Romeo",
                namaIbu: "Romeo",
                photo: 'https://u.moment.my.id/wp-content/uploads/2021/07/pexels-trung-nguyen-9517392-1024x1024.jpg',
                instagram: 'romeo',
                animation: "fade-up",
                animationLeft: "fade-up",
            },
            mempelaiWanita: {
                nama: "Juliet Putri Rizka",
                anakKe: "pertama",
                namaBapak: "Juliet",
                namaIbu: "Juliet",
                photo: 'https://u.moment.my.id/wp-content/uploads/2021/07/pexels-trung-nguyen-9517316-1024x1024.jpg',
                instagram: 'juliet',
                animation: "fade-up",
                animationLeft: "fade-up",
            },
        }]
    }
}

const storeState = createSlice({
    name: 'data',
    initialState,
    reducers: {
        updateState: (state, action) => {
            // console.log(action)
            return {
                ...state,
                [action.payload.tab]: {
                    data: [{
                        ...state[action.payload.tab].data[0],
                        [action.payload.index]: {
                            ...state[action.payload.tab].data[0][action.payload.index],
                            [action.payload.name]: action.payload[action.payload.name]
                        }
                    }]
                }
            }
        },
    }
})

export const { updateState } = storeState.actions

const reduce = storeState.reducer

const store = configureStore({
    reducer: {
        reduce
    },
})

store.subscribe(() => {
    // console.log(store.getState())
    // window.parent.postMessage(store.getState(), 'http://localhost:3000')
    // console.log(PostMessage('frame-preview'))
    // const data = [store.getState(), { state: 'update' }]
    // PostMessage('frame-preview', data)
    // console.log(store.getState())
})

export { store }