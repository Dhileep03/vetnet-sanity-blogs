export default {
    name: 'comment',
    type: 'document',
    title: 'Comment',
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
        name:'userName',
        type:'string',
        title:'User Name',
      },
      {
        name: 'content',
        type: 'text',
        title: 'Content',
      },
      {
        name: 'createdAt',
        type: 'datetime',
        title: 'Created At',
        hidden: true,
        initialValue: () => new Date().toISOString(),
      },
      {
        name: 'updatedAt',
        type: 'datetime',
        title: 'Updated At',
        hidden: true,
        initialValue: () => new Date().toISOString(),
      },
    ],
  };
  