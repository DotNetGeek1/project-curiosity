# DSN-006: Motion and Interaction

| Field      | Value                      |
| ---------- | -------------------------- |
| Status     | Accepted                   |
| Version    | 1.0                        |
| Depends On | DSN-001, DSN-002, UX-RULES |

## Purpose

Motion in Project Curiosity exists to explain state, relationship or sequence. It is not decoration and must never become a prerequisite for reading.

## Principles

- Motion teaches or confirms.
- The interface responds quickly and calmly.
- Nothing loops merely to appear alive.
- Scroll position is controlled by the visitor.
- Reduced-motion mode is a first-class design state.
- Hover is an enhancement, not an information channel.

## Permitted uses

- revealing the content of an explicit disclosure;
- confirming a navigation or control state;
- showing a relationship or transition in an experiment diagram;
- highlighting the active section of a long page;
- modestly introducing a page element after it becomes available, where this does not delay access;
- demonstrating a product interaction inside a controlled evidence example.

## Prohibited uses

- automatic hero animation;
- typing-effect headings;
- parallax reading sections;
- smooth-scroll hijacking;
- looping particles or ambient movement;
- animated backgrounds behind text;
- motion that delays navigation;
- scroll-triggered content that stays hidden if scripts fail;
- bouncing or elastic controls;
- cursor-following decoration.

## Interaction feedback

Interactive elements must provide immediate feedback through at least one of:

- visible focus;
- state change;
- text or icon change;
- pressed or expanded semantics;
- concise status messaging.

Motion may reinforce this feedback but not replace it.

## Timing

- Hover and focus transitions should be fast.
- Disclosure transitions should be short enough not to impede repeated use.
- Explanatory motion may be slower only when the timing itself communicates sequence.
- No transition should force a visitor to wait before acting again.

## Easing

Use simple, calm easing curves. Avoid spring effects unless a future interactive experiment specifically requires and justifies them.

## Scroll behaviour

- Native scrolling is the default.
- Anchor navigation may use smooth scrolling only when user preferences allow and focus is managed correctly.
- Sticky elements may not trap or obscure content.
- Scroll-linked animation is excluded from the MVP.

## Reduced motion

When `prefers-reduced-motion` is enabled:

- remove non-essential transitions;
- disable automatic and looping animation;
- replace animated diagrams with their complete static state;
- avoid smooth scrolling;
- keep state changes immediate and understandable.

Reduced motion must be tested, not assumed to work because a media query exists.

## Interactive diagrams

An interactive diagram must begin as a complete static diagram. Enhancement may add:

- selectable nodes;
- relationship highlighting;
- step-by-step sequence controls;
- expanded annotations.

It may not require dragging through a canvas to access core information.

## Acceptance criteria

- [ ] Every animation has an articulated informational or interaction purpose.
- [ ] All content is available when animation is disabled.
- [ ] Reduced-motion behaviour is explicitly tested.
- [ ] No MVP page hijacks scrolling or navigation.
- [ ] Keyboard and touch users receive equivalent feedback.
- [ ] Motion durations do not impede repeated use.
