"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[785],{4785:function(n,e,t){t.r(e),t.d(e,{default:function(){return Sn}});var o,i,r,a,d,s,p,x=t(9439),c=t(9434),l=t(4707),f=t(2791),u=t(8617),h=t(5705),b=t(2007),g=t.n(b),m=t(168),w=t(3237),Z=t(6053),j=w.Z.div(o||(o=(0,m.Z)(["\nposition: fixed;\n    inset: 0%;\n    background-color: rgba(44, 39, 50, 0.68);\n    z-index: 1;\n    overflow: hidden;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]))),y=(0,w.Z)(h.l0)(i||(i=(0,m.Z)(["\nposition: relative;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n    padding: 10px;\n    border-radius: 10px;\n    background-color: #ffffff;\n    width: 330px;\n    padding: 30px 0;\n    @media screen and (min-width: 768px) {\n      width: 500px;\n    }\n"]))),v=(0,w.Z)(Z.nfZ)(r||(r=(0,m.Z)(["\n  top: 10px;\n  right: 10px;\n  width: 22px;\n  height: 22px;\n\n  position: absolute;\n  cursor: pointer;\n\n  @media screen and (min-width: 768px) {\n    top: 20px;\n    right: 20px;\n    width: 30px;\n    height: 30px;\n  }\n"]))),k=w.Z.h2(a||(a=(0,m.Z)(["\n  padding-top: 30px;\n"]))),C=w.Z.label(d||(d=(0,m.Z)(["\ndisplay: flex;\n    justify-content: space-between;\n    flex-direction: column;\n    gap: 5px;\n    font-size: 24px;\n    font-weight: 600;\n    width: 75%;\n"]))),z=(0,w.Z)(h.gN)(s||(s=(0,m.Z)(["\nborder-radius: 12px;\nfont-size: 18px;\nborder: none;\nbackground: #f0eaea70;\npadding: 10px;\nbox-shadow: 1px 2px 10px #837f7f;\n"]))),M=w.Z.button(p||(p=(0,m.Z)(["\nbackground-color: #fff;\nborder: 1px solid #000;\nborder-radius: 8px;\nbox-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;\nbox-sizing: border-box;\ncolor: #0f1111;\ncursor: pointer;\ndisplay: inline-block;\nfont-family: 'Caveat',sans-serif;\nfont-size: 20px;\nline-height: 29px;\npadding: 0 10px 0 11px;\ntext-align: center;\ntext-decoration: none;\nuser-select: none;\npadding: 10px;\nfont-size: 28px;\ntransition: 500ms;\ntransition-duration: 500ms;\ntransition-property: all;\nborder: none;\nbox-shadow: 3px 5px 11px black;\n\n  &:hover {\n    color: white;\n    border: 1px solid #d5d9d9;\n    padding: 8px;\n    background-color: #474747;\n    box-shadow: 0 0 10px #313131, 0 0 10px #ffffff, 0 0 15px #2d2f2f;\n  }\n"]))),S=t(184);function E(n){var e=n.closeModal,t=(0,f.useState)(""),o=(0,x.Z)(t,2),i=o[0],r=o[1],a=(0,f.useState)(""),d=(0,x.Z)(a,2),s=d[0],p=d[1],u=(0,c.I0)(),b=function(n){"name"===n.currentTarget.name?r(n.currentTarget.value):p(n.currentTarget.value)};return(0,S.jsx)(j,{children:(0,S.jsx)(h.J9,{initialValues:s,onSubmit:function(n,t){(0,t.resetForm)();var o={name:i,number:s};u((0,l.uK)(o)),r(""),p(""),e()},children:(0,S.jsxs)(y,{autoComplete:"off",children:[(0,S.jsx)(v,{onClick:function(){return e()}}),(0,S.jsx)(k,{children:"Add contact"}),(0,S.jsxs)(C,{children:["Name",(0,S.jsx)(z,{type:"text",name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:b,value:i})]}),(0,S.jsxs)(C,{children:["Number",(0,S.jsx)(z,{type:"tel",name:"number",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",pattern:"[\\d ()+]*",required:!0,onChange:b,value:s})]}),(0,S.jsx)(M,{type:"submit",children:"Add contact"})]})})})}E.prototype={closeModal:g().func.isRequired};var q,N,_,A,F,T,I,J,R,L,P=E,B=w.Z.label(q||(q=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n  padding-bottom: 15px;\n  width: 60%;\n"]))),K=w.Z.h2(N||(N=(0,m.Z)(["\n  color: white;\n  font-size: 20px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 25px;\n  }\n"]))),U=w.Z.input(_||(_=(0,m.Z)(["\n  background-color: #f5f5f53b;\n  width: 100%;\n  outline: none;\n  border: none;\n  border-bottom: 1px solid white;\n  font-size: 28px;\n  color: #ffffff;\n  border-radius: 10px;\n  transition: 500ms;\n  padding: 6px;\n  padding-left: 20px;\n  &:hover {\n    font-size: 32px;\n    box-shadow: 2px 3px 12px #b7b6b6;\n    transition: 500ms;\n  }\n"]))),V=t(6016),D=function(){var n=(0,c.I0)();return(0,S.jsxs)(B,{children:[(0,S.jsx)(K,{children:"Find contsct by name"}),(0,S.jsx)(U,{type:"text",onChange:function(e){n((0,V.M6)(e.target.value))}})]})},G=w.Z.ol(A||(A=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  font-size: 20px;\n\n  width: 90%;\n\n  padding: 50px;\n"]))),H=function(n){return n.contacts.items},O=function(n){return n.contacts.isLoading},Q=w.Z.button(F||(F=(0,m.Z)(["\nbackground-color: #fff;\nborder: 1px solid #d5d9d9;\nborder-radius: 8px;\nbox-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;\nbox-sizing: border-box;\ncolor: #0f1111;\ncursor: pointer;\ndisplay: inline-block;\nfont-family: 'Caveat',sans-serif;\nfont-size: 20px;\nline-height: 20px;\npadding: 0 5px 0 5px;\nmargin-bottom: 2px;\ntext-align: center;\ntext-decoration: none;\ntransition-duration: 500ms;\npadding: 5px;\ntransition-property: all;\n\n  &:hover {\n    font-size: 24px;\n    padding: 8px;\n    box-shadow: 0 0 10px #313131, 0 0 10px #ffffff, 0 0 15px #2d2f2f;\n    color: white;\n    background-color: #474747;\n  }\n"]))),W=w.Z.li(T||(T=(0,m.Z)(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n\n  border-bottom: 1px solid #fff;\n\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n  }\n"]))),X=w.Z.div(I||(I=(0,m.Z)(["\n  display: flex;\n"]))),Y=w.Z.div(J||(J=(0,m.Z)(["\n  display: flex;\n  gap: 10px;\n"]))),$=w.Z.p(R||(R=(0,m.Z)(["\n  width: 300px;\n  height: 30px;\n  color: white;\n"]))),nn=w.Z.p(L||(L=(0,m.Z)(["\n  color: white;\n"]))),en=function(n){var e=n.selectedContact,t=n.openEditModal,o=(0,c.I0)(),i=(0,c.v9)(H),r=(0,c.v9)(V.o8);return function(n,e){var t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(t)})).sort((function(n,e){var t=n.name.toUpperCase(),o=e.name.toUpperCase();return t<o?-1:t>o?1:0}))}(i,r).map((function(n){var i=n.id,r=n.name,a=n.number;return(0,S.jsxs)(W,{children:[(0,S.jsxs)(X,{children:[(0,S.jsx)($,{children:r}),(0,S.jsx)(nn,{children:a})]}),(0,S.jsxs)(Y,{children:[(0,S.jsx)(Q,{type:"button",onClick:function(){!function(n,o,i){e({id:n,name:o,number:i}),t()}(i,r,a)},children:"Edit"}),(0,S.jsx)(Q,{type:"button",onClick:function(){o((0,l.GK)(i))},children:"Delete"})]})]},i)}))};en.prototype={selectedContact:g().func.isRequired,showEditModal:g().func.isRequired};var tn,on,rn,an,dn,sn,pn,xn,cn,ln,fn,un=en,hn=w.Z.div(tn||(tn=(0,m.Z)(["\n  position: fixed;\n  inset: 0%;\n  background-color: rgba(44, 39, 50, 0.68);\n  z-index: 1;\n  overflow: hidden;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),bn=(0,w.Z)(h.l0)(on||(on=(0,m.Z)(["\n  position: relative;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  gap: 20px;\n  padding: 10px;\n  border-radius: 10px;\n  width: 270px;\n  padding: 40px 0;\n\n  background-color: #fffffff2;\n\n  @media screen and (min-width: 768px) {\n    width: 500px;\n  }\n"]))),gn=(0,w.Z)(Z.nfZ)(rn||(rn=(0,m.Z)(["\n  top: 10px;\n  right: 10px;\n  width: 22px;\n  height: 22px;\n\n  position: absolute;\n  cursor: pointer;\n\n  @media screen and (min-width: 768px) {\n    top: 20px;\n    right: 20px;\n    width: 30px;\n    height: 30px;\n  }\n"]))),mn=w.Z.h2(an||(an=(0,m.Z)(["\n  padding-top: 30px;\n"]))),wn=w.Z.label(dn||(dn=(0,m.Z)(["\ndisplay: flex;\n    justify-content: space-between;\n    flex-direction: column;\n    gap: 5px;\n    font-size: 24px;\n    font-weight: 600;\n    width: 75%;\n"]))),Zn=(0,w.Z)(h.gN)(sn||(sn=(0,m.Z)(["\nborder-radius: 12px;\nfont-size: 18px;\nborder: none;\nbackground: #f0eaea70;\npadding: 10px;\nbox-shadow: 1px 2px 10px #837f7f;\n"]))),jn=w.Z.button(pn||(pn=(0,m.Z)(["\nbackground-color: #fff;\nborder: 1px solid #000;\nborder-radius: 8px;\nbox-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;\nbox-sizing: border-box;\ncolor: #0f1111;\ncursor: pointer;\ndisplay: inline-block;\nfont-family: 'Caveat',sans-serif;\nfont-size: 20px;\nline-height: 29px;\npadding: 0 10px 0 11px;\ntext-align: center;\ntext-decoration: none;\nuser-select: none;\nwidth: 40%;\npadding: 10px;\nfont-size: 28px;\ntransition: 500ms;\ntransition-duration: 500ms;\ntransition-property: all;\nborder: none;\nbox-shadow: 3px 5px 11px black;\n\n  &:hover {\n    color: white;\n    border: 1px solid #d5d9d9;\n    padding: 8px;\n    background-color: #474747;\n    box-shadow: 0 0 10px #313131, 0 0 10px #ffffff, 0 0 15px #2d2f2f;\n  }\n"]))),yn=function(n){var e=n.selectedContact,t=n.closeEditModal,o=(0,f.useState)(e.id),i=(0,x.Z)(o,1)[0],r=(0,f.useState)(e.name),a=(0,x.Z)(r,2),d=a[0],s=a[1],p=(0,f.useState)(e.number),u=(0,x.Z)(p,2),b=u[0],g=u[1],m=(0,c.I0)(),w=function(n){"name"===n.currentTarget.name?s(n.currentTarget.value):g(n.currentTarget.value)};return(0,S.jsx)(hn,{children:(0,S.jsx)(h.J9,{initialValues:b,onSubmit:function(){var n={id:i,name:d,number:b};m((0,l.mP)(n)),t()},children:(0,S.jsxs)(bn,{autoComplete:"off",children:[(0,S.jsx)(gn,{onClick:function(){t()}}),(0,S.jsx)(mn,{children:"Edit contact form"}),(0,S.jsxs)(wn,{children:["Name",(0,S.jsx)(Zn,{type:"text",name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:w,value:d})]}),(0,S.jsxs)(wn,{children:["Number",(0,S.jsx)(Zn,{type:"tel",name:"number",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:w,value:b})]}),(0,S.jsx)(jn,{type:"submit",children:"Edit contact"})]})})})},vn=function(){var n=(0,f.useState)(!1),e=(0,x.Z)(n,2),t=e[0],o=e[1],i=(0,f.useState)(null),r=(0,x.Z)(i,2),a=r[0],d=r[1];return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(G,{children:(0,S.jsx)(un,{selectedContact:d,openEditModal:function(){o((function(){return!0}))}})}),t&&(0,S.jsx)(yn,{selectedContact:a,closeEditModal:function(){o((function(){return!1}))}})]})},kn=w.Z.div(xn||(xn=(0,m.Z)(["\n  width: 90%;\n  position: relative;\n"]))),Cn=w.Z.button(cn||(cn=(0,m.Z)(["\n  position: absolute;\n  top: 130px;\n  width: auto;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #fff;\n  border: 1px solid #d5d9d9;\n  border-radius: 8px;\n  box-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;\n  box-sizing: border-box;\n  color: #0f1111;\n  cursor: pointer;\n  font-family: 'Caveat', sans-serif;\n  font-size: 20px;\n  line-height: 29px;\n  padding: 0 10px 0 11px;\n  text-align: center;\n  text-decoration: none;\n  user-select: none;\n  transition-duration: 500ms;\n  transition-property: all;\n  box-shadow: 8px 4px 20px black;\n  background-image: linear-gradient(167deg, #726969, #f3bdbd);\n\n  &:hover {\n    background-color: #6a7576;\n    box-shadow: 0 0 10px #c7d5d7, 0 0 2px #c7d7d7, 0 0 40px #1f2223;\n    color: white;\n    padding: 26px;\n  }\n  @media screen and (min-width: 768px) {\n    gap: 15px;\n    flex-direction: row;\n  }\n\n"]))),zn=w.Z.div(ln||(ln=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  padding-top: 20px;\n\n  border-radius: 5px;\n  box-shadow: rgb(200 102 102) 1px 9px 20px 0px;\n  background-image: linear-gradient(0deg, #ff002d1c, #000000d6);\n}\n"]))),Mn=w.Z.div(fn||(fn=(0,m.Z)(["\n  padding-top: 20px;\n  color: white;\n\n  font-size: 20px;\n  height: 30px;\n"]))),Sn=function(){var n=(0,f.useState)(!1),e=(0,x.Z)(n,2),t=e[0],o=e[1],i=(0,c.I0)(),r=(0,c.v9)(O);(0,f.useEffect)((function(){i((0,l.yF)())}),[i]);return(0,S.jsx)(kn,{children:(0,S.jsxs)(zn,{children:[(0,S.jsxs)(Cn,{onClick:function(){o((function(){return!0}))},children:[(0,S.jsx)(u.J6z,{}),"Add contact"]}),t&&(0,S.jsx)(P,{closeModal:function(){o((function(){return!1}))}}),(0,S.jsx)(D,{}),(0,S.jsx)(Mn,{children:r&&"Request in progress..."}),(0,S.jsx)(vn,{})]})})}}}]);
//# sourceMappingURL=785.cdd65a08.chunk.js.map