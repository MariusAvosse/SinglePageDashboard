<template>
    <!-- Sidebar -->
 <HeroSection/>
  <div class="container">
  <div class="season_tabs">
              
            <div class="season_tab">
                <input type="radio" id="tab-1" name="tab-group-1" checked>
                <label for="tab-1">Historique</label>
                
                <div class="season_content">
                    <h3>Historique </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br/>
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                          in culpa qui officia deserunt mollit anim id est laborum.
                          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo 
                          inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. <br/>
                          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                          sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                          adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
                          dolore magnam aliquam quaerat voluptatem.
                    </p>
                </div> 
            </div>
              
            <div class="season_tab">
                <input type="radio" id="tab-2" name="tab-group-1">
                <label for="tab-2">Description</label>
                
                <div class="season_content">
                    <h3>Description</h3>
                    <p>   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br/>
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                          in culpa qui officia deserunt mollit anim id est laborum.
                          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo 
                          inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. <br/>
                          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                          sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                          adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
                          dolore magnam aliquam quaerat voluptatem.
                    </p>
                </div> 
            </div>
              
              <div class="season_tab">
                <input type="radio" id="tab-3" name="tab-group-1">
                <label for="tab-3">Mots de la Direction</label>
              
                <div class="season_content">
                    <h3>Mots du Directeur</h3>
                    <hr class="featurette-divider">

                    <div class="row featurette">
                      <div class="col-md-7 order-md-2">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br/>
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                          eu fugiat nulla pariatur. <br/> 
                          Excepteur sint occaecat cupidatat non proident, sunt 
                          in culpa qui officia deserunt mollit anim id est laborum.
                          </p>
                      </div>
                      <div class="col-md-5 order-md-1">
                        <h5>Mr. Jaylon Philips</h5>
                        <img src="../assets/img/directeur.png">
                      </div>
                    </div>
                </div> 
            </div>

<div class="season_tab">
                <input type="radio" id="tab-4" name="tab-group-1">
                <label for="tab-4">Coordonnées</label>
              
          <div class="season_content">
                    <h3>Coordonnées</h3>
                    <div class="contact_info">
                      <div class="container">
                          <div class="row">
                              <div class="col-md-12">

                                      <!-- Contact Item -->
                                          <div class="contact_info_image"><img src="https://img.icons8.com/office/24/000000/iphone.png" alt=""></div>
                                          <div class="contact_info_content">
                                              <div class="contact_info_text">+91 9876 543 2198</div>
                                          </div>

                                          <div class="contact_info_image"><img src="https://img.icons8.com/ultraviolet/24/000000/filled-message.png" alt=""></div>
                                          <div class="contact_info_content">
                                              <div class="contact_info_text">contact@bbbootstrap.com</div>
                                          </div>

                                          <div class="contact_info_image"><img src="https://img.icons8.com/ultraviolet/24/000000/map-marker.png" alt=""></div>
                                          <div class="contact_info_content">
                                              <div class="contact_info_text">298,Menlo Park,CA,USA</div>
                                          </div>

                                  </div>
                        </div>
                  </div>
            </div>
      </div> 
  </div> 
             <div class="season_tab">
                <input type="radio" id="tab-5" name="tab-group-1">
                <label for="tab-5">Contact</label>
              
                <div class="season_content">
                    <span>Contact</span>
                </div> 
            </div> 
  </div>
</div>
    <!-- Sidebar -->
</template>

<script>
import HeroSection from './HeroSection.vue';

    export default {
    name: "ContentSection",
    components: { HeroSection }
}
    
</script>

<style scoped>
    .season_tabs {
  position: relative;   
  min-height: 360px; /* This part sucks */
  clear: both;
  margin: 25px 0;
  
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
[type=radio]:checked ~ label {
  background: white;
  border-bottom: 2px solid #8bc34a;
  z-index: 2;
  border-radius: 10px;
}
[type=radio]:checked ~ label ~ .season_content {
  z-index: 1;
}
</style>