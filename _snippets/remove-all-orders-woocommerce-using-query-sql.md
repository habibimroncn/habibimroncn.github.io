---
layout: snippet
title: Remove all orders Woocommerce using Query SQL
permalink: /snippet/remove-all-orders-woocommerce-using-query-sql
seo_description: Remove all orders Woocommerce using Query SQL
main_class: snippet
date: 2022-09-20 21:00
---

{% highlight php %}
DELETE FROM {table_prefix}_woocommerce_order_itemmeta;
DELETE FROM {table_prefix}_woocommerce_order_items;
DELETE FROM {table_prefix}_comments WHERE comment_type = 'order_note';
DELETE FROM {table_prefix}_postmeta WHERE post_id IN ( SELECT ID FROM {table_prefix}_posts WHERE post_type = 'shop_order' );
DELETE FROM {table_prefix}_posts WHERE post_type = 'shop_order';
{% endhighlight %}