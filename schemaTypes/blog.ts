import { title } from "process";

export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
      },
      {
        name:'blogImage',
        type:'image',
        title:'Blog Image'
      },
      {
        name: 'blogVideo',  
        type: 'file',  
        title: 'Blog Video',
        options: {
          accept: 'video/*',  
        },
      },
      {
        name: 'content',
        type: 'array',
        title: 'Content',
        of: [{ type: 'block' }],
      },
      {
        name: 'tags',
        type: 'array',
        title: 'Tags',
        of: [{ type: 'string' }],
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
        name: 'createdAt',
        type: 'datetime',
        title: 'Created At',
        hidden: true,
        initialValue: () => new Date().toISOString(),
      },
      {
        name: 'comments',
        type: 'array',
        title: 'Comments',
        hidden: true,
        of: [{ type: 'reference', to: [{ type: 'comment' }] }],
      },
      {
        name: 'likes',
        type: 'array',
        title: 'Likes',
        hidden: true,
        of: [{ type: 'reference', to: [{ type: 'like' }] }],
      },
    ],
  };
  