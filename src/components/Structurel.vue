<template>
  <!-- Structurel -->
  <HeroSection />


<section>
  <div class="container">
    <div class="season_tabs">

      <div class="season_tab">
        <input type="radio" id="tab-1" name="tab-group-1" checked>
        <label for="tab-1">Salles de classe</label>

        <div class="season_content">
          <h3 style="color: #006663;">Nos salles de classe </h3>
          <hr class="featurette-divider">
          <h5>Nous disposons de 14 salles au total équipées des ventilateurs et climatiseurs</h5>
          <h6 style="color: #006663;">Quelques images de nos salles de classe</h6>
                <div class="container">

                    <div class="row row-cols-1 row-cols-sm-2">
                        <div class="col">
                            <div class="card shadow-sm">
                                <img src="../assets/img/salle2.png" alt="" style=" width:100%; height:190px;">
                            </div>
                        </div>
                        <div class="col">
                            <div class="card shadow-sm">
                                <img src="../assets/img/salle1.png" alt="" style=" width:100%; height:190px;">
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
    

      <div class="season_tab">
        <input type="radio" id="tab-2" name="tab-group-1">
        <label for="tab-2">Laboratoires</label>

        <div class="season_content">
          <h3 style="color: #006663;">Nos laboratoires</h3>
          <hr class="featurette-divider">
          <h5>Nous disposons 2 laboratoires bien équipés pour nos différentes recherches</h5>
          <h6 style="color: #006663;">Quelques images de nos Laboratoires</h6>
                <div class="container">

                    <div class="row row-cols-1 row-cols-sm-2">
                        <div class="col">
                            <div class="card shadow-sm">
                                <img src="../assets/img/labo1.png" alt="" style=" width:100%; height:190px;">
                            </div>
                        </div>
                        <div class="col">
                            <div class="card shadow-sm">
                                <img src="../assets/img/labo2.png" alt="" style=" width:100%; height:190px;">
                            </div>
                        </div>
                    </div>
                </div>
        </div>
      </div>

      <div class="season_tab">
        <input type="radio" id="tab-3" name="tab-group-1">
        <label for="tab-3">Bibliothèques</label>

        <div class="season_content">
          <h3 style="color: #006663;">Notre bibliothèque </h3>
          <hr class="featurette-divider">
                <h5>Nous disposons 1 bibliothèque bien équipée pour nos différentes recherches</h5>
          <h6 style="color: #006663;">Quelques images de notre bibliothèque</h6>
                <div class="container">

                    <div class="row row-cols-1 row-cols-sm-2">
                        <div class="col">
                            <div class="card shadow-sm">
                                <img src="../assets/img/biblio1.png" alt="" style=" width:100%; height:190px;">
                            </div>
                        </div>
                        <div class="col">
                            <div class="card shadow-sm">
                                <img src="../assets/img/biblio2.png" alt="" style=" width:100%; height:190px;">
                            </div>
                        </div>
                    </div>
                </div>
        </div>
      </div>

      <div class="season_tab">
        <input type="radio" id="tab-4" name="tab-group-1">
        <label for="tab-4">Cantine</label>

        <div class="season_content">
          <h3 style="color: #006663;">Notre cantine scolaire</h3>
          <div class="contact_info">
            <hr class="featurette-divider">
                <h5>Nous disposons 1 cantine pour le bien être de nos étudiants</h5>
          <h6 style="color: #006663;">Quelques images de notre cantine</h6>
                <div class="container">

                    <div class="row row-cols-1 row-cols-sm-2">
                        <div class="col">
                            <div class="card shadow-sm">
                                <img src="../assets/img/cantine1.png" alt="" style=" width:100%; height:190px;">
                            </div>
                        </div>
                        <div class="col">
                            <div class="card shadow-sm">
                                <img src="../assets/img/cantine2.png" alt="" style=" width:100%; height:190px;">
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>
      </div>
      <div class="season_tab">
        <input type="radio" id="tab-5" name="tab-group-1">
        <label for="tab-5">Salles technique</label>

        <div class="season_content">
          <h3 style="color: #006663;">Nos salles technique</h3>
            <div class="container contact-form">
              <hr class="featurette-divider">
                     <h5>Nous disposons 2 salles technique</h5>
          <h6 style="color: #006663;">Quelques images de nos salles technique</h6>
                <div class="container">

                    <div class="row row-cols-1 row-cols-sm-2">
                        <div class="col">
                            <div class="card shadow-sm">
                                <img src="../assets/img/st1.png" alt="" style=" width:100%; height:190px;">
                            </div>
                        </div>
                        <div class="col">
                            <div class="card shadow-sm">
                                <img src="../assets/img/st2.png" alt="" style=" width:100%; height:190px;">
                            </div>
                        </div>
                    </div>
                </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</section>  
  <!-- Structurel -->
   <Partenaires/>
</template>

<script>
import HeroSection from './HeroSection.vue';
import Partenaires from './Partenaires.vue';

export default {
  name: "ContentSection",
  components: { HeroSection, Partenaires }
}

</script>

<style scoped>
.season_tabs {
  position: relative;
  min-height: 360px;
  /* This part sucks */
  clear: both;
  margin: 25px 0;

}

.cont1 {
  display: flex;
}

#contact{
  display: flex;
    flex-direction: column;
}

.contact_info_text{
  font-size: 25px;
}
.season_tab {
  float: left;
  clear: both;
  width: 286px;
}

.season_tab label {
  background: #eee;
  padding: 10px;
  border: 1px solid #ccc;
  margin-left: -1px;
  font-size: 21px;
  vertical-align: middle;
  position: relative;
  left: 1px;
  width: 264px;
  height: 68px;
  display: table-cell;
}

.season_tab [type=radio] {
  display: none;
}

.season_content {
  position: absolute;
  top: 0;
  left: 286px;
  background: white;
  right: 0;
  bottom: 0;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 30px;
}

.season_content span {
  animation: 0.5s ease-out 0s 1 slideInFromTop;
}

[type=radio]:checked~label {
  background: white;
  border-bottom: 2px solid #8bc34a;
  z-index: 2;
  border-radius: 10px;
}

[type=radio]:checked~label~.season_content {
  z-index: 1;
}

.contact-form{
    background: #fff;
    width: 80%;
}
.contact-form .form-control{
    border-radius:1rem;
}

#momo{
     width: 50%;
    border-radius: 1rem;
    padding: 1.5%;
    border: none;
    cursor: pointer;

}
</style>