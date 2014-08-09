---
layout: post
title: CVC Eye-Tracker
---

CVC Eye-Tracker is a software eye-tracker for regular webcams. It is based on the open source [Opengazer](https://github.com/opengazer/OpenGazer), but with [many added features](http://mv.cvc.uab.es/projects/eye-tracker) for robustness, ease of use, and higher accuracy. Our fork of the project is also hosted on [GitHub](https://github.com/tiendan/OpenGazer).

The eye-tracker currently works on Debian systems (Ubuntu, Raspbian, etc.) and Mac OS X (tested on 10.6, 10.8 and 10.9), but work on migration to Windows is *slowly* going on.

The big problem yet to tackle is head pose variance; that is, the drop in accuracy caused by head movements. Currently we are investigating gaze tracking methods to solve this issue.

The most recent published paper from Journal of Eye Movement Research (JEMR) can be downloaded [here](http://www.jemr.org/online/7/3/2).