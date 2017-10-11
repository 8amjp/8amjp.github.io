$(function(){
  $('article').each(function() {
    var article = $(this).html();
    /*
     ルビを変換します。
     「｜漢字《かんじ》」を「<ruby>漢字<rt>かんじ</rt></ruby>」に変換します。
     「｜ひらがな《Hiragana》」も「<ruby>ひらがな<rt>Hiragana</rt></ruby>」になります。
     */
    $(this).html(
      article
        .replace(/([ヶ一-龠]+)《([^》]+)》/g, '<ruby>$1<rt>$2</rt></ruby>')
        .replace(/｜([^《]+)《([^》]+)》/g,    '<ruby>$1<rt>$2</rt></ruby>')
    );
  });
});
