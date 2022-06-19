import slugify from 'slugify';

export const mapGlobFiles = (obj) => {
  return Object.keys(obj).map((i) => {
    return obj[i].default;
  });
};

export const mapMdxMeta = (obj) => {
  return Object.keys(obj).map((i) => {
    // Get file name
    const defaultName = i
      .replaceAll('../', '')
      .split('/').pop()
      .split('.')[0];

    const title = obj[i].meta?.title || defaultName;

    return {
      title,
      slug: slugify(title, {
        lower: true,
      }),
      component: obj[i].default,
    };
  });
};
