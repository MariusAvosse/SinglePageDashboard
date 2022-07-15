<template>
    <HeroSection />
    
    <h1>Galerie photo</h1>
    <div class="album py-5 bg-light">
        <div class="container">
            <div class="card shadow-sm p-3">
                <h2 class="titre-gal">cérémonie de remise des diplômes Mars 2018</h2>
                <hr class="featurette-divider" style="  margin-top: 0px;">
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">

                        <div class="col">
                            <div class="card shadow-sm">
                                <img src="../assets/img1.png" alt="" style=" width:100%, height=225">
                            </div>
                        </div>

                        <div class="col">
                            <div class="card shadow-sm">
                                <img src="../assets/img2.png" alt="" style=" width:100%, height=225">
                            </div>
                        </div>

                        <div class="col">
                            <div class="card shadow-sm">
                                <img src="../assets/img3.png" alt="" style=" width:100%, height=225">
                            </div>
                        </div>

                        <div class="col">
                            <div class="card shadow-sm">
                                <img src="../assets/img4.png" alt="" style=" width:100%, height=225">
                            </div>
                        </div>

                        <div class="col">
                            <div class="card shadow-sm">
                                <img src="../assets/img5.png" alt="" style=" width:100%, height=225">
                            </div>
                        </div>

                        <div class="col">
                            <div class="card shadow-sm">
                                <img src="../assets/img6.png" alt="" style=" width:100%, height=225">
                            </div>
                        </div>

                        <div class="col">
                            <div class="card shadow-sm">
                                <img src="../assets/img7.png" alt="" style=" width:100%, height=225">
                            </div>
                        </div>

                        <div class="col">
                            <div class="card shadow-sm">
                                <img src="../assets/img8.png" alt="" style=" width:100%, height=225">
                            </div>
                        </div>

                </div>
            </div>
        </div>
    </div>


    <div class="album py-1 bg-light">
        <div class="container">
            <div class="card shadow-sm p-3">
                <h2 class="titre-gal">SEMAINE CULTURELLE 2019</h2>
                <hr class="featurette-divider" style="  margin-top: 0px;">
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
                        
                        <div class="col">
                            <div class="card shadow-sm">
                                <img src="../assets/sc1.png" alt="" style=" width:100%, height=225">
                            </div>
                        </div>

                        <div class="col">
                            <div class="card shadow-sm">
                                <img src="../assets/sc2.png" alt="" style=" width:100%, height=225">
                            </div>
                        </div>

                        <div class="col">
                            <div class="card shadow-sm">
                                <img src="../assets/sc3.png" alt="" style=" width:100%, height=225">
                            </div>
                        </div>

                        <div class="col">
                            <div class="card shadow-sm">
                                <img src="../assets/sc4.png" alt="" style=" width:100%, height=225">
                            </div>
                        </div>

                        <div class="col">
                            <div class="card shadow-sm">
                                <img src="../assets/sc5.png" alt="" style=" width:100%, height=225">
                            </div>
                        </div>

                        <div class="col">
                            <div class="card shadow-sm">
                                <img src="../assets/sc6.png" alt="" style=" width:100%, height=225">
                            </div>
                        </div>

                        <div class="col">
                            <div class="card shadow-sm">
                                <img src="../assets/sc7.png" alt="" style=" width:100%, height=225">
                            </div>
                        </div>

                        <div class="col">
                            <div class="card shadow-sm">
                                <img src="../assets/sc8.png" alt="" style=" width:100%, height=225">
                            </div>
                        </div>

                </div>
            </div>
        </div>
    </div>

    <Partenaires/>
</template>

<script>
import HeroSection from './HeroSection.vue';
import Partenaires from './Partenaires.vue';
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Images",
    components: { HeroSection, Partenaires }
}
</script>

<style scoped >
.titre-gal {
    text-align: justify;
    padding-left: 20px;
    font-size: 22px !important;
    line-height: 2;
}

.shadow-sm {
    margin-bottom: 20px;
}
</style>