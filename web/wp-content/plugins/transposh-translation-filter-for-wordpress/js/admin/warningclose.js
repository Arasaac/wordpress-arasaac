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
(function(a){a(function(){a(".warning-close").click(function(){a(this).parents("div:first").hide();a.post(ajaxurl,{action:"tp_close_warning",id:a(this).attr("id")})})})})(jQuery);
