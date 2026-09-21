---
id: act-felton-price
order: 9
kind: act
signal: blocker
signal_status: provisional   # mapped by reading the card, not yet confirmed
supporting: [price-barrier]
supporting_status: provisional   # the reads its other counts belong to, not yet confirmed
counts: [repeated-objection-count, objection-name-match, your-price]
counts_status: provisional   # which numbers this quotes, not yet confirmed
about: [stephen-walsh, felton]
to: stephen-walsh                # who the move reaches; one move per person at a time
arrives: 2026-09-18             # the day the tool puts it on the home
documents: [partial-rollout-price-sheet]
sure: "likely"
sure_because: "A pattern: all four of Stephen's messages mention the price."
when:
  mode: rhythm
  until: 2026-09-18
  words: "Any day this week."
watch:                        # what I watch for once you act; a then card arrives only if it comes
  - for: "Stephen's reply"
    then: act-felton-director
    next: "If the budget is still the answer, Shabana's director is next."
reply:
  module: buttons
actions:
  - label: "Send the Offer"
    style: filled
    opens: draft
  - label: "Not Now"
    says: "Okay. I'll leave it and raise it again only if something changes."
  - label: "Not Relevant"
    opens: reasons
reasons:
  - label: "Already Knew"
    says: "Fair. I'll stop telling you things you already know about this one, and try to notice earlier next time."
  - label: "Wrong Person"
    says: "Noted. I'll stop raising this person for this and look for who it should be."
  - label: "Not a Target"
    says: "Understood. I'll take this off the board and not raise it again unless you put it back."
draft:
  title: "Draft"
  hand: "Send"
  sub: "in your voice · sends only when you say"
  footer: "Attached: the partial rollout price sheet."
phone:
  when: "Any day this week"
  act: "Send Message"
  act_does: send
  view: "View Draft"
  subject: "A smaller first step for Felton"
  said: "Sent. I'll watch for Stephen's reply."
  done: "Sent to Stephen"
  done_text: "The partial rollout price sheet went with it. If the budget is still the answer, Shabana's director is next."
---

# Offer Felton the partial rollout

Stephen Walsh's objection is the annual price, not the product. The partial rollout costs a third and answers the question he is actually asking.

## What happened

- Why now: Stephen's email last Wednesday ended "we can't find that in this year's budget". Left alone, that sentence becomes the decision.
- Felton is at coalition: Shabana Akhtar is for it. Stephen is finance, and his objection is the only one on the thread.
- Every message from Stephen mentions the annual figure. None questions what BOPS does. The one thing in the way is the size of the number.
- The partial rollout exists for exactly this: one service, live cases, about a third of the price, and a path to the rest next financial year.

## Sources

- gmail · The Felton thread since June: 18 messages. Stephen's four all mention price.
- gmail · Stephen's message of 9 September.
- drive · The partial rollout price sheet.
- goal-told · Your goal: partial adoption first is the plan, not a concession.

## Still unclear

- Whether a smaller number reads as a discount to him. It isn't one, and the email says so.

## What happens next

- After you send it I'll watch for Stephen's reply. If the budget is still the answer, the next card is Shabana's director, who sets Felton's priorities.

## The draft

Hi Stephen,

You said the annual figure isn't in this year's budget, and I'd rather work with that than argue with it.

East Marston didn't start with the whole thing either. A first step can be one service on live cases only, which comes in at roughly a third of the figure you've seen. It is a smaller commitment, not a discount: the rest is there when the next budget round allows.

The one-page breakdown is attached.

Fede
