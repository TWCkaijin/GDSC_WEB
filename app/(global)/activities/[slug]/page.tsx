import { getPostBySlug, imageBuilder } from '@/sanity/sanity-utils';
import RenderBodyContent from '@/components/blog/body-content';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { AVATAR_FALLBACK } from '@/config/const';
import { format } from 'date-fns';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Share } from 'lucide-react';
import GoBackButton from '@/components/blog/go-back-btn';

const SingleBlogPage = async ({ params }: { params: any }) => {
  const post = await getPostBySlug(params.slug);

  return (
    <article className="mb-10 mx-auto max-w-xl">
      <GoBackButton />
      <div className="mb-5">
        <p className="text-slate-500 text-sm">
          Published on {format(new Date(post?.publishedAt), 'MMM d, yyyy')}
        </p>
        <h1 className="text-4xl font-bold py-2">{post.title}</h1>
        <p className="text-xl text-slate-600">{post.metadata}</p>
        <div className="my-4 flex space-x-2 items-center">
          <Avatar>
            <AvatarImage
              src={imageBuilder(post.author.image)?.url()}
              alt={post.author.name}
            />
            <AvatarFallback>{AVATAR_FALLBACK}</AvatarFallback>
          </Avatar>
          <p>{post.author.name}</p>
        </div>
      </div>

      <Separator />
      <div className="flex items-center justify-end space-x-4 my-2">
        <Button variant="ghost" size="icon">
          <Share className="w-5 h-5" />
        </Button>
      </div>
      <Separator className="mb-4" />
      <article className="prose">
        <RenderBodyContent post={post} />
      </article>
    </article>
  );
};

export default SingleBlogPage;
