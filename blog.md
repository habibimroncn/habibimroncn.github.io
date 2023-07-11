---
layout: full
title: Blog
permalink: /blog/
seo_description: 'Blog'
main_class: lists_of_blog
---

<div class="heading_center">
  <h2><i class="fa fa-long-arrow-right" aria-hidden="true"></i> Blog <i class="fa fa-long-arrow-left" aria-hidden="true"></i></h2>
</div>

{% assign blog_data = site.blogs | sort:'title' %}
{% for blog in blog_data %}
  <p>
    <a href="{{ blog.url }}"><i class="fa fa-terminal" aria-hidden="true"></i> {{ blog.title }}</a>
  </p>
{% endfor %}