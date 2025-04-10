<script lang="ts">
  export let text: string;
  export let href: string;
</script>

<a {href}
  >{text}
  <img class="icon" src="/icons/tesseract_light.svg" alt="Tesseract" />
</a>

<style>
  a {
    position: relative;
  }
  .icon {
    display: none;
    position: absolute;
    top: 2rem;
    left: 50%;
    transform: translateX(-50%);
    width: 1rem;
  }
  a:hover {
    text-decoration: underline;
    background-color: rgba(173, 216, 230, 0.1); /* Light blue background */
    box-shadow: 0 0 50px rgba(173, 216, 230, 0.5); /* Light blue glow */
  }
  a:hover .icon {
    display: block;
  }
</style>
