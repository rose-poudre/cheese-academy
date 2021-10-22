$('.slider').slick({
    arrows: false,//左右の矢印はなし
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
    speed: 6900,//スライドのスピード。初期値は300。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
    pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
    cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
    slidesToShow: 2,//スライドを画面に2枚見せる
    slidesToScroll: 1,//1回のスライドで動かす要素数
    responsive: [
        {
            breakpoint: 769,//モニターの横幅が769px以下の見せ方
            settings: {
                slidesToShow: 2,//スライドを画面に2枚見せる
            }
        },
        {
            breakpoint: 426,//モニターの横幅が426px以下の見せ方
            settings: {
                slidesToShow: 1.5,//スライドを画面に1.5枚見せる
            }
        }
    ]
});


// eachTextAnimeにappeartextというクラス名を付ける定義
function EachTextAnimeControl() {
    $('.eachTextAnime').each(function () {
        var elemPos = $(this).offset().top - 50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass("appeartext");

        } else {
            $(this).removeClass("appeartext");
        }
    });
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
    EachTextAnimeControl();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
    //spanタグを追加する
    var element = $(".eachTextAnime");
    element.each(function () {
        var text = $(this).text();
        var textbox = "";
        text.split('').forEach(function (t, i) {
            if (t !== " ") {
                if (i < 10) {
                    textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
                } else {
                    var n = i / 10;
                    textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
                }

            } else {
                textbox += t;
            }
        });
        $(this).html(textbox);
    });

    EachTextAnimeControl();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述



function typing(str = "") {
    var buf = document.getElementById("typing").innerHTML;
    var writed = buf.length;
    var write = "";
    if (writed < str.length) {
        write = str.charAt(writed);
    } else {
        buf = "";
    }
    document.getElementById("typing").innerHTML = buf + write;
}

const str = document.getElementById("typing").innerHTML;
const delay = 50;

document.getElementById("typing").innerHTML = "";
window.setInterval(function () { typing(str); }, delay);



//カウント
// https://github.com/LadyBiosphere/animated-counterの改変
$('#box1').on('inview', function (event, isInView) {
    if (isInView) {
        //要素が見えたときに実行する処理
        $("#box1 .count-up").each(function () {
            $(this).prop('Counter', 0).animate({//0からカウントアップ
                Counter: $(this).text()
            }, {
                // スピードやアニメーションの設定
                duration: 2000,//数字が大きいほど変化のスピードが遅くなる。2000=2秒
                easing: 'swing',//動きの種類。他にもlinearなど設定可能
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    }
});

$('#box2').on('inview', function (event, isInView) {
    if (isInView) {
        //要素が見えたときに実行する処理
        $("#box2 .count-down").each(function () {
            $(this).prop('Counter', 10).animate({//10からカウントダウン
                Counter: $(this).text()
            }, {
                // スピードやアニメーションの設定
                duration: 1000,//数字が大きいほど変化のスピードが遅くなる。1000=1秒
                easing: 'swing',//動きの種類。他にもlinearなど設定可能
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    }
});

$('#box3').on('inview', function (event, isInView) {
    if (isInView) {
        //要素が見えたときに実行する処理
        $("#box3 .count-up").each(function () {
            $(this).prop('Counter', 0).animate({//0からカウントアップ
                Counter: $(this).text()
            }, {
                // スピードやアニメーションの設定
                duration: 2000,//数字が大きいほど変化のスピードが遅くなる。2000=2秒
                easing: 'swing',//動きの種類。他にもlinearなど設定可能
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    }
});

$('#box4').on('inview', function (event, isInView) {
    if (isInView) {
        //要素が見えたときに実行する処理
        $("#box4 .count-up").each(function () {
            $(this).prop('Counter', 0).animate({//0からカウントアップ
                Counter: $(this).text()
            }, {
                // スピードやアニメーションの設定
                duration: 2000,//数字が大きいほど変化のスピードが遅くなる。2000=2秒
                easing: 'swing',//動きの種類。他にもlinearなど設定可能
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    }
