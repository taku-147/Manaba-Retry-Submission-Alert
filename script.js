//毎回読み込んでるのなんとかしたいけど、まぁ...
const elements = document.querySelectorAll('body *');
var Can_not_resubmit = false;
var Already_submitted_or_end = false;
var blinkElements;
elements.forEach(element => {
    if (element.textContent.includes('再提出を許可しない')) {
        if(element.textContent.includes('提出済み')) {
            Already_submitted_or_end = true;
        }
        Can_not_resubmit = true;
        element.innerHTML = element.innerHTML.replace(/再提出を許可しない/g, '<span class="blink" style="color: red; font-weight: bold; text-decoration: underline; font-size: 1.2em;">再提出を許可しない</span>');
        blinkElements　= document.querySelectorAll('.blink');

    } else if (element.textContent.includes('再提出を許可する')) {
        element.innerHTML = element.innerHTML.replace(/再提出を許可する/g, '<span style="color: blue; font-weight: bold; text-decoration: underline;">再提出を許可する</span>');
    }
});
if(Can_not_resubmit && !Already_submitted_or_end) {
    setInterval(() => {
        blinkElements[0].style.color = (blinkElements[0].style.color === 'red') ? 'black' : 'red';
    }, 1000);
}


const previewButton = document.querySelector('input[name="action_ReportStudent_submitdone"][type="submit"][value="プレビュー（次へ）"]');
const submitButton = document.getElementById('testtan');

if (Can_not_resubmit && (previewButton || submitButton)) {
    previewButton.addEventListener('click', (event) => {
        var check = window.confirm('この課題は、「再提出を許可しない」課題となっています。\n提出後に再提出することができません。\n正しいファイル、文章であるかを今一度確認してください。\n提出しますか？');
        if(!check) event.preventDefault();
    });
}