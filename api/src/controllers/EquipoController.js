const _0x18b9=['findById','21891pyOiIA','5gxDwba','json','Error\x20Data\x20:(','query','78839vSbeQc','8GTlMQo','1qVXhaV','find','body','Unauthorized','headers','file','396523yDjfrG','params','../models/User','status','535555UGlOtt','create','exports','Equipo\x20name\x20is\x20required','7LbpUma','Equipo\x20already\x20exists\x20:(','612941tfjAQX','209434YOdfhN','Brand\x20is\x20required','30675IGlGrn','length','2TWHhTf'];const _0x2a7bcc=_0x2f1e;function _0x2f1e(_0x23c1cd,_0x1368cc){return _0x2f1e=function(_0x18b9af,_0x2f1e2d){_0x18b9af=_0x18b9af-0x163;let _0x456f5f=_0x18b9[_0x18b9af];return _0x456f5f;},_0x2f1e(_0x23c1cd,_0x1368cc);}(function(_0x5383e1,_0x1250e7){const _0x4375f2=_0x2f1e;while(!![]){try{const _0x4bb5aa=-parseInt(_0x4375f2(0x17d))*-parseInt(_0x4375f2(0x16e))+-parseInt(_0x4375f2(0x170))*-parseInt(_0x4375f2(0x176))+parseInt(_0x4375f2(0x171))*-parseInt(_0x4375f2(0x175))+-parseInt(_0x4375f2(0x167))*-parseInt(_0x4375f2(0x16c))+-parseInt(_0x4375f2(0x177))*-parseInt(_0x4375f2(0x163))+-parseInt(_0x4375f2(0x16a))+-parseInt(_0x4375f2(0x169));if(_0x4bb5aa===_0x1250e7)break;else _0x5383e1['push'](_0x5383e1['shift']());}catch(_0x5910fa){_0x5383e1['push'](_0x5383e1['shift']());}}}(_0x18b9,0x7a87c));const User=require(_0x2a7bcc(0x17f)),Equipo=require('../models/Equipo');module[_0x2a7bcc(0x165)]={async 'show'(_0x3ed250,_0x387330){const _0x319bb1=_0x2a7bcc,{name:_0x3ad902}=_0x3ed250[_0x319bb1(0x174)],{user_token:_0x53a408}=_0x3ed250['headers'];if(!_0x53a408)return _0x387330[_0x319bb1(0x180)](0x191)['json']({'error':_0x319bb1(0x17a)});const _0x50e592=await Equipo[_0x319bb1(0x178)]({'name':{'$regex':new RegExp(_0x3ad902,'i')},'user':{'$ne':_0x53a408}});return _0x387330[_0x319bb1(0x172)](_0x50e592);},async 'index'(_0x234b83,_0x5db715){const _0x48471b=_0x2a7bcc,{name:_0x4d2fef}=_0x234b83['query'],{user_token:_0x30f560}=_0x234b83[_0x48471b(0x17b)];try{const _0x57b806=await Equipo[_0x48471b(0x178)]({'name':{'$regex':new RegExp(_0x4d2fef,'i')},'user':_0x30f560});return _0x5db715[_0x48471b(0x172)](_0x57b806);}catch(_0x574b2c){return _0x5db715[_0x48471b(0x172)]([]);}},async 'remove'(_0xab642e,_0x3bc124){const _0x34f249=_0x2a7bcc,{equipo_id:_0x33d2b4}=_0xab642e[_0x34f249(0x17e)],{user_token:_0x57ad4f}=_0xab642e['headers'];if(!_0x57ad4f)return _0x3bc124[_0x34f249(0x180)](0x191)[_0x34f249(0x172)]({'error':_0x34f249(0x17a)});const _0x2a14a3=await User['findById'](_0x57ad4f);if(!_0x2a14a3)return _0x3bc124['status'](0x191)[_0x34f249(0x172)]({'error':_0x34f249(0x17a)});return await Equipo['deleteMany']({'_id':_0x33d2b4}),_0x3bc124[_0x34f249(0x180)](0xcc)[_0x34f249(0x172)]({});},async 'unique'(_0x176259,_0x4097bb){const _0x408052=_0x2a7bcc,{equipo_id:_0x48e26f}=_0x176259[_0x408052(0x17e)],{user_token:_0xbd28e4}=_0x176259[_0x408052(0x17b)];if(!_0xbd28e4)return _0x4097bb[_0x408052(0x180)](0x191)['json']({'error':_0x408052(0x17a)});const _0x363785=await User[_0x408052(0x16f)](_0xbd28e4);if(!_0x363785)return _0x4097bb['status'](0x191)[_0x408052(0x172)]({'error':'Unauthorized'});let _0x294dfc=await Equipo[_0x408052(0x16f)](_0x48e26f);if(!_0x294dfc)return _0x4097bb[_0x408052(0x180)](0x194)['json']({});return _0x4097bb[_0x408052(0x180)](0xc8)[_0x408052(0x172)](_0x294dfc);},async 'store'(_0x5c73a6,_0x12b22e){const _0x4ede40=_0x2a7bcc;try{let {filename:_0x5456d9}=_0x5c73a6[_0x4ede40(0x17c)];const {name:_0x12adf9,category:_0x47eb85,price:_0x2eb496}=_0x5c73a6[_0x4ede40(0x179)],{user_token:_0x3c5e53}=_0x5c73a6[_0x4ede40(0x17b)];if(!_0x3c5e53)return _0x12b22e[_0x4ede40(0x180)](0x191)[_0x4ede40(0x172)]({'error':_0x4ede40(0x17a)});const _0x1f7575=await User[_0x4ede40(0x16f)](_0x3c5e53);if(!_0x1f7575)return _0x12b22e[_0x4ede40(0x180)](0x191)[_0x4ede40(0x172)]({'error':_0x4ede40(0x17a)});if(!_0x12adf9||_0x12adf9['length']<=0x0)return _0x12b22e[_0x4ede40(0x180)](0x19c)[_0x4ede40(0x172)]({'code':0x3e9,'error':_0x4ede40(0x166)});if(!_0x47eb85||_0x47eb85['length']<=0x0)return _0x12b22e['status'](0x19c)['json']({'code':0x3ea,'error':_0x4ede40(0x16b)});const _0x20c85a=await Equipo['find']({'user':_0x3c5e53,'name':_0x12adf9},{'name':_0x12adf9});if(_0x20c85a[_0x4ede40(0x16d)]>0x0)return _0x12b22e[_0x4ede40(0x180)](0x199)[_0x4ede40(0x172)]({'code':0x3eb,'error':_0x4ede40(0x168)});const _0x2dfd26=await Equipo[_0x4ede40(0x164)]({'user':_0x3c5e53,'thumbnail':_0x5456d9,'name':_0x12adf9,'category':_0x47eb85,'price':_0x2eb496});return _0x12b22e['json'](_0x2dfd26);}catch(_0x252f22){return _0x12b22e[_0x4ede40(0x180)](0x19c)[_0x4ede40(0x172)]({'error':_0x4ede40(0x173),'stacktrace':_0x252f22});}}};