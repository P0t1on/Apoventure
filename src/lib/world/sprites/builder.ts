import { browser } from '$app/environment';

export default function BuildSprites() {
  if (!browser) {
    console.error(
      'Err: 스프라이트 빌드는 브라우저 환경에서만 작동하는 기능입니다.'
    );
    return;
  }
  // 서버에서 데이터 받아오기
  const spriteData = fetch('/api/assets', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      target: 'sprites',
      version: 1,
    }),
  });

  const canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d');

  canvas.remove();
}
