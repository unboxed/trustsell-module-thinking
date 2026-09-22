---
id: act-joyce-again
order: 8
kind: act
signal: coming-round-again
signal_status: decided   # 22 September: worked from the records up, see ../docs/pmf-pass.md. The term is a told fact and the funding date is on the CRM, so four fifths is arithmetic; she has bought once, so "near the end" is the term itself and the read is soft for it
counts: [how-far-through-the-term, what-was-bought-before, times-they-have-bought]
counts_status: decided
about: [joyce-amadi, oak-row-bakery]
to: joyce-amadi
arrives: 2026-09-22
documents: []
widgets: [timeline]
sure: "likely"
sure_because: "The term and the funding date are on record. That she will want another is not."
when:
  mode: rhythm
  words: "Any day this week. She went elsewhere last time at about this point."
watch:
  - for: "Joyce's reply"
    next: "If she is thinking about it I'll start a new deal rather than reopen the old one."
reply:
  module: buttons
actions:
  - label: "Send the Text"
    style: filled
    opens: draft
  - label: "Not Now"
    says: "Okay. I'll raise it again when she is closer to the end of the term."
  - label: "Not Relevant"
    opens: reasons
reasons:
  - label: "Too Early"
    says: "Noted. Tell me how far through you like to ask and I'll use that instead of the term."
  - label: "Already Spoke"
    says: "Noted. I'll mark it and stop raising it."
  - label: "Not a Target"
    says: "Understood. I'll take this off the board and not raise it again unless you put it back."
draft:
  title: "Draft"
  hand: "Send"
  sub: "in your voice · sends only when you say"
  footer: "An offer to look, not a pitch."
phone:
  when: "Any day this week"
  act: "Send Text"
  act_does: send
  view: "View Draft"
  subject: "Coming to the end of this one"
  said: "Sent. I'll watch for what she says."
  done: "Sent to Joyce"
  done_text: "If she comes back interested I'll open it as a new deal rather than reopen the old one, which is how a second advance is counted here."
---

# Talk to Joyce Amadi before this one runs out

She is four fifths of the way through what she took in January. Last time she reached this point she went to somebody else.

## What happened

- Why now: she is near the end of the term, and this is the stretch where asking "and then what" is a normal question rather than a push.
- She was funded in January and has been repaying since, without anything on record going wrong.
- The time before this one, she took an advance from somebody else: "a firm called Rapid Merchant, they were quick but I'm still not sure what it cost me", in her own text in January. She came to you after, which means she is willing to, and it also means she shops. No count holds that: it is her words on the thread, and the one thing she asked for was to be told the cost clearly.
- Nobody has spoken to her about what comes next.

## Timeline

- January · Funded, and repaying since
- Before that · She took an advance elsewhere
- Now · Four fifths through the term

## Sources

- crm · The deal record: funded in January, and where it stands now.
- sms · Her text of 9 January, naming the firm she went to last time and asking you to be clearer about the cost than they were.
- offering-told · The advance's term and how it is paid, which is what "four fifths through" is measured against.
- people-told · Oak Row Bakery, the deal you named, standing at coming round again.
- handover · What she has sent since the sale.

## Still unclear

- **Whether she wants anything at all.** How far through a term somebody is says when the door is open, not whether they want to walk through it. Nothing here says she needs money.

## What happens next

- If she comes back interested I'll open it as a new deal rather than reopen this one, because a second advance on the same account is a new deal and not a change to the old one. If she says not now, I'll leave it until the term actually ends.

## The message

- opens with · Her own clock: the advance she took in January is near its end. A date of hers, from the term and the funding day · how-far-through-the-term
- points at · What she would qualify for now, given how this one has run, and the promise to say plainly if it is not worth doing, which is what she asked for in January · what-was-bought-before, sms
- asks · One thing: worth a look. A question she can say no to · how-far-through-the-term, goal-told
- holds back · Any figure, because no funder has been asked; any mention of the firm she went to before, which she named and you did not · times-they-have-bought, dated-facts-in-their-words

## The draft

Hi Joyce,

You are coming to the end of the advance you took in January, so this felt like the right moment rather than the week after it finishes.

No pitch. If you want, I will look at what you would qualify for now, given how this one has run, and tell you plainly whether it is better than what you took in January. If the answer is that it is not worth doing yet, I will say that too.

Worth a look?

Fede
