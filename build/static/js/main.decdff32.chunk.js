(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{16:function(e,a,m){e.exports=m(25)},21:function(e,a,m){},22:function(e,a,m){},23:function(e,a,m){},25:function(e,a,m){"use strict";m.r(a);var n=m(0),t=m.n(n),i=m(6),r=m.n(i),s=m(13),o=m(7),u=m(8),l=m(9),_=m(2),N=m(15),c=m(14),p=(m(5),m(27));m(21);var d=function(e){return t.a.createElement("div",null,t.a.createElement(p.a,{striped:!0,bordered:!0,hover:!0,size:"sm"},t.a.createElement("thead",null,t.a.createElement("tr",null,t.a.createElement("th",null,t.a.createElement("button",{onClick:function(){return e.sortBy("First_Name")}},"First Name")),t.a.createElement("th",null,t.a.createElement("button",{onClick:function(){return e.sortBy("Last_Name")}},"Last Name")),t.a.createElement("th",null,t.a.createElement("button",{onClick:function(){return e.sortBy("Phone_number")}},"Phone Number")),t.a.createElement("th",null,t.a.createElement("button",{onClick:function(){return e.sortBy("Email")}}," Email")),t.a.createElement("th",null,t.a.createElement("button",{onClick:function(){return e.sortBy("Company_Name")}},"Company Name")))),t.a.createElement("tbody",null,e.data.map((function(e){return t.a.createElement("tr",{key:e.Email},t.a.createElement("td",null,e.First_Name),t.a.createElement("td",null,e.Last_Name),t.a.createElement("td",null,e.Phone_number),t.a.createElement("td",null,e.Email),t.a.createElement("td",null,e.Company_Name))})))))},h=m(3);m(22);var C=function(){return t.a.createElement("div",null,t.a.createElement("h1",null,"Employee Directory"),t.a.createElement("h2",null,"Search for an employee!"))},L=(m(23),function(e){Object(N.a)(m,e);var a=Object(c.a)(m);function m(e){var n;return Object(u.a)(this,m),(n=a.call(this,e)).handleInputChange=function(e){var a=e.target,m=a.name,t=a.value;n.setState(Object(o.a)({},m,t),n.filterTable)},n.state={data:h,searchFirst:"",filteredTable:[],sortDirection:"asc"},n.sortBy=n.sortBy.bind(Object(_.a)(n)),n}return Object(l.a)(m,[{key:"sortBy",value:function(e){var a=this,m=Object(s.a)(this.state.data);m.sort((function(m,n){return"asc"===a.state.sortDirection?(a.setState({sortDirection:"desc"}),m[e].toLowerCase()<n[e].toLowerCase()?-1:1):(a.setState({sortDirection:"asc"}),m[e].toLowerCase()<n[e].toLowerCase()?1:-1)})),this.setState({filteredTable:m})}},{key:"filterTable",value:function(){var e=this;if(console.log(this.state.searchFirst),null===this.state.searchFirst||""===this.state.searchFirst||" "===this.state.searchFirst)this.setState({filteredTable:h});else{var a=this.state.data.filter((function(a){return a.First_Name.toLowerCase().includes(e.state.searchFirst.toLowerCase())||a.Last_Name.toLowerCase().includes(e.state.searchFirst.toLowerCase())||a.Phone_number.includes(e.state.searchFirst)||a.Email.toLowerCase().includes(e.state.searchFirst.toLowerCase())||a.Company_Name.toLowerCase().includes(e.state.searchFirst.toLowerCase())}));this.setState({filteredTable:a})}}},{key:"componentDidMount",value:function(){this.filterTable()}},{key:"render",value:function(){return t.a.createElement("div",null,t.a.createElement(C,null),t.a.createElement("form",{className:"form"},t.a.createElement("input",{className:"search-bar",value:this.state.searchFirst,name:"searchFirst",onChange:this.handleInputChange})),t.a.createElement(d,{data:this.state.filteredTable,sortBy:this.sortBy}))}}]),m}(t.a.Component));m(24);r.a.render(t.a.createElement(L,null),document.getElementById("root"))},3:function(e){e.exports=JSON.parse('[{"First_Name":"Hannah","Last_Name":"Yudkin","Phone_number":"(603) 921-0450","Email":"QueenOfEveryone@OnEarth.com","Company_Name":"University of New Hampshire"},{"First_Name":"Wang","Last_Name":"Rowe","Phone_number":"(744) 526-1391","Email":"est.mollis@Maecenaslibero.com","Company_Name":"Pharetra Felis Associates"},{"First_Name":"MacKenzie","Last_Name":"Frederick","Phone_number":"(894) 694-5036","Email":"sociosqu.ad@temporarcuVestibulum.co.uk","Company_Name":"Mauris Non Dui LLC"},{"First_Name":"Adena","Last_Name":"Slater","Phone_number":"(918) 329-5751","Email":"et.magna.Praesent@euultricessit.co.uk","Company_Name":"Elit Erat Foundation"},{"First_Name":"Genevieve","Last_Name":"Walton","Phone_number":"(293) 378-2926","Email":"nunc.est.mollis@magnaLorem.edu","Company_Name":"Eu Ltd"},{"First_Name":"Zenaida","Last_Name":"Martinez","Phone_number":"(700) 707-4258","Email":"rutrum.eu@ametrisusDonec.edu","Company_Name":"Lorem Auctor Quis Institute"},{"First_Name":"Lars","Last_Name":"Albert","Phone_number":"(319) 791-7904","Email":"lacinia.mattis@parturient.ca","Company_Name":"Mauris Foundation"},{"First_Name":"Alexa","Last_Name":"Padilla","Phone_number":"(653) 622-1697","Email":"orci.Ut@pedeblandit.co.uk","Company_Name":"Sapien Imperdiet Ornare Industries"},{"First_Name":"Janna","Last_Name":"Lott","Phone_number":"(691) 289-8218","Email":"urna.et.arcu@maurissapien.net","Company_Name":"Nulla Foundation"},{"First_Name":"Olympia","Last_Name":"Mcknight","Phone_number":"(251) 819-8326","Email":"Integer.vitae@atlacusQuisque.com","Company_Name":"In Nec LLP"},{"First_Name":"Erich","Last_Name":"Kinney","Phone_number":"(478) 815-6386","Email":"Fusce.feugiat.Lorem@sociisnatoque.net","Company_Name":"Donec LLP"},{"First_Name":"Zenia","Last_Name":"Hood","Phone_number":"(989) 847-8571","Email":"Morbi.metus@ipsum.co.uk","Company_Name":"Dolor Egestas Rhoncus Incorporated"},{"First_Name":"Brandon","Last_Name":"Barton","Phone_number":"(523) 509-1394","Email":"sed.est@primis.org","Company_Name":"Mauris Sapien Cursus Institute"},{"First_Name":"Austin","Last_Name":"Franco","Phone_number":"(964) 844-9265","Email":"Proin.vel@nisl.org","Company_Name":"Faucibus Associates"},{"First_Name":"Iliana","Last_Name":"Harrison","Phone_number":"(923) 202-7482","Email":"non.lacinia.at@pede.edu","Company_Name":"Dui Industries"},{"First_Name":"Jarrod","Last_Name":"Barry","Phone_number":"(286) 306-9733","Email":"risus@nascetur.org","Company_Name":"Nullam Suscipit Est LLC"},{"First_Name":"Paul","Last_Name":"Madden","Phone_number":"(298) 308-4335","Email":"penatibus.et.magnis@Integereulacus.com","Company_Name":"Aenean Company"},{"First_Name":"Dominic","Last_Name":"Perez","Phone_number":"(187) 255-9581","Email":"dapibus.quam@pedenonummyut.org","Company_Name":"Quisque Ac Corporation"},{"First_Name":"Malachi","Last_Name":"Allen","Phone_number":"(989) 822-1696","Email":"vehicula@elitpellentesque.com","Company_Name":"Convallis Dolor Quisque PC"},{"First_Name":"Ria","Last_Name":"Herring","Phone_number":"(279) 477-9584","Email":"purus@mattisIntegereu.net","Company_Name":"Eleifend Nec Industries"},{"First_Name":"Simone","Last_Name":"Collier","Phone_number":"(143) 238-5333","Email":"orci@necligula.edu","Company_Name":"Purus Ac Incorporated"},{"First_Name":"Cameran","Last_Name":"Downs","Phone_number":"(847) 863-3897","Email":"lorem.vehicula.et@neque.com","Company_Name":"Sed Dui Fusce Foundation"},{"First_Name":"Tatyana","Last_Name":"Bailey","Phone_number":"(527) 484-9083","Email":"imperdiet@sollicitudincommodoipsum.co.uk","Company_Name":"Cursus LLC"},{"First_Name":"Hedda","Last_Name":"Gillespie","Phone_number":"(126) 437-6284","Email":"faucibus.orci.luctus@semperauctorMauris.co.uk","Company_Name":"Vestibulum Foundation"},{"First_Name":"Priscilla","Last_Name":"Booker","Phone_number":"(137) 996-4288","Email":"augue@senectusetnetus.com","Company_Name":"Nisi LLP"},{"First_Name":"Stacy","Last_Name":"Joyce","Phone_number":"(605) 932-6076","Email":"Proin.ultrices.Duis@nisl.com","Company_Name":"Dui In Limited"},{"First_Name":"Angela","Last_Name":"Small","Phone_number":"(561) 659-3139","Email":"ligula.Aenean.euismod@amalesuada.com","Company_Name":"Dolor Vitae Consulting"},{"First_Name":"Bert","Last_Name":"Pace","Phone_number":"(924) 455-9628","Email":"at.velit@nec.org","Company_Name":"Tempor Diam LLP"},{"First_Name":"Christen","Last_Name":"Mosley","Phone_number":"(312) 711-5341","Email":"urna.Nunc.quis@egestas.edu","Company_Name":"Bibendum Donec Industries"},{"First_Name":"Chaney","Last_Name":"Meyers","Phone_number":"(768) 110-8464","Email":"pulvinar@tellus.net","Company_Name":"Nec Leo Industries"},{"First_Name":"Adrienne","Last_Name":"Payne","Phone_number":"(243) 189-8718","Email":"Suspendisse@eget.co.uk","Company_Name":"Dui Ltd"},{"First_Name":"Stuart","Last_Name":"Carrillo","Phone_number":"(504) 730-4276","Email":"tincidunt@velquam.org","Company_Name":"Iaculis Aliquet Corp."},{"First_Name":"Lucian","Last_Name":"Blake","Phone_number":"(353) 780-7202","Email":"ligula.Nullam@Morbinequetellus.ca","Company_Name":"Nec Ante Blandit Inc."},{"First_Name":"Francesca","Last_Name":"Forbes","Phone_number":"(163) 421-1936","Email":"Fusce.dolor@magnaNam.edu","Company_Name":"In At Company"},{"First_Name":"Castor","Last_Name":"Leonard","Phone_number":"(800) 339-2106","Email":"cursus.purus.Nullam@nunc.net","Company_Name":"Faucibus Orci Luctus Consulting"},{"First_Name":"TaShya","Last_Name":"Lang","Phone_number":"(912) 351-7204","Email":"felis.ullamcorper@risusIn.org","Company_Name":"Vulputate Mauris Foundation"},{"First_Name":"Chadwick","Last_Name":"Myers","Phone_number":"(308) 164-9771","Email":"senectus.et.netus@Integervitaenibh.org","Company_Name":"Orci Consulting"},{"First_Name":"Drew","Last_Name":"Holman","Phone_number":"(997) 394-7882","Email":"Maecenas@id.com","Company_Name":"Sed Institute"},{"First_Name":"Jonah","Last_Name":"Nguyen","Phone_number":"(249) 604-0391","Email":"dolor.Fusce@tortor.ca","Company_Name":"Orci Lobortis Limited"},{"First_Name":"Bruce","Last_Name":"Floyd","Phone_number":"(364) 848-7895","Email":"dis@rutrum.edu","Company_Name":"Nonummy Ut Foundation"},{"First_Name":"Aurelia","Last_Name":"Heath","Phone_number":"(379) 495-0703","Email":"adipiscing.enim.mi@nequeIn.ca","Company_Name":"Iaculis Lacus PC"},{"First_Name":"Jerome","Last_Name":"Bauer","Phone_number":"(243) 888-0212","Email":"molestie@Mauris.org","Company_Name":"Magnis Dis Parturient Associates"},{"First_Name":"Nathaniel","Last_Name":"Little","Phone_number":"(958) 379-0536","Email":"Nulla.tempor.augue@elit.com","Company_Name":"Ac Turpis Egestas Industries"},{"First_Name":"Gemma","Last_Name":"Preston","Phone_number":"(947) 328-6923","Email":"quis.diam@Integer.com","Company_Name":"Nibh Limited"},{"First_Name":"Adara","Last_Name":"Ortiz","Phone_number":"(265) 391-9398","Email":"est.Mauris.eu@habitant.com","Company_Name":"Pede Malesuada Vel Corporation"},{"First_Name":"Sybil","Last_Name":"Beach","Phone_number":"(162) 341-0365","Email":"congue.In.scelerisque@Nulla.net","Company_Name":"Felis Purus PC"},{"First_Name":"Brooke","Last_Name":"Hall","Phone_number":"(679) 987-9613","Email":"neque@a.edu","Company_Name":"Suspendisse LLP"},{"First_Name":"Coby","Last_Name":"Simmons","Phone_number":"(825) 181-3348","Email":"cursus@ipsumprimis.co.uk","Company_Name":"Amet Dapibus Incorporated"},{"First_Name":"Jordan","Last_Name":"Barnes","Phone_number":"(438) 745-6086","Email":"euismod.ac@conubia.co.uk","Company_Name":"Lacus Quisque Corporation"},{"First_Name":"Amanda","Last_Name":"Chase","Phone_number":"(214) 287-6679","Email":"ac.libero@Nunc.org","Company_Name":"Aliquam Erat Volutpat Incorporated"},{"First_Name":"Althea","Last_Name":"Mays","Phone_number":"(312) 357-3708","Email":"nisi.magna@tellusimperdietnon.org","Company_Name":"Curabitur Sed Tortor LLC"},{"First_Name":"Joshua","Last_Name":"Cochran","Phone_number":"(161) 619-3874","Email":"facilisis@convallis.edu","Company_Name":"Ipsum Dolor LLC"},{"First_Name":"Brian","Last_Name":"Gray","Phone_number":"(977) 686-3297","Email":"tempus.scelerisque@utquamvel.org","Company_Name":"Amet Consectetuer Adipiscing Ltd"},{"First_Name":"Wayne","Last_Name":"Gould","Phone_number":"(155) 611-2965","Email":"cursus.et@Quisquetinciduntpede.edu","Company_Name":"Faucibus Id Institute"},{"First_Name":"Eliana","Last_Name":"Lyons","Phone_number":"(982) 618-7631","Email":"pulvinar.arcu@dictumeu.co.uk","Company_Name":"Lorem Industries"},{"First_Name":"Casey","Last_Name":"Fields","Phone_number":"(592) 312-0315","Email":"semper.et.lacinia@iaculisenimsit.edu","Company_Name":"Nec Diam Duis LLC"},{"First_Name":"Gray","Last_Name":"Turner","Phone_number":"(495) 328-3388","Email":"nec.orci@nequesedsem.co.uk","Company_Name":"Tellus Lorem Eu LLC"},{"First_Name":"Nell","Last_Name":"Berry","Phone_number":"(460) 666-8979","Email":"Fusce.mi.lorem@magnaSuspendissetristique.edu","Company_Name":"Ultricies Adipiscing Company"},{"First_Name":"Damian","Last_Name":"Hudson","Phone_number":"(681) 778-5406","Email":"libero@ac.net","Company_Name":"Velit Pellentesque Company"},{"First_Name":"Reed","Last_Name":"Randolph","Phone_number":"(323) 206-7047","Email":"placerat.Cras.dictum@ultricies.com","Company_Name":"Gravida Industries"},{"First_Name":"Leah","Last_Name":"Adams","Phone_number":"(162) 662-9548","Email":"ullamcorper@quispede.co.uk","Company_Name":"Facilisis Magna LLP"},{"First_Name":"Hop","Last_Name":"Stuart","Phone_number":"(928) 176-7026","Email":"ultrices.posuere@utlacusNulla.com","Company_Name":"Tincidunt Adipiscing Mauris Inc."},{"First_Name":"Shaine","Last_Name":"Pearson","Phone_number":"(671) 291-2711","Email":"amet.diam.eu@gravidamolestiearcu.co.uk","Company_Name":"Lobortis Ultrices Industries"},{"First_Name":"Jordan","Last_Name":"Stanton","Phone_number":"(982) 256-1525","Email":"in.molestie.tortor@augueeutempor.org","Company_Name":"Et Tristique Company"},{"First_Name":"Cheyenne","Last_Name":"Andrews","Phone_number":"(151) 230-9932","Email":"dictum.eu.placerat@fringillapurusmauris.net","Company_Name":"Facilisis Suspendisse Inc."},{"First_Name":"Forrest","Last_Name":"Day","Phone_number":"(253) 313-8098","Email":"malesuada@Sed.com","Company_Name":"Eu Elit Incorporated"},{"First_Name":"Ursula","Last_Name":"Mcdowell","Phone_number":"(257) 300-5074","Email":"Duis@felisNullatempor.org","Company_Name":"Sit Amet Foundation"},{"First_Name":"Cecilia","Last_Name":"Blair","Phone_number":"(574) 207-9497","Email":"Suspendisse.tristique@erosturpis.org","Company_Name":"Eu Nulla Corp."},{"First_Name":"Gisela","Last_Name":"Bullock","Phone_number":"(888) 233-9194","Email":"ultricies@orci.edu","Company_Name":"Amet Risus Donec Ltd"},{"First_Name":"Kevyn","Last_Name":"Hutchinson","Phone_number":"(426) 937-3087","Email":"tempus@egetlaoreet.co.uk","Company_Name":"Tempor Associates"},{"First_Name":"Gwendolyn","Last_Name":"Cox","Phone_number":"(866) 589-8578","Email":"magnis@blanditNam.edu","Company_Name":"Libero Dui Nec Industries"},{"First_Name":"Sylvester","Last_Name":"Parks","Phone_number":"(918) 993-7074","Email":"sed@non.co.uk","Company_Name":"Ut Cursus Luctus Consulting"},{"First_Name":"Oren","Last_Name":"Petersen","Phone_number":"(638) 300-5379","Email":"a@euerosNam.net","Company_Name":"Penatibus PC"},{"First_Name":"Silas","Last_Name":"Goodman","Phone_number":"(882) 649-6604","Email":"tellus@eratin.edu","Company_Name":"Adipiscing Company"},{"First_Name":"Cameron","Last_Name":"Sheppard","Phone_number":"(693) 673-1414","Email":"metus@estcongue.edu","Company_Name":"Vehicula Aliquet Consulting"},{"First_Name":"Yen","Last_Name":"Weaver","Phone_number":"(271) 427-3017","Email":"vitae.odio.sagittis@Nullamscelerisque.edu","Company_Name":"Vitae Ltd"},{"First_Name":"Jamal","Last_Name":"Nieves","Phone_number":"(631) 653-8903","Email":"ante.ipsum@dolor.edu","Company_Name":"Lorem Fringilla Consulting"},{"First_Name":"Nathan","Last_Name":"Orr","Phone_number":"(323) 292-1824","Email":"rutrum.lorem@elitpharetra.edu","Company_Name":"Lacus Corp."},{"First_Name":"Tashya","Last_Name":"Snider","Phone_number":"(458) 609-3277","Email":"mattis.Integer.eu@vehicularisus.co.uk","Company_Name":"Consequat Auctor Inc."},{"First_Name":"Jonah","Last_Name":"Mack","Phone_number":"(644) 362-9030","Email":"nisl.sem.consequat@nec.ca","Company_Name":"Fusce Ltd"},{"First_Name":"Zachery","Last_Name":"Jenkins","Phone_number":"(878) 587-3117","Email":"molestie@sem.ca","Company_Name":"Quis Tristique Ac Consulting"},{"First_Name":"Alana","Last_Name":"Klein","Phone_number":"(886) 196-0393","Email":"conubia.nostra.per@magnaDuisdignissim.edu","Company_Name":"Primis In LLP"},{"First_Name":"Armando","Last_Name":"Bolton","Phone_number":"(201) 850-8266","Email":"ligula@Integermollis.edu","Company_Name":"Turpis Limited"},{"First_Name":"Jordan","Last_Name":"Gallegos","Phone_number":"(548) 553-3347","Email":"id.mollis@Duis.net","Company_Name":"Lacinia Orci LLC"},{"First_Name":"Zephr","Last_Name":"Colon","Phone_number":"(336) 113-1063","Email":"Ut.nec.urna@velnislQuisque.co.uk","Company_Name":"Accumsan Interdum Corporation"},{"First_Name":"Fredericka","Last_Name":"Roberts","Phone_number":"(896) 520-2972","Email":"tristique.senectus.et@acturpis.co.uk","Company_Name":"Eu Institute"},{"First_Name":"Justin","Last_Name":"Chang","Phone_number":"(994) 873-9868","Email":"felis.adipiscing@nisimagna.edu","Company_Name":"In Ltd"},{"First_Name":"Erich","Last_Name":"Pacheco","Phone_number":"(595) 302-9214","Email":"et.malesuada.fames@eget.ca","Company_Name":"Natoque Penatibus Company"},{"First_Name":"Conan","Last_Name":"Acevedo","Phone_number":"(658) 327-3712","Email":"tortor.dictum.eu@egestaslacinia.edu","Company_Name":"Proin Non Company"},{"First_Name":"Tana","Last_Name":"Clarke","Phone_number":"(261) 218-3169","Email":"justo.Praesent@auguemalesuadamalesuada.ca","Company_Name":"Dictum Eu Incorporated"},{"First_Name":"Nina","Last_Name":"Underwood","Phone_number":"(575) 243-7627","Email":"sed@ullamcorperviverraMaecenas.edu","Company_Name":"Et Risus Quisque PC"},{"First_Name":"Winter","Last_Name":"Cobb","Phone_number":"(351) 650-4341","Email":"mus@duiaugueeu.co.uk","Company_Name":"Sapien Imperdiet Incorporated"},{"First_Name":"Alden","Last_Name":"Oneal","Phone_number":"(844) 488-2629","Email":"et.eros@Vestibulumuteros.org","Company_Name":"Nec Mauris Associates"},{"First_Name":"Aiko","Last_Name":"Oneill","Phone_number":"(234) 820-4328","Email":"Nam.nulla@quisarcu.org","Company_Name":"Sed Pede Incorporated"},{"First_Name":"Jeanette","Last_Name":"Warren","Phone_number":"(565) 456-5858","Email":"nec@molestietellus.net","Company_Name":"Phasellus At Consulting"},{"First_Name":"Cooper","Last_Name":"Wade","Phone_number":"(557) 992-4178","Email":"Aliquam.rutrum@Aliquam.ca","Company_Name":"Vel Sapien Foundation"},{"First_Name":"Isabelle","Last_Name":"English","Phone_number":"(188) 988-6728","Email":"nisi.Cum@neque.net","Company_Name":"Ut Erat Consulting"},{"First_Name":"Dean","Last_Name":"Henry","Phone_number":"(234) 400-2146","Email":"ut@in.org","Company_Name":"At Incorporated"},{"First_Name":"Yen","Last_Name":"Cain","Phone_number":"(705) 999-1350","Email":"Duis@Aliquameratvolutpat.edu","Company_Name":"Sodales Nisi Corporation"},{"First_Name":"Zephania","Last_Name":"Travis","Phone_number":"(902) 688-4854","Email":"ornare.tortor.at@pedeblanditcongue.net","Company_Name":"Mi Company"},{"First_Name":"Piper","Last_Name":"Barker","Phone_number":"(933) 312-0694","Email":"Mauris.eu.turpis@risusNunc.ca","Company_Name":"Curae; Donec Tincidunt PC"}]')}},[[16,1,2]]]);
//# sourceMappingURL=main.decdff32.chunk.js.map