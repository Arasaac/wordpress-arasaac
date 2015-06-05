/*
 * Transposh v0.9.7.0
 * http://transposh.org/
 *
 * Copyright 2015, Team Transposh
 * Licensed under the GPL Version 2 or higher.
 * http://transposh.org/license
 *
 * Date: Fri, 05 Jun 2015 02:32:15 +0300
 */
(function(a){a(function(){a.ajaxSetup({cache:!1});a(".delete").click(function(){var c=this,b=a(this).children().attr("href");console.log(b);a.ajax({url:b,dataType:"json",cache:!1,success:function(b){b?a(c).parents("tr").hide():a(c).parents("tr").css("background-color","red")}});return!1})})})(jQuery);
