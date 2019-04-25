import Vue from 'vue'

//nav
import {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem,
    mdbDropdown,
    mdbDropdownToggle,
    mdbDropdownItem,
    mdbDropdownMenu,
    mdbContainer,
    mdbRow
} from 'mdbvue';


const components = {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem,
    mdbDropdown,
    mdbDropdownToggle,
    mdbDropdownItem,
    mdbDropdownMenu,
    mdbContainer,
    mdbRow
}

Object.entries(components).forEach(([name, component]) => {
    Vue.component(name, component)
})