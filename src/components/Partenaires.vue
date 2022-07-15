<template>
  <section>
    <div class="slider">
      <div class="slide-track">
        <div class="slide">
          <img src="../assets/par1.png" height="200" width="" alt="100" />
        </div>
        <div class="slide">
          <img src="../assets/par2.png" height="200" width="" alt="100" />
        </div>
        <div class="slide">
          <img src="../assets/par3.png" height="200" width="" alt="100" />
        </div>

        <div class="slide">
          <img src="../assets/par1.png" height="200" width="" alt="100" />
        </div>
        <div class="slide">
          <img src="../assets/par2.png" height="200" width="" alt="100" />
        </div>
        <div class="slide">
          <img src="../assets/par3.png" height="200" width="" alt="100" />
        </div>

        <div class="slide">
          <img src="../assets/par1.png" height="200" width="" alt="100" />
        </div>
        <div class="slide">
          <img src="../assets/par2.png" height="200" width="" alt="100" />
        </div>
        <div class="slide">
          <img src="../assets/par3.png" height="200" width="" alt="100" />
        </div>

        <div class="slide">
          <img src="../assets/par1.png" height="200" width="" alt="100" />
        </div>
        <div class="slide">
          <img src="../assets/par2.png" height="200" width="" alt="100%" />
        </div>
        <div class="slide">
          <img src="../assets/par3.png" height="200" width="" alt="100" />
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Partenaires",
}
</script>

<style scoped >
body {
  align-items: center;
  background: #E3E3E3;
  display: flex;
  justify-content: center;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(calc(-250px * 2));
  }
}

.slider {
  background: white;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
  margin: auto;
  overflow: hidden;
  position: relative;

}

.slider::before,
.slider::after {
  background: linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%);
  content: "";
  height: 100px;
  position: absolute;
  width: 200px;
  z-index: 2;
}

.slider::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}

.slider::before {
  left: 0;
  top: 0;
}

.slider .slide-track {
  animation: scroll 10s linear infinite;
  display: flex;
  width: calc(250px * 3);
}

.slider .slide {
  width: 350px;
}

.slider {
  padding-top: 50px;
  padding-bottom: 50px;
  margin: 50px;
}

img {
  max-width: auto;
  max-height: 120px;
}
</style>