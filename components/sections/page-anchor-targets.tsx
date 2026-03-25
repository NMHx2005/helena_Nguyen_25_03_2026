import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

/**
 * Section stubs with stable `id`s for navbar hash links.
 * Replace inner content as each real section is built.
 */
const ANCHORS: Array<{ id: string; title: string; kicker: string }> = [];

export function PageAnchorTargets() {
  return (
    <>
      {ANCHORS.map((block, index) => (
        <Section
          key={block.id}
          id={block.id}
          spacing="lg"
          variant={index % 2 === 1 ? "surface" : "default"}
          aria-labelledby={`${block.id}-heading`}
          className="scroll-mt-[calc(var(--navbar-height)+0.5rem)]"
        >
          <Container>
            <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
              {block.kicker}
            </p>
            <h2
              id={`${block.id}-heading`}
              className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl"
            >
              {block.title}
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
              Section placeholder — content will be added in the next implementation steps.
            </p>
          </Container>
        </Section>
      ))}
    </>
  );
}
