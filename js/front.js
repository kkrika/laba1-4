/**
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
*  @author    Eugene Zubkov <magrabota@gmail.com>
*  @copyright 2016 ZSolutions
*  @license   http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*  International Property of ZSolutions https://www.facebook.com/itZSsolutions/
*/
$(document).ready((function(){if($("#payment_st").length)var e=setInterval((function(){console.log("Check payment"),ajaxs.checkpayment(),1==$("#payment_st").val()&&(console.log("Check Stop. Payment ok"),clearInterval(e))}),5e3);$("#qrcode").qrcode($("#qrsec").val());var n=$("input[name=phonelabel]").val();$('<label class="post-phone-label" for="post-phone">'+n+"</label>").insertAfter("input[name=post-phone]"),$("input[name=post-phone]").prop("placeholder","+380---------"),$('input[name="post-phone"]').on("change",(function(){console.log($(this).val()),ajaxs.changephone($(this).val())}))})),ajaxs={baseuri:function(){return $("#baseuri").length?$("#baseuri").val():$('input[name="base_uri"]').val()},checkToken:function(){if($("#skey").length)var e=$("#skey").val();else e=$('input[name="skey"]').val();return console.log("second "+e),e},changephone:function(e){$.ajax({type:"POST",url:ajaxs.baseuri()+"/modules/privat24/checkpayment.php?action=changephone"+ajaxs.checkToken(),data:{phone:e},beforeSend:function(){$("body").toggleClass("wait")},success:function(e){console.log("Success msg "+e+"2")},complete:function(){$("body").toggleClass("wait")}})},checkpayment:function(){$.ajax({type:"POST",url:ajaxs.baseuri()+"/modules/privat24/checkpayment.php?action=checkpayment"+ajaxs.checkToken(),beforeSend:function(){$("body").toggleClass("wait")},success:function(e){console.log("Success msg "+e+"1"),"no"!==e&&""!==e?($("#payment_st").val(1),window.location.href=e):console.log("Waiting for payment")},complete:function(){$("body").toggleClass("wait")}})}};