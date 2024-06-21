<template>
  <div class="wrapper">
    <div class="wrapper-inner">
      <h1>github.com/gmrchk/kinet</h1>
    </div>
    <div id="circle" class="circle">
      <div id="point" class="point"></div>
    </div>
  </div>
</template>

<script>
import Kinet from 'kinet';

export default {
  name: 'KinetComponent',
  data() {
    return {
      scrollX: 0,
      scrollY: 0,
      mouseX: 0,
      mouseY: 0
    };
  },
  mounted() {
    // create instance of kinet with custom settings
    this.kinet = new Kinet({
      acceleration: 0.06,
      friction: 0.20,
      names: ["x", "y"],
    });

    // select circle element
    const circle = this.$el.querySelector('#circle');

    // set handler on kinet tick event
    this.kinet.on('tick', (instances) => {
      const translateX = instances.x.current;
      const translateY = instances.y.current;
      circle.style.transform = `translate3d(${translateX}px, ${translateY}px, 0) rotateX(${instances.x.velocity / 2}deg) rotateY(${instances.y.velocity / 2}deg)`;
    });

    // call kinet animate method on mousemove
    document.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    // Clean up event listeners and kinet instance
    document.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('scroll', this.handleScroll);
    this.kinet.off('tick');
    this.kinet.off('start');
    this.kinet.off('end');
  },
  methods: {
    handleMouseMove(event) {
      this.mouseX = event.clientX;
      this.mouseY = event.clientY;
      this.kinet.animate('x', this.mouseX - window.innerWidth / 2 + this.scrollX);
      this.kinet.animate('y', this.mouseY - window.innerHeight / 2 + this.scrollY);
    },
    handleScroll() {
      this.scrollX = window.scrollX;
      this.scrollY = window.scrollY;
      this.kinet.animate('x', this.mouseX - window.innerWidth / 2 + this.scrollX);
      this.kinet.animate('y', this.mouseY - window.innerHeight / 2 + this.scrollY);
    }
  }
}
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: default;
}

h1 {
  font-size: 50px;
  margin: 0 auto 10px;
}

a {
  color: #232323;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.circle {
  width: 60px;
  height: 60px;
  background: transparent;
  border: solid rgba(197, 196, 196, 0.747) 2px;
  border-radius: 50%;
  position: absolute;
  top: 650%;
  left: 48%;
  transform: translate3d(0, 0, 0);
  pointer-events: none;
  z-index: 10;
}

.point {
  width: 10px;
  height: 10px;
  background-color: rgb(82, 82, 82);
  border-radius: 50%;
  position: absolute;
  top: 30%;
  left: 30%;
  transform: translate3d(-50%, -50%, 0);
  pointer-events: none;
}
</style>