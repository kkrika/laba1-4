/**
* 2010-2018 Webkul.
*
* NOTICE OF LICENSE
*
* All right is reserved,
* Please go through this link for complete license : https://store.webkul.com/license.html
*
* DISCLAIMER
*
* Do not edit or add to this file if you wish to upgrade this module to newer
* versions in the future. If you wish to customize this module for your
* needs please refer to https://store.webkul.com/customisation-guidelines/ for more information.
*
*  @author    Webkul IN <support@webkul.com>
*  @copyright 2010-2018 Webkul IN
*  @license   https://store.webkul.com/license.html
*/
function checkOnQuantityUpDown(r){var e=r.split("_"),t=e[0],n=e[1];return $.ajax({url:checkpreorder_url,type:"POST",cache:!1,async:!1,data:{id_product:t,attr_id:n,id_customer:current_cust_id,reload:1},success:function(r){if($(".loading_overlay").css("display","none"),0!=r)return!0;location.reload(!0)}}),!1}function checkPreorderProduct(r){return window.res=0,$.ajax({url:checkpreorder_url,type:"POST",cache:!1,async:!1,data:{id_order:r,reorder:1},success:function(r){1==r?window.res=1:0==r?window.res=0:2==r?window.res=2:3==r&&(window.res=3)}}),res}$(document).ready((function(){$(".link-button").on("click",(function(){var r=!1,e=$(this).attr("href").split("&"),t=(e=e[1].split("="))[1];if(t>0){if(0==(r=checkPreorderProduct(t)))return alert(notenoughstock),!1;if(1==r);else{if(2==r)return alert(loginerror),!1;if(3==r)return alert(specificerror),!1}}}))})),$(document).on("submit","#submitReorder",(function(r){var e=checkPreorderProduct($("input[name=id_order]").val());if(0==e)return alert(notenoughstock),!1;if(1==e);else{if(2==e)return alert(loginerror),!1;if(3==e)return alert(addresserrorrror),!1}})),$(document).on("click",".cart_quantity_up",(function(){$(".loading_overlay").css("display","block"),checkOnQuantityUpDown($(this).attr("id").replace("cart_quantity_up_",""))})),$(document).on("click",".cart_quantity_down",(function(){$(".loading_overlay").css("display","block"),checkOnQuantityUpDown($(this).attr("id").replace("cart_quantity_down_",""))})),$(document).off("change","#id_address_delivery",(function(){}));