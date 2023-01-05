//main navigation

gsap.registerPlugin(ScrollTrigger);

jQuery.noConflict()(function ($){


// let page_container = document.querySelector('[data-scroll-container]');
    // let loco_scroll = new LocomotiveScroll({
    //     el: page_container,
    //     smooth: true,
    //     class: "inviewport",
    //     offset: [0, 0],
    //     repeat: true,
    //     initPosition: { x: 0, y: 0 },
    //     direction: "vertical",
    //     getDirection: true,
    //     getSpeed: true,
    //     tablet: { smooth: false },
    //     smartphone: { smooth: false }
    // });

    // loco_scroll.on("scroll", ScrollTrigger.update);
    // ScrollTrigger.scrollerProxy(page_container, {
    //     scrollTop(value) {
    //         return arguments.length ? loco_scroll.scrollTo(value, 0, 0) : loco_scroll.scroll.instance.scroll.y;
    //     },
    //     getBoundingClientRect() {
    //         return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    //     },
    //     pinType: page_container.style.transform ? "transform" : "fixed"
    // });
    // ScrollTrigger.addEventListener("refresh", () => loco_scroll.update());
    // ScrollTrigger.refresh();


    function page_init(){

        // Navbar
        $( "<span class='clickD'></span>" ).insertAfter(".navbar-nav li.menu-item-has-children > a");
        $('.navbar-nav li .clickD').click(function(e) {
            e.preventDefault();
            var $this = $(this);
        
            if ($this.next().hasClass('show')) {
                $this.next().removeClass('show');
                $this.removeClass('toggled');
            } else {
                $this.parent().parent().find('.sub-menu').removeClass('show');
                $this.parent().parent().find('.toggled').removeClass('toggled');
                $this.next().toggleClass('show');
                $this.toggleClass('toggled');
            }
        });

        $(window).on('resize', function(){
            var win = $(this); //this = window
            if (win.width() < 1025) {
                $('html').click(function(){
                    $('.navbar-nav li .clickD').removeClass('toggled');
                    $('.toggled').removeClass('toggled');
                    $('.sub-menu').removeClass('show');
                });
                $(document).click(function(){
                    $('.navbar-nav li .clickD').removeClass('toggled');
                    $('.toggled').removeClass('toggled');
                    $('.sub-menu').removeClass('show');
                });
                $('.navbar-nav').click(function(e){
                e.stopPropagation();
                });
            }
        });

        /* ===== For menu animation === */
        $(".navbar-toggler").click(function(){
            $(".navbar-toggler").toggleClass("open");
            $(".navbar-toggler .stick").toggleClass("open");
            $('body,html').toggleClass("open-nav");
        });

        if ($(window).width() < 992) {
            $(".navbar-nav > li > a").on('click', function(){
                $(".navbar-toggler").trigger("click");
            })
        }
        $(window).scroll(function() {
            if ($('.main-head').length) {
              if ($(window).scrollTop() > 0) {
                  $(".main-head").addClass('sticky');
              } else {
                  $(".main-head").removeClass('sticky');
      
              }
            }
        })


        // Navbar end

        if ($(".bodymovinanim").length) {
                let iconMenu = document.querySelectorAll('.bodymovinanim');
                    for(let i=0;i<iconMenu.length;i++){
                    let animationMenu = bodymovin.loadAnimation({
                                container: iconMenu[i],
                                renderer: 'svg',
                                loop: true,
                                autoplay: true,
                                path: iconMenu[i].getAttribute("data-lottie"),
                        });
                    

                }
            }

            // lotie animation

            if ($(".anim_lote").length) {
                let iconMenu = document.querySelectorAll('.anim_lote');
                var iconHover = document.querySelectorAll('.anim_lote_hover');
                   for(let i=0;i<iconMenu.length;i++){
                      let animationMenu = bodymovin.loadAnimation({
                               container: iconMenu[i],
                               renderer: 'svg',
                               loop: true,
                               autoplay: false,
                               path: iconMenu[i].getAttribute("data-lottie"),
                       });
                      var directionMenu = 1;
                     iconHover[i].addEventListener('mouseenter', (e) => {
                         animationMenu.setDirection(directionMenu);
                         animationMenu.play();
                       });
    
                     iconHover[i].addEventListener('mouseleave', (e) => {
                         animationMenu.setDirection(-directionMenu);
                         animationMenu.stop();
                   });
               }
           }



            


        // pageloader
        jQuery(".bg,img").imagesLoaded({
            background: true,
        })
        .progress(function (instance, image) {


        })
        .always(function () {
            // window.scrollTo(0, 0);

            gsap.to(".preloader", 1, {
            delay: 0.2,
            opacity: 0,
            
            });

            setTimeout(function () {
                $(".preloader").remove();
              }, 800);


            function nav_gap() {
                document.querySelector(".gap_top_dt").style.paddingTop = document.querySelector(".main-head").clientHeight + "px";
                ScrollTrigger.refresh();
            }
            nav_gap();
            window.addEventListener('resize', nav_gap);

            // loco_scroll.on("scroll", function (e, v) {
            //     if (e.delta === undefined) {
            //         if (e.scroll.y > 2) {
            //             document.querySelector(".main-head").classList.add("sticky");
            //         } else {
            //             document.querySelector(".main-head").classList.remove("sticky");
            //         }
            //     } else {
            //         if (e.delta.y > 0) {
            //             document.querySelector(".main-head").classList.add("sticky");
            //         } else {
            //             document.querySelector(".main-head").classList.remove("sticky");
            //         }
            //     }
            // });

            $('#parentHorizontalTab').easyResponsiveTabs({
                    type: 'default', //Types: default, vertical, accordion
                    width: 'auto', //auto or any width like 600px
                    fit: true, // 100% fit in a container
                    tabidentify: 'hor_1', // The tab groups identifier
            });

            $('.quoted_testimonial_slider').slick({
            infinite: true,
            slidesToShow: 1,
            dots: false,
            arrows: false,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            });

            $(".path_svg_mainhv").each(function(){
                let dft_color = $(this).attr("data-default_color");
                // console.log(dft_color);
                $("#" + $(this).data("target")).find(".tax_rulers_boxes").css({"border-color": dft_color});
                $("#" + $(this).data("target")).find(".tax_rulers_boxes_top h4").css({"color": dft_color});

                if ($(this).hasClass('active')) {
                    $(this).css({"fill": $(this).attr("data-default_color")});
                }
                else{
                    $(this).css({"fill": "#fff"});
                }

                $(this).on("mouseenter",function(){
                    $(".tax_rates_content_wrapper_col").removeClass("active");
                    $("#" + $(this).data("target")).addClass("active");
                    $(".path_svg_mainhv").removeClass("active");
                    $(this).addClass("active");

                    if ($(this).hasClass('active')) {
                        $(".path_svg_mainhv").css({"fill": "#fff"});
                        $(this).css({"fill": $(this).attr("data-default_color")});
                        $(".svg_map_wrapper_back svg path").css({"stroke": $(this).attr("data-default_color")});
                    }

                

                });   
                

            });

            if ($(".understand_ins_rt_wrapper").length) {
                $(".understand_ins_rt_wrapper").each(function () {
                    let els_pr = $(this).find("svg path");
                    let els_pr1 = $(this).find(".g_parent_svg");
                    gsap.set(els_pr, {
                        fill: "#80929D",
                    });
                    let fadeUpAnimateIn = gsap.timeline();
                    fadeUpAnimateIn.fromTo(els_pr, {
                        fill: "#80929D",
                    }, {
                        duration: 0.1,
                        fill: "#D01018",
                        stagger: { // wrap advanced options in an object
                            each: 0.001,
                            from: "start",
                            grid: "auto",
                            ease: "power2.inOut",
                        },
                        onComplete: function(){
                            $(".g_parent_svg").addClass("active");
                            },


                    }).pause();

                    ScrollTrigger.create({
                        trigger: els_pr,
                        scrub: false,
                        start: "top center",
                        end: "bottom center",
                        //scroller: page_container,
                        // markers: true,
                        onEnter: () => {
                            fadeUpAnimateIn.play()
                        },
                        // onEnterBack: () => {
                        //     fadeUpAnimateIn.play()
                        // },
                        // onLeave: () => {
                        //     fadeUpAnimateIn.reverse()
                        // },
                        onLeaveBack: () => {
                            fadeUpAnimateIn.reverse()
                        }
                        // markers: true,
                    });
                });
            }

            

            if ($("[data-text]").length) {
                $("[data-text] > *").each(function () {
                    let els2 = $(this);
                    gsap.set(els2, {
                        y: 75,
                        transformStyle: "preserve-3d",
                        opacity: 0,
                        rotationX: -45,
                        transformOrigin: "0% 50% -100%",
                    });

                    gsap.to(els2, 0.01, {
                        scrollTrigger: {
                            trigger: els2,
                            start: "top bottom",
                            end: "bottom bottom",
                            //scroller: page_container,
                            scrub: false,
                            //  markers: true,
                        },
                        onComplete: function () {
                            gsap.to(els2, 1.3, {
                                overwrite: true,
                                y: 0,
                                transformStyle: "preserve-3d",
                                ease: Power3.easeOut,
                                opacity: 1,
                                rotationX: 0,
                                transformOrigin: "50% 50%",
                                stagger: 0.1,
                            });
                            
                        },
                    });

                });
            }

            //// parallax img
            if ($("[data-parallax]").length) {
                $("[data-parallax]").each(function () {
                    let els = $(this),
                        speed = els.attr("data-parallax");
                    // console.log(100 * speed);

                    els.find("img").each(function () {
                        gsap.to(this, 1, {
                            yPercent: 100 * speed,
                            ease: Power2.easeIn,
                            scrollTrigger: {
                                trigger: els,
                                scrub: 1.1,
                                start: "top bottom",
                                end: "bottom top",
                                invalidateOnRefresh: true,
                                //scroller: page_container,
                                // markers: true,
                            }
                        });
                    });
                })
            }

            $(".banner_imgs_anim_parent_wrap2").each(function () {
                let elspd = $(this).find(".iconsec"),
                speedbs = elspd.attr("data-direction");
                // console.log(100 * speedbs);
                gsap.set(elspd,{
                    xPercent: 100 * speedbs,
                    yPercent: 100 * speedbs,
                    opacity: 0
                });
                let ban_anim = gsap.timeline();
                ban_anim.fromTo(elspd, {
                    xPercent: 100 * speedbs,
                    yPercent: 100 * speedbs,
                    opacity: 0,
                }, {
                    xPercent: 0,
                    yPercent: 0,
                    duration: 1.5,
                    opacity: 1,
                    // repeat: -1, 
                    // repeatDelay:0, 
                    // yoyo: true,
                    stagger: { 
                        each: 0.8,
                        from: "start",
                        grid: "auto",
                        ease: "power2.inOut",
                    },

                }).pause();
                ScrollTrigger.create({
                    trigger: elspd,
                    scrub: false,
                    start: "top bottom",
                    end: "bottom top",
                    onEnter: () => {
                        ban_anim.play()
                    },
                    // onEnterBack: () => {
                    //     ban_anim.play()
                    // },
                    // onLeave: () => {
                    //     ban_anim.reverse()
                    // },
                    // onLeaveBack: () => {
                    //     ban_anim.reverse()
                    // },
                    //  markers: true,
                });
            });

            // if ($(".banner_imgs_anim_parent_wrap2 .iconsec").length) {
            //     $(".banner_imgs_anim_parent_wrap2 .iconsec").each(function () {
            //         let elspd = $(this),
            //         speedbs = elspd.attr("data-direction");

            //         gsap.set(elspd, {
            //             xPercent: 100 * speedbs,
            //             yPercent: 100 * speedbs,
            //             opacity: 0
            //         });
            //         let ban_anim = gsap.timeline();
            //         ban_anim.to(elspd, {
            //             xPercent: 100 * speedbs,
            //             yPercent: 100 * speedbs,
            //             opacity: 0
            //         }, {
            //             duration: 0.1,
            //             xPercent: 0,
            //             yPercent: 0,
            //             opacity: 1,
            //             stagger: { // wrap advanced options in an object
            //                 each: 0.001,
            //                 from: "start",
            //                 grid: "auto",
            //                 ease: "power2.inOut",
            //             },


            //         })

            //     });
            // }

            $(".mm-dropdown .dropdown-menu li a").click(function(){
            $(this).parents(".dropdown").find('.dropdown-toggle').html($(this).html());
            // $(this).parents(".dropdown").find('.dropdown-toggle').val($(this).data('value'));
            $(".dropdown-toggle .grid_imgss_wrappr").css({"color": $(".dropdown-toggle .grid_imgss_wrappr").attr("data-color-drop")});
            $(".back_eclps_div svg path").css({"stroke": $(".dropdown-toggle .grid_imgss_wrappr").attr("data-color-drop")});
            });

            $(".mm-dropdown .dropdown-item").click(function(){
            $(this).removeClass("active");
            $(".coml_offer_section_list_wrpe_vs").children().removeClass("active");
            if($(".coml_offer_section_list_wrpe_vs").children().hasClass("active")){
                $("#" + $(this).data("target")).removeClass("active");
                $(this).addClass("active");
            } 
            else{
                $("#" + $(this).data("target")).addClass("active");

            }

            });

            $(".mm-dropdown .dropdown .dropdown-menu .dropdown-item").each(function(){
                let dft_color2 = $(this).find(".grid_imgss_wrappr").attr("data-color-drop");
                // console.log(dft_color2);
                $("#" + $(this).data("target")).find(".tax_rulers_boxes").css({"border-color": dft_color2});
                $("#" + $(this).data("target")).find(".tax_rulers_boxes_top h4").css({"color": dft_color2});


            });    

            // jQuery Equal Height

            $.fn.jQueryEqualHeight = function(innerDiv) {
                if (innerDiv == undefined) {
                    innerDiv = '.card';
                }
                var currentTallest = 0, currentRowStart = 0, rowDivs = new Array(), topPosition = 0;
                $(this).each(function() {
                    $(this).find(innerDiv).height('auto')
                    topPosition = $(this).position().top;
                    if (currentRowStart != topPosition) {
                        for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                            rowDivs[currentDiv].find(innerDiv).height(currentTallest);
                        }
                        rowDivs.length = 0;
                        currentRowStart = topPosition;
                        currentTallest = $(this).find(innerDiv).height();
                        rowDivs.push($(this));
                    } else {
                        rowDivs.push($(this));
                        currentTallest = (currentTallest < $(this).find(innerDiv).height()) ? ($(this).find(innerDiv).height()) : (currentTallest);
                    }
                    for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                        rowDivs[currentDiv].find(innerDiv).height(currentTallest);
                    }
                });
            };
            // jQuery Equal Height end

            function equal_height() {

                
            }
            equal_height();
            $(window).on('load', function(event) {
                equal_height();
            });
            $(window).resize(function(event) {
                equal_height();
            });

            
            // ScrollTrigger.addEventListener("refresh", () => loco_scroll.update());
            ScrollTrigger.refresh();
        


            setTimeout(function () {
            $(".preloader").remove();
            }, 800);
        });

        // $(".faq-sec .accordion-button").on('click', function(){
        //     new ResizeObserver(() => loco_scroll.update()).observe(page_container)
        // })
        

        ///pin and zoom animation:
        if (window.innerWidth > 1199) {
            if ($(".process_anim").length) {
            gsap.set(".anim_box", {
                scale: 0,
                transformOrigin: "50% 50%",
            })
            gsap.set(".stroke_svg_circle", {
                scale: 0,
                transformOrigin: "50% 50%",
            })
            gsap.set(".stroke_svg_arrow", {
                opacity: 0,
            })
            let process_timeline = gsap.timeline({
                scrollTrigger: {
                trigger: ".process_anim",
                start: 'top center',
                end: "bottom center",
                // scroller: page_container,
                invalidateOnRefresh: true,
                //toggleActions: "play reverse play reverse",
                }
            });
            process_timeline
                .to(".anim_first .anim_box", 0.3, {
                scale: 1,
                transformOrigin: "50% 50%",
                ease: Power0.ease,
                })
                .to(".anim_first .stroke_svg_circle", 0.3, {
                    scale: 1,
                transformOrigin: "50% 50%",
                ease: Power0.ease,
                })
                .to(".anim_first .stroke_svg_ofset", 0.3, {
                    strokeDashoffset: 0,
                })
                .to(".anim_first .stroke_svg_arrow", 0.3, {
                    opacity: 1,
                ease: Power0.ease,
                })
                .to(".anim_second .anim_box", 0.3, {
                    scale: 1,
                    transformOrigin: "50% 50%",
                    ease: Power0.ease,
                })
                .to(".anim_second .stroke_svg_circle", 0.3, {
                    scale: 1,
                transformOrigin: "50% 50%",
                ease: Power0.ease,
                })
                .to(".anim_second .stroke_svg_ofset", 0.3, {
                    strokeDashoffset: 0,
                })
                .to(".anim_second .stroke_svg_arrow", 0.3, {
                    opacity: 1,
                ease: Power0.ease,
                })
                .to(".anim_third .anim_box", 0.3, {
                    scale: 1,
                    transformOrigin: "50% 50%",
                    ease: Power0.ease,
                })
                .to(".anim_third .stroke_svg_circle", 0.3, {
                    scale: 1,
                    transformOrigin: "50% 50%",
                ease: Power0.ease,
                })
                .to(".anim_third .stroke_svg_ofset", 0.3, {
                    strokeDashoffset: 0,
                })
                .to(".anim_third .stroke_svg_arrow", 0.3, {
                    opacity: 1,
                ease: Power0.ease,
                })
                .to(".anim_fourth .anim_box", 0.3, {
                    scale: 1,
                    transformOrigin: "50% 50%",
                    ease: Power0.ease,
                })
                .to(".anim_fourth .stroke_svg_circle", 0.3, {
                    scale: 1,
                transformOrigin: "50% 50%",
                ease: Power0.ease,
                })
                .to(".anim_fourth .stroke_svg_ofset", 0.3, {
                    strokeDashoffset: 0,
                })
                .to(".anim_fourth .stroke_svg_arrow", 0.3, {
                    opacity: 1,
                ease: Power0.ease,
                })
                .to(".anim_five .anim_box", 0.3, {
                    scale: 1,
                    transformOrigin: "50% 50%",
                    ease: Power0.ease,
                })
                .to(".anim_five .stroke_svg_circle", 0.3, {
                    scale: 1,
                transformOrigin: "50% 50%",
                ease: Power0.ease,
                })
                .to(".anim_five .stroke_svg_ofset", 0.3, {
                    strokeDashoffset: 0,
                })
                .to(".anim_five .stroke_svg_arrow", 0.3, {
                    opacity: 1,
                ease: Power0.ease,
                })
                .to(".anim_six .anim_box", 0.3, {
                    scale: 1,
                    transformOrigin: "50% 50%",
                    ease: Power0.ease,
                })
                
            }
        }

        
        

    }






// init setup
    setTimeout(function () {
        page_init();
        // ScrollTrigger.addEventListener("refresh", () => loco_scroll.update());
        ScrollTrigger.refresh();

    }, 100);

});    


