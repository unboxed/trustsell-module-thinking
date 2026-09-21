---
id: innocent-explanation-scan
label: "Reasons they may be away"
used_by: [cooling-champion, enough-tries]
over: [person-history]
over_status: decided   # decided 21 September, when the counts were written
defined: true
counts: Everything on record that would explain the silence without meaning anything: leave, a bounce, a job change, a status, a shut office.
needs: [calendar#calendar-event, calendar#free-busy, calendar#status-event, gmail#email-message, linkedin#job-change, slack#slack-user]
breaks: An absent explanation is not evidence of a no. The scan returns what it found, and finding nothing is not a finding.
---

# Reasons they may be away
## What it counts

Everything on record that would explain a silence innocently: an out of office or a status saying
they are away, a bounce, a job change, a shared calendar showing leave, a workspace account
deactivated, a public holiday in their country.

It exists to stop the reads above it drawing a conclusion from silence that silence cannot carry.
Every read in this library that counts quiet consults it first, and the honest form of its answer
is "here is what I found", never "there is nothing, so they are avoiding you". Finding nothing is
not a finding, and the read says so.

## What it cannot see

Almost every real reason people go quiet: illness, a reorganisation, a bereavement, a project that
ate the month, a boss who said stop. The scan sees the handful of reasons that happen to leave a
record, which is why an empty result changes nothing.
