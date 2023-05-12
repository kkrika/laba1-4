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
function openBranch(e,l){e.addClass("OPEN").removeClass("CLOSE"),l?e.parent().find("ul:first").show():e.parent().find("ul:first").slideDown()}function closeBranch(e,l){e.addClass("CLOSE").removeClass("OPEN"),l?e.parent().find("ul:first").hide():e.parent().find("ul:first").slideUp()}function toggleBranch(e,l){e.hasClass("OPEN")?closeBranch(e,l):openBranch(e,l)}$(document).ready((function(){$("ul.tree.dhtml").hide(),$("ul.tree.dhtml").hasClass("dynamized")||($("ul.tree.dhtml ul").prev().before("<span class='grower OPEN'> </span>"),$("ul.tree.dhtml ul li:last-child, ul.tree.dhtml li:last-child").addClass("last"),$("ul.tree.dhtml span.grower.OPEN").addClass("CLOSE").removeClass("OPEN").parent().find("ul:first").hide(),$("ul.tree.dhtml").show(),$("ul.tree.dhtml .selected").parents().each((function(){$(this).is("ul")&&toggleBranch($(this).prev().prev(),!0)})),toggleBranch($("ul.tree.dhtml .selected").prev(),!0),$("ul.tree.dhtml span.grower").click((function(){toggleBranch($(this))})),$("ul.tree.dhtml").addClass("dynamized"),$("ul.tree.dhtml").removeClass("dhtml"))}));