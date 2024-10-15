export default {
    name: 'like',
    type: 'document',
    title: 'Like',
    fields: [
      {
        name: 'blog',
        type: 'reference',
        to: [{ type: 'blog' }],
        title: 'Blog',
      },
      {
        name: 'userId',
        type: 'string',
        title: 'User ID',
      },
      {
        name: 'likedAt',
        type: 'datetime',
        title: 'Liked At',
        initialValue: () => new Date().toISOString(),
      },
    ],
  };
  