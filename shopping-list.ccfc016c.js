var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},e={},s=n.parcelRequired7c6;null==s&&((s=function(n){if(n in t)return t[n].exports;if(n in e){var s=e[n];delete e[n];var i={id:n,exports:{}};return t[n]=i,s.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+n+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(n,t){e[n]=t},n.parcelRequired7c6=s),s("kyEFX").register(JSON.parse('{"lzeCd":"shopping-list.ccfc016c.js","i9VoS":"empty-page@2.0c63d3b6.png","kAdql":"empty-page.e85449c5.png","2ZcXt":"shop1.a93f451b.png","kg157":"shop2.060916b5.png","2DpIE":"shop3.72fd1cbc.png","945Lr":"trash-03.4e2c396d.png"}')),s("kRPqf"),s("jT1G4");var i=s("gjiCh");(0,i.onLoader)(),window.addEventListener("load",v),(0,i.offLoader)();var o;o=new URL(s("kyEFX").resolve("i9VoS"),import.meta.url).toString();let p=new URL(o);var a;a=new URL(s("kyEFX").resolve("kAdql"),import.meta.url).toString();let l=new URL(a);var r;r=new URL(s("kyEFX").resolve("2ZcXt"),import.meta.url).toString();let g=new URL(r);var c;c=new URL(s("kyEFX").resolve("kg157"),import.meta.url).toString();let d=new URL(c);var h;h=new URL(s("kyEFX").resolve("2DpIE"),import.meta.url).toString();let L=new URL(h);var m;m=new URL(s("kyEFX").resolve("945Lr"),import.meta.url).toString();let u=new URL(m);const f=document.querySelector(".books-shoppingList");let b=localStorage.getItem("bookList"),k=JSON.parse(b);function v(){null!=b?function(n){f.innerHTML="";const t=n.map(((n,t)=>{if((t+=1)<n.length+1)return`<li class="books-shoppingListLi">\n                <img\n                  class="books-shoppingList-img"\n                  src="${n.book_image}"\n                  alt=""\n                />\n                <div class="box-shoppingList-content">\n                  <div id="cont" class="box-shoppingList">\n                    <div>\n                      <h2 class="text-shoppingList-title">${n.title}</h2>\n                      <p class="text-shoppingList-category">${n.publisher}</p>\n                    </div>\n                    <button class="box-shoppingList-trash" id="${n.id}">\n                       <img\n                            class="box-shoppingList-trash-icon"\n                            src="${u}"\n                            alt="trash"\n\n                            />       \n                      </svg>   \n                    </button>\n                  </div>\n                  <p class="text-shoppingList-content">\n                    ${n.description}\n                  </p>\n                  <div class="box-shoppingList-link">\n                    <p class="text-shoppingList-author">${n.author}</p>\n                    <ul class="box-shoppingList-shop">\n                      <li>\n                        <a\n                          class="shop-shoppingList-link"\n                          target="_blank"\n                          href="https://www.amazon.com"\n                        >\n                           <img\n                            class="shop-shoppingList-img1"\n                            src="${g}"\n                            alt=""\n\n                            />       \n                        </a>\n                      </li>\n                      <li>\n                        <a\n                          class="shop-shoppingList-link"\n                          target="_blank"\n                          href="https://goto.applebooks.apple"\n                        >                          \n                          <img\n                            class="shop-shoppingList-img2"\n                            src="${d}"\n                            alt=""\n\n                          />           \n                        </a>\n                      </li>\n                      <li>\n                        <a\n                          class="shop-shoppingList-link"\n                          target="_blank"\n                          href="https://du-gae-books-dot-nyt-du-prd.appspot.com"\n                        >\n                           <img\n                            class="shop-shoppingList-img2"\n                            src="${L}"\n                            alt=""\n\n                            />       \n                        </a>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </li>\n            `})).join("");f.innerHTML=t,function(){let n,t=document.getElementsByClassName("box-shoppingList-trash");for(n=0;n<t.length;n++)t[n].addEventListener("click",(n=>{keyId=n.target.parentElement.attributes.id.value;let t=k.filter((n=>n.id!==keyId));localStorage.setItem("bookList",JSON.stringify(t)),b=localStorage.getItem("bookList"),k=JSON.parse(b),v()}))}()}(k):f.innerHTML=w}const w=`<li><p class="shoppingList-text">\n            This page is empty, add some books and proceed to order.\n          </p>\n          <a href="./index.html">\n            <picture>\n              <source srcset="${p} 2x" type="image/png" />\n              <img\n                class="shoppingList-img"\n                src="${l}"\n                alt="Book"\n              />\n            </picture>\n          </a></li>`;
//# sourceMappingURL=shopping-list.ccfc016c.js.map
