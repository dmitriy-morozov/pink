$(function(){function e(){interval=window.setInterval(i,u)}function i(){b==-a*r-r&&1==f?(s.css({marginLeft:-r}),b=2*-r):0==b&&f==-1?(s.css({marginLeft:-r*a}),b=-r*a+r):b-=r*f,s.animate({marginLeft:b},m),0==v?l():c=o+1}function l(){if(1==f&&c!=a)c++,$(".bullets2 .active").removeClass("active").next("li").addClass("active");else{if(1==f&&c==a)return c=1,$(".bullets2 li").removeClass("active").eq(0).addClass("active"),!1;if(f==-1&&1!=c)return c--,$(".bullets2 .active").removeClass("active").prev("li").addClass("active"),!1;f==-1&&1==c&&(c=a,$(".bullets2 li").removeClass("active").eq(a-1).addClass("active"))}}function t(){window.clearInterval(interval)}if($(window).width()<699){$(".price__item").removeClass("slider--no-js"),$(".slider2").removeClass("slider--no-js");for(var s=$(".slider2"),r=(s.html(),$(".slider-box2").outerWidth()),a=$(".slider2 .price__item").length-1,n=$(".slider-box2 .prev"),d=$(".slider-box2 .next"),c=1,o=0,v=0,u=3500,m=1e3,f=1,b=-r,h=0;h<a;h++)html=$(".bullets2").html()+"<li></li>",$(".bullets2").html(html);var C=$(".slider-box2 .bullets2 li");$(".slider-box2 .bullets2 li:first").addClass("active"),$(".slider2 .price__item:last").clone().prependTo(".slider2"),$(".slider2 .price__item").eq(2).clone().appendTo(".slider2"),$(".slider2").css("margin-left",-r),n.click(function(){if(s.is(":animated"))return!1;var e=f;f=-1,i(),f=e}),d.click(function(){if(s.is(":animated"))return!1;var e=f;f=1,i(),f=e}),C.click(function(){return!s.is(":animated")&&(t(),o=C.index(this),1==f?b=-r*o:f==-1&&(b=-r*o-2*r),$(".bullets2 li").removeClass("active").eq(o).addClass("active"),v=1,i(),void(v=0))}),s.add(d).add(n).hover(function(){t()},e),e();var p=$(".slider-box2").outerWidth();$(".price__item").width(p)}$(window).resize(function(){var e=$(".slider-box2").outerWidth();$(".price__item").width(e)})});