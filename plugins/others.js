import Vue from 'vue'
import {VclFacebook, VclInstagram} from 'vue-content-loading'

const components = {
    VclFacebook,
    VclInstagram
}

Object.entries(components).forEach(([name, component])=>{
    Vue.component(name, component)
})