---
id: act-alma-winter
order: 5
kind: act
signal: uneven-income
signal_status: decided   # 22 September: worked from the records up, see ../docs/pmf-pass.md. Was can-they-carry-it, which cannot be summed until an offer is back and only says a shape. What fires is uneven-income, high: twelve months of her own statements without a gap, the winter at a quarter to a third of her usual, and her own words on the form saying so
supporting: [can-they-carry-it]   # the reason the swing matters: a fixed daily debit against a seasonal in-flow. On the shelf's band it is a shape, not a number, and the card says so
supporting_status: decided
counts: [money-in-by-period, money-in-swing-vs-own-periods, periods-covered, cost-to-them-over-the-term, what-they-can-bear]
counts_status: decided
about: [alma-vega, vega-landscaping]
to: alma-vega
arrives: 2026-09-21
documents: []
widgets: [timeline]
sure: "likely"
sure_because: "Her own statements show the swing. What she does about it, she has only said once."
when:
  mode: fresh
  words: "Today, while it is still a question and not an offer she has accepted."
watch:
  - for: "Alma's answer about the winter"
    next: "Whatever she says I'll keep as her own words, and weigh an offer's daily amount against it."
reply:
  module: buttons
actions:
  - label: "Send the Text"
    style: filled
    opens: draft
  - label: "Not Now"
    says: "Okay. I'll raise it again when an offer actually comes back."
  - label: "Not Relevant"
    opens: reasons
reasons:
  - label: "Already Asked"
    says: "Noted. Tell me what she said and I'll keep it rather than reading her statements for it."
  - label: "Not Your Call"
    says: "Understood. Whether a merchant can carry it sits with the funder, so I'll stop raising it before an offer."
  - label: "Already Knew"
    says: "Fair. I'll stop telling you things you already know about this one."
draft:
  title: "Draft"
  hand: "Send"
  sub: "in your voice · sends only when you say"
  footer: "Asked before the offer, not after."
phone:
  when: "Today"
  act: "Send Text"
  act_does: send
  view: "View Draft"
  subject: "The winter months"
  said: "Sent. I'll keep whatever she tells you."
  done: "Sent to Alma"
  done_text: "I've asked before an offer lands rather than after she has accepted one. Whatever she answers I'll keep as her own words and weigh the daily amount against it."
---

# Ask Alma Vega what the winter actually looks like

Her takings fall away from November and she told you so herself. A daily debit does not fall away with them.

## What happened

- Why now: the file went to the funders this morning. The moment to ask this is before an offer comes back, not after she has accepted one.
- She sent a year of statements rather than three months, so the swing is on her own figures: twelve months without a gap, and November to February at a quarter to a third of her usual month.
- She said it out loud on the way in, so this is not something I have read into her figures.
- What leaves the account on an advance is the same amount every working day, in the good months and the lean ones.

## Timeline

- On the way in · She says takings drop from November to February
- Her statements · Twelve months, the same swing, on her own figures
- This morning · The file goes out to the funders

## Sources

- handover · Her statements, and money in for each period they cover.
- handover · How many periods the documents cover, and whether they run without a gap.
- web-form · What she said on the way in about the winter.
- offering-told · The advance's term and how it is paid: a fixed amount every working day.
- people-told · Vega Landscaping, the deal you named, standing at submitted.

## Still unclear

- **What she actually does about it.** A seasonal business that knows it is seasonal usually has an answer: money put by, a second line of work, a quieter cost base. Her figures cannot tell me which, and it is the difference between a hard winter and a bad one.
- **What the offers will look like.** Nothing has come back yet, so the daily amount is not known and this is a shape of a problem rather than a number.

## What happens next

- Once she answers I'll keep it as her own words. When an offer comes back I'll weigh its daily amount against what she told me, and say plainly if the two do not sit together.

## The message

- opens with · Her own words on the form, "quiet from November to February": a date of theirs, in their words · dated-facts-in-their-words
- points at · Her own twelve months, and what a daily debit is: the same amount every working day. Nothing she has not shown · money-in-swing-vs-own-periods, periods-covered
- asks · One thing, a fact: what she does to get through those months · what-they-can-bear, goal-told
- holds back · Any daily amount, because no offer is back and the shelf's band is a range; and any verdict on whether she can carry it, which is the funder's and hers · cost-to-them-over-the-term

## The draft

Hi Alma,

Your file went out this morning, so this is the right moment for an awkward question rather than a week after an offer lands.

You mentioned takings drop off from November through to February. On an advance the repayment does not drop with them: it is the same amount out every working day, right through the winter.

What do you normally do to get through those months? If the honest answer is that they are tight, that is worth knowing now, because it changes which offer is worth taking rather than whether to take one.

Fede
