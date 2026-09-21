# The seller with a firm's 21 questions: the third set

The 26 in [`sales-questions.md`](sales-questions.md) are one seller's, reaching out to councils
alone. The 22 in [`volume-questions.md`](volume-questions.md) are the other end, a broker moving
one-owner deals in hours. This is the third set, and it is **not** the middle of that spectrum. It
is the patient end again, from an enterprise account executive who sells health and safety software
into large organisations over eighteen to twenty-four months, with two things the first seller does
not have:

- **A firm around her.** A business development rep does her outreach on a cadence. Solutions
  engineers demo. A bid team answers tenders. Fifty colleagues' calls are recorded and she can
  listen to any of them. Her manager and her chief revenue officer watch the deal from a stage
  field and a one-line next step.
- **A formal buying process on the other side.** Tenders, procurement, hundreds of requirements,
  and an internal decision at her own firm about whether to bid at all.

It exists for the same reason the second set does: a question here that nothing in the library
answers is a hole, not a quirk of one trade. Its source is
[`scenarios/cority/docs/what-cority-told-us.md`](../scenarios/cority/docs/what-cority-told-us.md),
an interview on 17 December 2025, kept with names out.

**These are the seller's questions to herself**, the same as the other two sets, never the
questions she asks the buyer out loud.

## The list

1. What does this organisation say about itself in public that I could build a case on?
2. Which way in is open here, the business side or IT, and at what level should I go in?
3. What do they already run, and what budget sits behind it?
4. Who here will speak for me when I am not in the room?
5. Why is that person invested, and what would make them look good inside their own organisation?
6. Are they discovering the best fit with me, or running a process on paper?
7. Have they put me in front of the people I asked to meet?
8. What has the buyer not done yet on their side, and which of those holes can I help fill?
9. What did I promise them, or leave on the back burner, that I have not come back on?
10. How long has it been since anyone spoke, and was there a deadline behind the silence?
11. How many times has anyone from my firm reached out, and is this past the point of interest?
12. What has my firm already done at this organisation, and what was said?
13. What did we do the last time we sold into one like this, and what did it save them?
14. What has happened on this deal in the last two weeks, in a paragraph?
15. Which of my fifteen live conversations needs me today?
16. Which of their own priorities should my next message speak to?
17. How did I come by this person, and can I say so out loud?
18. Am I pulling this deal into my quarter rather than theirs?
19. Should my firm bid on this at all?
20. Who did I meet at that event, and what were they there for?
21. Which of the people I spoke to years ago is ready now?

## Where each question comes from

All of it is first-hand, from one interview, so nothing here is inferred from published trade
writing the way half of the volume set is. The column says which part of the conversation each
question is read out of. The wording is mine; the question is hers.

| Questions | Where from |
|---|---|
| 1, 2, 3, 16 | **How she opens an account.** She maps the organisation on LinkedIn Sales Navigator, reads its annual and sustainability reports for the safety metrics, and builds a business case before reaching out. Two doors: the business side, who own the strategy, and IT, who rarely decide but know everything. The level depends on the size of the account. She asks IT how many applications they manage and what their budget is, which tells her what she can sell and at what price. Her definition of a personal message is one about their five priorities, not her product. |
| 4, 5, 6, 7 | **What wins.** "Any deal you win, you win very early, and it's because of how they engage with you." They get people together when she asks and put her in front of the stakeholders she names, rather than running a strict process on paper led by procurement. Deciders rarely embed in the process, so the work is finding who advises them and who will talk on her behalf when she is not in the room. A champion is invested for a reason, and her job is to find it and make them look good internally. |
| 8 | **The gap nothing flags.** "Flag where the gaps are between where you need to be and what the customer hasn't done. Have you had IT discussions? Have they got budget approved? Where are the holes I need to help them fill?" |
| 9, 10 | **What she missed.** A prospect asked for pricing and she put it on the back burner "because it's never about the pricing"; they came back a week later saying they needed the conversation. And the thing she says her firm loses most: "you haven't talked to this person in two weeks and there was a deadline". |
| 11, 12, 13 | **Her firm.** Her business development rep runs a cadence and will keep going past seven reach-outs, which she thinks is past the point of interest. Every call is recorded and integrated into the CRM, so anyone in the company can open her opportunity and hear them. The internal digging she wants help with is "how has this been done before, what did they save". |
| 14, 15 | **What the week looks like, and what her executives want.** About fifteen customer conversations a week, all at different stages. Her CRO sees a stage and a small next-step field for fifty reps, and messages her at nine on a Friday asking where a deal is. What executives actually want is "a little paragraph of latest activity, what's happened in the last two weeks". |
| 17, 18 | **Rules, and her own incentives.** No regulation beyond GDPR: be able to say how you got someone's details and stop when they ask, and she is open about it ("I reached out to this person on LinkedIn that I knew, and they sent me your details"). Against that, her own incentives can cut across the buyer's timing: "they're telling me if you bring it into Q4 we'll give you a 40% bonus". |
| 19, 20 | **Two moments no other set has.** On a tender she must first convince her own company to bid, at an intake call, before bringing a team round it. And after a conference marketing hands her a spreadsheet of twenty-five people who attended and what they were interested in, and the follow-up is hers, outside every system. |
| 21 | **A small industry.** People she spoke to five or six years ago with no need come back "ready to have a conversation now". |

## What this set is not

It is not a third scenario. There is no `scenarios/cority/world/` and no cards; the map's rule
still holds, that a third world earns its place once the two ends have shown what the spectrum is.
What this earns now is a third lens.

It is not a second patient set either, although it overlaps the first heavily. Where a question
here is the first seller's question in another voice, that is worth knowing: it says the read is
not one man's habit. The genuinely new ones are 8 (what the buyer has not done), 12 and 13 (what my
own firm already did, here and elsewhere), 14 (the last fortnight in a paragraph), 18 (my own
quarter against their timing), 19 (whether to bid at all) and 20 (people met at an event).

The ids are `F1` to `F21`, beside `Q1` to `Q26` and `V1` to `V22`. A signal names the questions it
answers in `answers:`, from any of the three sets, and `build.js` checks the id resolves: each doc
is matched by its exact filename, and the numbered list under its **The list** heading is the set.

## What it exposes

Nothing yet. [`coverage.md`](coverage.md) runs the first two sets question by question and has not
been run against this one. Doing that is the next thing on its list, and until it is, the count of
holes in this library is a count against two sets, not three.
