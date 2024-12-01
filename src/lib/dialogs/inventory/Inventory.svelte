<script lang="ts">
  import { writable, type Writable } from 'svelte/store';

  export let open: Writable<boolean>;
</script>

<dialog id="inventory" open={$open}></dialog>
