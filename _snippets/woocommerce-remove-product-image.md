---
layout: snippet
title: Woocommerce Remove Product Image
permalink: /snippet/woocommerce-remove-product-image
seo_description: Woocommerce Remove Product Image
main_class: snippet
date: 2023-07-10T08:04:40.672Z
---
A simple way to delete a product image if the product is permanently deleted.

{% highlight php %}
function get_current_attachment_image($postid){
	global $wpdb;
	
	$post_id = (int) $postid;
	if(!empty($post_id)){
		$args_attc = array(
			'post_parent' => $post_id,
			'post_type'   => 'attachment', 
			'numberposts' => -1,
			'post_status' => 'any' 
		);

		$get_chl = get_children($args_attc);
		if($get_chl):
			foreach($get_chl as $data):   
				wp_delete_attachment( $data->ID, true );
				$wpdb->query("DELETE FROM {$wpdb->postmeta} WHERE post_id = ".$data->ID);
				wp_delete_post($data->ID, true); 
			endforeach; 
		endif;
	}
	
}

add_action("before_delete_post","wc_rm_img", 99, 2);
function wc_rm_img($post_id, $post){
	if ( 'product' !== $post->post_type ) {
        return;
    }
	get_current_attachment_image($post_id);
}
{% endhighlight %}

Copy the code to functions.php or use the "***Code Snippets***" plugin. Good luck.