const a0_0x3f07b7=a0_0x24ff;function a0_0x1e81(){const _0x561592=['walletSelectAsset','7rKyAYq','encodeFunctionCall','walletSignTx','488325BfoBoN','parse','storeGet','exitApplet','exports','walletCheckAddress','walletSwitch','alert','AppletModule','data','walletConnect','chainAdd','appOpen','1019096DCoSSK','abi','9sSoZYJ','324177AhlzxH','toolBarHidden','walletBalance','chainInfo','1554992MvfzLE','appExist','284080MecCYa','storeSet','then','ios','walletSignMessage','walletToChecksumAddress','walletDisconnect','1032790uHfnUF','loadingDismiss','1638312vucqQc','addAsset','scan','toolBarShow','walletSignHashMessage','deviceInfo','loading'];a0_0x1e81=function(){return _0x561592;};return a0_0x1e81();}(function(_0x20d94e,_0xd8e354){const _0x1db28d=a0_0x24ff,_0xf71a9a=_0x20d94e();while(!![]){try{const _0x2681ef=parseInt(_0x1db28d(0xdf))/0x1+-parseInt(_0x1db28d(0xec))/0x2+parseInt(_0x1db28d(0xef))/0x3+-parseInt(_0x1db28d(0xf5))/0x4+-parseInt(_0x1db28d(0xd2))/0x5+-parseInt(_0x1db28d(0xd4))/0x6*(-parseInt(_0x1db28d(0xdc))/0x7)+-parseInt(_0x1db28d(0xf3))/0x8*(-parseInt(_0x1db28d(0xee))/0x9);if(_0x2681ef===_0xd8e354)break;else _0xf71a9a['push'](_0xf71a9a['shift']());}catch(_0x31cd4c){_0xf71a9a['push'](_0xf71a9a['shift']());}}}(a0_0x1e81,0x438cc));import'./global.js';import{NativeModules,Platform}from'react-native';import a0_0xedf7f8 from'web3';const web3=new a0_0xedf7f8(),ios=Platform['OS']===a0_0x3f07b7(0xf8);function a0_0x24ff(_0xffa1ef,_0x150587){const _0x1e81e4=a0_0x1e81();return a0_0x24ff=function(_0x24ffca,_0x2d6085){_0x24ffca=_0x24ffca-0xcf;let _0x598e82=_0x1e81e4[_0x24ffca];return _0x598e82;},a0_0x24ff(_0xffa1ef,_0x150587);}function parseResult(_0x54d2dc){const _0x353bbe=a0_0x3f07b7;try{var _0x2f78a3=JSON['parse'](_0x54d2dc);if(_0x2f78a3[_0x353bbe(0xe8)])try{_0x2f78a3[_0x353bbe(0xe8)]=JSON[_0x353bbe(0xe0)](_0x2f78a3[_0x353bbe(0xe8)]);}catch(_0x137fdf){_0x2f78a3['data']=_0x2f78a3[_0x353bbe(0xe8)];}return _0x2f78a3;}catch(_0x35609e){return _0x54d2dc;}}const Applet={'common':{'existApp':function(_0x249d6a){return new Promise(function(_0x27d69e,_0x6e7339){const _0x3f1d66=a0_0x24ff;ios?NativeModules['AppletModule'][_0x3f1d66(0xf4)](_0x249d6a)[_0x3f1d66(0xf7)](_0x5b3741=>_0x27d69e(parseResult(_0x5b3741))):NativeModules['AppletModule'][_0x3f1d66(0xf4)](_0x249d6a,_0x427529=>_0x27d69e(parseResult(_0x427529)));});},'deviceInfo':function(){return new Promise(function(_0x4b7e4f,_0x30d7bf){const _0x22350d=a0_0x24ff;ios?NativeModules[_0x22350d(0xe7)]['deviceInfo']()[_0x22350d(0xf7)](_0x306f61=>_0x4b7e4f(parseResult(_0x306f61))):NativeModules[_0x22350d(0xe7)][_0x22350d(0xd9)](_0x43aeda=>_0x4b7e4f(parseResult(_0x43aeda)));});},'alert':function(_0x492f39,_0xd21a9a,_0x144133,_0x49f3cb){return new Promise(function(_0x2636bd,_0x39fde9){const _0xab3ed9=a0_0x24ff;ios?NativeModules[_0xab3ed9(0xe7)][_0xab3ed9(0xe6)](_0x492f39,_0xd21a9a,_0x144133,_0x49f3cb)[_0xab3ed9(0xf7)](_0x1e6599=>_0x2636bd(parseResult(_0x1e6599))):NativeModules['AppletModule'][_0xab3ed9(0xe6)](_0x492f39,_0xd21a9a,_0x144133,_0x49f3cb,_0x572609=>_0x2636bd(parseResult(_0x572609)));});},'go':function(_0x373f41){NativeModules['AppletModule']['go'](_0x373f41);},'openApp':function(_0x1f29c9){const _0x4b7d2b=a0_0x3f07b7;NativeModules[_0x4b7d2b(0xe7)][_0x4b7d2b(0xeb)](_0x1f29c9);},'showToolBar':function(){const _0x28af6=a0_0x3f07b7;NativeModules['AppletModule'][_0x28af6(0xd7)]();},'hiddenToolBar':function(){const _0x266d47=a0_0x3f07b7;NativeModules[_0x266d47(0xe7)][_0x266d47(0xf0)]();},'exit':function(){const _0x140b40=a0_0x3f07b7;NativeModules[_0x140b40(0xe7)][_0x140b40(0xe2)]();},'more':function(){const _0x3ed73a=a0_0x3f07b7;NativeModules[_0x3ed73a(0xe7)]['showMore']();},'toast':function(_0x14b278){NativeModules['AppletModule']['taost'](_0x14b278);},'loading':function(_0x249a62){const _0x247f9a=a0_0x3f07b7;NativeModules[_0x247f9a(0xe7)][_0x247f9a(0xda)](_0x249a62);},'loadingDismiss':function(){const _0x117d7f=a0_0x3f07b7;NativeModules['AppletModule'][_0x117d7f(0xd3)]();},'scan':function(){return new Promise(function(_0x16271a,_0x192701){const _0x51e3a0=a0_0x24ff;ios?NativeModules[_0x51e3a0(0xe7)][_0x51e3a0(0xd6)]()[_0x51e3a0(0xf7)](_0x261494=>_0x16271a(parseResult(_0x261494))):NativeModules[_0x51e3a0(0xe7)][_0x51e3a0(0xd6)](_0x59425c=>_0x16271a(parseResult(_0x59425c)));});},'go':function(_0x48624d){const _0x1e8aea=a0_0x3f07b7;NativeModules[_0x1e8aea(0xe7)]['go'](_0x48624d);}},'store':{'get':function(_0x3a7558){return new Promise(function(_0x4498be,_0x299ecf){const _0x31e907=a0_0x24ff;ios?NativeModules[_0x31e907(0xe7)]['storeGet'](_0x3a7558)[_0x31e907(0xf7)](_0x4df076=>_0x4498be(parseResult(_0x4df076))):NativeModules[_0x31e907(0xe7)][_0x31e907(0xe1)](_0x3a7558,_0x25af2e=>_0x4498be(parseResult(_0x25af2e)));});},'set':function(_0x16ac29,_0x4c5f0c){return new Promise(function(_0x5a8f45,_0x4902f9){const _0x5e1521=a0_0x24ff;ios?NativeModules[_0x5e1521(0xe7)][_0x5e1521(0xf6)](_0x16ac29,_0x4c5f0c)[_0x5e1521(0xf7)](_0x1fce42=>_0x5a8f45(parseResult(_0x1fce42))):NativeModules[_0x5e1521(0xe7)][_0x5e1521(0xf6)](_0x16ac29,_0x4c5f0c,_0x2a7227=>_0x5a8f45(parseResult(_0x2a7227)));});}},'chain':{'add':function(_0x5100e0,_0x3f612d,_0x183088,_0x1921f2,_0xe265aa,_0x22b122,_0x6c1b5b){return new Promise(function(_0x449d88,_0x1d5864){const _0x3cfd9c=a0_0x24ff;ios?NativeModules['AppletModule'][_0x3cfd9c(0xea)](_0x5100e0,_0x3f612d,_0x183088,_0x1921f2,_0xe265aa,_0x22b122,_0x6c1b5b)[_0x3cfd9c(0xf7)](_0x53f93f=>_0x449d88(parseResult(_0x53f93f))):NativeModules['AppletModule']['chainAdd'](_0x5100e0,_0x3f612d,_0x183088,_0x1921f2,_0xe265aa,_0x22b122,_0x6c1b5b,_0x560903=>_0x449d88(parseResult(_0x560903)));});},'switch':function(_0x45a8c7){return new Promise(function(_0x30f6e5,_0x4b9d48){const _0x4ce6ff=a0_0x24ff;ios?NativeModules[_0x4ce6ff(0xe7)]['chainSwitch'](_0x45a8c7)[_0x4ce6ff(0xf7)](_0x4efe91=>_0x30f6e5(parseResult(_0x4efe91))):NativeModules['AppletModule']['chainSwitch'](_0x45a8c7,_0x473cad=>_0x30f6e5(parseResult(_0x473cad)));});},'get':function(_0x34735a){return new Promise(function(_0x4d9934,_0x11af57){const _0x370ca7=a0_0x24ff;ios?NativeModules[_0x370ca7(0xe7)][_0x370ca7(0xf2)](_0x34735a)[_0x370ca7(0xf7)](_0x562a22=>_0x4d9934(parseResult(_0x562a22))):NativeModules[_0x370ca7(0xe7)][_0x370ca7(0xf2)](_0x34735a,_0x208c40=>_0x4d9934(parseResult(_0x208c40)));});}},'wallet':{'connect':function(){return new Promise(function(_0x12f38e,_0xde12eb){const _0x4dfd59=a0_0x24ff;ios?NativeModules[_0x4dfd59(0xe7)]['walletConnect']()[_0x4dfd59(0xf7)](_0x194aa3=>_0x12f38e(parseResult(_0x194aa3))):NativeModules['AppletModule'][_0x4dfd59(0xe9)](_0x2a6dd4=>_0x12f38e(parseResult(_0x2a6dd4)));});},'disConnect':function(){return new Promise(function(_0x3c3ce3,_0x526087){const _0x252762=a0_0x24ff;ios?NativeModules[_0x252762(0xe7)][_0x252762(0xd1)]()[_0x252762(0xf7)](_0x547bcd=>_0x3c3ce3(parseResult(_0x547bcd))):NativeModules[_0x252762(0xe7)]['walletDisconnect'](_0x220959=>_0x3c3ce3(parseResult(_0x220959)));});},'addAsset':function(_0x3effc1,_0x37fd90,_0x3e4422,_0x33573e,_0x648dbe,_0x304b89,_0xec02dc){return new Promise(function(_0x517021,_0x5df09a){const _0x5a088e=a0_0x24ff;ios?NativeModules[_0x5a088e(0xe7)][_0x5a088e(0xd5)](_0x3effc1,_0x37fd90,_0x3e4422,_0x33573e,_0x648dbe,_0x304b89,_0xec02dc)[_0x5a088e(0xf7)](_0xb48b2f=>_0x517021(parseResult(_0xb48b2f))):NativeModules[_0x5a088e(0xe7)][_0x5a088e(0xd5)](_0x3effc1,_0x37fd90,_0x3e4422,_0x33573e,_0x648dbe,_0x304b89,_0xec02dc,_0x287f2f=>_0x517021(parseResult(_0x287f2f)));});},'signMessage':function(_0x158308){return new Promise(function(_0x5d5535,_0x5668d9){const _0x57ca83=a0_0x24ff;ios?NativeModules['AppletModule'][_0x57ca83(0xcf)](_0x158308)[_0x57ca83(0xf7)](_0x20dd55=>_0x5d5535(parseResult(_0x20dd55))):NativeModules[_0x57ca83(0xe7)]['walletSignMessage'](_0x158308,_0x8469e=>_0x5d5535(parseResult(_0x8469e)));});},'signHashMessage':function(_0x5c6386){return new Promise(function(_0x201e60,_0x354909){const _0x179f58=a0_0x24ff;ios?NativeModules['AppletModule']['walletSignHashMessage'](_0x5c6386)['then'](_0x4f9224=>_0x201e60(parseResult(_0x4f9224))):NativeModules[_0x179f58(0xe7)][_0x179f58(0xd8)](_0x5c6386,_0x2affdd=>_0x201e60(parseResult(_0x2affdd)));});},'send':function(_0x3752f0,_0x2ed3c2,_0x1d366f,_0x4c7765,_0x59a01c,_0x12bd0d,_0x2e7d4f,_0x2da593){const _0x149174=a0_0x3f07b7;var _0x34c979=web3['eth'][_0x149174(0xed)][_0x149174(0xdd)](_0x2e7d4f,_0x2da593);return new Promise(function(_0x260870,_0x5abdb2){const _0x33a611=_0x149174;ios?NativeModules[_0x33a611(0xe7)][_0x33a611(0xde)](_0x3752f0,_0x2ed3c2,_0x1d366f,_0x4c7765,_0x59a01c,_0x12bd0d,_0x34c979)[_0x33a611(0xf7)](_0x1e4324=>_0x260870(parseResult(_0x1e4324))):NativeModules[_0x33a611(0xe7)][_0x33a611(0xde)](_0x3752f0,_0x2ed3c2,_0x1d366f,_0x4c7765,_0x59a01c,_0x12bd0d,_0x34c979,_0x315956=>_0x260870(parseResult(_0x315956)));});},'sendData':function(_0x33e014,_0x512e73,_0x11dc81,_0x40be56,_0x1d2649,_0x5e3613,_0x14345b){return new Promise(function(_0x2198c4,_0x6e93c2){const _0x2063a8=a0_0x24ff;ios?NativeModules[_0x2063a8(0xe7)][_0x2063a8(0xde)](_0x33e014,_0x512e73,_0x11dc81,_0x40be56,_0x1d2649,_0x5e3613,_0x14345b)[_0x2063a8(0xf7)](_0x702dd6=>_0x2198c4(parseResult(_0x702dd6))):NativeModules[_0x2063a8(0xe7)][_0x2063a8(0xde)](_0x33e014,_0x512e73,_0x11dc81,_0x40be56,_0x1d2649,_0x5e3613,_0x14345b,_0xb302ab=>_0x2198c4(parseResult(_0xb302ab)));});},'switch':function(){return new Promise(function(_0x173101,_0x4ce249){const _0x47a92c=a0_0x24ff;ios?NativeModules[_0x47a92c(0xe7)][_0x47a92c(0xe5)]()['then'](_0x1dfd13=>_0x173101(parseResult(_0x1dfd13))):NativeModules['AppletModule'][_0x47a92c(0xe5)](_0x1d0604=>_0x173101(parseResult(_0x1d0604)));});},'validAddress':function(_0x24f0cb,_0x52af89){return new Promise(function(_0xc388dc,_0x25fe90){const _0x53f46c=a0_0x24ff;ios?NativeModules[_0x53f46c(0xe7)][_0x53f46c(0xe4)](_0x24f0cb,_0x52af89)['then'](_0x1cc47d=>_0xc388dc(parseResult(_0x1cc47d))):NativeModules[_0x53f46c(0xe7)]['walletCheckAddress'](_0x24f0cb,_0x52af89,_0x5e2bb2=>_0xc388dc(parseResult(_0x5e2bb2)));});},'checksumAddress':function(_0x3bb869,_0x468fcd){return new Promise(function(_0x10aaa7,_0x4dcbf7){const _0x27f43d=a0_0x24ff;ios?NativeModules['AppletModule'][_0x27f43d(0xd0)](_0x3bb869,_0x468fcd)[_0x27f43d(0xf7)](_0xfef61a=>_0x10aaa7(parseResult(_0xfef61a))):NativeModules[_0x27f43d(0xe7)][_0x27f43d(0xd0)](_0x3bb869,_0x468fcd,_0x3f9c2b=>_0x10aaa7(parseResult(_0x3f9c2b)));});},'selectAsset':function(_0x28c7ad,_0x3ddccd,_0x380136){return new Promise(function(_0x4016c2,_0x436d35){const _0x3427db=a0_0x24ff;ios?NativeModules[_0x3427db(0xe7)][_0x3427db(0xdb)](_0x28c7ad,_0x3ddccd,_0x380136)[_0x3427db(0xf7)](_0x3713c7=>_0x4016c2(parseResult(_0x3713c7))):NativeModules[_0x3427db(0xe7)]['walletSelectAsset'](_0x28c7ad,_0x3ddccd,_0x380136,_0xb4d17d=>_0x4016c2(parseResult(_0xb4d17d)));});},'balanceOf':function(_0x5a58fd,_0x19c76c,_0x33f23b,_0x1223a0){return new Promise(function(_0x1b14ce,_0x26ac4b){const _0x2c9e88=a0_0x24ff;ios?NativeModules[_0x2c9e88(0xe7)]['walletBalance'](_0x5a58fd,_0x19c76c,_0x33f23b,_0x1223a0)[_0x2c9e88(0xf7)](_0x2aa500=>_0x1b14ce(parseResult(_0x2aa500))):NativeModules[_0x2c9e88(0xe7)][_0x2c9e88(0xf1)](_0x5a58fd,_0x19c76c,_0x33f23b,_0x1223a0,_0x3c6a4d=>_0x1b14ce(parseResult(_0x3c6a4d)));});}}};module[a0_0x3f07b7(0xe3)]=Applet;