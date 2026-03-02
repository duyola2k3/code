(function(){
  function bycatbell1(){
    var canvas=document.querySelector('canvas');
    if(!canvas)return false;
    var rect=canvas.getBoundingClientRect();
    var cx=rect.left+rect.width/2;
    var cy=rect.top+rect.height/2;
    canvas.dispatchEvent(new PointerEvent('pointerdown',{clientX:cx,clientY:cy,bubbles:true,isPrimary:true}));
    canvas.dispatchEvent(new MouseEvent('mousedown',{clientX:cx,clientY:cy,bubbles:true}));
    try{canvas.dispatchEvent(new TouchEvent('touchstart',{touches:[new Touch({identifier:1,target:canvas,clientX:cx,clientY:cy})],bubbles:true}));}catch(e){}
    var check=setInterval(function(){
      var c=document.querySelector('canvas');
      if(!c){clearInterval(check);bycatbell2();}
      else{c.dispatchEvent(new PointerEvent('pointermove',{clientX:cx,clientY:cy,bubbles:true,isPrimary:true}));}
    },300);
    return true;
  }
  function bycatbell2(){
    var t=setInterval(function(){
      if(document.body.innerText.includes('Quay về Nhiệm vụ')){
        clearInterval(t);
        setTimeout(function(){window.location.href='https://maxtask.net/home/tasks';},1000);
      }
    },500);
  }
  function bycatbell3(n){var s=document.querySelectorAll('*');for(var i=0;i<s.length;i++){if(s[i].childElementCount===0&&s[i].textContent.includes('LẤY MÃ STEP '+n)){var b=s[i].closest('[id]')||s[i].parentElement;b.scrollIntoView();b.click();return true;}}return false;}
  function bycatbell4(){var links=document.querySelectorAll('a[href]');for(var i=0;i<links.length;i++){if(links[i].href.includes('maxtask.net/task/')){window.location.href=links[i].href;return true;}}return false;}
  function bycatbell5(){var checked=document.querySelector('[name="h-captcha-response"]');if(checked&&checked.value&&checked.value.length>0)return true;var iframe=document.querySelector('iframe[src*="hcaptcha"]');return!iframe;}
  function bycatbell6(){if(!bycatbell5())return false;var btn=document.getElementById('invisibleCaptchaShortlink');if(btn){btn.scrollIntoView();btn.click();return true;}return false;}
  function bycatbell7(){var t=setInterval(function(){if(bycatbell5()){if(bycatbell6())clearInterval(t);}},1000);}
  function bycatbell8(){var s=document.querySelectorAll('*');for(var i=0;i<s.length;i++){if(s[i].childElementCount===0&&(s[i].textContent.includes('NHẤN LINK BẤT KỲ')||s[i].textContent.includes('NHẤN ĐỂ TIẾP TỤC'))){s[i].scrollIntoView();s[i].click();return true;}}return false;}
  function bycatbell9(cb){var t=setInterval(function(){var body=document.body.innerText;if(body.includes('NHẤN LINK BẤT KỲ')){clearInterval(t);cb();}else if(body.includes('NHẤN ĐỂ TIẾP TỤC')){clearInterval(t);bycatbell8();}},500);}
  function bycatbell10(n,cb){var t=setInterval(function(){if(bycatbell3(n)){clearInterval(t);cb();}},1000);}
  var url=window.location.href;
  function bycatbell11(){
    var body=document.body.innerText;
    if(document.querySelector('canvas')){bycatbell1();return;}
    if(body.includes('Quay về Nhiệm vụ')){setTimeout(function(){window.location.href='https://maxtask.net/home/tasks';},1000);return;}
    if(window.location.href.includes('maxtask.net/task/'))return;
    if(bycatbell4())return;
    if(body.includes('Bấm vào đây để tiếp tục')||document.getElementById('invisibleCaptchaShortlink')){bycatbell7();}
    else if(body.includes('NHẤN LINK BẤT KỲ')){window.location.href=url;}
    else if(body.includes('NHẤN ĐỂ TIẾP TỤC')){bycatbell8();}
    else if(body.includes('LẤY MÃ STEP 1')){bycatbell10(1,function(){bycatbell9(function(){window.location.href=url;});});}
    else if(body.includes('LẤY MÃ STEP 2')){bycatbell10(2,function(){bycatbell9(function(){window.location.href=url;});});}
    else if(body.includes('LẤY MÃ STEP 3')){bycatbell10(3,function(){bycatbell9(function(){window.location.href=url;});});}
    else{setTimeout(bycatbell11,1000);}
  }
  bycatbell11();
})();
(function(){ function bycatbell1(){ var canvas=document.querySelector('canvas'); if(!canvas)return false; var rect=canvas.getBoundingClientRect(); var cx=rect.left+rect.width/2; var cy=rect.top+rect.height/2; canvas.dispatchEvent(new PointerEvent('pointerdown',{clientX:cx,clientY:cy,bubbles:true,isPrimary:true})); canvas.dispatchEvent(new MouseEvent('mousedown',{clientX:cx,clientY:cy,bubbles:true})); try{canvas.dispatchEvent(new TouchEvent('touchstart',{touches:[new Touch({identifier:1,target:canvas,clientX:cx,clientY:cy})],bubbles:true}));}catch(e){} var check=setInterval(function(){ var c=document.querySelector('canvas'); if(!c){clearInterval(check);bycatbell2();} else{c.dispatchEvent(new PointerEvent('pointermove',{clientX:cx,clientY:cy,bubbles:true,isPrimary:true}));} },300); return true; } function bycatbell2(){ var t=setInterval(function(){ if(document.body.innerText.includes('Quay về Nhiệm vụ')){ clearInterval(t); setTimeout(function(){window.location.href='https://maxtask.net/home/tasks';},1000); } },500); } function bycatbell3(n){var s=document.querySelectorAll('*');for(var i=0;i<s.length;i++){if(s[i].childElementCount===0&&s[i].textContent.includes('LẤY MÃ STEP '+n)){var b=s[i].closest('[id]')||s[i].parentElement;b.scrollIntoView();b.click();return true;}}return false;} function bycatbell4(){var links=document.querySelectorAll('a[href]');for(var i=0;i<links.length;i++){if(links[i].href.includes('maxtask.net/task/')){window.location.href=links[i].href;return true;}}return false;} function bycatbell5(){var checked=document.querySelector('[name="h-captcha-response"]');if(checked&&checked.value&&checked.value.length>0)return true;var iframe=document.querySelector('iframe[src*="hcaptcha"]');return!iframe;} function bycatbell6(){if(!bycatbell5())return false;var btn=document.getElementById('invisibleCaptchaShortlink');if(btn){btn.scrollIntoView();btn.click();return true;}return false;} function bycatbell7(){var t=setInterval(function(){if(bycatbell5()){if(bycatbell6())clearInterval(t);}},1000);} function bycatbell8(){var s=document.querySelectorAll('*');for(var i=0;i<s.length;i++){if(s[i].childElementCount===0&&(s[i].textContent.includes('NHẤN LINK BẤT KỲ')||s[i].textContent.includes('NHẤN ĐỂ TIẾP TỤC'))){s[i].scrollIntoView();s[i].click();return true;}}return false;} function bycatbell9(cb){var t=setInterval(function(){var body=document.body.innerText;if(body.includes('NHẤN LINK BẤT KỲ')){clearInterval(t);cb();}else if(body.includes('NHẤN ĐỂ TIẾP TỤC')){clearInterval(t);bycatbell8();}},500);} function bycatbell10(n,cb){var t=setInterval(function(){if(bycatbell3(n)){clearInterval(t);cb();}},1000);} var url=window.location.href; function bycatbell11(){ var body=document.body.innerText; if(document.querySelector('canvas')){bycatbell1();return;} if(body.includes('Quay về Nhiệm vụ')){setTimeout(function(){window.location.href='https://maxtask.net/home/tasks';},1000);return;} if(window.location.href.includes('maxtask.net/task/'))return; if(bycatbell4())return; if(body.includes('Bấm vào đây để tiếp tục')||document.getElementById('invisibleCaptchaShortlink')){bycatbell7();} else if(body.includes('NHẤN LINK BẤT KỲ')){window.location.href=url;} else if(body.includes('NHẤN ĐỂ TIẾP TỤC')){bycatbell8();} else if(body.includes('LẤY MÃ STEP 1')){bycatbell10(1,function(){bycatbell9(function(){window.location.href=url;});});} else if(body.includes('LẤY MÃ STEP 2')){bycatbell10(2,function(){bycatbell9(function(){window.location.href=url;});});} else if(body.includes('LẤY MÃ STEP 3')){bycatbell10(3,function(){bycatbell9(function(){window.location.href=url;});});} else{setTimeout(bycatbell11,1000);} } bycatbell11(); })();
