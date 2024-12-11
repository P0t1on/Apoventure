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
    home: 'M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z',
    meeting_room:
      'M120-120v-80h80v-640h400v40h160v600h80v80H680v-600h-80v600H120Zm160-640v560-560Zm160 320q17 0 28.5-11.5T480-480q0-17-11.5-28.5T440-520q-17 0-28.5 11.5T400-480q0 17 11.5 28.5T440-440ZM280-200h240v-560H280v560Z',
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
