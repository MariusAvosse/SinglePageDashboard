<template>
    <HeroSection />
    
    <div class="album py-5 bg-light">
        <div class="container">

            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div class="col">
                    <div class="card shadow-sm">
                        <img src="../assets/actu1.png" alt="" style=" width:100%, height=225">
                        <title>Placeholder</title>
                        <div class="card-body">
                            <h5 class="actu-titre">Construction d’un nouveau laboratoire</h5>
                            <hr class="featurette-divider">
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.</p>
                            <div class="d-flex justify-content-between align-items-center">

                                <small class="text-muted">3 mins</small>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card shadow-sm">
                        <img src="../assets/actu2.png" alt="" style=" width:100%, height=225">
                        <title>Placeholder</title>
                        <div class="card-body">
                            <h5 class="actu-titre">Construction d’un nouveau laboratoire</h5>
                            <hr class="featurette-divider">
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.</p>
                            <div class="d-flex justify-content-between align-items-center">

                                <small class="text-muted">14/06/2022</small>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card shadow-sm">
                        <img src="../assets/actu3.png" alt="" style=" width:100%, height=225">
                        <title>Placeholder</title>
                        <div class="card-body">
                            <h5 class="actu-titre">Construction d’un nouveau laboratoire</h5>
                            <hr class="featurette-divider">
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.</p>
                            <div class="d-flex justify-content-between align-items-center">

                                <small class="text-muted">12/06/2022</small>
                            </div>
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
    name: "Actualite",
    components: { HeroSection, Partenaires }
}
</script>

<style>

</style>