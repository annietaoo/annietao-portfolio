$(window).bind('scroll',function(e){
  parallaxScroll();
 });

function parallaxScroll(){
  var scrolled = $(window).scrollTop();
  if(scrolled <= 1050){
	$('.layer-1').css('top',(0+(scrolled*.15))+'px');
  $('.layer-2').css('top',(0-(scrolled*.00135))+'px');
	$('.layer-3').css('top',(0+(scrolled*.1055))+'px');
	$('.layer-4').css('top',(0+(scrolled*.1555))+'px');
  $('.layer-5').css('top',(0+(scrolled*.25))+'px');
  $('.layer-6').css('top',(0+(scrolled*.35))+'px');
	$('.layer-7').css('top',(0+(scrolled*.45))+'px');
	$('.layer-8').css('top',(0+(scrolled*.55))+'px');
  $('.layer-9').css('top',(0+(scrolled*.82))+'px');
  $('.layer-10').css('top',(0+(scrolled*.63))+'px');
  };
  
}

var target1 = $(".about-me-content").offset().top - 500, timeout = null;
var target2 = $(".skillset").offset().top - 500, timeout = null;
var target3 = $(".portfolio").offset().top - 500, timeout = null;
var firstScroll = true;
$(window).scroll(function () {
    if (!timeout) {
        timeout = setTimeout(function () {
            console.log('scroll');            
            clearTimeout(timeout);
            timeout = null;
            if ($(window).scrollTop() >= target1) {
                $(".about-me-content").animate({ opacity: 1 });
                $(".navigation-links").css({background: "#000000", transition: "all 0.25s ease-out"});
            }
            else {
              $(".navigation-links").css({background: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 25%, rgba(0, 0, 0, 0.3) 75%, rgba(0, 0, 0, 0) 100%)", transition: "all 0.25s ease-out"});
            }
            if ($(window).scrollTop() >= target2) {
                $(".skillset-content").animate({ opacity: 1 });
                if(firstScroll == true){
                  var morphing = anime({
                    targets: '#morphing .polymorph',
                    points: [
                      { value: '0.5,40.533 69.706,0.578 138.912,40.533 138.912,120.446 69.705,160.402 0.5,120.446' },
                      { value: '54.03,71.44 69.705,62.39 85.381,71.44 85.381,89.54 69.705,98.59 54.03,89.54' }
                    ],
                    easing: 'easeOutQuad',
                    duration: 2000,
                    loop: false
                  });
                }
                firstScroll = false;
            }
            if ($(window).scrollTop() >= target3) {
                $(".portfolio-content").animate({ opacity: 1 });
            }
        }, 250);
    }
});

$('ul').click(function(e) {
  var target = $(e.target);
  var webTech = "#web-tech";
  var genPrgm = "#general-programming";
  var artDesWri = "#art-design-writing";
  var softSkills = "#soft-skills";
  var misc = "#misc";
  var listClicked = [webTech, genPrgm, artDesWri, softSkills, misc];
  var listClickedColor = ['#800020','#7955A0','#a96a9c','#435d97', '#cc5500'];
  
  for(var i = 0; i < listClicked.length; i++) {
    if(target.is(listClicked[i])){
      $('.polymorph-bg').css({
        fill: listClickedColor[i],
        transition: 'fill 0.5s ease-in-out'
      });
      $('.polymorph').css({
        stroke: listClickedColor[i],
        transition: 'stroke 0.5s ease-in-out'
      });
      if(i == 0) {
        $('.misc-label').hide();
        $('.sft-skills-label').hide();
        $('.adw-label').hide();
        $('.gen-prgm-label').hide();
        $('.web-tech-label').fadeIn();
        var morph1 = anime({
          targets: '#morphing .polymorph',
          points: [
            { value: '14.315,48.681 69.706,0.578 124.504,48.681 111.247,104.475 69.409,144.107 40.702,97.064' }
          ],
          easing: 'easeOutQuad',
          duration: 1000,
          loop: false
        });
      }
      if(i == 1) {
        $('.misc-label').hide();
        $('.sft-skills-label').hide();
        $('.adw-label').hide();
        $('.web-tech-label').hide();
        $('.gen-prgm-label').fadeIn();
        var morph1 = anime({
          targets: '#morphing .polymorph',
          points: [
            { value: '14.315,48.681 69.409,16.872 138.912,40.533 124.504,112.299 69.705,128.458 14.315,112.299' }
          ],
          easing: 'easeOutQuad',
          duration: 1000,
          loop: false
        });
      }
      if(i == 2) {
        $('.misc-label').hide();
        $('.sft-skills-label').hide();
        $('.web-tech-label').hide();
        $('.gen-prgm-label').hide();
        $('.adw-label').fadeIn();
        var morph1 = anime({
          targets: '#morphing .polymorph',
          points: [
            { value: '28.165,56.506 69.706,0.578 138.912,40.533 124.504,112.299 69.705,160.402 40.702,97.064' }
          ],
          easing: 'easeOutQuad',
          duration: 1000,
          loop: false
        });
      }
      if(i == 3) {
        $('.misc-label').hide();
        $('.adw-label').hide();
        $('.web-tech-label').hide();
        $('.gen-prgm-label').hide();
        $('.sft-skills-label').fadeIn();
        var morph1 = anime({
          targets: '#morphing .polymorph',
          points: [
            { value: '0.5,40.533 69.706,0.578 138.912,40.533 138.912,120.446 69.705,160.402 0.5,120.446' }
          ],
          easing: 'easeOutQuad',
          duration: 1000,
          loop: false
        });
      }
      if (i == 4) {
        $('.sft-skills-label').hide();
        $('.adw-label').hide();
        $('.web-tech-label').hide();
        $('.gen-prgm-label').hide();
        $('.misc-label').fadeIn();
        var morph1 = anime({
          targets: '#morphing .polymorph',
          points: [
            { value: '54.03,71.44 69.706,0.578 85.381,71.44 138.912,120.446 69.705,160.402 14.315,112.299' }
          ],
          easing: 'easeOutQuad',
          duration: 1000,
          loop: false
        });
      }
    }
  }
});

$("a").click(function(e){
    var target = $(e.target);
    var homeNav = "#nav-home";
    var aboutNav = "#nav-about";
    var skillsNav = "#nav-skills";
    var portfolioNav = "#nav-portfolio";
    var contactNav = "#nav-contact";
    var navClicked = [homeNav, aboutNav, skillsNav, portfolioNav, contactNav];
    for(var i = 0; i < navClicked.length; i++) {
    if(target.is(navClicked[i])){
      e.preventDefault();
      $("html, body").css ({overflow:"hidden"});
      if(i == 0){
        $("html, body").animate({
          scrollTop: 0
        }, 'slow');
        $("html, body").css ({overflow:"auto"});
      }
      if(i == 1) {
        $("html, body").animate({
          scrollTop: $(".about-me-content").offset().top
        }, 'slow');
        $(".about-me-content").animate({ opacity: 1 }, 1000);
        $("html, body").css ({overflow:"auto"});
      }
      if(i == 2) {
        $("html, body").animate({
          scrollTop: $(".skillset").offset().top
        }, 'slow');
        $("html, body").css ({overflow:"auto"});
        $(".skillset-content").animate({ opacity: 1 }, 1000);
        if(firstScroll == true){
          var morphing = anime({
            targets: '#morphing .polymorph',
            points: [
              { value: '0.5,40.533 69.706,0.578 138.912,40.533 138.912,120.446 69.705,160.402 0.5,120.446' },
              { value: '54.03,71.44 69.705,62.39 85.381,71.44 85.381,89.54 69.705,98.59 54.03,89.54' }
            ],
            easing: 'easeOutQuad',
            duration: 2000,
            loop: false
          });
        }
        firstScroll = false;
      }
      if(i == 3) {
        $("html, body").animate({
          scrollTop: $(".portfolio").offset().top
        }, 'slow');
        $("html, body").css ({overflow:"auto"});
        $(".portfolio-content").animate({ opacity: 1 }, 1000);
      }
      
      if(i == 4){
        $("html, body").animate({
          scrollTop: $(document).height()
        }, 'slow');
        $("html, body").css ({overflow:"auto"});
      }
    }
  }
});