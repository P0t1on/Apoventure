<script lang="ts">
  import type { MouseEventHandler } from 'svelte/elements';

  let {
    color = '#5f6368',
    size = '24px',
    type = 'shield',
    outline,
    'outline-width': outlineWidth,
    ...props
  }: {
    color?: string;
    size?: string;
    type?: keyof typeof patterns;
    outline?: string;
    'outline-width'?: string;
    onclick?: MouseEventHandler<SVGViewElement>;
    style?: string;
  } = $props();

  const patterns = {
    shield:
      'M480-240q69-17 114.5-79.5T640-458v-102l-160-80-160 80v102q0 76 45.5 138.5T480-240ZM160-120v-480l320-240 320 240v480H160Zm80-80h480v-360L480-740 240-560v360Zm240-270Z',
  };
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  height={size}
  viewBox="0 -960 960 960"
  width={size}
  role="presentation"
  {...props}
>
  <path
    fill={color}
    d={patterns[type]}
    stroke={outline}
    stroke-width={outlineWidth}
  />
</svg>
