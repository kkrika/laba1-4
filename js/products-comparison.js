/*
* 2007-2016 PrestaShop
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
*  @author PrestaShop SA <contact@prestashop.com>
*  @copyright  2007-2016 PrestaShop SA
*  @license    http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*/
function addToCompare(t){var o,a,e=parseInt($(".bt_compare").next(".compare_product_count").val());o=-1===$.inArray(parseInt(t),comparedProductsIds)?"add":"remove",$.ajax({url:baseUri+"?controller=products-comparison&ajax=1&action="+o+"&id_product="+t,async:!0,cache:!1,success:function(r){"add"===o&&comparedProductsIds.length<comparator_max_item?(comparedProductsIds.push(parseInt(t)),compareButtonsStatusRefresh(),a=e+1,$(".bt_compare").next(".compare_product_count").val(a),totalValue(a)):"remove"===o?(comparedProductsIds.splice($.inArray(parseInt(t),comparedProductsIds),1),compareButtonsStatusRefresh(),a=e-1,$(".bt_compare").next(".compare_product_count").val(a),totalValue(a)):$.prototype.fancybox?$.fancybox.open([{type:"inline",autoScale:!0,minHeight:30,content:'<p class="fancybox-error">'+max_item+"</p>"}],{padding:0}):alert(max_item),totalCompareButtons()},error:function(){}})}function reloadProductComparison(){$(document).on("click","a.cmp_remove",(function(t){t.preventDefault();var o=parseInt($(this).data("id-product"));$.ajax({url:baseUri+"?controller=products-comparison&ajax=1&action=remove&id_product="+o,async:!1,cache:!1}),$("td.product-"+o).fadeOut(600);var a=get("compare_product_list"),e=a,r=[];for(var c in a=decodeURIComponent(a).split("|"))parseInt(a[c])!=o&&r.push(a[c]);r.length&&(window.location.search=window.location.search.replace(e,r.join(encodeURIComponent("|"))))}))}function compareButtonsStatusRefresh(){var t=t||[];$(".add_to_compare").each((function(){-1!==$.inArray(parseInt($(this).data("id-product")),t)?$(this).addClass("checked"):$(this).removeClass("checked")}))}function totalCompareButtons(){var t=parseInt($(".bt_compare .total-compare-val").html());"number"!=typeof t||0===t?$(".bt_compare").attr("disabled",!0):$(".bt_compare").attr("disabled",!1)}function totalValue(t){$(".bt_compare").find(".total-compare-val").html(t)}function get(t){var o=new RegExp("[\\?&]"+t+"=([^&#]*)").exec(window.location.search);return null==o?"":o[1]}$(document).ready((function(){$(document).on("click",".add_to_compare",(function(t){t.preventDefault(),void 0!==addToCompare&&addToCompare(parseInt($(this).data("id-product")))})),reloadProductComparison(),compareButtonsStatusRefresh(),totalCompareButtons()}));