---
layout: full
title: Sort WooCommerce Products by SKU
permalink: /snippet/sort-woocommerce-products-by-sku/
seo_description: Sort WooCommerce Products by SKU
main_class: snippet
---
{% highlight php %}
/**
 * Adds the ability to sort products in the shop based on the SKU


 * @param array $args the sorting args
 * @return array updated args
 */
function custom_add_sku_sorting( $args ) {

	$orderby_value = isset( $_GET['orderby'] ) ? wc_clean( $_GET['orderby'] ) : apply_filters( 'woocommerce_default_catalog_orderby', get_option( 'woocommerce_default_catalog_orderby' ) );

	if ( 'sku' == $orderby_value ) {
		$args['orderby'] = 'meta_value';
		$args['order'] = 'asc'; // lists SKUs alphabetically 0-9, a-z; change to desc for reverse alphabetical
		$args['meta_key'] = '_sku';
	}

	return $args;
}
add_filter( 'woocommerce_get_catalog_ordering_args', 'custom_add_sku_sorting' );


/**
 * Add the option to the orderby dropdown.
 *
 * @param array $sortby the sortby options
 * @return array updated sortby
 */
function custom_sku_sorting_orderby( $sortby ) {

	// Change text above as desired; this shows in the sorting dropdown
	$sortby['sku'] = __( 'Sort by SKU', 'textdomain' );

	return $sortby;
}
add_filter( 'woocommerce_catalog_orderby', 'custom_sku_sorting_orderby' );
add_filter( 'woocommerce_default_catalog_orderby_options', 'custom_sku_sorting_orderby' );
{% endhighlight %}
