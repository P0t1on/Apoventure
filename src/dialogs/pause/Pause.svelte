<script lang="ts">
  import type { Writable } from 'svelte/store';

  export let open: Writable<boolean>;
</script>

<dialog id="pause" open>pause</dialog>
