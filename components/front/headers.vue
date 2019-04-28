<template>

        <mdb-navbar expand="large" dark color="red accent-3">
            <!-- Navbar brand -->
            <mdb-navbar-brand href="#">
                Navbar
            </mdb-navbar-brand>
            <mdb-navbar-toggler>
                <mdb-navbar-nav>
                    <mdb-nav-item to="/" active>Home</mdb-nav-item>
                    <mdb-nav-item :to="{name:'products'}">Products</mdb-nav-item>
                </mdb-navbar-nav>
            </mdb-navbar-toggler>
        </mdb-navbar>

</template>
<style scoped>

</style>