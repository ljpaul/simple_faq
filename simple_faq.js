// simple_faq.js by Logan Paul (2014)
function simple_faq(target_id, src_class, anchor_name, title_selector) {
	// target_id - container for the ul list
	// src_class - class of containers with information
	// anchor_name - name to start the anchors out with (faq will become faq-1)
	// title_selector - selector of element within src_class element containing the title string for the list
	
	// ADD UL LIST
	$(target_id).html("<ul></ul>");
	// set up anchor number
	anchor_id = 0;
	// LOOP THROUGH SRC CLASS DIVS
	$(src_class + ' ' + title_selector).each(function() {
		if ($(this).html()) {
			var anchor_this = "#" + anchor_name + "-" + anchor_id;
			$(target_id + " ul").append("<li><a href='" + anchor_this + "'>" + $(this).html() + "</a></li>");
			$(this).attr("id", anchor_name + "-" + anchor_id);
			anchor_id++;
		};
	});
};
