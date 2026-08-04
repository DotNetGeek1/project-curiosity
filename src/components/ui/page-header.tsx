import Image from 'next/image';

type PageHeaderImage = {
  src: string;
  width: number;
  height: number;
};

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  /**
   * Decorative collage shown beside the heading, echoing the home page hero.
   * It repeats the mood of the copy rather than adding information, so it is
   * hidden from assistive technology and dropped below `lg` where the words
   * need the width more than the decoration does.
   */
  image?: PageHeaderImage;
};

export function PageHeader({ eyebrow, title, description, image }: PageHeaderProps) {
  const heading = (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="mb-4 font-mono text-xs tracking-widest text-ink-faint uppercase">{eyebrow}</p>
      ) : null}
      <h1 className="font-serif text-4xl leading-tight sm:text-5xl">{title}</h1>
      {description ? <p className="mt-5 text-lg text-ink-muted">{description}</p> : null}
    </div>
  );

  if (!image) {
    return <header className="max-w-2xl py-16">{heading}</header>;
  }

  return (
    <header className="grid items-center gap-10 py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:gap-14">
      {heading}
      <Image
        src={image.src}
        alt=""
        width={image.width}
        height={image.height}
        priority
        sizes="(min-width: 1024px) 26rem, 100vw"
        className="hidden h-auto w-full lg:block"
      />
    </header>
  );
}
