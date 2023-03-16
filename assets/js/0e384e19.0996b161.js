"use strict";(self.webpackChunkdocs_sonarvision=self.webpackChunkdocs_sonarvision||[]).push([[671],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>v});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=i.createContext({}),l=function(e){var n=i.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return i.createElement(u.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=l(t),m=r,v=p["".concat(u,".").concat(m)]||p[m]||d[m]||s;return t?i.createElement(v,o(o({ref:n},c),{},{components:t})):i.createElement(v,o({ref:n},c))}));function v(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=m;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a[p]="string"==typeof e?e:r,o[1]=a;for(var l=2;l<s;l++)o[l]=t[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9881:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=t(7462),r=(t(7294),t(3905));const s={sidebar_position:1},o="Introduction",a={unversionedId:"intro",id:"intro",title:"Introduction",description:"SonarVision est une application mobile de guidage GPS con\xe7ue pour les besoins de personnes d\xe9ficientes visuelles.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/SonarVision/SonarVision.github.io/tree/main/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Guide - Les bases",permalink:"/docs/category/guide---les-bases"}},u={},l=[{value:"Trajets pi\xe9tons",id:"trajets-pi\xe9tons",level:2},{value:"Zone de couverture",id:"zone-de-couverture",level:2},{value:"Visibilit\xe9",id:"visibilit\xe9",level:2},{value:"Position de la cam\xe9ra de votre iPhone.",id:"position-de-la-cam\xe9ra-de-votre-iphone",level:3},{value:"Conditions lumineuses",id:"conditions-lumineuses",level:3}],c={toc:l},p="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"SonarVision est une application mobile de guidage GPS con\xe7ue pour les besoins de personnes d\xe9ficientes visuelles.\nDans la suite, nous appellerons simplement ",(0,r.kt)("strong",{parentName:"p"},"utilisateurs")," les personnes d\xe9ficientes visuelles, form\xe9s et confortables\navec une locomotion ind\xe9pendante, qui utilisent SonarVision pour effectuer des trajets. Nos utilisateurs effectuent\nleurs trajets avec une canne blanche ou accompagn\xe9s d'un chien-guide."),(0,r.kt)("p",null,"Le service propos\xe9 vise \xe0 r\xe9soudre, au moins en partie, un nombre de probl\xe8mes rencontr\xe9s par les utilisateurs avec\nd'autres applications de navigation telles que Google Maps ou Apple Plans."),(0,r.kt)("p",null,"Ainsi SonarVision propose \xe0 ses utilisateurs de r\xe9aliser des trajets ",(0,r.kt)("strong",{parentName:"p"},"pi\xe9tons"),", dans la rue et dans une ",(0,r.kt)("strong",{parentName:"p"},"zone de\ncouverture"),", ainsi que sous certaines conditions de ",(0,r.kt)("strong",{parentName:"p"},"visibilit\xe9"),"."),(0,r.kt)("h2",{id:"trajets-pi\xe9tons"},"Trajets pi\xe9tons"),(0,r.kt)("p",null,"Afin de proposer les meilleurs trajets pi\xe9tons possibles, la caract\xe9ristique principale recherch\xe9e par SonarVision,\nc'est la pr\xe9cision. Une am\xe9lioration de pr\xe9cision peut \xeatre apport\xe9e \xe0 trois niveaux : les itin\xe9raires, la\ng\xe9olocalisation et les instructions de navigation."),(0,r.kt)("p",null,"Pour cr\xe9er des trajets personnalis\xe9s, qui empruntent trottoirs et passages pi\xe9tons, SonarVision emploie une d\xe9marche\nhybride, qui combine des \xe9l\xe9ments de cr\xe9ation automatique d'itin\xe9raires avec des \xe9l\xe9ments de validation et de correction\ndes itin\xe9raires par un humain."),(0,r.kt)("p",null,"Ensuite, SonarVision utilise un syst\xe8me VPS (Visual Positioning System) qui utilise la cam\xe9ra du smartphone pour\ng\xe9olocaliser ses utilisateurs avec une pr\xe9cision inf\xe9rieure au m\xe8tre."),(0,r.kt)("p",null,"Finalement, afin de guider ses utilisateurs lors d'un trajet, SonarVision propose une interface utilisateur qui combine\nsons, instructions vocalis\xe9s et retours haptiques pour indiquer \xe0 ses utilisateurs la direction \xe0 suivre avec\nexactitude."),(0,r.kt)("p",null,"Pour comprendre comment SonarVision offre une telle pr\xe9cision dans ces trois cat\xe9gories, consulter le\nguide ",(0,r.kt)("a",{parentName:"p",href:"fonctionnement/itineraires"},"fonctionnement")),(0,r.kt)("h2",{id:"zone-de-couverture"},"Zone de couverture"),(0,r.kt)("p",null,"SonarVision est disponible dans les agglom\xe9rations suivantes :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Paris"),(0,r.kt)("li",{parentName:"ul"},"Lyon"),(0,r.kt)("li",{parentName:"ul"},"Marseille"),(0,r.kt)("li",{parentName:"ul"},"Nice"),(0,r.kt)("li",{parentName:"ul"},"Lille")),(0,r.kt)("p",null,"Cette limitation vient principalement du syst\xe8me VPS, disponible uniquement dans ces villes. De plus, le VPS ne\nfonctionne pas \xe0 l'int\xe9rieur des b\xe2timents et dans certains espaces verts. Vos trajets sont con\xe7us en cons\xe9quence et\nv\xe9rifi\xe9s par un humain."),(0,r.kt)("h2",{id:"visibilit\xe9"},"Visibilit\xe9"),(0,r.kt)("p",null,"Finalement, puisque SonarVision se repose sur la cam\xe9ra arri\xe8re principale de votre iPhone pour d\xe9terminer votre\nposition, il faut que l'image prise par celle-ci respecte certaines conditions, d\xe9taill\xe9es ci-dessous."),(0,r.kt)("h3",{id:"position-de-la-cam\xe9ra-de-votre-iphone"},"Position de la cam\xe9ra de votre iPhone."),(0,r.kt)("p",null,"La cam\xe9ra doit pouvoir voir vos alentours. On ne peut donc pas utiliser SonarVision avec son smartphone dans sa poche\nou dans son sac."),(0,r.kt)("p",null,"Nous cherchons des solutions pour am\xe9liorer ce point tr\xe8s probl\xe9matique pour nos utilisateurs, pour des\nquestions de confort et de s\xe9curit\xe9 \xe9videntes."),(0,r.kt)("p",null,"Nous conseillons actuellement d'utiliser SonarVision avec une coque munie d'une lani\xe8re pour aller autour du cou. Ainsi,\nl'utilisateur a les mains libres et le t\xe9l\xe9phone est l\xe9g\xe8rement mieux dissimul\xe9 sur le torse."),(0,r.kt)("h3",{id:"conditions-lumineuses"},"Conditions lumineuses"),(0,r.kt)("p",null,"Afin de fonctionner, SonarVision doit pouvoir identifier ses alentours. Les trajets de nuits, en particulier dans les\nzones avec peu \xe9clair\xe9s sont d\xe9courag\xe9s, puisqu'ils peuvent mener \xe0 une perte de la g\xe9olocalisation pr\xe9cise et donc \xe0\ndes instructions erron\xe9es. Aujourd'hui, SonarVision indique \xe0 son utilisateur de s'arr\xeater lorsque l'application est\nincapable d'identifier pr\xe9cis\xe9ment ses alentours."),(0,r.kt)("p",null,"Nous envisageons des futurs syst\xe8mes permettant d'indiquer \xe0 l'utilisateur que les conditions lumineuses sont\ninsuffisantes."))}d.isMDXComponent=!0}}]);