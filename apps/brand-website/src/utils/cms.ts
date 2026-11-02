const DEFAULT_CMS_URL = 'https://cms.olivetreehub.com';
const DEFAULT_CMS_TOKEN =
  'Bearer 578decf67c22e8c30b2ff03f40d150fae04d3d0e36f53e4f4f0df20c73964680976850e07e369dd83f4c6a83162b0a15d6307aff94fda6e823d47a6f1fe93a8e8bdea0e6d73f7ecc20f2858ca70abd556f383fb5aeee499eddd64ee8d7a859c332300ede2a32cf6e6c1e6c9a5b4578b675665abb677850bf39c6cecd59f557de';

export const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL || process.env.CMS_URL || DEFAULT_CMS_URL;
export const CMS_TOKEN = process.env.CMS_TOKEN || DEFAULT_CMS_TOKEN;
export const CMS_AUTH_HEADERS = {
  Authorization: CMS_TOKEN,
};

export const cmsMediaUrl = (path?: string | null) => {
  if (!path) {
    return '';
  }

  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  return `${CMS_URL}${path}`;
};
