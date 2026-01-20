---
title: Gender Bias in Video Game Dialogue
description: Rennick and Roberts performed the first large-scale test of gender imbalance in video game dialogue. 
source: Rennick, S. Clinton, M., Ioannidou, E., Oh, L, Clooney, C., E.T., Healy, E., Roberts, S. G. (2023), "Gender Bias in Video Game Dialogue", *Royal Society Open Science*.
url: https://royalsocietypublishing.org/doi/10.1098/rsos.221095
category: gender
tags: [journal article, gender bias, VGDC]
---

A study led by [Stephanie Rennick](https://www.stir.ac.uk/people/1932673) at the University of Stirling and [Seán Roberts](https://www.cardiff.ac.uk/people/view/1742244-) at Cardiff University performed the first large-scale test of gender imbalance in the dialogue of 50 role-playing games. It discovered that games include nearly twice as much male dialogue as female dialogue on average.

<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.1.4/Chart.bundle.min.js"></script>

<script>

	function setupPiechart(){
        var ctx = document.querySelector("#chart-line");
        var myLineChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ["Female","Male","Non-binary"],
                datasets: [{
                    data: [1997203, 3682766, 11799+27+705],
                    backgroundColor: ["#eb0085", "#75abcf", "#a644fc"]
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Number of Words of Dialogue'
                }
            }
        });
	}

    document.addEventListener('DOMContentLoaded', setupPiechart);
</script>

<canvas id="chart-line" class="chartjs-render-monitor" style="display: block; width: 672px; height: 336px;" height="420" width="840"></canvas>

### Main Findings

-   35% of words were spoken by female characters.
-   29% of characters were female, which suggests the imbalance is driven by a lack of female characters.
-   94% of games had more male dialogue than female dialogue.

You can [read an accessible summary](https://theconversation.com/male-video-game-characters-speak-twice-as-much-as-females-largest-study-of-its-kind-reveals-199061) at _The Conversation_, [see the press release](https://correlation-machine.com/VideoGameDialogueCorpus/downloads/VGDC_PressRelease.pdf), or [find the full paper here](https://theconversation.com/male-video-game-characters-speak-twice-as-much-as-females-largest-study-of-its-kind-reveals-199061).

<div class="yt-embed">
    <iframe width="800" height="450" src="https://www.youtube.com/embed/uezg7hfg_Gc" title="How much do female video game characters speak?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div class="yt-embed">
    <iframe width="800" height="450" src="https://www.youtube-nocookie.com/embed/gA--J9d5Qgc?si=ZP6EZeapn2tQAXMX" title="AdventureX 2025 – Talk: Steph Rennick & Seán Roberts - Women's Dialogue in Video Games" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
