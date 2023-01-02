Page({
  data: {
    text: '',
    maxNumberOfText: 1000,
    numberOfText: 0,

    langs: [{
      name: 'zh-CN',
      alias: '中文（普通话）'
    }, {
      name: 'en-GB',
      alias: '英语（英国）'
    }, {
      name: 'en-US',
      alias: '英语（美国）'
    }],
    langOp: 0,
    lang: 'zh-CN',

    genders: [{
        name: 'male',
        alias: '男'
      },
      {
        name: 'female',
        alias: '女'
      }
    ],
    genderOp: 0,
    gender: 'male',

    voices: {
      'zh-CN': {
        'male': [{
          name: 'zh-CN-YunfengNeural',
          alias: '云枫'
        }, {
          name: 'zh-CN-YunhaoNeural',
          alias: '云皓'
        }, {
          name: 'zh-CN-YunjianNeural',
          alias: '云健'
        }, {
          name: 'zh-CN-YunxiaNeural',
          alias: '云夏'
        }, {
          name: 'zh-CN-YunxiNeural',
          alias: '云希'
        }, {
          name: 'zh-CN-YunyangNeural',
          alias: '云扬'
        }, {
          name: 'zh-CN-YunyeNeural',
          alias: '云野'
        }, {
          name: 'zh-CN-YunzeNeural',
          alias: '云泽'
        }],
        'female': [{
          name: 'zh-CN-XiaochenNeural',
          alias: '晓辰'
        }, {
          name: 'zh-CN-XiaohanNeural',
          alias: '晓涵'
        }, {
          name: 'zh-CN-XiaomengNeural',
          alias: '晓梦'
        }, {
          name: 'zh-CN-XiaomoNeural',
          alias: '晓墨'
        }, {
          name: 'zh-CN-XiaoqiuNeural',
          alias: '晓秋'
        }, {
          name: 'zh-CN-XiaoruiNeural',
          alias: '晓睿'
        }, {
          name: 'zh-CN-XiaoshuangNeural',
          alias: '晓双'
        }, {
          name: 'zh-CN-XiaoxiaoNeural',
          alias: '晓晓'
        }, {
          name: 'zh-CN-XiaoxuanNeural',
          alias: '晓萱'
        }, {
          name: 'zh-CN-XiaoyanNeural',
          alias: '晓颜'
        }, {
          name: 'zh-CN-XiaoyiNeural',
          alias: '晓伊'
        }, {
          name: 'zh-CN-XiaoyouNeural',
          alias: '晓悠'
        }, {
          name: 'zh-CN-XiaozhenNeural',
          alias: '晓甄'
        }]
      },
      'en-GB': {
        'male': [{
          name: 'en-GB-AlfieNeural',
          alias: 'Alfie'
        }, {
          name: 'en-GB-ElliotNeural',
          alias: 'Elliot'
        }, {
          name: 'en-GB-EthanNeural',
          alias: 'Ethan'
        }, {
          name: 'en-GB-NoahNeural',
          alias: 'Noah'
        }, {
          name: 'en-GB-OliverNeural',
          alias: 'Oliver'
        }, {
          name: 'en-GB-RyanNeural',
          alias: 'Ryan'
        }, {
          name: 'en-GB-ThomasNeural',
          alias: 'Thomas'
        }],
        'female': [{
          name: 'en-GB-AbbiNeural',
          alias: 'Abbi'
        }, {
          name: 'en-GB-BellaNeural',
          alias: 'Bella'
        }, {
          name: 'en-GB-HollieNeural',
          alias: 'Hollie'
        }, {
          name: 'en-GB-LibbyNeural',
          alias: 'Libby'
        }, {
          name: 'en-GB-MaisieNeural',
          alias: 'Maisie'
        }, {
          name: 'en-GB-OliviaNeural',
          alias: 'Olivia'
        }, {
          name: 'en-GB-SoniaNeural',
          alias: 'Sonia'
        }]
      },
      'en-US': {
        'male': [{
          name: 'en-US-AIGenerate1Neural',
          alias: 'AI'
        }, {
          name: 'en-US-BrandonNeural',
          alias: 'Brandon'
        }, {
          name: 'en-US-ChristopherNeural',
          alias: 'Christopher'
        }, {
          name: 'en-US-DavisNeural',
          alias: 'Davis'
        }, {
          name: 'en-US-EricNeural',
          alias: 'Eric'
        }, {
          name: 'en-US-GuyNeural',
          alias: 'Guy'
        }, {
          name: 'en-US-JacobNeural',
          alias: 'Jacob'
        }, {
          name: 'en-US-JasonNeural',
          alias: 'Jason'
        }, {
          name: 'en-US-RogerNeural',
          alias: 'Roger'
        }, {
          name: 'en-US-SteffanNeural',
          alias: 'Steffan'
        }, {
          name: 'en-US-TonyNeural',
          alias: 'Tony'
        }],
        'female': [{
          name: 'en-US-AIGenerate2Neural',
          alias: 'AI'
        }, {
          name: 'en-US-AmberNeural',
          alias: 'Amber'
        }, {
          name: 'en-US-AnaNeural',
          alias: 'Ana'
        }, {
          name: 'en-US-AriaNeural',
          alias: 'Aria'
        }, {
          name: 'en-US-AshleyNeural',
          alias: 'Ashley'
        }, {
          name: 'en-US-CoraNeural',
          alias: 'Cora'
        }, {
          name: 'en-US-ElizabethNeural',
          alias: 'Elizabeth'
        }, {
          name: 'en-US-JaneNeural',
          alias: 'Jane'
        }, {
          name: 'en-US-JennyMultilingualNeural',
          alias: 'JennyMultilingual'
        }, {
          name: 'en-US-JennyNeural',
          alias: 'Jenny'
        }, {
          name: 'en-US-MichelleNeural',
          alias: 'Michelle'
        }, {
          name: 'en-US-MonicaNeural',
          alias: 'Monica'
        }, {
          name: 'en-US-NancyNeural',
          alias: 'Nancy'
        }, {
          name: 'en-US-SaraNeural',
          alias: 'Sara'
        }]
      }
    },
    voiceOp: 4,
    voice: 'zh-CN-YunxiNeural',

    rate: 1,
    pitch: 1,
  },

  onLoad() {
    wx.setNavigationBarTitle({
      title: '语音合成'
    })

    const lang = this.data.langs[this.data.langOp].name
    const gender = this.data.genders[this.data.genderOp].name
    const voice = this.data.voices[lang][gender][this.data.voiceOp].name

    this.setData({
      lang: lang,
      gender: gender,
      voice: voice
    })
  },

  watchText(e) {
    const text = e.detail.value

    this.setData({
      text: text,
      numberOfText: text.length
    })
  },

  watchLang(e) {
    const langOp = e.detail.value
    const lang = this.data.langs[langOp].name

    this.setData({
      langOp: langOp,
      lang: lang
    })
  },

  watchGender(e) {
    const genderOp = e.detail.value
    const gender = this.data.genders[genderOp].name

    this.setData({
      genderOp: genderOp,
      gender: gender
    })
  },

  watchVoice(e) {
    const voiceOp = e.detail.value

    const lang = this.data.lang
    const gender = this.data.gender
    const voice = this.data.voices[lang][gender][voiceOp].name

    this.setData({
      voiceOp: voiceOp,
      voice: voice
    })
  },

  watchRate(e) {
    const rate = e.detail.value

    this.setData({
      rate: rate
    })
  },

  watchPitch(e) {
    const pitch = e.detail.value

    this.setData({
      pitch: pitch
    })
  }
})