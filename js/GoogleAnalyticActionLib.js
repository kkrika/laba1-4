/**
 * 2007-2015 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License (AFL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://opensource.org/licenses/afl-3.0.php
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 *  @author    PrestaShop SA <contact@prestashop.com>
 *  @copyright 2007-2015 PrestaShop SA
 *  @license   http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
 *  International Registered Trademark & Property of PrestaShop SA
 **/
var GoogleAnalyticEnhancedECommerce={setCurrency:function(e){ga("set","&cu",e)},add:function(e,t,n){var i={},c={},o=["id","name","category","brand","variant","price","quantity","coupon","list","position","dimension1"],a=["id","affiliation","revenue","tax","shipping","coupon","list","step","option"];if(null!=e)for(var d in n&&void 0!==e.quantity&&delete e.quantity,e)for(var r=0;r<o.length;r++)d.toLowerCase()==o[r]&&null!=e[d]&&(i[d.toLowerCase()]=e[d]);if(null!=t)for(var u in t)for(var s=0;s<a.length;s++)u.toLowerCase()==a[s]&&(c[u.toLowerCase()]=t[u]);n?ga("ec:addImpression",i):ga("ec:addProduct",i)},addProductDetailView:function(e){this.add(e),ga("ec:setAction","detail"),ga("send","event","UX","detail","Product Detail View",{nonInteraction:1})},addToCart:function(e){this.add(e),ga("ec:setAction","add"),ga("send","event","UX","click","Add to Cart")},removeFromCart:function(e){this.add(e),ga("ec:setAction","remove"),ga("send","event","UX","click","Remove From cart")},addProductImpression:function(e){},refundByOrderId:function(e){ga("ec:setAction","refund",{id:e.id}),ga("send","event","Ecommerce","Refund",{nonInteraction:1})},refundByProduct:function(e){ga("ec:setAction","refund",{id:e.id}),ga("send","event","Ecommerce","Refund",{nonInteraction:1})},addProductClick:function(e){jQuery('a[href$="'+e.url+'"].quick-view').on("click",(function(){GoogleAnalyticEnhancedECommerce.add(e),ga("ec:setAction","click",{list:e.list}),ga("send","event","Product Quick View","click",e.list,{hitCallback:function(){return!ga.loaded}})}))},addProductClickByHttpReferal:function(e){this.add(e),ga("ec:setAction","click",{list:e.list}),ga("send","event","Product Click","click",e.list,{nonInteraction:1,hitCallback:function(){return!ga.loaded}})},addTransaction:function(e){ga("ec:setAction","purchase",e),ga("send","event","Transaction","purchase",{hitCallback:function(){$.get(e.url,{orderid:e.id,customer:e.customer})}})},addCheckout:function(e){ga("ec:setAction","checkout",{step:e})}};