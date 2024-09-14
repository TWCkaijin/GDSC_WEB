import React from 'react';
import { getPostBySlug } from '@/sanity/sanity-utils';
import RenderBodyContent from '@/components/blog/body-content';

const SingleBlogPage = async ({ params }: { params: any }) => {
  const post = await getPostBySlug(params.slug);

  return (
    <article className="my-10 mx-auto max-w-xl">
      <div className="mb-5">
        <h1 className="text-3xl font-bold py-2">{post.title}</h1>
        <p>{post.metadata}</p>
        <p className="pb-1">
          <span className="font-medium">Published:</span>
          {new Date(post.publishedAt).toDateString()}
          <span className="font-medium pl-2">by </span>
          {post?.author?.name}
        </p>
      </div>

      <article className="prose">
        <RenderBodyContent post={post} />
      </article>
    </article>
  );
};

export default SingleBlogPage;
