const palettes = [
    {
        title: "Standard Colors", saved: true, builtin: true,
        colorArray: ["rgba(255, 255, 255, 1)",
            "rgba(160, 160, 160, 1)",
            "rgba(87, 87, 87, 1)",
            "rgba(0, 0, 0, 1)",
            "rgba(129, 38, 192, 1)",
            "rgba(129, 74, 25, 1)",
            "rgba(29, 105, 20, 1)",
            "rgba(42, 75, 215, 1)",
            "rgba(173, 35, 35, 1)",
            "rgba(233, 222, 187, 1)",
            "rgba(129, 197, 122, 1)",
            "rgba(157, 175, 255, 1)",
            "rgba(255, 205, 243, 1)",
            "rgba(255, 146, 51, 1)",
            "rgba(255, 238, 51, 1)",
            "rgba(41, 208, 208, 1)"
        ]
    },
    {
        title: "Grayscale", saved: true, builtin: true,
        colorArray: ["rgba(255, 255, 255, 1)",
            "rgba(224, 224, 224, 1)",
            "rgba(208, 208, 208, 1)",
            "rgba(192, 192, 192, 1)",
            "rgba(176, 176, 176, 1)",
            "rgba(160, 160, 160, 1)",
            "rgba(144, 144, 144, 1)",
            "rgba(128, 128, 128, 1)",
            "rgba(112, 112, 112, 1)",
            "rgba(96, 96, 96, 1)",
            "rgba(80, 80, 80, 1)",
            "rgba(64, 64, 64, 1)",
            "rgba(48, 48, 48, 1)",
            "rgba(32, 32, 32, 1)",
            "rgba(16, 16, 16, 1)",
            "rgba(0, 0, 0, 1)"
        ]
    },
    {
        title: "Modern", saved: true, builtin: true,
        colorArray: ["#001F3F", "#0074D9", "#7FDBFF",
            "#39CCCC", "#3D9970", "#2ECC40",
            "#01FF70", "#FFDC00", "#FF851B",
            "#FF4136", "#85144B", "#F012BE",
            "#B10DC9", "#DDDDDD", "#AAAAAA",
            "#111111"
        ]
    },
    {
        title: "Calm", saved: true, builtin: true,
        colorArray: ["rgba(255,255,255,1)", "rgba(191,183,230,1)",
            "rgba(125,134,193,1)", "rgba(64,56,116,1)",
            "rgba(38,28,78,1)", "rgba(31,9,55,1)",
            "rgba(87,67,49,1)", "rgba(157,145,33,1)",
            "rgba(164,153,89,1)", "rgba(182,179,126,1)",
            "rgba(145,163,245,1)", "rgba(50,50,50,1)",
            "rgba(100,100,100,1)", "rgba(150,150,150,1)",
            "rgba(200,200,200,1)", "rgba(0,0,0,1)"]
    },
    {
        title: "Rich", saved: true, builtin: true,
        colorArray: ["rgba(26,19,52,1)", "rgba(38,41,74,1)",
            "rgba(1,84,90,1)", "rgba(1,115,81,1)",
            "rgba(3,195,131,1)", "rgba(170,217,98,1)",
            "rgba(251,191,69,1)", "rgba(239,106,50,1)",
            "rgba(237,3,69,1)", "rgba(161,42,94,1)",
            "rgba(113,1,98,1)", "rgba(17,1,65,1)",
            "rgba(0, 0, 0, 1)", "rgba(80, 80, 80, 1)",
            "rgba(195, 195, 195, 1)", "rgba(255, 255, 255, 1)"]
    },
    {
        title: "Vibrant", saved: true, builtin: true,
        colorArray: ["rgba(193,0,1,1)", "rgba(252,51,28,1)", "rgba(255,143,0,1)", "rgba(255,210,33,1)",
            "rgba(237,255,91,1)", "rgba(199,224,0,1)", "rgba(82,224,0,1)", "rgba(0,178,44,1)",
            "rgba(26,147,145,1)", "rgba(14,172,189,1)", "rgba(0,196,218,1)", "rgba(70,67,187,1)",
            "rgba(97,12,140,1)", "rgba(152,15,183,1)", "rgba(210,35,254,1)", "rgba(179,3,71,1)"]
    },
    {
        title: "Rainbow", saved: true, builtin: true,
        colorArray: ["rgba(248,12,18,1)", "rgba(238,17,0,1)", "rgba(255,51,17,1)", "rgba(255,102,68,1)",
            "rgba(255,153,51,1)", "rgba(254,174,45,1)", "rgba(204,187,51,1)", "rgba(208,195,16,1)",
            "rgba(170,204,34,1)", "rgba(105,208,37,1)", "rgba(34,204,170,1)", "rgba(18,189,185,1)",
            "rgba(17,170,187,1)", "rgba(68,68,221,1)", "rgba(51,17,187,1)", "rgba(68,34,153,1)"
        ]
    },
    {
        title: "Autumn", saved: true, builtin: true,
        colorArray: ['rgba(118,67,61,1)', 'rgba(214,174,68,1)', 'rgba(52,27,14,1)',
            'rgba(119,140,83,1)', 'rgba(222,12,46,1)', 'rgba(50,41,28,1)',
            'rgba(76,75,69,1)', 'rgba(13,115,104,1)', 'rgba(6,70,82,1)',
            'rgba(221,89,55,1)', 'rgba(44,70,75,1)', 'rgba(32,50,47,1)',
            'rgba(162,46,68,1)', 'rgba(4,92,100,1)', 'rgba(164,125,44,1)', 'rgba(48,44,60,1)'
        ]
    },
    {
        title: "Kaleidoscope", saved: true, builtin: true,
        colorArray: ['rgba(130,49,52,1)', 'rgba(14,77,89,1)', 'rgba(196,144,17,1)',
            'rgba(62,93,70,1)', 'rgba(115,127,48,1)', 'rgba(39,61,79,1)',
            'rgba(67,7,37,1)', 'rgba(99,40,62,1)', 'rgba(79,45,65,1)',
            'rgba(63,54,73,1)', 'rgba(157,36,49,1)', 'rgba(168,66,40,1)',
            'rgba(59,23,47,1)', 'rgba(76,116,63,1)', 'rgba(86,28,28,1)', 'rgba(66,39,44,1)'

        ]
    },
    {
        title: "Sunny", saved: true, builtin: true,
        colorArray: [
            'rgba(230,55,4,1)', 'rgba(105,48,9,1)', 'rgba(226,199,100,1)', 'rgba(140,140,63,1)',
            'rgba(34,9,6,1)', 'rgba(33,139,125,1)', 'rgba(136,100,28,1)', 'rgba(222,142,6,1)',
            'rgba(181,65,4,1)', 'rgba(155,46,4,1)', 'rgba(25,103,98,1)', 'rgba(240,164,7,1)',
            'rgba(119,177,134,1)', 'rgba(44,79,64,1)', 'rgba(84,112,87,1)', 'rgba(33,54,49,1)'
        ]
    },
    {
        title: "December", saved: true, builtin: true,
        colorArray: [
            "rgba(81,101,87,1)", "rgba(32,95,94,1)", "rgba(218,47,49,1)", "rgba(135,153,111,1)",
            "rgba(152,36,64,1)", "rgba(126,114,90,1)", "rgba(109,50,59,1)", "rgba(154,46,26,1)",
            "rgba(143,85,75,1)", "rgba(182,43,64,1)", "rgba(136,123,108,1)", "rgba(21,140,130,1)",
            "rgba(168,107,87,1)", "rgba(154,100,60,1)", "rgba(198,125,87,1)", "rgba(36,28,44,1)"
        ]
    },
    {
        title: "Tropics", saved: true, builtin: true,
        colorArray: ["rgba(10,41,3,1)", "rgba(1,82,0,1)", "rgba(20,128,16,1)", "rgba(175,190,43,1)",
            "rgba(255,124,45,1)", "rgba(220,42,22,1)", "rgba(167,64,23,1)", "rgba(125,78,100,1)",
            "rgba(122,82,237,1)", "rgba(164,191,255,1)", "rgba(153,254,201,1)", "rgba(64,177,0,1)",
            "rgba(92,128,26,1)", "rgba(255, 255, 255, 1)", "rgba(128, 128, 128, 1)", "rgba(0, 0, 0, 1)"
        ]
    },
    {
        title: "Neon", saved: true, builtin: true,
        colorArray: ["rgba(5,141,199,1)", "rgba(80,180,50,1)",
            "rgba(237,86,27,1)", "rgba(221,223,0,1)",
            "rgba(36,203,229,1)", "rgba(100,229,114,1)",
            "rgba(255,150,85,1)", "rgba(210,8,226,1)",
            "rgba(106,249,196,1)", "#E4FF04",
            "#00FFFF", "#FF0099",
            "rgba(0,0,0,1)", "rgba(255,255,255,1)"
        ]
    },
    {
        title: "Pastel", saved: true, builtin: true,
        colorArray: ["rgba(49,205,225,1)", "rgba(39,231,150,1)",
            "rgba(255,119,119,1)", "rgba(228,221,97,1)",
            "rgba(187,170,221,1)", "rgba(219,136,225,1)",
            "rgba(139,195,120,1)", "rgba(243,78,127,1)",
            "rgba(155,187,254,1)", "rgba(205,140,74,1)",
            "rgba(253,88,88,1)", "#F47E7D",
            "#81C0C5", "#B5A6D3",
            "rgba(0, 0, 0, 1)", "rgba(255,255,255,1)"
        ]
    },
    {
        title: "Mona Lisa", saved: true, builtin: true,
        colorArray: ["rgba(190,143,50,1)", "rgba(125,90,33,1)", "rgba(77,47,22,1)", "rgba(20,9,9,1)",
            "rgba(85,83,39,1)", "rgba(249,211,78,1)", "rgba(49,26,17,1)", "rgba(140,141,70,1)",
            "rgba(54,49,23,1)", "rgba(159,64,18,1)", "rgba(36,19,15,1)", "rgba(208,185,111,1)",
            "rgba(89,112,86,1)", "rgba(27,28,16,1)", "rgba(59,59,52,1)", "rgba(35,30,36,1)"
        ]
    },
    {
        title: "Starry Night", saved: true, builtin: true,
        colorArray: ["rgba(76,141,204,1)", "rgba(120,192,224,1)", "rgba(57,107,160,1)", "rgba(225,237,201,1)",
            "rgba(29,31,47,1)", "rgba(112,128,98,1)", "rgba(221,194,45,1)", "rgba(36,68,120,1)",
            "rgba(218,211,114,1)", "rgba(28,48,91,1)", "rgba(59,83,80,1)", "rgba(111,84,57,1)",
            "rgba(74,43,46,1)", "rgba(171,166,157,1)", "rgba(151,174,96,1)", "rgba(178,87,34,1)"
        ]
    },
    {
        title: "Water Lillies", saved: true, builtin: true,
        colorArray: ["rgba(206,193,179,1)", "rgba(72,85,38,1)", "rgba(87,103,117,1)", "rgba(130,144,197,1)",
            "rgba(41,33,54,1)", "rgba(149,158,142,1)", "rgba(166,192,180,1)", "rgba(102,118,164,1)",
            "rgba(151,120,120,1)", "rgba(40,59,89,1)", "rgba(88,99,68,1)", "rgba(122,124,119,1)",
            "rgba(64,63,88,1)", "rgba(198,167,104,1)", "rgba(188,74,80,1)", "rgba(198,175,55,1)"
        ]
    },
    {
        title: "American Gothic", saved: true, builtin: true,
        colorArray: ["rgba(209,221,204,1)", "rgba(159,169,160,1)", "rgba(132,119,100,1)", "rgba(97,103,110,1)",
            "rgba(25,23,28,1)", "rgba(197,169,126,1)", "rgba(100,98,74,1)", "rgba(87,73,56,1)",
            "rgba(55,40,22,1)", "rgba(59,65,75,1)", "rgba(62,63,47,1)", "rgba(38,42,53,1)",
            "rgba(125,138,156,1)", "rgba(184,148,90,1)", "rgba(39,44,41,1)", "rgba(180,108,90,1)"
        ]
    },
    {
        title: "The mill of Wijk bij Duurstede", saved: true, builtin: true,
        colorArray: ['rgba(96,109,97,1)', 'rgba(189,177,142,1)', 'rgba(146,140,112,1)', 'rgba(70,67,32,1)',
            'rgba(43,39,27,1)', 'rgba(162,159,132,1)', 'rgba(91,86,52,1)', 'rgba(65,89,84,1)',
            'rgba(118,138,133,1)', 'rgba(69,63,47,1)', 'rgba(127,129,105,1)', 'rgba(42,55,34,1)',
            'rgba(84,83,70,1)', 'rgba(170,188,170,1)', 'rgba(160,177,173,1)', 'rgba(182,124,88,1)']
    },
    {
        title: "Picaso - Three Musicians", saved: true, builtin: true,
        colorArray: ['rgba(228,225,184,1)', 'rgba(94,104,171,1)', 'rgba(36,27,12,1)', 'rgba(102,65,31,1)',
            'rgba(207,91,23,1)', 'rgba(165,125,51,1)', 'rgba(213,163,41,1)', 'rgba(168,173,129,1)',
            'rgba(57,40,21,1)', 'rgba(167,92,23,1)', 'rgba(100,86,115,1)', 'rgba(126,95,48,1)',
            'rgba(133,76,30,1)', 'rgba(156,138,166,1)', 'rgba(63,15,8,1)', 'rgba(98,72,74,1)']
    },
    {
        title: "Poppy Field in Argenteuil", saved: true, builtin: true,
        colorArray: ['rgba(218,207,141,1)', 'rgba(177,186,141,1)', 'rgba(170,137,82,1)', 'rgba(99,86,43,1)',
            'rgba(126,159,151,1)', 'rgba(33,26,19,1)', 'rgba(94,37,23,1)', 'rgba(124,138,110,1)',
            'rgba(132,121,66,1)', 'rgba(203,73,31,1)', 'rgba(62,60,32,1)', 'rgba(138,95,44,1)',
            'rgba(203,109,49,1)', 'rgba(145,140,74,1)', 'rgba(114,104,69,1)', 'rgba(203,128,72,1)']
    },
    {
        title: "Black & White", saved: true, builtin: true,
        colorArray: [
            "rgba(0, 0, 0, 1)", "rgba(255,255,255,1)"
        ]
    },
    {
        title: "Basics", saved: true, builtin: true,
        colorArray: [
            "rgba(0, 0, 0, 1)", "rgba(255,255,255,1)",
            "rgba(255, 0, 0, 1)", "rgba(0, 255, 0, 1)",
            "rgba(0, 0, 255, 1)"
        ]
    },
    {
        title: "Shades of Red", saved: true, builtin: true,
        colorArray: [
            "rgba(0, 0, 0, 1)",
            "hsla(0, 49%, 66%, 1)",
            "rgba(255, 0, 0, 1)",
            "hsla(0, 100%, 21%, 1)",
            "hsla(0, 63%, 50%, 1)",
            "hsla(0, 32%, 18%, 1)",
            "hsla(0, 29%, 92%, 1)"
        ]
    },
    {
        title: "Shades of Blue", saved: true, builtin: true,
        colorArray: [
            "rgba(0, 0, 0, 1)",
            "hsla(221, 57%, 45%, 1)",
            "hsla(229, 100%, 50%, 1)",
            "hsla(252, 100%, 18%, 1)",
            "hsla(222, 100%, 72%, 1)",
            "hsla(206, 100%, 90%, 1)"
        ]
    },
    {
        title: "Shades of Green", saved: true, builtin: true,
        colorArray: [
            "rgba(0, 0, 0, 1)",
            "hsla(142, 56%, 45%, 1)",
            "hsla(144, 100%, 50%, 1)",
            "hsla(134, 100%, 18%, 1)",
            "hsla(155, 100%, 72%, 1)",
            "hsla(143, 100%, 90%, 1)"
        ]
    },
    {
        title: "Shades of Yellow", saved: true, builtin: true,
        colorArray: [
            "rgba(0, 0, 0, 1)",
            "hsla(47, 56%, 45%, 1)",
            "hsla(53, 100%, 50%, 1)",
            "hsla(52, 100%, 18%, 1)",
            "hsla(72, 100%, 72%, 1)",
            "hsla(65, 100%, 90%, 1)"
        ]
    },
    {
        title: "Shades of Purple", saved: true, builtin: true,
        colorArray: [
            "rgba(0, 0, 0, 1)",
            "hsla(306, 56%, 45%, 1)",
            "hsla(302, 100%, 50%, 1)",
            "hsla(304, 100%, 18%, 1)",
            "hsla(301, 100%, 72%, 1)",
            "hsla(305, 100%, 90%, 1)"
        ]
    },
    {
        title: "Shades of Orange", saved: true, builtin: true,
        colorArray: [
            "rgba(0, 0, 0, 1)",
            "hsla(37, 56%, 45%, 1)",
            "hsla(38, 100%, 50%, 1)",
            "hsla(45, 100%, 18%, 1)",
            "hsla(40, 100%, 72%, 1)",
            "hsla(41, 100%, 90%, 1)"
        ]
    },
    {
        title: "Vase with Sun Flowers", saved: true, builtin: true,
        colorArray: [
            'rgba(185,197,178,1)', 'rgba(104,56,28,1)', 'rgba(203,158,54,1)', 'rgba(133,116,60,1)', 'rgba(91,102,56,1)', 'rgba(199,183,126,1)',
            'rgba(163,102,38,1)', 'rgba(200,169,90,1)', 'rgba(166,128,48,1)', 'rgba(221,188,64,1)', 'rgba(227,212,140,1)', 'rgba(231,218,174,1)',
            'rgba(236,186,77,1)', 'rgba(139,165,158,1)', 'rgba(183,131,19,1)', 'rgba(143,140,157,1)'
        ]
    },
    {
        title: "Raphael Madonna with Beardless St. Joseph", saved: true, builtin: true,
        colorArray: [
            'rgba(206,157,80,1)', 'rgba(121,82,45,1)', 'rgba(74,49,33,1)', 'rgba(238,224,183,1)',
            'rgba(144,144,88,1)', 'rgba(246,216,138,1)', 'rgba(11,9,13,1)', 'rgba(43,29,26,1)',
            'rgba(82,89,49,1)', 'rgba(168,62,38,1)', 'rgba(44,58,35,1)', 'rgba(24,39,26,1)',
            'rgba(47,43,52,1)', 'rgba(27,27,36,1)', 'rgba(78,76,84,1)', 'rgba(134,132,140,1)'
        ]
    },
    {
        title: "Henri de Toulouse-Lautrec", saved: true, builtin: true,
        colorArray: [
            'rgba(228,211,194,1)', 'rgba(51,33,25,1)', 'rgba(220,106,78,1)', 'rgba(179,140,103,1)', 'rgba(148,59,52,1)',
            'rgba(196,155,177,1)', 'rgba(96,53,42,1)', 'rgba(165,102,118,1)', 'rgba(194,75,62,1)', 'rgba(180,88,88,1)',
            'rgba(147,102,62,1)', 'rgba(222,180,84,1)', 'rgba(126,52,19,1)', 'rgba(121,27,24,1)',
            'rgba(146,173,186,1)', 'rgba(76,108,97,1)'
        ]
    },
    {
        title: "Les Demoiselles d'Avignon", saved: true, builtin: true,
        colorArray: [
            'rgba(79,80,82,1)', 'rgba(197,146,136,1)', 'rgba(124,68,54,1)', 'rgba(225,218,211,1)',
            'rgba(116,112,111,1)', 'rgba(162,96,82,1)', 'rgba(129,74,69,1)', 'rgba(195,186,179,1)',
            'rgba(214,204,187,1)', 'rgba(228,172,157,1)', 'rgba(149,137,130,1)', 'rgba(179,104,104,1)',
            'rgba(198,181,162,1)', 'rgba(114,146,197,1)', 'rgba(91,140,141,1)', 'rgba(128,140,196,1)'
        ]
    },
    {
        title: "The persistence of memory", saved: true, builtin: true,
        colorArray: [
            'rgba(214,217,203,1)', 'rgba(100,161,188,1)', 'rgba(183,71,33,1)', 'rgba(52,122,167,1)',
            'rgba(125,72,44,1)', 'rgba(206,141,54,1)', 'rgba(73,92,91,1)', 'rgba(74,42,27,1)', 'rgba(13,7,7,1)',
            'rgba(41,21,17,1)', 'rgba(147,143,82,1)', 'rgba(45,50,44,1)', 'rgba(40,63,83,1)',
            'rgba(29,34,47,1)', 'rgba(25,29,25,1)', 'rgba(22,18,29,1)'
        ]
    },
    {
        title: "The Kiss", saved: true, builtin: true,
        colorArray: [
            'rgba(237,204,86,1)', 'rgba(43,28,8,1)', 'rgba(225,152,10,1)', 'rgba(174,96,17,1)', 'rgba(161,148,56,1)',
            'rgba(84,38,7,1)', 'rgba(118,104,31,1)', 'rgba(223,158,87,1)', 'rgba(134,63,12,1)', 'rgba(183,166,137,1)',
            'rgba(100,74,21,1)', 'rgba(212,48,26,1)', 'rgba(244,237,188,1)', 'rgba(83,76,78,1)', 'rgba(57,141,75,1)',
            'rgba(59,69,108,1)'
        ]
    },
    {
        title: "Steampunk", saved: true, builtin: true,
        colorArray: [
            'rgba(227,207,180,1)', 'rgba(34,25,21,1)', 'rgba(211,155,107,1)', 'rgba(140,75,29,1)',
            'rgba(180,140,104,1)', 'rgba(176,164,162,1)', 'rgba(80,52,38,1)', 'rgba(128,114,109,1)',
            'rgba(183,117,70,1)', 'rgba(149,106,76,1)', 'rgba(103,35,11,1)', 'rgba(166,109,52,1)',
            'rgba(105,53,22,1)', 'rgba(228,182,81,1)', 'rgba(54,108,100,1)', 'rgba(60,132,76,1)'
        ]
    },
    {
        title: "Type of Beauty - Tissot", saved: true, builtin: true,
        colorArray: [
            'rgba(203,79,51,1)', 'rgba(136,79,55,1)', 'rgba(240,215,198,1)', 'rgba(210,179,166,1)',
            'rgba(198,156,115,1)', 'rgba(23,20,25,1)', 'rgba(159,150,117,1)', 'rgba(86,55,39,1)',
            'rgba(58,38,30,1)', 'rgba(96,95,60,1)', 'rgba(64,62,43,1)', 'rgba(42,44,38,1)',
            'rgba(148,139,149,1)', 'rgba(36,35,44,1)', 'rgba(56,51,60,1)', 'rgba(88,82,93,1)'
        ]
    },
    {
        title: "The Parasol", saved: true, builtin: true,
        colorArray: [
            "rgba(206,142,58,1)", "rgba(219,201,148,1)", "rgba(138,151,154,1)", "rgba(160,111,57,1)",
            "rgba(115,121,92,1)", "rgba(107,91,40,1)", "rgba(67,21,11,1)", "rgba(249,192,46,1)",
            "rgba(102,101,106,1)", "rgba(116,47,20,1)", "rgba(89,57,30,1)", "rgba(89,57,55,1)",
            "rgba(94,33,18,1)", "rgba(30,10,8,1)", "rgba(156,180,174,1)", "rgba(84,108,140,1)"
        ]
    },
    {
        title: "Night melody", saved: true, builtin: true,
        colorArray: [
            "rgba(212,218,200,1)", "rgba(146,98,55,1)", "rgba(73,133,174,1)",
            "rgba(135,194,189,1)", "rgba(73,132,102,1)", "rgba(212,151,30,1)",
            "rgba(38,84,119,1)", "rgba(204,64,24,1)", "rgba(99,59,33,1)",
            "rgba(15,21,21,1)", "rgba(208,178,100,1)", "rgba(46,88,62,1)",
            "rgba(27,50,72,1)", "rgba(143,181,57,1)", "rgba(63,35,21,1)",
            "rgba(50,177,187,1)"
        ]
    },
    {
        title: "Japanese Flowers", saved: true, builtin: true,
        colorArray: [
            'rgba(209,165,101,1)', 'rgba(141,68,26,1)', 'rgba(84,56,21,1)', 'rgba(246,211,178,1)',
            'rgba(127,91,39,1)', 'rgba(135,107,59,1)', 'rgba(231,191,139,1)', 'rgba(165,130,73,1)',
            'rgba(166,113,59,1)', 'rgba(227,188,122,1)', 'rgba(188,133,65,1)', 'rgba(248,212,152,1)',
            'rgba(188,131,77,1)', 'rgba(237,167,110,1)', 'rgba(100,100,84,1)', 'rgba(100,116,76,1)'
        ]
    },
    {
        title: "Sunday Afternoon on the Island of La Grande Jatte", saved: true, builtin: true,
        colorArray: [
            'rgba(159,135,71,1)', 'rgba(174,187,185,1)', 'rgba(133,156,178,1)', 'rgba(207,204,195,1)',
            'rgba(30,38,31,1)', 'rgba(107,132,83,1)', 'rgba(69,92,119,1)', 'rgba(207,178,43,1)', 'rgba(212,194,96,1)',
            'rgba(104,86,39,1)', 'rgba(183,182,55,1)', 'rgba(69,100,40,1)', 'rgba(204,74,11,1)',
            'rgba(68,60,29,1)', 'rgba(46,61,77,1)', 'rgba(51,106,164,1)'
        ]
    }
];
