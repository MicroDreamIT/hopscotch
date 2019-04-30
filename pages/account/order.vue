<template>
    <div>
        <mdb-container>
            <br>
            <mdb-row>
                <mdb-col md="2"></mdb-col>
                <mdb-col md="2">
                    <div class="bg-white p-2 .flex .flex-col">
                        <img class="block h-16 sm:h-24 rounded-full mx-auto mt-4"
                             src="https://avatars2.githubusercontent.com/u/4323180?s=400&u=4962a4441fae9fba5f0f86456c6c506a21ffca4f&v=4" alt="">

                        <div class="text-center">
                            <span>Hello Ipsita</span><br>
                            <span class="small text-grey">testing@testing.com</span>
                        </div>

                        <hr>

                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Orders</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Profile details</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">My Moments</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Saved Cards</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Credits</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Sign Out</a>
                            </li>
                        </ul>
                    </div>
                </mdb-col>
                <mdb-col md="6">
                    <h5>Orders</h5>
                </mdb-col>
                <mdb-col md="2"></mdb-col>
            </mdb-row>
        </mdb-container>
    </div>
</template>

<script>
    export default {
        name: "order"
    }
</script>

<style scoped>

</style>