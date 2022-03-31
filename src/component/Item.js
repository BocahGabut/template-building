export const fontList = [{
        value: 'Arial, Helvetica, sans-serif',
        display: 'Arial'
    },
    {
        value: 'Arial Black, Gadget, sans-serif',
        display: 'Arial Black'
    },
    {
        value: 'Brush Script MT, sans-serif',
        display: 'Brush Script MT'
    },
    {
        value: 'Comic Sans MS, cursive, sans-serif',
        display: 'Comic Sans MS'
    },
    {
        value: 'Courier New, Courier, monospace',
        display: 'Courier New'
    },
    {
        value: 'Georgia, serif',
        display: 'Georgia'
    },
    {
        value: 'Helvetica, sans-serif',
        display: 'Helvetica'
    },
    {
        value: 'Impact, Charcoal, sans-serif',
        display: 'Impact'
    },
    {
        value: 'Lucida Sans Unicode, Lucida Grande, sans-serif',
        display: 'Lucida Sans Unicode'
    },
    {
        value: 'Tahoma, Geneva, sans-serif',
        display: 'Tahoma'
    },
    {
        value: 'Times New Roman, Times, serif',
        display: 'Times New Roman'
    },
    {
        value: 'Trebuchet MS, Helvetica, sans-serif',
        display: 'Trebuchet MS'
    },
    {
        value: 'Verdana, Geneva, sans-serif',
        display: 'Verdana'
    },

]

export const weightList = [{
        value: '100',
        display: 'Thin'
    },
    {
        value: '200',
        display: 'Extra Light (Ultra Light)'
    },
    {
        value: '300',
        display: 'Light'
    },
    {
        value: '400',
        display: 'Normal'
    },
    {
        value: '500',
        display: 'Medium'
    },
    {
        value: '600',
        display: 'Semi Bold (Demi Bold)'
    },
    {
        value: '700',
        display: 'Bold'
    },
    {
        value: '800',
        display: 'Extra Bold (Ultra Bold)'
    },
    {
        value: '900',
        display: 'Ultra-Bold'
    },
]

export const animationList = [{
        value: 'fade-up',
        display: 'fade-up'
    },
    {
        value: 'fade-down',
        display: 'fade-down'
    },
    {
        value: 'fade-right',
        display: 'fade-right'
    },
    {
        value: 'fade-left',
        display: 'fade-left'
    },
    {
        value: 'fade-up-right',
        display: 'fade-up-right'
    },
    {
        value: 'fade-up-left',
        display: 'fade-up-left'
    },
    {
        value: 'fade-down-right',
        display: 'fade-down-right'
    },
    {
        value: 'fade-down-left',
        display: 'fade-down-left'
    },
    {
        value: 'flip-left',
        display: 'flip-left'
    },
    {
        value: 'flip-right',
        display: 'flip-right'
    },
    {
        value: 'flip-up',
        display: 'flip-up'
    },
    {
        value: 'flip-down',
        display: 'flip-down'
    },
    {
        value: 'zoom-in',
        display: 'zoom-in'
    },
    {
        value: 'zoom-in-up',
        display: 'zoom-in-up'
    },
    {
        value: 'zoom-in-down',
        display: 'zoom-in-down'
    },
    {
        value: 'zoom-in-left',
        display: 'zoom-in-left'
    },
    {
        value: 'zoom-in-right',
        display: 'zoom-in-right'
    },
    {
        value: 'zoom-out',
        display: 'zoom-out'
    },
    {
        value: 'zoom-out-up',
        display: 'zoom-out-up'
    },
    {
        value: 'zoom-out-down',
        display: 'zoom-out-down'
    },
    {
        value: 'zoom-out-left',
        display: 'zoom-out-left'
    },
    {
        value: 'zoom-out-right',
        display: 'zoom-out-right'
    },
]

export const iconsScrool = [{
        value: 'wheel-inner',
        display: 'wheel inner'
    },
    {
        value: 'dot',
        display: 'dot'
    },
]

export const years = (startYear) => {
    var currentYear = new Date().getFullYear(),
        years = [];
    startYear = startYear || 1990;
    while (startYear <= currentYear) {
        years.push({
            value: startYear++,
            display: startYear++
        });
    }
    return years
}

export function formatRupiah(angka) {
    var number_string = angka.replace(/[^,\d]/g, '').toString(),
        split = number_string.split(','),
        sisa = split[0].length % 3,
        rupiah = split[0].substr(0, sisa),
        ribuan = split[0].substr(sisa).match(/\d{3}/gi)

    // tambahkan titik jika yang di input sudah menjadi angka ribuan
    if (ribuan) {
        let separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.')
    }

    rupiah = split[1] !== undefined ? rupiah + ',' + split[1] : rupiah
    return rupiah
}

export const baseUrl = () => {
    // return 'http://192.168.0.100/api.rumahakad'
    return 'http://localhost/api.rumahakad'
}

export const decodeBase64 = props => {
    let data = props.text
    let buff = new Buffer(data, 'base64')
    let text = buff.toString('ascii')

    return text

}

export const uniqID = () => {
    var timestamp = new Date().getUTCMilliseconds()
    var now = new Date();

    timestamp += now.getFullYear().toString()
    timestamp += (now.getMonth < 9 ? '0' : '') + now.getMonth().toString()
    timestamp += ((now.getDate < 10) ? '0' : '') + now.getDate().toString()
    timestamp += '.' + new Date().getTime() + '.' + Math.random() + new Date().getMilliseconds()

    return timestamp
}

export const quotes = [{
        items: "Dan nikahkanlah orang-orang yang sendirian di antara kamu, dan orang-orang yang layak (menikah) dari hamba sahayamu yang lelaki dan hamba-hamba sahayamu yang perempuan. jika mereka miskin Allah akan mengkayakan mereka dengan karunianya. Dan Allah Maha Luas (pemberiannya) dan Maha Mengetahui. (QS. An Nuur (24) : 32)"
    },
    {
        items: `Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah semoga ridho-Mu tercurah mengiringi pernikahan kami`
    },
    {
        items: `"Demikianlah mereka bukan lagi dua, melainkan satu. Karena itu, apa yang telah dipersatukan Allah, tidak boleh diceraikan manusia."
        Matius 19:6 `
    },
    {
        items: `وَمِنْ كُلِّ شَيْءٍ خَلَقْنَا زَوْجَيْنِ لَعَلَّكُمْ تَذَكَّرُوْنَ

        Dan segala sesuatu Kami ciptakan berpasang-pasangan agar kamu mengingat (kebesaran Allah).
        Q.S Adz- Dzariat ayat 49`
    },
    {
        items: `"The man dreams of a perfect woman and the woman dreams of a perfect man and they don't know that Allah created them to perfect one another." -Ahmad Al Shugairi`
    },
    {
        items: `“Dan firman-Nya: Sebab itu laki-laki akan meninggalkan ayah dan ibunya dan bersatu dengan isterinya, sehingga keduanya itu menjadi satu daging.Demikianlah mereka bukan lagi dua, melainkan satu. Karena itu, apa yang telah dipersatukan Allah, tidak boleh diceraikan manusia.”
        Matius 19:5-6
        `
    },
    {
        items: `"Wahai Yang Maha Lembut, manjakanlah hatiku yang sendiri ini. 
        Bahagiakanlah aku dalam pernikahan yang penuh cinta, mesra & setia." Mario Teguh
        `
    },
    {
        items: `QS. Ar-Rum Ayat 21

        وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةً ۗاِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ
        
        Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.`
    },
    {
        items: `Menikah itu nasib, mencintai itu takdir. 
        Kamu bisa berencana menikahi siapa, tapi tak dapat kau rencanakan cintamu untuk siapa. Sujiwo Tejo`
    },
    {
        items: `"Marriage is not 50-50, divorce is 50-50. Marriage has to be 100-100. It isn't dividing everything in half, but giving everything you've got!" DaveWillis.org`
    },
    {
        items: `Cinta bukanlah mencari pasangan yang sempurna, tapi menerima pasangan kita dengan sempurna. Asma Wadia`
    }

]

export const sparator = [{
        src: `./decor/quotes-21100219.png`
    },
    {
        src: `./decor/quotes-21100220.png`
    },
    {
        src: `./decor/quotes-21100221.png`
    },
    {
        src: `./decor/quotes-21100222.png`
    },
    {
        src: `./decor/quotes-21100223.png`
    },
    {
        src: `./decor/quotes-21100224.png`
    },
    {
        src: `./decor/quotes-21100225.png`
    },
    {
        src: `./decor/quotes-21100226.png`
    },
    {
        src: `./decor/quotes-21100227.png`
    },
    {
        src: `./decor/quotes-21100228.png`
    },
    {
        src: `./decor/quotes-21100229.png`
    },
]