import Reveal from './reveal';

const SectionHeading = ({ eyebrow, title, description, align = 'left' }) => {
  const centered = align === 'center';

  return (
    <Reveal className={centered ? 'text-center' : ''}>
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg ${
            centered ? 'mx-auto' : ''
          }`}
        >
          {description}
        </p>
      )}
      <div
        className={`mt-6 h-0.5 w-12 rounded-full bg-primary/70 ${
          centered ? 'mx-auto' : ''
        }`}
      />
    </Reveal>
  );
};

export default SectionHeading;
