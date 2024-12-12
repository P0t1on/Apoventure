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
      'M480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-499L256-405q19 63 56 114.5t88 86.5v-156h160v156q51-35 88-86.5T704-405L480-579Zm0-216-240 90v189q0 5 .5 11t.5 11l239-186 239 186q0-5 .5-11t.5-11v-189l-240-90Z',
    home: 'M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z',
    meeting_room:
      'M120-120v-80h80v-640h400v40h160v600h80v80H680v-600h-80v600H120Zm160-640v560-560Zm160 320q17 0 28.5-11.5T480-480q0-17-11.5-28.5T440-520q-17 0-28.5 11.5T400-480q0 17 11.5 28.5T440-440ZM280-200h240v-560H280v560Z',
    token:
      'M480-80 120-280v-400l360-200 360 200v400L480-80ZM364-590q23-24 53-37t63-13q33 0 63 13t53 37l120-67-236-131-236 131 120 67Zm76 396v-131q-54-14-87-57t-33-98q0-11 1-20.5t4-19.5l-125-70v263l240 133Zm40-206q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400Zm40 206 240-133v-263l-125 70q3 10 4 19.5t1 20.5q0 55-33 98t-87 57v131Z',
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
