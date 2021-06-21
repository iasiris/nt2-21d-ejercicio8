import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const url = 'https://60aac34c66f1d000177732f0.mockapi.io/usuarios-TP6/'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        usuario: {
            nombre: '',
            edad: '',
            email: ''
        },
        usuarios:[],

    },
    actions : {
        async agregarUsuario({commit}, usuario) {
            try {
                let {data:user} = await axios.post(url, usuario)
                commit('addUsuario',user)           
            }
            catch (error){
                console.error(error)
            }
        },
        async getUsuarios({commit}){
            try {
                let {data:usuarios} = await axios(url)
                commit('getUsuarios', usuarios)
            }
            catch (error){
                console.error(error)
            }            
          },
    },
    mutations : {
        addUsuario(state,user) {
            state.usuarios.push(user)
        },
        getUsuarios(state, usuarios){
            state.usuarios = usuarios
        }
        

    }
})