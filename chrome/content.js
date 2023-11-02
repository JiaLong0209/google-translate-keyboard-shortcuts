window.onload = () => {
    if (!window.location.host.startsWith('translate.google.com')) return;
    console.log('hello google translate');
    let audioButtons;
    let audioSelector = 'div.m0Qfkd span button';
    let textSelector = 'textarea.er8xn';
    let inputText = document.querySelector(textSelector);
    let langButtons = Array.from(document.querySelectorAll('.VfPpkd-AznF2e-LUERP-vJ7A6b-OWXEXe-XuHpsb.VfPpkd-AznF2e-LUERP-vJ7A6b > .VfPpkd-AznF2e-LUERP-bN97Pc')).map(i => [...i.childNodes]).flat()
    let orignalLang = document.querySelector('.mvqA2c');

    function switchLangs() {
        document.querySelector('.lRTpdf').click();
    }

    function focusInputText() {
        setTimeout(() => {
            inputText.focus();
        }, 1);
    }

    function clearInputText() {
        focusInputText();
        inputText.value = '';
    }

    function switchToOrignalLang() {
        orignalLang?.click();
    }

    function init() {
        audioButtons = [document.querySelectorAll(audioSelector)[0], document.querySelectorAll(audioSelector)[1]]
        langButtons = Array.from(document.querySelectorAll('.VfPpkd-AznF2e-LUERP-vJ7A6b-OWXEXe-XuHpsb.VfPpkd-AznF2e-LUERP-vJ7A6b > .VfPpkd-AznF2e-LUERP-bN97Pc')).map(i => [...i.childNodes]).flat()
    }

    function keydownListener(e) {
        if (e.key == '`') {
            focusInputText();
        }
        if (!e.altKey) return;

        if (e.shiftKey) {
            // shift + altkey
            switch (e.key.toLowerCase()) {
                case 'a':
                    langButtons[0]?.click();
                    break;

                case 'q':
                    langButtons[1]?.click();
                    break;

                case 'w':
                    langButtons[2]?.click();
                    break;

                case 'e':
                    langButtons[3]?.click();
                    break;

                case 'l':
                    langButtons[4]?.click();
                    break;

                case 'i':
                    langButtons[5]?.click();
                    break;

                case 'o':
                    langButtons[6]?.click();
                    break;
            }
            return;
        }

        switch (e.key.toLowerCase()) {
            // alt key only
            case 'o':
                focusInputText();
                break;

            case 'j':
                audioButtons[0]?.click();
                break;

            case 'k':
                audioButtons[1]?.click();
                break;

            case 'r':
                init();
                break;

            case 's':
            case 'i':
                switchLangs();
                break;

            case 'l':
                clearInputText();
                break;

            case 'm':
                switchToOrignalLang();
                break;
        }
    }
    document.addEventListener('keydown', keydownListener);
    setInterval(init, 500)
}