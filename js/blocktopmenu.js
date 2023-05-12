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
var responsiveflagMenu=!1,categoryMenu=$("ul.sf-menu"),mCategoryGrover=$(".sf-contener .cat-title");function responsiveMenu(){$(window).width()<=767&&0==responsiveflagMenu?(menuChange("enable"),responsiveflagMenu=!0):$(window).width()>=768&&(menuChange("disable"),responsiveflagMenu=!1)}function desktopInit(){mCategoryGrover.off(),mCategoryGrover.removeClass("active"),$(".sf-menu > li > ul").removeClass("menu-mobile").parent().find(".menu-mobile-grover").remove(),$(".sf-menu").removeAttr("style"),categoryMenu.superfish("init"),$(".sf-menu > li > ul").addClass("submenu-container clearfix"),$(".sf-menu > li > ul").each((function(){i=0,$(this).each((function(){"category-thumbnail"!=$(this).attr("class")&&(i++,i%2==1?$(this).addClass("first-in-line-xs"):i%5==1&&$(this).addClass("first-in-line-lg"))}))}))}function mobileInit(){categoryMenu.superfish("destroy"),$(".sf-menu").removeAttr("style"),mCategoryGrover.on("click",(function(e){return $(this).toggleClass("active").parent().find("ul.menu-content").stop().slideToggle("medium"),!1})),$(".sf-menu > li > ul").addClass("menu-mobile clearfix").parent().prepend('<span class="menu-mobile-grover"></span>'),$(".sf-menu .menu-mobile-grover").on("click",(function(e){var n=$(this).next().next(".menu-mobile");return n.is(":hidden")?(n.slideDown(),$(this).addClass("active")):(n.slideUp(),$(this).removeClass("active")),!1})),$("#block_top_menu > ul:first > li > a").on("click",(function(e){var n=$(this).prev().offset().left-e.pageX;if($(this).parent("li").find("ul").length&&n>=0&&n<=20){e.preventDefault();var i=$(this).next(".menu-mobile"),s=$(this).prev();i.is(":hidden")?(i.slideDown(),s.addClass("active")):(i.slideUp(),s.removeClass("active"))}}))}function menuChange(e){"enable"==e?mobileInit():desktopInit()}$(document).ready((function(){categoryMenu=$("ul.sf-menu"),mCategoryGrover=$(".sf-contener .cat-title"),responsiveMenu(),$(window).resize(responsiveMenu)}));