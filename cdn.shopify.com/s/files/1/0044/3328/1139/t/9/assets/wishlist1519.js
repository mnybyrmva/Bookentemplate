var LOCAL_STORAGE_WISHLIST_KEY="shopify-wishlist",LOCAL_STORAGE_DELIMITER=",",BUTTON_ACTIVE_CLASS="active",selectors={button:"[button-wishlist]",grid:"[grid-wishlist]"};document.addEventListener("DOMContentLoaded",function(){var i=document.querySelectorAll(selectors.button)||[];i.length&&setupButtons(i);var t=document.querySelector(selectors.grid)||!1;t&&setupGrid(t)});var setupGrid=function(i){var t=getWishlist(),s=document.querySelector(".wishlist-page");t.length>0&&(s.classList="wishlist_exists");var l=t.map(function(n){var r="/products/"+n+"?view=card";return fetch(r).then(function(e){return e.text()})});Promise.all(l).then(function(n){var r=n.join("");i.innerHTML=r;var e=i.querySelectorAll(selectors.button)||[];e.length&&setupButtons(e)})},setupButtons=function(i){i.forEach(function(t){var s=t.dataset.productHandle||!1;if(!s)return console.error("[Wishlist] Missing `data-product-handle` attribute. Failed to update the wishlist.");wishlistContains(s)&&t.classList.add(BUTTON_ACTIVE_CLASS),t.addEventListener("click",function(){updateWishlist(s),t.classList.toggle(BUTTON_ACTIVE_CLASS)})})},getWishlist=function(){var i=localStorage.getItem(LOCAL_STORAGE_WISHLIST_KEY)||!1;return i?i.split(LOCAL_STORAGE_DELIMITER):[]},setWishlist=function(i){var t=i.join(LOCAL_STORAGE_DELIMITER);return i.length?localStorage.setItem(LOCAL_STORAGE_WISHLIST_KEY,t):localStorage.removeItem(LOCAL_STORAGE_WISHLIST_KEY),t},updateWishlist=function(i){var t=getWishlist(),s=t.indexOf(i);return s===-1?t.push(i):t.splice(s,1),setWishlist(t)},wishlistContains=function(i){var t=getWishlist();return t.indexOf(i)!==-1},resetWishlist=function(){return setWishlist([])};$(".action-wishlist").on("click",function(){$(this).addClass("loading-wishlist adding-wishlist"),setTimeout(function(){$(".action-wishlist").removeClass("loading-wishlist")},1e3),setTimeout(function(){$(".adding-wishlist").removeClass("adding-wishlist")},2e3)});
//# sourceMappingURL=/s/files/1/0044/3328/1139/t/9/assets/wishlist.js.map?v=164725692185917909391658982356
