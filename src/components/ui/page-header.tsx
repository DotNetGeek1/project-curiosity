type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header className="max-w-2xl py-16">
      {eyebrow ? (
        <p className="mb-4 font-mono text-xs tracking-widest text-ink-faint uppercase">{eyebrow}</p>
      ) : null}
      <h1 className="font-serif text-4xl leading-tight sm:text-5xl">{title}</h1>
      {description ? <p className="mt-5 text-lg text-ink-muted">{description}</p> : null}
    </header>
  );
}
