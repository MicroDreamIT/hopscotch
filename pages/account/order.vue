<template>
    <div>

        <vcl-facebook></vcl-facebook>


        <mdb-container>
            <br>
            <mdb-row>
                <mdb-col md="2"></mdb-col>
                <mdb-col md="2">
                    <div class="bg-white p-2 .flex .flex-col">
                        <img class="block h-16 sm:h-24 rounded-full mx-auto mt-4"
                             src="https://avatars1.githubusercontent.com/u/8063392?s=460&v=4" alt="">

                        <div class="text-center">
                            <span>Hello Ipsita</span><br>
                            <span class="small text-grey">testing@testing.com</span>
                        </div>

                        <hr>

                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <a class="nav-link text-pink hover:text-pink-darker" href="#" >
                                    <mdb-icon icon="shopping-bag"  class="pr-3"/>Orders
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-pink hover:text-pink-darker" href="#">
                                    <mdb-icon far icon="user-circle"  class="pr-3"/>Profile details
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-pink hover:text-pink-darker" href="#">
                                    <mdb-icon fab icon="gratipay"  class="pr-3"/>My Moments
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-pink hover:text-pink-darker" href="#">
                                    <mdb-icon fab icon="cc-mastercard"  class="pr-3"/>Saved Cards
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-pink hover:text-pink-darker" href="#">
                                    <mdb-icon icon="hand-holding-usd"  class="pr-3"/>Credits
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-pink hover:text-pink-darker" href="#">
                                    <mdb-icon icon="sign-out-alt"  class="pr-3"/>Sign Out
                                </a>
                            </li>
                        </ul>
                    </div>
                </mdb-col>
                <mdb-col md="6">
                    <h5>Orders</h5>

                    <mdb-row class="bg-white p-4 hover:shadow mb-4">
                        <mdb-col md="6">
                            <span>Arrives by May 7</span>
                        </mdb-col>
                        <mdb-col md="6">
                            <mdb-row>
                                <img class="block h-10 sm:h-12 mr-1"
                                     src="https://avatars1.githubusercontent.com/u/8063392?s=460&v=4" alt="">
                                <img class="block h-10 sm:h-12 mr-1"
                                     src="https://avatars1.githubusercontent.com/u/8063392?s=460&v=4" alt="">
                            </mdb-row>
                        </mdb-col>
                    </mdb-row>

                    <mdb-row class="bg-white p-4 hover:shadow mb-4">
                        <mdb-col md="6">
                            <span>Arrives by May 7</span>
                        </mdb-col>
                        <mdb-col md="6">
                            <mdb-row>
                                <img class="block h-10 sm:h-12 mr-1"
                                     src="https://avatars1.githubusercontent.com/u/8063392?s=460&v=4" alt="">
                                <img class="block h-10 sm:h-12 mr-1"
                                     src="https://avatars1.githubusercontent.com/u/8063392?s=460&v=4" alt="">
                            </mdb-row>
                        </mdb-col>
                    </mdb-row>


                    <mdb-row class="bg-white p-4 hover:shadow mb-4">
                        <mdb-col md="6">
                            <span>Arrives by May 7</span>
                        </mdb-col>
                        <mdb-col md="6">
                            <mdb-row>
                                <img class="block h-10 sm:h-12 mr-1"
                                     src="https://avatars1.githubusercontent.com/u/8063392?s=460&v=4" alt="">
                                <img class="block h-10 sm:h-12 mr-1"
                                     src="https://avatars1.githubusercontent.com/u/8063392?s=460&v=4" alt="">
                            </mdb-row>
                        </mdb-col>
                    </mdb-row>

                    <mdb-row class="bg-white p-4 hover:shadow-lg">
                        <mdb-col md="6">
                            <span>Arrives by May 7</span>
                        </mdb-col>
                        <mdb-col md="6">
                            <mdb-row>
                                <img class="block h-10 sm:h-12 mr-1"
                                     src="https://avatars1.githubusercontent.com/u/8063392?s=460&v=4" alt="">
                                <img class="block h-10 sm:h-12 mr-1"
                                     src="https://avatars1.githubusercontent.com/u/8063392?s=460&v=4" alt="">
                            </mdb-row>
                        </mdb-col>
                    </mdb-row><mdb-row class="bg-white p-4 hover:shadow-lg">
                    <mdb-col md="6">
                        <span>Arrives by May 7</span>
                    </mdb-col>
                    <mdb-col md="6">
                        <mdb-row>
                            <img class="block h-10 sm:h-12 mr-1"
                                 src="https://avatars1.githubusercontent.com/u/8063392?s=460&v=4" alt="">
                            <img class="block h-10 sm:h-12 mr-1"
                                 src="https://avatars1.githubusercontent.com/u/8063392?s=460&v=4" alt="">
                        </mdb-row>
                    </mdb-col>
                </mdb-row><mdb-row class="bg-white p-4 hover:shadow">
                    <mdb-col md="6">
                        <span>Arrives by May 7</span>
                    </mdb-col>
                    <mdb-col md="6">
                        <mdb-row>
                            <img class="block h-10 sm:h-12 mr-1"
                                 src="https://avatars1.githubusercontent.com/u/8063392?s=460&v=4" alt="">
                            <img class="block h-10 sm:h-12 mr-1"
                                 src="https://avatars1.githubusercontent.com/u/8063392?s=460&v=4" alt="">
                        </mdb-row>
                    </mdb-col>
                </mdb-row>


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