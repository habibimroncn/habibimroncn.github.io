---
layout: full
title: WOOF - WooCommerce Products Filter - Fixing Price Filter
permalink: /snippet/woof-wc-products-filter-fixing-price-filter/
seo_description: WOOF - WooCommerce Products Filter - Fixing Price Filter
main_class: snippet
---

## Plugin : WOOF - WooCommerce Products Filter by realmag777
## Version : 2.2.9.2
<br>

WOOF - WooCommerce Products Filter - Fixing Price Filter

### woocommerce-products-filter/index.php

{% highlight php %}
if($request['min_price'] == $request['max_price']){
    $max_min_price = $request['max_price'];
    $meta_query[] = [
        [
            'key' => '_price',
            'value' => floatval($max_min_price),
            'compare' => '=',
            'type' => 'NUMERIC'
        ]
    ];
} else {
    $meta_query[] = [
        'relation' => 'AND',
        [
            'key' => '_price',
            'value' => floatval($request['min_price']),
            'compare' => '>=',
            'type' => 'NUMERIC'
        ],
        [
            'key' => '_price',
            'value' => floatval($request['max_price']),
            'compare' => '<=',
            'type' => 'NUMERIC'
        ]
    ];
}
{% endhighlight %}
Delete the line of code inside
{% highlight php %}
if ($request['min_price'] <= $request['max_price']) {}
{% endhighlight %}
and replace it with the one above.

![index.php](/img/posts/index.png "index.php")

### woocommerce-products-filter/classes/helper.php

{% highlight php %}
if ($v[0] > $v[1]) {
    continue;
}
{% endhighlight %}

Replace the code line 441-443 with the one above.

![helper.php](/img/posts/helper.png "helper.php")
<br>
Hope that fixes the problem with the price filter.
