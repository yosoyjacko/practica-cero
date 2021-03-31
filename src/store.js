import { createStore } from 'redux'

const initialState = {
    jugadores: [{
        id: 1,
        nombre: "Pacificadora",
        foto: "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2hjO9nb9I0VqZngd7b1Ri7/829e0320399c04dafb614df5de37731f/FH-hero-portrait-2018-KNIGHTS-peacekeeper.jpg"
    },{
        id: 2,
        nombre: "Prior Oscuro",
        foto: "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7IumdC4a34X6c6mJylpXFQ/3e145ab283dd301ce5040d45ef9b0932/fh_s9_hero_overview_m_blackprior-web.jpg"
    },{
        id: 3,
        nombre: "Gladiador",
        foto: "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1FiHlCGrdQ4fSVTSwjJ4YT/81645ac68c39d95ab6b03937b427e5fa/FH-hero-portrait-2018-KNIGHTS-gladiator.jpg"
    },{
        id: 4,
        nombre: "Centurion",
        foto: "http://pm1.narvii.com/7049/8eff1b47171763ed93a9baa1f4ef55cc084fab5fr1-454-1080v2_uhq.jpg"
    },{
        id: 5,
        nombre: "Astrea",
        foto: "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5VctNb0ePwf8TUl5Ouxpzj/403b991765c981b05daa213d58e20e85/fh-hero-portrait-2020-knights-warmonger.jpg"
    },{
        id: 6,
        nombre: "Justiciero",
        foto: "https://i.pinimg.com/originals/d4/00/3b/d4003b6337591a8a90e12285e427ae3a.jpg"
        
    },{
        id: 7,
        nombre: "Guardian",
        foto: "https://i.pinimg.com/originals/c9/97/a9/c997a9cdb42cd9dc14edf09037fc387c.jpg"
    },{
        id: 8,
        nombre: "Conquistador",
        foto: "https://pm1.narvii.com/6841/a47a8758fe697930ed73647d5402caffcede7fd2v2_hq.jpg"
    },{
        id: 9,
        nombre: "vikingo-Jugador-6",
        foto: "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/sJZLbuUduKHtJFCCBqoea/82c884c54d71ba487020b74a52bf1ad9/fh-hero-portrait-2018-vikings-warlord.jpg"
    },{
        id: 10,
        nombre: "vikingo-Jugador-10",
        foto: "https://i.pinimg.com/originals/b3/a1/0d/b3a10dee13b419f9eb59f3f5043db755.jpg"
    },{
        id: 11,
        nombre: "vikingo-Jugador-4",
        foto: "https://i.redd.it/f63kwkl0ygz01.jpg"
    },{
        id: 12,
        nombre: "vikingoJugador-12",
        foto: "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/sJZLbuUduKHtJFCCBqoea/82c884c54d71ba487020b74a52bf1ad9/fh-hero-portrait-2018-vikings-warlord.jpg"
    }],
    titulares: [],
    suplentes:[]
}

const reducerEntrenador = (state = initialState, action) => {
    if(action.type === "AGREGAR_TITULAR") {
        return {
            ...state,
            titulares: state.titulares.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if(action.type === "AGREGAR_SUPLENTE") {
        return {
            ...state,
            suplentes: state.suplentes.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if(action.type === "QUITAR_JUGADOR") {
        return {
            ...state,
            titulares: state.titulares.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }

    if(action.type === "QUITAR_SUPLENTE"){
        return {
            ...state,
            suplentes: state.suplentes.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }
    return state
}

export default createStore(reducerEntrenador)