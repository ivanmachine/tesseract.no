<script lang="ts">
  export let text: string;
  export let href: string;
</script>

<a {href}>{text}</a>

<style>
  a:hover {
    text-decoration: underline;
    background-color: rgba(173, 216, 230, 0.1); /* Light blue background */
    box-shadow: 0 0 50px rgba(173, 216, 230, 0.5); /* Light blue glow */
  }
</style>
