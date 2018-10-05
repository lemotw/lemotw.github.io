title: Quick Know what is CPU~
output: index.html
progress: true

--
# What is CPU?
## lemotw 
## ref:[現代處理器](http://www.lighterra.com/papers/modernmicroprocessors/)
--
# CPU (Central Processing Unit)
## 幫你算資料的東東，或是可以想成是大腦
--
# 我只是想寫程式，為什麼要學CPU
--
### CPU 
<img style="width:100%;" src="cpuphical.jpg" />
--
### CPU 架構
<img style="width:100%;" src="cpustructure.jpg" />
--
<div style="text-align:center;">
	<img src="cpuscore.jpg"/>
</div>
--
# CPI (Cycles per instruction)
--
### CPU如何執行一個指令
* Fetch(抓取程式碼)
* Decode(解碼)
* Execute(執行)
* Memory(記憶體存取)
* Write Back(寫回暫存器)
* Pipeline 把上面的工作切分開來(如下圖)
<br/><br/>
<img src="pipeline.png" />
--
<div style="text-align:center;">
	<h2 style="font-weight:bold;">沒有Pipeline</h2>
	<br/>
	<img src="nopipeline.png"/>
</div>

<div style="margin-top:50px;text-align:center;">
	<h2 style="font-weight:bold;">有Pipeline</h2>
	<br/>
	<img src="pipelineperf.png"/>
</div>
--
### SuperScalar
<div style="text-align:center;">
	<img style="width:70%;" src="superscale.png"/>
</div>
--
### SuperScalar performance
<div style="text-align:center;margin-top:10%;">
	<img style="width:70%;" src="superscalar2.png"/>
</div>
--
<iframe style="width:100%;height:80%;" src="per.html"></iframe>
--
# CPU logic in program
---
# Any Question?

<br /><br /><br />
<div align="center">
  <img style="width:100px;" src="by-sa.png" />
</div>
<h2 style="font-size: 18px">
本投影片採用<a href="http://creativecommons.org/licenses/by-sa/3.0/tw/" target="_blank">創用 CC「姓名標示—相同方式分享 3.0 台灣」授權條款</a>
</h2>
