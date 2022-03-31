import { createSlice } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'

import axios from 'axios'
import { baseUrl } from '../component/Item'

const initialState = {

}

const storeState = createSlice({
    name: 'data',
    initialState,
    reducers: {
        dataGallery: (state, action) => {
            return {
                ...state,
                gallery: {
                    data: [{
                        ...state.gallery.data[0],
                        data: action.payload.data
                    }]
                }
            }
        },
        dataTimeline: (state, action) => {
            return {
                ...state,
                timeline: {
                    data: [{
                        ...state.timeline.data[0],
                        data: action.payload.data
                    }]
                }
            }
        },
        updateState: (state, action) => {
            return {
                ...state,
                [action.payload.tab]: {
                    data: [{
                        ...state[action.payload.tab].data[0],
                        [action.payload.index]: {
                            ...state[action.payload.tab].data[0][action.payload.index],
                            [action.payload.name]: action.payload[action.payload.name]
                        },
                    }]
                }
            }
        },
        updateAcara: (state, action) => {
            return {
                ...state,
                details: {
                    data: [{
                        ...state.details.data[0],
                        acara: [
                            ...state.details.data[0].acara.slice(0, action.payload.index),
                            {
                                ...state.details.data[0].acara[action.payload.index],
                                [action.payload.tab]: {
                                    ...state.details.data[0].acara[action.payload.index][action.payload.tab],
                                    [action.payload.name]: action.payload[action.payload.name]
                                }
                            },
                            ...state.details.data[0].acara.slice(action.payload.index + 1),
                        ]
                    }]
                }
            }
        },
        tambahAcara: (state, action) => {
            return {
                ...state,
                details: {
                    data: [{
                        ...state.details.data[0],
                        acara: [
                            ...state.details.data[0].acara,
                            action.payload.data[0]
                        ]
                    }]
                }
            }
        },
        tambahTimeline: (state, action) => {
            return {
                ...state,
                details: {
                    data: [{
                        ...state.details.data[0],
                        timeline: [
                            ...state.details.data[0].acara,
                            action.payload.data[0]
                        ]
                    }]
                }
            }
        },
        deleteAcara: (state, action) => {
            return {
                ...state,
                details: {
                    data: [{
                        ...state.details.data[0],
                        acara: [
                            ...state.details.data[0].acara.slice(0, action.payload.index),
                            ...state.details.data[0].acara.slice(action.payload.index + 1)
                        ]
                    }]
                }
            }
        },
        deleteMengundang: (state, action) => {
            return {
                ...state,
                details: {
                    data: [{
                        ...state.details.data[0],
                        mengundang: [
                            ...state.details.data[0].mengundang.slice(0, action.payload.index),
                            ...state.details.data[0].mengundang.slice(action.payload.index + 1)
                        ]
                    }]
                }
            }
        },
        tambahMengundang: (state, action) => {
            return {
                ...state,
                details: {
                    data: [{
                        ...state.details.data[0],
                        mengundang: [
                            ...state.details.data[0].mengundang,
                            action.payload.data
                        ]
                    }]
                }
            }
        },
        refreshState: (state) => {
            return {
                ...state,
            }
        },
        defaultState: (state, action) => {
            return {
                ...action.payload.data
            }
        }
    }
})

export const saveData = () => {

    var qs = require('qs')
    const state = JSON.stringify(store.getState().reduce)
    var data = qs.stringify({
        data: state
    })

    var config = {
        method: 'post',
        url: `${baseUrl()}/api/config`,
        headers: {
            'Api-Keys-Rumah-akad': '6be41184cdca86ebbc56da4433f303ae',
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: data
    };

    axios(config)
        .then(function(response) {
            // console.log(JSON.stringify(response.data));
            alert('save data success')
        })
        .catch(function(error) {
            console.log(error);
        });
}

export const getDataGallery = () => {
    axios({
            method: 'GET',
            url: `${baseUrl()}/api/gallery`,
            headers: {
                'Api-Keys-Rumah-akad': '6be41184cdca86ebbc56da4433f303ae'
            }
        })
        .then(result => store.dispatch(dataGallery({ data: result.data.data })))
        .catch(error => console.log(error))
}

export const getDataTimeline = () => {
    axios({
            method: 'GET',
            url: `${baseUrl()}/api/story`,
            headers: {
                'Api-Keys-Rumah-akad': '6be41184cdca86ebbc56da4433f303ae'
            }
        })
        .then(result => store.dispatch(dataTimeline({ data: result.data.data })))
        .catch(error => console.log(error))
}

export const { updateState, updateAcara, tambahAcara, deleteAcara, deleteMengundang, tambahMengundang, dataGallery, refreshState, tambahTimeline, dataTimeline, defaultState } = storeState.actions

const reduce = storeState.reducer

const store = configureStore({
    reducer: {
        reduce
    },
})


store.subscribe(() => {

})

export { store }