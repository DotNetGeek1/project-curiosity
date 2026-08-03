import type { Metadata } from 'next';
import Link from 'next/link';

import { Container } from '@/components/layout/container';
import { PageHeader } from '@/components/ui/page-header';
import { buildPageMetadata } from '@/lib/metadata';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = buildPageMetadata({
  title: 'How I Ended Up Here',
  description:
    'How curiosity, technical leadership and a habit of building first shaped the way I approach engineering.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <Container width="prose">
      <PageHeader eyebrow="How I ended up here" title="I have always learned by building" />

      <div className="prose max-w-none pb-12 prose-neutral prose-headings:font-serif prose-headings:font-normal prose-a:text-accent-rust">
        <p>
          I am a software engineer and technical leader with more than twenty-five years of
          experience, but the part of the job I still enjoy most is the beginning: the point where a
          problem is still unclear and the solution has not been decided yet.
        </p>
        <p>
          I like turning loose ideas into something concrete enough to test. Sometimes that means
          writing the first proof of concept. Sometimes it means laying down the reusable
          foundations that help a wider team move faster. Sometimes it means disappearing into an
          unfamiliar technology because that is where the problem has led.
        </p>

        <h2>The same pattern keeps repeating</h2>
        <p>
          Across support, application development, architecture, engineering leadership, cloud
          platforms and AI, I have usually gravitated towards the problems that do not already have
          an obvious answer.
        </p>
        <p>
          I notice friction. I ask whether it has to work that way. I build something small enough
          to test the idea. Then I follow the evidence.
        </p>
        <p>
          That habit has led me into frontend work, backend systems, infrastructure, developer
          tooling, machine learning, agent workflows, mobile games and a few experiments that are
          much harder to explain in one sentence.
        </p>
        <p>The technology changes. The pattern does not.</p>

        <h2>Leadership never replaced engineering</h2>
        <p>
          I have led engineering teams of up to ten developers and worked with technical leads,
          product owners, analysts, customer-service teams and directors.
        </p>
        <p>
          Even when my role included line management, planning and delivery responsibility, I
          remained actively involved in architecture and code. I was often the person working ahead
          of the team: building a technical spike, testing a new approach, creating boilerplate or
          reference implementations and removing the uncertainty before wider development began.
        </p>
        <p>
          I enjoy helping engineers make good decisions, but I am happiest when I am close enough to
          the work to understand the trade-offs properly.
        </p>

        <h2>I do not collect technologies for their own sake</h2>
        <p>
          Most of the technologies I have learned entered my career because a problem required them.
        </p>
        <p>
          Cloud infrastructure, Kubernetes, AI, frontend frameworks, build systems and low-level
          languages were not separate career plans. They were things I needed to understand in order
          to build, improve or investigate something I cared about.
        </p>
        <p>
          That is why my experience is broad. I am comfortable moving across layers, but I try not
          to confuse range with mastery. When I enter an unfamiliar area, I start by making the
          uncertainty explicit, building something testable and learning from people who know more
          than I do.
        </p>

        <h2>A CV can only show the compressed version</h2>
        <p>
          A CV can say that I solve ambiguous problems, learn quickly and stay hands-on. It cannot
          show the messy middle: the wrong assumptions, failed prototypes, architecture changes and
          small discoveries that made the final result possible.
        </p>
        <p>I built Project Curiosity to document that part.</p>
        <p>
          The site is an engineering notebook rather than a traditional portfolio. Each experiment
          begins with a question and follows the work far enough to show what I tried, why I made
          particular decisions and what I would do differently now.
        </p>

        <h2>Most side projects begin with &ldquo;I wonder if...&rdquo;</h2>
        <p>
          Outside work I am usually experimenting in <Link href={siteConfig.github}>GitHub</Link>.
        </p>
        <p>
          Some projects are practical tools. Some are games. Some explore AI, physics, knowledge
          representation or alternative ways of building software and the web. A few have grown far
          beyond the original question, which is usually how I know I have found something
          interesting.
        </p>
        <p>
          Building things is how I learn. It is also how I relax, although{' '}
          <Link href="/experiments/morris">Morris</Link> has occasionally challenged that
          definition.
        </p>

        <h2>What I am looking for</h2>
        <p>
          I am most interested in roles where I can combine product thinking, technical depth and
          hands-on engineering.
        </p>
        <p>
          I enjoy working with small, capable teams on problems where the path is not fully mapped
          out, the engineering decisions matter and there is room to improve how both the product
          and the team work.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-6 pb-20">
        <Link
          href="/experiments"
          className="rounded-xs bg-ink px-5 py-2.5 text-sm text-paper transition-colors hover:bg-accent-rust"
        >
          Explore the experiments
        </Link>
        <Link
          href={siteConfig.github}
          className="text-sm text-accent-rust underline underline-offset-4"
          target="_blank"
          rel="noreferrer noopener"
        >
          View my GitHub
        </Link>
        <Link href="/contact" className="text-sm text-accent-rust underline underline-offset-4">
          Get in touch
        </Link>
      </div>
    </Container>
  );
}
