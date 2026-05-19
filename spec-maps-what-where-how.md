# THE AGENTIC LAB

# What, Where, How

*A prompt engineering framework for coding agents — and the spec maps that make it work*

---

*Prepared for The Agentic Lab*

---

Here's a simple prompt engineering trick while working with coding agents to perform work. I call it "What, Where, How".

The **What** tells the model what to do and what supplementary information it needs to succeed.

The **Where** tells the model where it needs to look to find the information it needs.

The **How** tells the model how to perform the task and how to find the information it needs.

The main reframe that this framework should give you is a consistent reminder that telling the model where to look and controlling what it sees is one of the most important ways to steer model behavior.

Which leads us to the crux of this module: **Spec Maps**.

> *"Spec maps are one of the most important and impactful ways to get the model exactly what it needs when it needs it."*

Since LLMs are stateless, Claude Code will wake up in a repository and have absolutely no information or idea about the repository it is in. It's our job to get the model up to speed on exactly the information it needs to do the task at hand. Ideally we do this as quickly as possible.

Most people assign this functionality to `CLAUDE.md`.

However, `CLAUDE.md` is the wrong choice for the following reasons:

- One file is too inflexible for multi-feature codebases
- Automatic injection reduces control of context management
- The Claude Code system prompt states that `CLAUDE.md` may or may not be useful, making it carry less weight.

`CLAUDE.md` is a novel that gets injected no matter what. Spec maps are a map that allows us to get the model up to speed on exactly what it needs and nothing more.

> **Bonus**
>
> When you create and maintain spec maps, you feel more in tune with the actual implementation of your codebase, allowing you to keep tabs on your applications without spending tons of time reading code. Plus, if you have to delete your codebase, you can use specs to get at least 80% of the way to re-creating it.

---

## What a Spec Map Is

A spec map is a set of files, usually in a `specs/` folder, that explain the system in a way an agent can use immediately, allowing you to get the model up to speed with exactly the information it needs at the right time.

```
specs/
  README.md
  business.md
  dashboard.md
  worker-system.md
  clients.md
  zoom-pipeline.md
  ...
```

`specs/README.md` is the entry point. It is the map of the map. It tells the model what the application is, how the major parts connect, and which spec covers which domain/feature.

Then each domain/feature gets its own spec document.

The important part is that each spec is not just documentation. It is shaped around the three things the model needs in order to work well, conveniently: **The What/Where/How Framework**.

---

## The Three Parts of a Good Spec Document

### The What

First, we have the What. The What tells the model what this part of the system is and what it is for.

It should explain:

- What this part of the system does
- What it is responsible for
- What it is not responsible for
- How it fits into the larger system

### The Where

Then, we have the Where, which tells the model where the relevant implementation actually lives in the codebase.

The Where lists relevant files and what they contain. For example:

```
app/tasks/page.tsx          - Task list page
app/api/tasks/route.ts      - Task API route
components/TaskCard.tsx     - Card UI for one task
lib/tasks.ts                - Task data access layer
lib/types.ts                - Shared task types
data/tasks.json             - Stored task records
```

This gets the model up to speed on the exact code it's currently dealing with, and gives it the opportunity to read files as it needs, or spawn subagents to read those files in a more structured and directed fashion than if we just launched subagents to read just anything.

### The How

Finally, we have the How, which is how the model should interact with the feature, best practices, caveats, etc.

Keep this section minimal and only put in what you would be willing to manually type yourself each time.

> **Good How rule**
>
> "Pipelines are to be added in `/pipelines.json`, not built outside of that file" — the kind of caveat the model would consistently overlook otherwise.

Where "Do not update `lib/types.ts` under any circumstance" is not necessary due to the fact that the model isn't being forced to follow this instruction. A better example to prevent that would be to create a hook that looks for if `lib/types.ts` is being modified and rejects the modification deterministically.

> *"Determinism > Probabilism."*

This is not where you dump every opinion you have about software.

Here's my heuristic for what belongs in here:

1. **Consistent mistakes** — The model would consistently make mistakes if it was not mentioned here.
2. **Cannot externalize** — We cannot externalize the rule/best practice to a hook that will deterministically prevent it.

The focus is to tell the model how work is done here so it does not default to generic habits from some other codebase.

Sometimes this may include:

- Key data models
- Cross-system dependencies

---

## The Workflow

Once you have spec maps, the workflow becomes very simple:

1. **Open Claude** — in the correct repo
2. **Study `@specs/README.md`** — optional for if it needs a general grasp of the whole system
3. **Study `@specs/[relevant-spec].md`**
4. **Give the task**

---

## What To Put In specs/README.md

The root README should give the model the broad system map:

- What the application does
- The major features/domains
- How those parts connect (cross data flow)
- Which spec covers which area
- Any global best practices/rules that apply everywhere

---

## Keep Spec Documents Small Enough

Rule of thumb. Specs should be between 0 and 1000 lines. Ideally in the 50–500 line range.

If a spec gets too long, split it into sub-specs.

```
specs/
  frontend/
    dashboard.md
    components.md
  backend/
    api.md
    workers.md
```

---

## Make Specs The Source Of Truth

Spec maps will only work if they remain the primary source of truth. Your agent has to trust them over reading code. If the agent starts blindly reading a bunch of code, it will bloat out its context window.

However, specs as the source of truth is hard to maintain because code drifts quite consistently.

So there are a couple of solutions for this. Pick and choose based on your situation:

1. **Manual maintenance** — Maintain and track the specs yourself as a consistent habit. This is nice and helps you keep a very strong grasp of your codebase while maintaining a fantastic spec map, but this is very hard and time consuming.
2. **Hooked auto-sync** — Set up a Pre or PostToolUse hook with matcher Bash that inspects the command, sees `git commit`, and launches a `claude -p` instance to read both the relevant specs and code diffs to do a MINIMAL change to the specs to keep them fresh. I.e. it is literally only allowed to minimally change things that are no longer true and optionally add. (See resources for an example of this, fit it to your own needs.)
3. **`/sync-specs` slash command** — A slash command that allows the model to spawn parallel subagents and suggest spec syncs.

That is what keeps the map reliable.

---

## Why This Compounds

The benefits are larger than just better prompts.

- Agents in automated workflows can start with useful context even when no human is around to steer them
- New developers can get oriented without reading half the repo
- Specs carry more meaning per token than raw code, which makes context windows go further
- A mature spec set can capture enough of the system that you can recreate most of the product from the specs alone
- Reading a spec file with the `@` symbol in Claude Code causes an instant injection, making this a much quicker alternative to spawning subagents to explore the repo

---

*The Agentic Lab │ Agentic Lab*
